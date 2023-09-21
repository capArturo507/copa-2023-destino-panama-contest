<script lang="ts">
	export let name: string;
	export let imagSource: string;
	export let error: string = '';
	export let type: string;
	export let placeholder: string = '';
	export let select: boolean = false;
	export let label: string;
	export let minlength: number | null | undefined = undefined;
	export let maxlength: number | null | undefined = undefined;
	export let pattern: string | undefined = undefined;
	export let patron: string | undefined = undefined;
	export let value: string | null | undefined = undefined;

	const inputClass =
		'border-b-2 border-b-grey-75 bg-transparent py-2 text-20/32 hover:border-b-backgound-lightblue transition-colors text-grey-700 focus:outline-none focus:border-b-primary focus:bg-backgound-lightblue invalid:focus:border-b-status-error valid:focus:border-b-status-success';
</script>

<div
	class="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] justify-start items-start gap-8 max-w-lg"
>
	<img src={imagSource} alt={name} class="square-40 row-span-2 self-end" />
	<label class="text-12/16 text-grey-600 font-body-medium" for={name}>{label}</label>
	{#if type === 'text'}
		<input
			class={inputClass}
			type="text"
			{name}
			{placeholder}
			{minlength}
			{maxlength}
			{pattern}
			required
			bind:value
		/>
	{:else if type === 'email'}
		<input
			class={inputClass}
			type="email"
			{name}
			{placeholder}
			{minlength}
			{maxlength}
			{pattern}
			required
			bind:value
		/>
	{:else if type === 'tel'}
		<input
			class={inputClass}
			type="tel"
			{name}
			{placeholder}
			{minlength}
			{maxlength}
			{pattern}
			required
			bind:value
		/>
	{/if}

	{#if error || patron}
		<p class="text-12/16 text-grey-500 col-start-2">{error || patron}</p>
	{/if}
</div>
