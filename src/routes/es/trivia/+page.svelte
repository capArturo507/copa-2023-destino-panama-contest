<script>
	import StepHero from '$lib/components/step-hero.svelte';
	const step = 'Paso 2 de 3';
	const title = 'Contesta las preguntas';
	const description =
		'Selecciona la respuesta correcta para cada una de las 10 preguntas.Tu tiempo acaba de iniciar ¡No demores!';
</script>

<svelte:head>
	<title>Contesta las preguntas</title>
</svelte:head>
<StepHero {step} {title} {description} />
