<script>
	import StepHero from '$lib/components/step-hero.svelte';
	const step = 'Passo 1 de 3';
	const title = 'Preencha seus dados';
	const description =
		'Você tem apenas uma (1) oportunidade para participar com o mesmo usuário do Instagram, e-mail ou telefone. O tempo começa a contar assim que as perguntas aparecerem.';
</script>

<svelte:head>
	<title>Preencha seus dados</title>
</svelte:head>
<StepHero {step} {title} {description} />
