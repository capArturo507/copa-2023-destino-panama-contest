import { error } from '@sveltejs/kit';
const { RecaptchaEnterpriseServiceClient } = require('@google-cloud/recaptcha-enterprise');

/** @type {import('./$types').RequestHandler} */
export async function POS({ request }) {
	const data = Object.fromEntries(await request.formData());

	/**
	 * Create an assessment to analyze the risk of an UI action. Note that
	 * this example does set error boundaries and returns `null` for
	 * exceptions.
	 *
	 * projectID: GCloud Project ID
	 * recaptchaSiteKey: reCAPTCHA key obtained by registering a domain/app to use recaptcha services.
	 * token: The token obtained from the client on passing the recaptchaSiteKey.
	 * recaptchaAction: Action name corresponding to the token.
	 */
	async function createAssessment({
		projectID = '6LfxNSsoAAAAABBhZp0iwm9yZu7d6CWc0BTYBH45',
		recaptchaSiteKey = '6LfxNSsoAAAAAMOFrEIapwPOJ70yE7TjuxQdAJkT',
		token = data.token,
		recaptchaAction = 'action-name'
	}) {
		// Create the reCAPTCHA client & set the project path. There are multiple
		// ways to authenticate your client. For more information see:
		// https://cloud.google.com/docs/authentication
		// TODO: To avoid memory issues, move this client generation outside
		// of this example, and cache it (recommended) or call client.close()
		// before exiting this method.
		const client = new RecaptchaEnterpriseServiceClient();
		const projectPath = client.projectPath(projectID);

		// Build the assessment request.
		const request = {
			assessment: {
				event: {
					token: token,
					siteKey: recaptchaSiteKey
				}
			},
			parent: projectPath
		};

		// client.createAssessment() can return a Promise or take a Callback
		const [response] = await client.createAssessment(request);

		// Check if the token is valid.
		if (!response.tokenProperties.valid) {
			console.log(
				'The CreateAssessment call failed because the token was: ' +
					response.tokenProperties.invalidReason
			);

			throw error(400, 'invalid');
		}

		// Check if the expected action was executed.
		// The `action` property is set by user client in the
		// grecaptcha.enterprise.execute() method.
		if (response.tokenProperties.action === recaptchaAction) {
			// Get the risk score and the reason(s).
			// For more information on interpreting the assessment,
			// see: https://cloud.google.com/recaptcha-enterprise/docs/interpret-assessment
			console.log('The reCAPTCHA score is: ' + response.riskAnalysis.score);

			response.riskAnalysis.reasons.forEach((reason) => {
				console.log(reason);
			});
			return response.riskAnalysis.score > 0.8;
		} else {
			console.log(
				'The action attribute in your reCAPTCHA tag ' +
					'does not match the action you are expecting to score'
			);
			throw error(400, 'invalid');
		}
	}
}
