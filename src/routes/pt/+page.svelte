<script lang="ts">
	import HomeHero from '$lib/components/home-hero.svelte';
	import Sponsors from '$lib/components/sponsors.svelte';

	let language = 'pt';
</script>

<svelte:head>
	<title>Concurso destino Panamá - Copa Airlines</title>
</svelte:head>
<HomeHero video="./promo-video-pt.mp4" {language} />
<div
	class="container mx-auto grid auto-rows-min my-32 sm:my-48 md:my-64 lg:my-72 gap-32 sm:gap-48 md:gap-64 lg:gap-72 text-grey-600"
>
	<div>
		<h2
			class="font-heading font-heading-bold text-h2 sm:text-h2-sm md:text-h2-md lg:text-h2-lg text-primary pb-8"
		>
			Como participar?
		</h2>
		<ol class="grid auto-rows-auto grid-flow-row gap-16">
			<li class="flex gap-16 items-center">
				<img
					src="https://cm-marketing.directus.app/assets/5da7ace1-5eb3-41f3-ab11-fda0fc63e2b1?width=24&amp;height=24"
					alt="N&uacute;mero 1"
				/>
				<p>Preencha seus dados.</p>
			</li>
			<li class="flex gap-16 items-center">
				<img
					src="https://cm-marketing.directus.app/assets/ef2231f0-68cf-4768-a5e9-b9d7d417d38a?width=24&amp;height=24"
					alt="N&uacute;mero 2"
				/>
				<p>
					Responda corretamente a&nbsp;<strong>10 perguntas sobre o Panam&aacute;</strong> no menor tempo
					poss&iacute;vel.
				</p>
			</li>
			<li class="flex gap-16 items-center">
				<img
					src="https://cm-marketing.directus.app/assets/938117ca-9154-44e3-bf5b-315c9a47451a?width=24&amp;height=24"
					alt="N&uacute;mero 3"
				/>
				<p>
					<strong>E pronto, voc&ecirc; j&aacute; est&aacute; participando!</strong><br />Voc&ecirc;
					ter&aacute; 2 semanas para participar, e s&oacute; poder&aacute; faz&ecirc;-lo uma vez.
				</p>
			</li>
		</ol>
	</div>
	<div>
		<h2
			class="font-heading font-heading-bold text-h2 sm:text-h2-sm md:text-h2-md lg:text-h2-lg text-primary pb-8"
		>
			Prêmios
		</h2>
		<ul class="grid auto-rows-auto grid-flow-row gap-16">
			<li class="flex gap-16 items-center">
				<img
					src="https://cm-marketing.directus.app/assets/61b0e789-9a10-4ed4-854b-85dbad9bb8c4?width=24&amp;height=24"
					alt="Pase de abordar"
				/> Dois (2) bilhetes de ida e volta para o Panamá, através da Copa Airlines.
			</li>
			<li class="flex gap-16 items-center">
				<img
					src="https://cm-marketing.directus.app/assets/e8af2a73-943e-42f5-8843-fb42e033c678?width=24&amp;height=24"
					alt="Hotel"
				/> Hospedagem de 3 noites em hotéis selecionados no Panamá.
			</li>
		</ul>
		<div>
			<nav>
				<ul
					class="grid grid-cols-[auto_auto] grid-flow-col gap-16 md:gap-24 justify-start my-24 md:my-32"
				>
					<li>
						<a class="button" href="/pt/inscrever-se">Participe do concurso</a>
					</li>
					<li>
						<a class="button button-outline-primary" href="/pt/regras">Leia as regras</a>
					</li>
				</ul>
			</nav>
		</div>
	</div>
	<Sponsors title="Patrocinadores" />
	<div>
		<h2
			class="font-heading font-heading-bold text-h2 sm:text-h2-sm md:text-h2-md lg:text-h2-lg text-primary pb-8"
		>
			O que fazer no Panamá?
		</h2>
		<p>
			Explore as atividades e os locais para descobrir ao longo de 4 dias no link&nbsp;<a
				href="https://www.stopoverinpanama.com/"
				target="_blank"
				class="text-primary-light hover:underline"
				rel="noopener">Panam&aacute; Stopover.</a
			>
		</p>
	</div>
</div>
