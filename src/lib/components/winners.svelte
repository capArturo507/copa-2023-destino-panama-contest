<script lang="ts">
	export let language: App.SupportedLanguage;

	const winners = [
		'@cejita1978',
		'@danimurillobucheli',
		'@diegofdiegof',
		'@noecab11',
		'@bataayala',
		'@mariavalmvsm',
		'@mavienriquez',
		'@mvalserbet',
		'@hernan_grimoldi',
		'@margaritavergara96',
		'@marygula',
		'@ildro',
		'@marcmac25',
		'@solidezca',
		'@montrossjeff',
		'@danduardo92',
		'@ginabasile9',
		'@jorgeviolav',
		'@Claudzilla24',
		'@andreasrweber',
		'@mureradriano',
		'@ssobrosa',
		'@madelinesouto',
		'@raquelsobrosa',
		'@skymaribr',
		'@mirellerj',
		'@melissaborgesrj',
		'@safih.rosa',
		'@amperongc'
	];

	const title: Record<App.SupportedLanguage, string> = {
		es: 'Ganadores',
		en: 'Winners',
		pt: 'Vencedores'
	};
</script>

<div>
	<h2
		class="font-heading font-heading-bold text-h2 sm:text-h2-sm md:text-h2-md lg:text-h2-lg text-primary pb-8"
	>
		{title[language]}
	</h2>
	<ul
		class="font-heading text-grey-600 text-20/24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row auto-rows-fr"
	>
		{#each winners as participant}
			<li>{participant}</li>
		{/each}
	</ul>
</div>
