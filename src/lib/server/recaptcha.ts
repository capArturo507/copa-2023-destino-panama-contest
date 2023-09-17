import { RecaptchaEnterpriseServiceClient } from '@google-cloud/recaptcha-enterprise/build/src/v1';

const recaptchaEnterpriseClient = new RecaptchaEnterpriseServiceClient();

const createAssessment = async () => {
	recaptchaEnterpriseClient.createAssessment();
};
