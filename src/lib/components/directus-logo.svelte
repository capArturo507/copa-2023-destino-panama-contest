<script lang="ts">
	export let item;

	let className: string = '';

	export { className as class };

	const { code } = item;
</script>

<div class={className}>
	{@html code}
</div>
