<script lang="ts">
	import PlayButton from './play-button.svelte';
	import ChevronDown from './chevron-down.svelte';
	import PauseIcon from './pause-icon.svelte';
	import { fade, slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { filterCurrentLanguage } from '$lib/directus-utilts';

	export let content: any;
	export let video: string;
	export let language: string;

	const { translations } = content;

	const currentTransaltion = filterCurrentLanguage(language)(translations);

	const { title, description } = currentTransaltion;

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
				{title}
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
					in:fade={{ delay: 350 }}
				>
					<PlayButton />
				</button>
			{:else}
				<button
					class="square-24 self-end"
					on:click={pauseVideo}
					title="pausar video"
					in:slide={{ delay: 350 }}
				>
					<PauseIcon />
				</button>
			{/if}
		</div>

		{#if !isVideoPlaying || device !== 'xs'}
			<div
				class="container mx-auto h-auto w-full col-start-1 row-start-3 py-8 sm:row-start-2 sm:self-center sm:mx-0 md:col-start-2"
				transition:slide
			>
				<h1
					class="font-heading font-heading-medium text-h1 sm:text-h1-sm md:text-h1-md lg:text-h1-lg text-grey-0 caret-transparent max-w-prose"
				>
					{title}
				</h1>
				<p class="font-body text-grey-100 pt-8 pb-16 caret-transparent max-w-prose">
					{@html description}
				</p>
				<div class="block w-24 mx-auto animate-bounce sm:mx-0 sm:hidden">
					<ChevronDown />
				</div>
			</div>
		{/if}
	</div>
</div>
