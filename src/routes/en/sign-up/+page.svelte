<script>
	import StepHero from '$lib/components/step-hero.svelte';
	const step = 'Step 1 of 3';
	const title = 'Fill in your details';
	const description =
		'You only have one chance to participate with the same Instagram user, email or phone. Time starts running as soon as the questions are shown.';
</script>

<svelte:head>
	<title>Fill in your details</title>
</svelte:head>
<StepHero {step} {title} {description} />
<div class="container mx-auto my-32">
	<Form />
</div>
