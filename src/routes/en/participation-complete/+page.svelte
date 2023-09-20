<script>
	import CompletedHero from '$lib/components/completed-hero.svelte';
	import Sponsors from '$lib/components/sponsors.svelte';
</script>

<svelte:head>
	<title>Thanks for participating</title>
</svelte:head>
<CompletedHero
	step="Step 3 of 3"
	opening="You answered correctly"
	middle="questions, in"
	closing="You are already participating!"
	sharetext="Share the contest"
	corrects={8}
	timeinms={86400000}
/>
<div class="container mx-auto my-32">
	<Sponsors title="Sponsors" />
</div>
