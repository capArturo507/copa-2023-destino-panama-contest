<script lang="ts">
	import { filterCurrentLanguage } from '$lib/directus-utilts';

	export let item;

	export let language: string;

	let className: string = '';

	export { className as class };

	const { translations } = item;

	const text = filterCurrentLanguage(language)(translations);
</script>

<p class={className}>
	{text.statement}
</p>
