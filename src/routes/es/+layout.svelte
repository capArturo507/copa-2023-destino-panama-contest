<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';

	const copyright = 'Copyright © 2023 Copa Airlines, Inc. Todos los derechos reservados';
	const privacyUrl =
		'https://www.copaair.com/es-gs/legal/terminos-y-condiciones/politica-de-privacidad/';
	const privacy = 'Política de Privacidad';
	const rules = 'Reglas del Concurso';
	const rulesUrl = '/pt/reglas';
</script>

<Header language="es" />
<main class="min-h-screen bg-bg-paper">
	<slot />
</main>
<Footer {copyright} {privacy} {privacyUrl} {rules} {rulesUrl} />
