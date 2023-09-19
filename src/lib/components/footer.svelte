<script lang="ts">
	import DirectuSocialNavigation from './directu-social-navigation.svelte';
	import DirectusLogo from './directus-logo.svelte';
	import DirectusPolicyNavigation from './directus-policy-navigation.svelte';
	import DirectusStatement from './directus-statement.svelte';

	export let footer: any;
	export let language: string;

	const { content } = footer.storefront[0];

	console.log(content);
</script>

<footer class="py-32 bg-grey-100">
	<div class="container mx-auto grid grid-cols-2 auto-rows-max justify-start gap-16 area">
		{#each content as type}
			{@const { section, collection, item } = type}
			{#if collection === 'logos'}
				<DirectusLogo {item} class="block max-w-[200px] {section}" />
			{:else if collection === 'statement'}
				<DirectusStatement
					{item}
					{language}
					class="text-grey-600 text-12/16 max-w-prose copyright"
				/>
			{:else if collection === 'navigation' && section === 'follow'}
				<DirectuSocialNavigation {item} {language} class="social" />
			{:else}
				<DirectusPolicyNavigation {item} {language} class="policies" />
			{/if}
		{/each}
		<span class="social policies staralliance copyright panama" />
	</div>
</footer>
