<script lang="ts">
	import StepHero from '$lib/components/step-hero.svelte';
	import TriviaQuestion from '$lib/components/trivia-question.svelte';
	import { find, map, propEq } from 'ramda';
	import { currentPage } from '$lib/stores.js';
	import Timer from '$lib/components/timer.svelte';
	import { PUBLIC_RECAPTCHA_PROJECT_ID } from '$env/static/public';

	currentPage.set('trivia');

	export let form;
	export let data;

	const { allQuestions, questions, started_datetime } = data;

	const findSelectedQuestion = (id: string) => find(propEq(parseInt(id), 'id'))(allQuestions);

	const selectedQuestions = map(findSelectedQuestion, questions);

	const stepNumber = 2;

	const title: Record<App.SupportedLanguage, string> = {
		en: 'Fill in your details',
		es: 'Llena tus datos',
		pt: 'Preencha seus dados'
	};

	const CTA: Record<App.SupportedLanguage, string> = {
		es: 'Enviar mis respuestas',
		en: 'Send my answers',
		pt: 'Enviar minhas respostas'
	};

	$: ({ language } = data);

	let preventSpam = false;

	let htmlForm: HTMLFormElement;

	const handleError = (error: any) => console.log(error);

	const passTokenToServer = (token: string) =>
		fetch('/recaptcha', {
			method: 'POST',
			body: token,
			headers: { 'Content-Type': 'text/html; charset=utf-8' }
		});

	const submitForm = () => htmlForm.submit();

	const submit = async (event: SubmitEvent) => {
		event.preventDefault();
		preventSpam = true;
		grecaptcha.enterprise
			.execute(PUBLIC_RECAPTCHA_PROJECT_ID, { action: 'REGISTER' })
			.then(passTokenToServer, handleError)
			.then(submitForm, handleError);

		preventSpam = false;
	};
</script>

<svelte:head>
	<title>{title[language]}</title>
	<script
		src="https://www.google.com/recaptcha/enterprise.js?render=6LfxNSsoAAAAABBhZp0iwm9yZu7d6CWc0BTYBH45&hl={language}"
	></script>
</svelte:head>
<StepHero {language} {stepNumber} />
<div class="bg-backgound-lightblue py-32">
	<div class="container mx-auto my-32">
		<form method="POST" class="mx-auto block md:w-max" on:submit={submit} bind:this={htmlForm}>
			<ol class="text-grey-600">
				{#each selectedQuestions as question, index}
					<TriviaQuestion {question} {language} {index} />
				{/each}
			</ol>
			<input
				type="submit"
				class="button button-large w-full md:max-w-xl mx-auto block lg:inline"
				value={CTA[language]}
				disabled={preventSpam}
			/>
		</form>
	</div>
</div>
<Timer {started_datetime} />
