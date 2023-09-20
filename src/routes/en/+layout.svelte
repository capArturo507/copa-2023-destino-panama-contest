<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';

	const copyright = 'Copyright © 2023 Copa Airlines, Inc. Todos los derechos reservados';
</script>

<Header />
<main class="min-h-screen bg-bg-paper">
	<slot />
</main>
<Footer {copyright} />
