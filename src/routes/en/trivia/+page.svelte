<script>
	import StepHero from '$lib/components/step-hero.svelte';
	const step = 'Step 2 of 3';
	const title = 'Answer the questions';
	const description =
		'Select the correct answer for each of the 10 questions. Your time has just begun. Hurry!';
</script>

<svelte:head>
	<title>Answer the questions</title>
</svelte:head>
<StepHero {step} {title} {description} />
