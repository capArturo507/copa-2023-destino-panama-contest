<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';

	export let alerta: App.Alerta | undefined = undefined;

	let show = false;

	onMount(() => {
		setTimeout(() => {
			show = true;
		}, 350);
		setTimeout(() => {
			show = false;
		}, 4100);
	});

	const tipoDeAlerta = !alerta
		? 'bg-grey-200 text-grey-700'
		: alerta.tipo === 'advertencia'
		? 'bg-status-warning text-gray-700'
		: alerta.tipo === 'error'
		? 'bg-status-error text-gray-0'
		: alerta.tipo === 'exito'
		? 'bg-status-sucess text-gray-0'
		: alerta.tipo === 'info'
		? 'bg-primary-light text-grey-0'
		: 'bg-grey-200 text-grey-700';
</script>

{#if alerta && show}
	<div
		class="container w-full shadow-medium fixed top-32 sm:top-40 md:top-56 lg:top-72 rounded-md px-16 py-8 left-1/2 -translate-x-1/2 {tipoDeAlerta}"
		transition:fly|gobal={{ y: -100, duration: 750, easing: elasticOut }}
	>
		{alerta.mensaje}
	</div>
{/if}
