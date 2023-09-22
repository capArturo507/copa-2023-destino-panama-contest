<script lang="ts">
	export let language: App.SupportedLanguage;

	const data: App.PrizesDataByLanguage = {
		es: {
			title: `Premios`,
			prize1: `Dos (2) boletos ida y vuelta a Panamá, a través de Copa Airlines.`,
			prize2: `Estadía de 3 noches en hoteles seleccionados de Panamá.`,
			cta1Title: 'Participar',
			cta1URL: '/es/registro',
			cta2Title: 'Leer las reglas',
			cta2URL: '/es/reglas'
		},
		en: {
			title: `Prizes`,
			prize1: `Two (2) round-trip tickets to Panama via Copa Airlines.`,
			prize2: `3-night stay in selected hotels in Panama.`,
			cta1Title: 'Join the contest',
			cta1URL: '/en/sign-up',
			cta2Title: 'Read the rules',
			cta2URL: '/en/rules'
		},
		pt: {
			title: `Prêmios`,
			prize1: `Dois (2) bilhetes de ida e volta para o Panamá, através da Copa Airlines.`,
			prize2: `Hospedagem de 3 noites em hotéis selecionados no Panamá.`,
			cta1Title: 'Participe do concurso',
			cta1URL: '/pt/inscrever-se',
			cta2Title: 'Leia as regras',
			cta2URL: '/pt/regras'
		}
	};

	$: ({ title, prize1, prize2, cta1Title, cta1URL, cta2Title, cta2URL } = data[language]);
</script>

<div>
	<h2
		class="font-heading font-heading-bold text-h2 sm:text-h2-sm md:text-h2-md lg:text-h2-lg text-primary pb-8"
	>
		{title}
	</h2>
	<ul class="grid auto-rows-auto grid-flow-row gap-16">
		<li class="flex gap-16 items-center">
			<img
				src="https://cm-marketing.directus.app/assets/61b0e789-9a10-4ed4-854b-85dbad9bb8c4?width=24&amp;height=24"
				alt="Pase de abordar"
			/>
			{prize1}
		</li>
		<li class="flex gap-16 items-center">
			<img
				src="https://cm-marketing.directus.app/assets/e8af2a73-943e-42f5-8843-fb42e033c678?width=24&amp;height=24"
				alt="Hotel"
			/>
			{prize2}
		</li>
	</ul>
	<div>
		<nav>
			<ul
				class="grid grid-cols-[auto_auto] grid-flow-col gap-16 md:gap-24 justify-start my-24 md:my-32"
			>
				<li>
					<a class="button" href={cta1URL}>{cta1Title}</a>
				</li>
				<li>
					<a class="button button-outline-primary" href={cta2URL}>{cta2Title}</a>
				</li>
			</ul>
		</nav>
	</div>
</div>
