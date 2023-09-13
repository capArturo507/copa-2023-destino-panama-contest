<script lang="ts">
	import type { PageData } from './$types';
	import HomeHero from '$lib/components/home-hero.svelte';

	export let data: PageData;

	console.log(data);
</script>

<HomeHero title="temp" body="temp" src="/contest-video.mp4" poster="" />
<div class="container mx-auto my-32">
	<h2 class="font-heading font-heading-bold text-h2 text-primary pb-8">Sample</h2>
	{@html 'temp'}
	<!-- CTAS si existen -->
	<nav aria-labelledby="">
		<ul>
			<li>
				<a href="">Texto</a>
			</li>
		</ul>
	</nav>
</div>
