<script lang="ts">
	export let step: string;
	export let opening: string;
	export let middle: string;
	export let closing: string;
	export let sharetext: string;
	export let corrects: number;
	export let timeinms: number;

	const fromTimeInMSToString = () => {
		const msLeft = timeinms % 1000;
		const totalSeconds = (timeinms - msLeft) / 1000;
		const secsLeft = totalSeconds % 60;
		const totalMins = (totalSeconds - secsLeft) / 60;
		const minsLeft = totalSeconds % 60;
		const totalHours = (totalMins - minsLeft) / 60;
		const hoursLeft = totalHours % 24;
		const remnainingDays = (totalHours - hoursLeft) / 24;

		let result = [];

		if (remnainingDays > 0) result.push(remnainingDays + 'd');
		if (hoursLeft > 0) result.push(hoursLeft + 'h');
		if (minsLeft > 0) result.push(minsLeft + 'm');
		if (secsLeft > 0) result.push(secsLeft + 's');
		if (msLeft > 0) result.push(msLeft + 'ms');

		return result.join(' ');
	};
</script>

<div class="pt-64 pb-32 lg:pb-64 text-grey-0 bg-primary">
	<div class="container mx-auto">
		<p class="mt-16 mb-24">{step}</p>
		<p class="md:text-center">{opening}</p>
		<h1 class="mt-24 mb-8 font-heading font-heading-bold text-h1-lg text-center">
			{corrects} / 10
		</h1>
		<p class="md:text-center">{middle}</p>
		<p class="text-center font-heading text-h3-lg">
			{fromTimeInMSToString()}
		</p>
		<p class="font-heading my-24 md:my-40 font-heading-medium text-h2-md lg:text-h2-lg text-center">
			{closing} 🤞
		</p>
		<button
			class="button button-outline-invert grid grid-flow-col auto-cols-auto justify-start mx-auto"
		>
			<svg
				width="21"
				height="20"
				viewBox="0 0 21 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M8.05569 6.34853L7.10644 5.60868L10.4297 2.24359L13.9124 5.60868L13.0453 6.34853L11.1264 4.47395V12.9096H9.75178V4.47395L8.05569 6.34853ZM7.40834 8.35686H6.12889H4.66666V9.74544V16.6878V17.0768V18.0763H16.3333V17.2091H16.334V8.35687H15.9761V8.35686H13.2344V9.74544H14.8717V16.6878H6.12889V9.74544H7.40834V8.35686Z"
					fill="white"
				/>
			</svg>
			{sharetext}
		</button>
	</div>
</div>
