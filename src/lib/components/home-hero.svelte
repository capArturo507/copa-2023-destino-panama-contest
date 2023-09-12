<script lang="ts">
	import PlayButton from './play-button.svelte';
	import ChevronDown from './chevron-down.svelte';
	import PauseIcon from './pause-icon.svelte';
	import { fade, slide } from 'svelte/transition';

	export let title: string;
	export let body: string;
	export let src: string;
	export let poster: string;

	let video: HTMLVideoElement;
	let isVideoPlaying: boolean = false;

	const playVideo = () => {
		isVideoPlaying = true;
		video.play();
	};

	const pauseVideo = () => {
		video.pause();
	};

	const stopVideo = () => {
		isVideoPlaying = false;
	};
</script>

<div class="grid grid-cols-1 grid-rows-[64px_1fr_auto] w-screen h-[178vw]">
	<video
		{src}
		{title}
		{poster}
		class="w-screen h-[178vw] col-start-1 row-start-1 row-span-5"
		bind:this={video}
		on:pause={stopVideo}
		on:ended={stopVideo}
		on:error={stopVideo}
	>
		<track kind="captions" src="/video-captions.es.vtt" />
	</video>

	<div
		class="col-start-1 row-start-1 row-span-5 col-full grid w-full h-full z-10 container mx-auto py-16"
	>
		{#if !isVideoPlaying}
			<button
				type="button"
				class="square-72 place-self-center"
				title="play video"
				on:click={playVideo}
				in:fade={{ duration: 350 }}
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

	{#if !isVideoPlaying}
		<div class="container mx-auto h-auto w-full col-start-1 row-start-3 py-8" transition:slide>
			<h1 class="font-heading text-h1 text-grey-0 caret-transparent">{title}</h1>
			<p class="font-body text-grey-100 pt-8 pb-16 caret-transparent">{@html body}</p>
			<div class="block w-24 mx-auto animate-bounce">
				<ChevronDown />
			</div>
		</div>
	{/if}
</div>
