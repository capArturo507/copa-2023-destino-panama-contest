<script lang="ts">
	import PlayButton from './play-button.svelte';
	import ChevronDown from './chevron-down.svelte';
	import PauseIcon from './pause-icon.svelte';
	import { fade, slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let video: string;
	export let language: string;

	let videoTag: HTMLVideoElement;
	let isVideoPlaying: boolean = false;

	let device = 'xs';

	const playVideo = () => {
		isVideoPlaying = true;
		videoTag.play();
	};

	const pauseVideo = () => {
		videoTag.pause();
	};

	const stopVideo = () => {
		isVideoPlaying = false;
	};

	const calculateDevice = (width: number) =>
		width >= 1367 ? 'lg' : width >= 960 ? 'md' : width >= 600 ? 'sm' : 'xs';

	onMount(() => {
		const width = window.screen.width;
		device = calculateDevice(width);
	});

	const adaptToRezise = () => {
		const width = window.screen.width;
		device = calculateDevice(width);
	};
</script>

<svelte:window on:resize={adaptToRezise} />

<div class="sm:bg-primary">
	<div
		class="grid grid-cols-1 grid-rows-[64px_1fr_auto] w-screen h-[178vw] sm:container sm:mx-auto sm:grid-cols-2 sm:h-auto sm:gap-16 md:grid-cols-[1fr_3fr] md:gap-24"
	>
		<div
			class="col-start-1 row-start-1 row-span-3 sm:rounded-2xl sm:overflow-hidden sm:row-start-2 sm:row-span-1 sm:col-start-2 sm:my-32 md:col-start-1"
		>
			<video
				src={video}
				poster="./video-poster.jpg"
				title="Concurso destino Panamá"
				class="w-screen h-auto sm:w-full"
				bind:this={videoTag}
				on:pause={stopVideo}
				on:ended={stopVideo}
				on:error={stopVideo}
			>
				<track kind="captions" src="/video-captions.es.vtt" />
			</video>
		</div>

		<div
			class="col-start-1 row-start-1 row-span-3 grid z-10 p-16 sm:row-start-2 sm:row-span-1 sm:col-start-2 sm:my-32 md:col-start-1"
		>
			{#if !isVideoPlaying}
				<button
					type="button"
					class="square-72 place-self-center"
					title="play video"
					on:click={playVideo}
					in:fade|local={{ delay: 350 }}
				>
					<PlayButton />
				</button>
			{:else}
				<button
					class="square-24 self-end"
					on:click={pauseVideo}
					title="pausar video"
					in:slide|local={{ delay: 350 }}
				>
					<PauseIcon />
				</button>
			{/if}
		</div>

		{#if !isVideoPlaying || device !== 'xs'}
			<div
				class="container mx-auto h-auto w-full col-start-1 row-start-3 py-8 sm:row-start-2 sm:self-center sm:mx-0 md:col-start-2"
				transition:slide|local
			>
				<h1
					class="font-heading font-heading-medium text-h1 sm:text-h1-sm md:text-h1-md lg:text-h1-lg text-grey-0 caret-transparent max-w-prose"
				>
					{#if language === 'es'}
						Concurso destino Panamá
					{:else if language === 'en'}
						Panama Destination Contest
					{:else}
						Concurso destino Panamá
					{/if}
				</h1>
				<p class="font-body text-grey-100 pt-8 pb-16 caret-transparent max-w-prose">
					{#if language === 'es'}
						&iexcl;Participa y convi&eacute;rtete en uno de los 10 ganadores de un viaje a
						Panam&aacute;! El premio incluye dos (2) boletos ida y vuelta, uno para el ganador y uno
						para su acompa&ntilde;ante y estad&iacute;as en hoteles por 3 noches.
					{:else if language === 'en'}
						Participate and become one of the 10 winners to receive a free trip to Panama! The prize
						includes two (2) round-trip tickets (one for the winner and one for their companion),
						and a complimentary 3-night hotel stay.
					{:else}
						Participe e torne-se um dos 10 vencedores de uma viagem ao Panam&aacute;! O pr&ecirc;mio
						inclui dois (2) bilhetes de ida e volta, um para o vencedor e outro para seu
						acompanhante, e estadias em hot&eacute;is por 3 noites.
					{/if}
				</p>
				<div class="block w-24 mx-auto animate-bounce sm:mx-0 sm:hidden">
					<ChevronDown />
				</div>
			</div>
		{/if}
	</div>
</div>
