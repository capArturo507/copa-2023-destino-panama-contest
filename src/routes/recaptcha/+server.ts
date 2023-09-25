import { error, json } from '@sveltejs/kit';
import { RecaptchaEnterpriseServiceClient } from '@google-cloud/recaptcha-enterprise';
import { PUBLIC_RECAPTCHA_PROJECT_ID } from '$env/static/public';
import { COOKIE_TOST, RECAPTCHA_SITE_KEY } from '$env/static/private';
import { configurarAlerta } from '$lib/utils.js';
import { errorMap, getCookieSettings } from '$lib/server/utils.js';

const client = new RecaptchaEnterpriseServiceClient();

export async function POST({ request, cookies, locals }) {
	const token = await request.text()

  const {language} = locals

  const body = {
    event: {
      token,
      siteKey: PUBLIC_RECAPTCHA_PROJECT_ID,
      expectedAction: 'REGISTER'
    }
  }

  const validationRequest = await fetch(`https://recaptchaenterprise.googleapis.com/v1/projects/copa-airlines-ga-bq/assessments?key=${RECAPTCHA_SITE_KEY}`, {body: JSON.stringify(body), headers:{ 'ContentType': "application/json; charset=utf-8"}, method: 'POST'  })

  const resposnse = await validationRequest.json()

  const {riskAnalysis} = resposnse

  if (riskAnalysis.score < 0.9) {
    const alert = configurarAlerta('error', errorMap[language][500], 4);
    console.error('Riesgo muy alto para dejar pasar', resposnse);
    locals.alerta = alert;
    cookies.set(COOKIE_TOST, JSON.stringify(alert), getCookieSettings(5));
    throw error(403, { message: 'Too risky'});
  }

  return json({}, {status: 200})
}
