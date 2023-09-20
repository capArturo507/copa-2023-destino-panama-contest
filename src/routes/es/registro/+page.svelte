<script>
	import StepHero from '$lib/components/step-hero.svelte';
	const step = 'Paso 1 de 3';
	const title = 'Llena tus datos';
	const description =
		'Solo tienes una oportunidad para participar con el mismo usuario de Instagram, correo electrónico o teléfono. El tiempo empieza a correr en cuanto se muestren las preguntas.';
</script>

<svelte:head>
	<title>Llena tus datos</title>
</svelte:head>
<StepHero {step} {title} {description} />
