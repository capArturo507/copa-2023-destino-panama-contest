<script lang="ts">
	export let step: string;
	export let title: string;
	export let description: string;
</script>

<div class="pt-64 pb-32 text-grey-0 bg-primary">
	<div class="container mx-auto">
		<p class="mt-16">{step}</p>
		<h1
			class="mt-24 mb-8 font-heading font-heading-medium text-h1 sm:text-h1-sm md:text-h1-md lg:text-h1-lg"
		>
			{title}
		</h1>
		<p class="max-w-prose">{description}</p>
	</div>
</div>
