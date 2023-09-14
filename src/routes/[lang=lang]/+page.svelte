<script lang="ts">
	import type { PageData } from './$types';
	import HomeHero from '$lib/components/home-hero.svelte';

	export let data: PageData;

	const sections = data.content.text;
</script>

<svelte:head>
	<title>{data.content.hero.title}</title>
</svelte:head>

<HomeHero
	title={data.content.hero.title}
	body={data.content.hero.description}
	src="/contest-video.mp4"
	poster=""
/>
{#each sections as section}
	{@const className = [10, 11].includes(section.id)
		? 'icons-list'
		: section.id === 9
		? 'sponsors'
		: 'regular-list'}
	<div class="container mx-auto my-32 sm:my-48 md:my-64 lg:my-72">
		<h2
			class="font-heading font-heading-bold text-h2 sm:text-h2-sm md:text-h2-md lg:text-h2-lg text-primary pb-8"
		>
			{section.title}
		</h2>
		<div class="text-grey-600 {className}">
			{@html section.description}
		</div>
		{#if section['primary_cta'] || section['secondary_cta']}
			<nav>
				<ul class="grid grid-cols-[auto_auto] gap-16 my-32 grid-flow-col place-content-start">
					{#if section['primary_cta']}
						<li>
							<a href={section['primary_cta'].url} class="button">{section['primary_cta'].text}</a>
						</li>
					{/if}
					{#if section['secondary_cta']}
						<li>
							<a href={section['secondary_cta'].url} class="button button-outline-primary"
								>{section['secondary_cta'].text}</a
							>
						</li>
					{/if}
				</ul>
			</nav>
		{/if}
	</div>
{/each}
