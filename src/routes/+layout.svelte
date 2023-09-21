<script lang="ts">
	import Alerta from '$lib/components/alerta.svelte';
	import '../app.css';

	export let data;

	const { alerta } = data;
</script>

{#if alerta}
	<Alerta {alerta} />
{/if}

<slot />
