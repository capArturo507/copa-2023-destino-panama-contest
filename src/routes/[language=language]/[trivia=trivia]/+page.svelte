<script lang="ts">
	import StepHero from '$lib/components/step-hero.svelte';
	import TriviaQuestion from '$lib/components/trivia-question.svelte';
	import { find, map, propEq } from 'ramda';
	import { currentPage } from '$lib/stores.js';

	currentPage.set('trivia');

	export let form;
	export let data;

	const { allQuestions, questions } = data;

	const findSelectedQuestion = (id: string) => find(propEq(parseInt(id), 'id'))(allQuestions);

	const selectedQuestions = map(findSelectedQuestion, questions);

	const stepNumber = 2;

	const title: Record<App.SupportedLanguage, string> = {
		en: 'Fill in your details',
		es: 'Llena tus datos',
		pt: 'Preencha seus dados'
	};

	$: ({ language } = data);
</script>

<svelte:head>
	<title>{title[language]}</title>
</svelte:head>
<StepHero {language} {stepNumber} />
<div class="bg-backgound-lightblue py-32">
	<div class="container mx-auto my-32">
		<form method="POST" class="mx-auto block md:w-max">
			<ol class="text-grey-600">
				{#each selectedQuestions as question, index}
					<TriviaQuestion {question} {language} {index} />
				{/each}
			</ol>
			<button type="submit" class="button button-large w-full md:max-w-xl mx-auto block lg:inline"
				>Enviar mis respuestas</button
			>
		</form>
	</div>
</div>
