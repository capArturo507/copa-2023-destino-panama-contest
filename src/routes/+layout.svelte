<script lang="ts">
	import Alerta from '$lib/components/alerta.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import '../app.css';

	export let data;

	$: ({ alerta, language } = data);
</script>

{#if alerta}
	<Alerta {alerta} />
{/if}
<div class="min-h-screen grid grid-rows-[1fr_auto] grid-cols-1">
	<Header {language} />
	<main class="bg-bg-paper">
		<slot />
	</main>
	<Footer {language} />
</div>
