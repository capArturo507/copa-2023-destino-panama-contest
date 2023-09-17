import { generateRandomIndices } from './random-items';

const testNumber = 1;
const questions = generateRandomIndices(60, 10);

const participation: App.Participation = {
	id: 'a8ba8599-1ee2-4c61-af4f-5caddbfecc79',
	fullName: `Test From Home ${testNumber}`,
	instagram: `@testFromHome${testNumber}`,
	email: `@testFromHome${testNumber}`,
	phone: '+507-65612868',
	questions: questions,
	answers: null,
	startedDateTime: new Date(),
	completedDateTime: null,
	correctAnswers: null,
	completedTimeMS: null
};
