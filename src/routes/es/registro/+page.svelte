<script>
	import Form from '$lib/components/form.svelte';
	import StepHero from '$lib/components/step-hero.svelte';
	const step = 'Paso 1 de 3';
	const title = 'Llena tus datos';
	const description =
		'Solo tienes una oportunidad para participar con el mismo usuario de Instagram, correo electrónico o teléfono. El tiempo empieza a correr en cuanto se muestren las preguntas.';

	export let form;

	console.log('loging form', form);
</script>

<svelte:head>
	<title>Llena tus datos</title>
</svelte:head>
<StepHero {step} {title} {description} />
<div class="container mx-auto my-32">
	<Form />
</div>
