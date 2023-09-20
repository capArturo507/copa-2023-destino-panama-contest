<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';

	const copyright = 'Copyright © 2023 Copa Airlines, Inc. All rights reserved';
	const privacyUrl = 'https://www.copaair.com/en-us/legal/terms-and-conditions/privacy-policy/';
	const privacy = 'Privacy Policy';
	const rules = 'Contest Rules';
	const rulesUrl = '/pt/rules';
</script>

<Header language="en" />
<main class="min-h-screen bg-bg-paper">
	<slot />
</main>
<Footer {copyright} {privacy} {privacyUrl} {rules} {rulesUrl} />
