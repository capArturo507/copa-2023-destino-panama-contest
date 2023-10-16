<script lang="ts">
	import Sponsors from '$lib/components/sponsors.svelte';

	export let data: App.Locals;

	$: ({ language } = data);

	const title: Record<App.SupportedLanguage, string> = {
		en: 'Contest is over',
		es: 'El concurso terminó',
		pt: 'O concurso terminou'
	};

	const copy: Record<App.SupportedLanguage, string> = {
		en: `Thank you for participating, this contest has ended! The site is closed for new entries. We are carefully reviewing the results to ensure their validity.<br><br>
Stay tuned! We will soon announce the lucky winners on our social media and on this page.`,
		es: `¡Gracias por participar, este concurso ha finalizado! El sitio se encuentra cerrado para nuevas participaciones. Estamos revisando cuidadosamente los resultados para garantizar la validez de los mismos.
    <br><br>
¡Sigue pendiente! Pronto anunciaremos a los afortunados ganadores en nuestras redes sociales y en esta página.`,
		pt: `Obrigado por participar, este concurso foi encerrado! O site está fechado para novas participações. Estamos revisando cuidadosamente os resultados para garantir sua validade.
<br><br>
Fique atento! Em breve, anunciaremos os sortudos vencedores em nossas redes sociais e nesta página.`
	};
</script>

<svelte:head>
	<title>{title[language]}</title>
</svelte:head>
<div class="pt-64 pb-32 lg:pb-64 text-grey-0 bg-primary">
	<div class="container mx-auto text-grey-0 text-center py-72 md:py-152 text-24/32 font-body-light">
		<p class="max-w-prose mx-auto">
			{@html copy[language]}
		</p>
	</div>
</div>
<div class="container mx-auto my-32">
	<Sponsors {language} />
</div>
