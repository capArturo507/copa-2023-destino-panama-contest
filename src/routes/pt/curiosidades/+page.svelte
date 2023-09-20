<script>
	import StepHero from '$lib/components/step-hero.svelte';
	const step = 'Passo 2 de 3';
	const title = 'Responda às perguntas';
	const description =
		'Escolha a resposta correta para cada uma das 10 perguntas. Seu tempo já começou, não demore!';
</script>

<svelte:head>
	<title>Responda às perguntas</title>
</svelte:head>
<StepHero {step} {title} {description} />
