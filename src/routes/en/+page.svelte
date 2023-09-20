<script lang="ts">
	import HomeHero from '$lib/components/home-hero.svelte';

	let language = 'en';
</script>

<svelte:head>
	<title>Panama Destination Contest - Copa Airlines</title>
</svelte:head>
<HomeHero video="./promo-video-en.mp4" {language} />
<div
	class="container mx-auto grid auto-rows-min my-32 sm:my-48 md:my-64 lg:my-72 gap-32 sm:gap-48 md:gap-64 lg:gap-72 text-grey-600"
>
	<div>
		<h2
			class="font-heading font-heading-bold text-h2 sm:text-h2-sm md:text-h2-md lg:text-h2-lg text-primary pb-8"
		>
			How to participate?
		</h2>
		<ol class="grid auto-rows-auto grid-flow-row gap-16">
			<li class="flex gap-16 items-center">
				<img
					src="https://cm-marketing.directus.app/assets/5da7ace1-5eb3-41f3-ab11-fda0fc63e2b1?width=24&amp;height=24"
					alt="N&uacute;mero 1"
				/>
				<p>Fill in your information.</p>
			</li>
			<li class="flex gap-16 items-center">
				<img
					src="https://cm-marketing.directus.app/assets/ef2231f0-68cf-4768-a5e9-b9d7d417d38a?width=24&amp;height=24"
					alt="N&uacute;mero 2"
				/>
				<p>
					In the shortest time possible,&nbsp;<strong
						>answer correctly, 10 questions about Panama.</strong
					>
				</p>
			</li>
			<li class="flex gap-16 items-center">
				<img
					src="https://cm-marketing.directus.app/assets/938117ca-9154-44e3-bf5b-315c9a47451a?width=24&amp;height=24"
					alt="N&uacute;mero 3"
				/>
				<p>
					<strong>And that is it, you&rsquo;re participating!</strong>
					You will have two weeks to participate, and each individual is limited to one submission.
				</p>
			</li>
		</ol>
	</div>
	<div>
		<h2
			class="font-heading font-heading-bold text-h2 sm:text-h2-sm md:text-h2-md lg:text-h2-lg text-primary pb-8"
		>
			Prizes
		</h2>
		<ul class="grid auto-rows-auto grid-flow-row gap-16">
			<li class="flex gap-16 items-center">
				<img
					src="https://cm-marketing.directus.app/assets/61b0e789-9a10-4ed4-854b-85dbad9bb8c4?width=24&amp;height=24"
					alt="Pase de abordar"
				/>Two (2) round-trip tickets to Panama via Copa Airlines.
			</li>
			<li class="flex gap-16 items-center">
				<img
					src="https://cm-marketing.directus.app/assets/e8af2a73-943e-42f5-8843-fb42e033c678?width=24&amp;height=24"
					alt="Hotel"
				/> 3-night stay in selected hotels in Panama.
			</li>
		</ul>
		<nav>
			<ul
				class="grid grid-cols-[auto_auto] grid-flow-col gap-16 md:gap-24 justify-start my-24 md:my-32"
			>
				<li>
					<a class="button" href="/en/sign-up">Join the contest</a>
				</li>
				<li>
					<a class="button button-outline-primary" href="/en/rules">Read the rules</a>
				</li>
			</ul>
		</nav>
	</div>
	<div>
		<h2
			class="font-heading font-heading-bold text-h2 sm:text-h2-sm md:text-h2-md lg:text-h2-lg text-primary pb-8"
		>
			Sponsors
		</h2>
		<ul class="grid grid-cols-2 gap-16 md:gap-24 md:grid-cols-3 lg:grid-cols-4">
			<li>
				<a href="https://www.instagram.com/lemeridienpanama/" target="_blank" rel="noopener"
					><img
						src="https://cm-marketing.directus.app/assets/617c20c2-2697-4d88-b0ce-cc61eac08e6b?width=256&amp;height=256"
						alt="Le Meridien Panama Logo"
						loading="lazy"
					/></a
				>
			</li>
			<li>
				<a href="https://bit.ly/copapromo2023SM" target="_blank" rel="noopener"
					><img
						src="https://cm-marketing.directus.app/assets/62e6f769-ce2b-4c05-a78d-b9f3e6912572?width=256&amp;height=256"
						alt="The Santa Maria Hotel Logo"
						loading="lazy"
					/></a
				>
			</li>
			<li>
				<a href="https://www.instagram.com/intermiramarpanama/" target="_blank" rel="noopener"
					><img
						src="https://cm-marketing.directus.app/assets/1afe2180-2497-4e91-8990-ac4430c9f5e6?width=256&amp;height=256"
						alt="Intercontinental miramar Logo"
						loading="lazy"
					/></a
				>
			</li>
			<li>
				<a
					href="https://bit.ly/CopaAirlinesPromotion-VillaMarinaLodgeCondos"
					target="_blank"
					rel="noopener"
					><img
						src="https://cm-marketing.directus.app/assets/7f44833a-ec7b-4c7c-a7b1-a5491c823a8e?width=256&amp;height=256"
						alt="Villa Marina Logo"
						loading="lazy"
					/></a
				>
			</li>
			<li>
				<a href="https://www.instagram.com/westinplayabonita/" target="_blank" rel="noopener"
					><img
						src="https://cm-marketing.directus.app/assets/e574fed6-a31d-4346-851d-d25205f0affe?width=256&amp;height=256"
						alt="Westing Playa Bonita Panama Logo"
						loading="lazy"
					/></a
				>
			</li>
			<li>
				<a href=" https://bit.ly/copapromo2023bh" target="_blank" rel="noopener"
					><img
						src="https://cm-marketing.directus.app/assets/fcbc5520-8cd7-41a2-b0d7-c08ec8f6be25?width=256&amp;height=256"
						alt="Bristol Panama Logo"
					/></a
				>
			</li>
			<li>
				<a href="https://www.instagram.com/gamboareserve/" target="_blank" rel="noopener"
					><img
						src="https://cm-marketing.directus.app/assets/75c4fc53-a44f-4942-86db-856cf1c4c403?width=256&amp;height=256"
						alt="Gamboa Rainforest Reserve Logo"
						loading="lazy"
					/></a
				>
			</li>
			<li>
				<a
					href="https://bit.ly/CopaAirlinesPromotion-MarriottPanamaHotel"
					target="_blank"
					rel="noopener"
					><img
						src="https://cm-marketing.directus.app/assets/1ade6cd8-68c7-459e-be17-70022233edd7?width=256&amp;height=256"
						alt="Marriot Panama Logo"
					/></a
				>
			</li>
			<li>
				<a
					href="https://www.espanol.marriott.com/es-es/marriott-brands/portfolio/ptykp-descubre-buenaventura-con-the-buenaventura-golf-and-beach-resort-panama-autograph-collection.mi"
					target="_blank"
					rel="noopener"
					><img
						src="https://cm-marketing.directus.app/assets/98b9d6a1-e643-4d78-87b2-8f31c72ac890?width=256&amp;height=256"
						alt="The Buenaventura Logo"
						loading="lazy"
					/></a
				>
			</li>
		</ul>
	</div>
	<div>
		<h2
			class="font-heading font-heading-bold text-h2 sm:text-h2-sm md:text-h2-md lg:text-h2-lg text-primary pb-8"
		>
			What to do in Panama?
		</h2>
		<p>
			Discover the different activities and places to visit during 4 days at&nbsp;<a
				href="https://www.stopoverinpanama.com/"
				target="_blank"
				class="text-primary-light hover:underline"
				rel="noopener">Panama Stopover</a
			>.
		</p>
	</div>
</div>
