<script lang="ts">
	import type { LayoutData } from './$types';
	import Header from '$lib/components/header.svelte';
	import '../app.css';
	import Footer from '$lib/components/footer.svelte';

	export let data: LayoutData;

	const { header, footer, language } = data;
</script>

<Header header={header.data} {language} openLanguageNav="close" />
<main class="min-h-screen bg-bg-paper">
	<slot />
</main>
<Footer footer={footer.data} {language} />
