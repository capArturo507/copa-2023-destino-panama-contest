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
	shareTitle="Panama Destination Contest with Copa Airlines"
	shareText="Participate and become one of the 10 winners to receive a free trip to Panama!"
/>
<div class="container mx-auto my-32">
	<Sponsors title="Sponsors" />
</div>
