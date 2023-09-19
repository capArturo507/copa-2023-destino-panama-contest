<script lang="ts">
	import type { LayoutData } from './$types';
	import Header from '$lib/components/header.svelte';
	import '../app.css';
	import Footer from '$lib/components/footer.svelte';

	export let data: LayoutData;

	const { header, footer, language, openLanguageNav } = data;
</script>

<Header {header} {language} {openLanguageNav} />
<main class="min-h-screen bg-bg-paper">
	<slot><!-- optional fallback --></slot>
</main>
<Footer {footer} {language} />
