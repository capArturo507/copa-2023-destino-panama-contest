<script lang="ts">
	export let name: string;
	export let imagSource: string;
	export let error: string = '';
	export let type: string;
	export let placeholder: string = '';
	export let select: boolean = false;
	export let label: string;

	const inputClass =
		'border-b-2 border-b-grey-100 bg-transparent py-2 text-20/32 hover:border-b-backgound-lightblue transition-colors text-grey-700 focus:outline-none focus:border-b-primary focus:bg-backgound-lightblue ';
</script>

<div class="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] justify-start items-start gap-8">
	<img src={imagSource} alt={name} class="square-40 row-span-2" />
	<label class="text-12/16 text-grey-600 font-body-medium" for={name}>{label}</label>
	{#if select}{/if}
	{#if type === 'text'}
		<input class={inputClass} type="text" {name} {placeholder} required />
	{:else if type === 'email'}
		<input class={inputClass} type="email" {name} {placeholder} required />
	{:else if type === 'tel'}
		<input class={inputClass} type="tel" {name} {placeholder} required />
	{/if}

	{#if error}
		<span class="text-12/16 text-grey-600">{error}</span>
	{/if}
</div>
