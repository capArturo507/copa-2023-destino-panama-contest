<script lang="ts">
	import LogoWhite from './logo-white.svelte';
	export let title: string;
</script>

<header class="absolute top-0 left-0 w-full h-64 border-b border-grey-0/20 grid items-center">
	<div class="container mx-auto py-8 w-full">
		<h1 {title}>
			<LogoWhite />
		</h1>
	</div>
</header>
