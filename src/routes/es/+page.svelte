<script lang="ts">
	import HomeHero from '$lib/components/home-hero.svelte';
	import Sponsors from '$lib/components/sponsors.svelte';

	let language = 'es';
</script>

<svelte:head>
	<title>Concurso destino Panamá - Copa Airlines</title>
</svelte:head>
<HomeHero video="./promo-video-es.mp4" {language} />
<div
	class="container mx-auto grid auto-rows-min my-32 sm:my-48 md:my-64 lg:my-72 gap-32 sm:gap-48 md:gap-64 lg:gap-72 text-grey-600"
>
	<div>
		<h2
			class="font-heading font-heading-bold text-h2 sm:text-h2-sm md:text-h2-md lg:text-h2-lg text-primary pb-8"
		>
			¿Cómo participar?
		</h2>
		<ol class="grid auto-rows-auto grid-flow-row gap-16">
			<li class="flex gap-16 items-center">
				<img
					src="https://cm-marketing.directus.app/assets/5da7ace1-5eb3-41f3-ab11-fda0fc63e2b1?width=24&amp;height=24"
					alt="N&uacute;mero 1"
				/>
				<p>Llena tus datos.</p>
			</li>
			<li class="flex gap-16 items-center">
				<img
					src="https://cm-marketing.directus.app/assets/ef2231f0-68cf-4768-a5e9-b9d7d417d38a?width=24&amp;height=24"
					alt="N&uacute;mero 2"
				/>
				<p>
					Contesta correctamente <strong>10 preguntas sobre Panam&aacute;</strong>, en el menor
					tiempo posible.<br /><br />
				</p>
			</li>
			<li class="flex gap-16 items-center">
				<img
					src="https://cm-marketing.directus.app/assets/938117ca-9154-44e3-bf5b-315c9a47451a?width=24&amp;height=24"
					alt="N&uacute;mero 3"
				/>
				<p>
					<strong> &iexcl;Y listo ya est&aacute;s participando!</strong><br />Tendr&aacute;s 2
					semanas para participar y podr&aacute;s hacerlo solo una vez.
				</p>
			</li>
		</ol>
	</div>
	<div>
		<h2
			class="font-heading font-heading-bold text-h2 sm:text-h2-sm md:text-h2-md lg:text-h2-lg text-primary pb-8"
		>
			Premios
		</h2>
		<ul class="grid auto-rows-auto grid-flow-row gap-16">
			<li class="flex gap-16 items-center">
				<img
					src="https://cm-marketing.directus.app/assets/61b0e789-9a10-4ed4-854b-85dbad9bb8c4?width=24&amp;height=24"
					alt="Pase de abordar"
				/> Dos (2) boletos ida y vuelta a Panam&aacute;, a trav&eacute;s de Copa Airlines
			</li>
			<li class="flex gap-16 items-center">
				<img
					src="https://cm-marketing.directus.app/assets/e8af2a73-943e-42f5-8843-fb42e033c678?width=24&amp;height=24"
					alt="Hotel"
				/> Estad&iacute;a de 3 noches en hoteles seleccionados de Panam&aacute;
			</li>
		</ul>
		<nav>
			<ul
				class="grid grid-cols-[auto_auto] grid-flow-col gap-16 md:gap-24 justify-start my-24 md:my-32"
			>
				<li>
					<a class="button" href="/es/registro">Participar</a>
				</li>
				<li>
					<a class="button button-outline-primary" href="/es/reglas">Leer las reglas</a>
				</li>
			</ul>
		</nav>
	</div>
	<Sponsors title="Patrocinadores" />
	<div>
		<h2
			class="font-heading font-heading-bold text-h2 sm:text-h2-sm md:text-h2-md lg:text-h2-lg text-primary pb-8"
		>
			¿Qué hacer en Panamá?
		</h2>
		<p>
			Descubre las diferentes actividades y lugares que conocer durante 4 d&iacute;as en&nbsp;<a
				href="https://www.stopoverinpanama.com/"
				class="text-primary-light hover:underline"
				target="_blank">Panama Stopover.</a
			>
		</p>
	</div>
</div>
