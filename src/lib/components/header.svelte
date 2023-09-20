<script lang="ts">
	import { __, drop, equals, filter, head, pipe, prop } from 'ramda';
	import { slide, fly } from 'svelte/transition';
	import { enhance } from '$app/forms';
	import { filterCurrentLanguage } from '$lib/directus-utilts';

	export let header: any;
	export let language: string;
	export let openLanguageNav: 'open' | 'close';

	const { logo, navigation } = header;

	const filterLanguage = filterCurrentLanguage(language);

	const isCurrentLanguageLink = pipe(
		prop('links_id'),
		prop('translations'),
		head,
		prop('url'),
		drop(1, __),
		equals(language)
	);

	const filterCurrentLanguageLink = pipe(filter(isCurrentLanguageLink), head);

	const onLostFocust = () => {
		openLanguageNav = 'close';
	};

	const enhancedForm = ({ cancel }: any) => {
		cancel();

		openLanguageNav = openLanguageNav === 'open' ? 'close' : 'open';

		return async () => {};
	};
</script>

<header class="absolute top-0 left-0 w-full h-64 border-b border-grey-0/20 z-30">
	<div
		class="container mx-auto py-8 grid justify-stretch auto-cols-auto grid-flow-col items-center"
	>
		<div>
			{@html logo.code}
		</div>
		<div class="justify-self-end relative">
			{#each navigation as nav}
				{@const { links, translations } = nav.navigation_id}
				{@const navTranslation = filterLanguage(translations)}
				{@const currentLangLink = filterCurrentLanguageLink(links)}
				<form method="POST" action="/change-language" use:enhance={enhancedForm}>
					<button
						class="grid gap-4 auto-cols-min grid-flow-col items-center button button-outline-invert"
						type="submit"
						on:blur={onLostFocust}
					>
						<span>
							{@html currentLangLink?.links_id?.icon?.code}
						</span>
						<span>{filterLanguage(currentLangLink?.links_id?.translations)?.text}</span>
					</button>
				</form>
				{#if openLanguageNav === 'open'}
					<nav
						aria-label={navTranslation.title}
						class="absolute top-full my-12 bg-backgound-lightblue px-8 py-4 left-1/2 -translate-x-1/2 rounded shadow-medium z-50"
						transition:fly={{ y: -8 }}
					>
						<ul>
							{#each links as link}
								{@const { links_id } = link}
								{@const { icon } = links_id}
								{@const linkTranslation = filterLanguage(links_id.translations)}
								{@const linkLang = drop(1, linkTranslation.url)}
								{#if linkLang !== language}
									<li class="my-16">
										<a
											href={linkTranslation.url}
											data-sveltekit-reload
											hreflang={linkLang}
											class="grid gap-4 auto-cols-min grid-flow-col items-center text-grey-600 hover:text-primary-light transition-colors"
										>
											<span>
												{@html icon.code}
											</span>
											<span>{linkTranslation.text}</span>
										</a>
									</li>
								{/if}
							{/each}
						</ul>
					</nav>
				{/if}
			{/each}
		</div>
	</div>
</header>
