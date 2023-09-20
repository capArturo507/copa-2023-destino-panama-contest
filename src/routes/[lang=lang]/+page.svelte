<script lang="ts">
	import HomeHero from '$lib/components/home-hero.svelte';
	import { filterCurrentLanguage } from '$lib/directus-utilts';
	import type { PageData } from './$types';
	import { dissoc, map, objOf, prop, reduce } from 'ramda';

	export let data: PageData;

	const { content, language } = data;

	console.log(content);

	const toIDObject = (content: any) => {
		const id = prop('id', content);
		const restOfObejct = dissoc('id', content);

		return objOf(id, restOfObejct);
	};

	const mapToIdObject = map(toIDObject);

	const concatObjects = (concatenated: object, newObj: object) => {
		return { ...concatenated, ...newObj };
	};

	const contentUpdated = reduce(concatObjects, {}, mapToIdObject(content?.data));

	const orderderContent = [10, 11, 9, 12];
</script>

<HomeHero content={contentUpdated[18]} video="./contest-video.mp4" {language} />

{#each orderderContent as section}
	{@const sectionContent = contentUpdated[section]}
	{@const { translations, primary_cta, secondary_cta } = sectionContent}
	{@const currenLangTranslation = filterCurrentLanguage(language)(translations)}
	{@const { title, description } = currenLangTranslation}
	{@const className = [10, 11].includes(section)
		? 'icons-list'
		: section === 9
		? 'sponsors'
		: 'regular-list'}
	<div class="container mx-auto my-32 sm:my-48 md:my-64 lg:my-72">
		<h2
			class="font-heading font-heading-bold text-h2 sm:text-h2-sm md:text-h2-md lg:text-h2-lg text-primary pb-8"
		>
			{title}
		</h2>
		<div class="text-grey-600 {className}">
			{@html description}
		</div>
		{#if primary_cta || secondary_cta}
			<nav>
				<ul class="grid grid-cols-[auto_auto] gap-16 my-32 grid-flow-col place-content-start">
					{#if primary_cta}
						{@const pctaTranslations = primary_cta.translations}
						{@const pctaCTranslation = filterCurrentLanguage(language)(pctaTranslations)}
						{@const { text, url } = pctaCTranslation}
						<li>
							<a href={url} class="button">{text}</a>
						</li>
					{/if}
					{#if secondary_cta}
						{@const pctaTranslations = secondary_cta.translations}
						{@const pctaCTranslation = filterCurrentLanguage(language)(pctaTranslations)}
						{@const { text, url } = pctaCTranslation}
						<li>
							<a href={url} class="button button-outline-primary">{text}</a>
						</li>
					{/if}
				</ul>
			</nav>
		{/if}
	</div>
{/each}
