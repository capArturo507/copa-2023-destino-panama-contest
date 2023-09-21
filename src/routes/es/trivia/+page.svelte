<script lang="ts">
	import StepHero from '$lib/components/step-hero.svelte';
	import TriviaQuestion from '$lib/components/trivia-question.svelte';
	import { find, map, propEq } from 'ramda';
	const step = 'Paso 2 de 3';
	const title = 'Contesta las preguntas';
	const description =
		'Selecciona la respuesta correcta para cada una de las 10 preguntas.Tu tiempo acaba de iniciar ¡No demores!';

	export let form;
	export let data;

	const { allQuestions, questions, language } = data;

	const findSelectedQuestion = (id: string) => find(propEq(parseInt(id), 'id'))(allQuestions);

	const selectedQuestions = map(findSelectedQuestion, questions);
</script>

<svelte:head>
	<title>Contesta las preguntas</title>
</svelte:head>
<StepHero {step} {title} {description} />
<div class="container mx-auto my-32">
	<form method="POST">
		<ol class="text-grey-600">
			{#each selectedQuestions as question, index}
				<TriviaQuestion {question} {language} {index} />
			{/each}
		</ol>
		<button
			type="submit"
			class="button button-large w-full sm:max-w-[calc(132px_*_3)] mx-auto block lg:inline"
			>Enviar mis respuestas</button
		>
	</form>
</div>
