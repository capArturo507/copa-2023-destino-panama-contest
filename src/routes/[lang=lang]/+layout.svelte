<script lang="ts">
	import '../../app.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	let policies = [
		{ href: './reglas', title: 'Reglas del Concurso' },
		{
			href: 'https://www.copaair.com/es-us/legal/terminos-y-condiciones/politica-de-privacidad/',
			title: 'Política de privacidad'
		}
	];

	console.log('Footer', data);
</script>

<Header title="Copa Airlines" />
<main>
	<slot><!-- optional fallback --></slot>
</main>
<Footer
	socialNavLabel="Redes Sociales"
	policiesNavLabel="Políticas"
	copyright="Copyright © 2023 Copa Airlines, Inc. Todos los derechos reservados"
	{policies}
/>
