<script lang="ts">
	import { nowInPanama } from '$lib/utils';
	import { parseISO } from 'date-fns';
	import { slice } from 'ramda';
	import { onDestroy, onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	export let started_datetime: string;

	let timer = {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
		milliseconds: 0
	};

	let show = false;

	let interval: NodeJS.Timer;

	const startedDatetime = parseISO(started_datetime);

	const calculateTimeDifference = () => {
		const difference = nowInPanama() - startedDatetime;

		let milliseconds = difference % 1000;
		let seconds = Math.floor(difference / 1000);
		let minutes = Math.floor(seconds / 60);
		let hours = Math.floor(minutes / 60);
		let days = Math.floor(hours / 24);

		seconds %= 60;
		minutes %= 60;
		hours %= 24;

		return {
			days,
			hours,
			minutes,
			seconds,
			milliseconds
		};
	};

	onMount(() => {
		show = true;
		interval = setInterval(() => {
			timer = calculateTimeDifference();
		}, 1);
	});

	onDestroy(() => {
		show = false;
		clearInterval(interval);
	});
</script>

{#if show}
	<div
		transition:fly|local={{ delay: 350, duration: 500, y: 100 }}
		class="grid auto-cols-auto grid-rows-1 grid-flow-col gap-4 place-content-center py-16 px-32 font-[monospace] text-20/24 bg-secondary text-grey-0 sticky bottom-0"
	>
		<div>{timer.days}</div>
		<div>:</div>
		<div>{slice(-2, Infinity, '00' + timer.hours)}</div>
		<div>:</div>
		<div>{slice(-2, Infinity, '00' + timer.minutes)}</div>
		<div>:</div>
		<div>{slice(-2, Infinity, '00' + timer.seconds)}</div>
		<div>.</div>
		<div>{slice(-3, Infinity, '000' + timer.milliseconds)}</div>
	</div>
{/if}
