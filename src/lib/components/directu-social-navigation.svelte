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
	<ul class="grid gap-16 auto-cols-auto justify-start grid-flow-col my-16">
		{#each links as link}
			{@const { links_id } = link}
			{@const text = languageFilter(link.links_id.translations)}
			<li class="square-12/3">
				<a href={text.url} class="button button-outline-grey transition-colors" title={text.text}>
					{#if links_id.icon}
						<span class="block square-16 fill-current">{@html links_id.icon.code}</span>
					{/if}
				</a>
			</li>
		{/each}
	</ul>
</nav>
