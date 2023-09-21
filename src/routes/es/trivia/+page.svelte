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
