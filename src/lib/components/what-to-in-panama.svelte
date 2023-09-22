<script lang="ts">
	export let language: App.SupportedLanguage;

	const data: App.WhatToDoInPanamaDataByLanguage = {
		en: {
			title: 'What to do in Panama?',
			description: `Discover the different activities and places to visit during 4 days at&nbsp;<a href="https://www.stopoverinpanama.com/" target="_blank" class="text-primary-light hover:underline"	rel="noopener">Panama Stopover</a>.`
		},
		es: {
			title: '¿Qué hacer en Panamá?',
			description: `Descubre las diferentes actividades y lugares que conocer durante 4 d&iacute;as en&nbsp;<a href="https://www.stopoverinpanama.com/" class="text-primary-light hover:underline" target="_blank">Panama Stopover.</a>`
		},
		pt: {
			title: 'Como participar?',
			description: `Explore as atividades e os locais para descobrir ao longo de 4 dias no link&nbsp;<a	href="https://www.stopoverinpanama.com/" target="_blank" class="text-primary-light hover:underline" rel="noopener">Panam&aacute; Stopover.</a>`
		}
	};

	$: ({ title, description } = data[language]);
</script>

<div>
	<h2
		class="font-heading font-heading-bold text-h2 sm:text-h2-sm md:text-h2-md lg:text-h2-lg text-primary pb-8"
	>
		{title}
	</h2>
	<p>
		{@html description}
	</p>
</div>
