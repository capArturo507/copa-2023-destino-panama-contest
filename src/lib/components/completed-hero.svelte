<script lang="ts">
	import { formatMilliseconds } from '$lib/utils';

	export let participacion: DataBase.Participacion;
	export let language: App.SupportedLanguage;

	const data: App.ConfirmationDataByLanguage = {
		es: {
			step: 'Paso 3 de 3',
			opening: 'Has contestado correctamente',
			middle: 'preguntas, en',
			closing: '¡Ya estas participando! 🤞',
			shareCTA: 'Comparte el concurso',
			shareTitle: 'Concurso destino Panamá con Copa Airlines',
			shareText: '¡Participa y conviértete en uno de los 10 ganadores de un viaje a Panamá!'
		},
		en: {
			step: 'Step 3 of 3',
			opening: 'You answered correctly',
			middle: 'questions, in',
			closing: 'You are already participating! 🤞',
			shareCTA: 'Share the contest',
			shareTitle: 'Destino Panama Contest with Copa Airlines',
			shareText: 'Participate and become one of the 10 winners of a trip to Panama!'
		},
		pt: {
			step: 'Passo 3 de 3',
			opening: 'Você respondeu corretamente',
			middle: 'perguntas, en',
			closing: 'Você já está participando! 🤞',
			shareCTA: 'Compartilhe o concurso',
			shareTitle: 'Concurso destino Panamá com a Copa Airlines',
			shareText: 'Participe e seja um dos 10 ganhadores de uma viagem ao Panamá!'
		}
	};

	const dateLocale: App.DateLocaleDataByLanguage = {
		en: {
			days: 'day',
			hour: 'hour',
			minutes: 'minute',
			seconds: 'second',
			milliseconds: 'millisecond'
		},
		es: {
			days: 'día',
			hour: 'hora',
			minutes: 'minuto',
			seconds: 'segundo',
			milliseconds: 'milisegundo'
		},
		pt: {
			days: 'dia',
			hour: 'hora',
			minutes: 'minuto',
			seconds: 'segundo',
			milliseconds: 'milissegundo'
		}
	};

	const { correct_answers, completed_time_ms } = participacion;

	$: ({ step, opening, middle, closing, shareCTA, shareTitle, shareText } = data[language]);

	$: dateLocal = dateLocale[language];

	const shareURL =
		'https://www.destinopanamacopa.com/?utm_source=direct&utm_medium=share+link&utm_campaign=organic+share';

	const setURLtoClipboard = () => navigator.clipboard.writeText(shareURL);

	const share = () => {
		if (navigator.share) {
			return navigator
				.share({
					title: shareTitle,
					text: shareText,
					url: shareURL
				})
				.catch(setURLtoClipboard);
		}

		return setURLtoClipboard();
	};
</script>

<div class="pt-64 pb-32 lg:pb-64 text-grey-0 bg-primary">
	<div class="container mx-auto">
		<p class="mt-16 mb-24">{step}</p>
		<p class="md:text-center">{opening}</p>
		<h1 class="mt-24 mb-8 font-heading font-heading-bold text-h1-lg text-center">
			<span>{correct_answers}</span> / 10
		</h1>
		<p class="md:text-center">{middle}</p>
		<p class="text-center font-heading text-h3-lg">
			{formatMilliseconds(parseInt(completed_time_ms), dateLocal)}
		</p>
		<p class="font-heading my-24 md:my-40 font-heading-medium text-h2-md lg:text-h2-lg text-center">
			{closing}
		</p>
		<button
			on:click={share}
			class="button button-outline-invert grid grid-flow-col auto-cols-auto justify-start mx-auto fill-current"
		>
			<svg
				class="pointer-events-none square-20"
				viewBox="0 0 21 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M8.05569 6.34853L7.10644 5.60868L10.4297 2.24359L13.9124 5.60868L13.0453 6.34853L11.1264 4.47395V12.9096H9.75178V4.47395L8.05569 6.34853ZM7.40834 8.35686H6.12889H4.66666V9.74544V16.6878V17.0768V18.0763H16.3333V17.2091H16.334V8.35687H15.9761V8.35686H13.2344V9.74544H14.8717V16.6878H6.12889V9.74544H7.40834V8.35686Z"
				/>
			</svg>
			{shareCTA}
		</button>
	</div>
</div>
