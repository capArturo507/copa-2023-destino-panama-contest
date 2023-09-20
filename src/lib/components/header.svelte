<script lang="ts">
	import LogoHeader from './logo-header.svelte';
	import FlagUS from './flag-us.svelte';
	import FlagBr from './flag-br.svelte';
	import FlagGS from './flag-gs.svelte';
	import { fly } from 'svelte/transition';
	import LanguageSolid from './language-solid.svelte';

	let showLang = false;

	const openLang = () => {
		showLang = !showLang;
	};

	const hideLang = () => {
		showLang = false;
	};
</script>

<header class="absolute top-0 left-0 w-full h-64 border-b border-grey-0/20 z-30">
	<div
		class="container mx-auto py-8 grid h-full justify-stretch auto-cols-auto grid-flow-col items-center"
	>
		<div class="w-[200px]">
			<LogoHeader />
		</div>
		<div class="relative grid justify-end">
			<button
				class=" button button-circle button-outline-invert square-48 fill-current grid items-center"
				on:click={openLang}
				on:blur={hideLang}><LanguageSolid /></button
			>
			{#if showLang}
				<nav
					aria-label="cambio de idioma"
					class="absolute top-full my-4 bg-backgound-lightblue px-16 py-8 right-0 rounded shadow-medium z-50"
					transition:fly={{ y: -8 }}
				>
					<ul class="grid auto-rows-min grid-flow-row gap-8">
						<li>
							<a
								class="grid auto-cols-min gap-8 grid-flow-col hover:text-primary-light"
								href="/en"
								hreflang="en"
							>
								<span><FlagUS /></span>
								<span>English</span>
							</a>
						</li>
						<li>
							<a
								class="grid auto-cols-min gap-8 grid-flow-col hover:text-primary-light"
								href="/pt"
								hreflang="pt"
							>
								<span><FlagBr /></span>
								<span>Português</span>
							</a>
						</li>
					</ul>
				</nav>
			{/if}
		</div>
	</div>
</header>
