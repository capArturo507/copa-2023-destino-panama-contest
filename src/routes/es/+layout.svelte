<script lang="ts">
	import type { PageData } from './$types';
	import '../../app.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';

	let policies = [
		{ href: './reglas', title: 'Reglas del Concurso' },
		{
			href: 'https://www.copaair.com/es-us/legal/terminos-y-condiciones/politica-de-privacidad/',
			title: 'Política de privacidad'
		}
	];

	export let data: PageData;

	let title = 'Hello World' + ' | Inicio';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<Header {title} />
<main>
	<slot><!-- optional fallback --></slot>
</main>
<Footer
	socialNavLabel="Redes Sociales"
	policiesNavLabel="Políticas"
	copyright="Copyright © 2023 Copa Airlines, Inc. Todos los derechos reservados"
	{policies}
/>
