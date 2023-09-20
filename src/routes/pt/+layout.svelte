<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';

	const copyright = 'Copyright © 2023 Copa Airlines, Inc. Todos os direitos reservados';
	const privacyUrl = 'https://www.copaair.com/pt-gs/legal/termos-e-condicoes/politica-privacidade/';
	const privacy = 'Política de Privacidade';
	const rules = 'Regras do Concurso';
	const rulesUrl = '/pt/regras';
</script>

<Header language="pt" />
<main class="min-h-screen bg-bg-paper">
	<slot />
</main>
<Footer {copyright} {privacy} {privacyUrl} {rules} {rulesUrl} />
