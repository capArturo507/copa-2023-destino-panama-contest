<script lang="ts">
	import StarAlliance from './star-alliance.svelte';
	import InstagramIcon from './instagram-icon.svelte';
	import FacebookIcon from './facebook-icon.svelte';
	import TiktokIcon from './tiktok-icon.svelte';
	import TwitterIcon from './twitter-icon.svelte';

	export let socialNavLabel: string;
	export let policiesNavLabel: string;
	export let copyright: string;
	export let policies: any[];

	const year = new Date().getFullYear();

	export const socialNetwork = [
		{ href: 'https://www.instagram.com/copaairlines/', title: 'Instagram', icon: InstagramIcon },
		{ href: 'https://www.facebook.com/copaairlines/', title: 'Facebook', icon: FacebookIcon },
		{ href: 'https://www.tiktok.com/@copaairlines', title: 'Tiktok', icon: TiktokIcon },
		{ href: 'https://twitter.com/CopaAirlines', title: 'Twitter', icon: TwitterIcon }
	];
</script>

<footer class="py-32 bg-grey-100">
	<div class="container mx-auto grid grid-cols-1 auto-rows-auto gap-16 justify-items-start">
		<nav aria-labelledby={socialNavLabel} class="py-16">
			<ul class="grid grid-cols-4 auto-cols-auto gap-8">
				{#each socialNetwork as social}
					<li>
						<a
							href={social.href}
							title={social.title}
							target="_blank"
							rel="noopener noreferrer"
							class="block w-48 h-32 fill-current py-8 px-16 rounded-3xl border border-grey-600 hover:bg-grey-600 text-grey-600 hover:text-grey-0 transition-colors"
						>
							<svelte:component this={social.icon} />
						</a>
					</li>
				{/each}
			</ul>
		</nav>
		<StarAlliance />
		<p class="text-12/16 text-grey-600">{copyright}</p>
		<nav aria-labelledby={policiesNavLabel}>
			<ul class="grid grid-cols-2 gap-16 text-12/16">
				{#each policies as policiy}
					<li>
						<a href={policiy.href} class="underline text-primary-light">
							{policiy.title}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</footer>
