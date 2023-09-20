<script>
	import CompletedHero from '$lib/components/completed-hero.svelte';
	import Sponsors from '$lib/components/sponsors.svelte';
</script>

<svelte:head>
	<title>Gracias por participar</title>
</svelte:head>
<CompletedHero
	step="Paso 3 de 3"
	opening="Has contestado correctamente"
	middle="preguntas, en"
	closing="¡Ya estas participando!"
	sharetext="Comparte el concurso"
	corrects={8}
	timeinms={86400000}
	shareTitle="Concurso destino Panamá con Copa Airlines"
	shareText="¡Participa y conviértete en uno de los 10 ganadores de un viaje a Panamá!"
/>
<div class="container mx-auto my-32">
	<Sponsors title="Patrocinadores" />
</div>
