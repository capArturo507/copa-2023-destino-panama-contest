<script lang="ts">
	import { page } from '$app/stores';

	const { error, status } = $page;
</script>

<div class="h-64 bg-primary" />
<div class="container mx-auto h-full grid place-content-center text-center">
	<p class="text-grey-600">An error ocurred:</p>
	<h1
		class="text-h1 sm:text-h1-sm md:text-h1-md lg:text-h1-lg font-heading font-heading-bold my-16 text-primary"
	>
		{status} - {error?.message}
	</h1>
	<a href="/" class="text-primary-light hover:underline">Go back home</a>
</div>
