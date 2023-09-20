<script lang="ts">
	import { filterCurrentLanguage } from '$lib/directus-utilts';

	export let item;
	export let language;

	let className: string = '';

	export { className as class };

	const { translations, links } = item;

	const languageFilter = filterCurrentLanguage(language);

	const title = languageFilter(translations);
</script>

<nav aria-label={title.title} class={className}>
	<ul class="grid gap-16 auto-cols-auto justify-start grid-flow-col text-12/16">
		{#each links as link}
			{@const { links_id } = link}
			{@const text = languageFilter(links_id.translations)}
			<li>
				<a href={text.url} class="text-primary-light hover:underliene transition-all">
					<span>{text.text}</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>
