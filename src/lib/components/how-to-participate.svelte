<script lang="ts">
	export let language: App.SupportedLanguage;

	const data: App.HowToParticipateDataByLanguage = {
		en: {
			title: 'How to participate?',
			step1: 'Fill in your information.',
			step2: `In the shortest time possible, <strong>answer correctly, 10 questions about Panama.</strong>`,
			step3: `<strong>And that is it, you&rsquo;re participating!</strong><br>You will have two weeks to participate, and each individual is limited to one submission.`
		},
		es: {
			title: '¿Cómo participar?',
			step1: 'Llena tus datos.',
			step2: `Contesta correctamente <strong>10 preguntas sobre Panam&aacute;</strong>, en el menor tiempo posible.`,
			step3: `&iexcl;Y listo ya est&aacute;s participando!</strong><br>Tendr&aacute;s 2 semanas para participar y podr&aacute;s hacerlo solo una vez.`
		},
		pt: {
			title: 'Como participar?',
			step1: 'Preencha seus dados.',
			step2: `Responda corretamente a&nbsp;<strong>10 perguntas sobre o Panam&aacute;</strong> no menor tempo poss&iacute;vel.`,
			step3: `E pronto, voc&ecirc; j&aacute; est&aacute; participando!</strong><br>Voc&ecirc; ter&aacute; 2 semanas para participar, e s&oacute; poder&aacute; faz&ecirc;-lo uma vez.`
		}
	};

	$: ({ title, step1, step2, step3 } = data[language]);
</script>

<div>
	<h2
		class="font-heading font-heading-bold text-h2 sm:text-h2-sm md:text-h2-md lg:text-h2-lg text-primary pb-8"
	>
		{title}
	</h2>
	<ol class="grid auto-rows-auto grid-flow-row gap-16">
		<li class="flex gap-16 items-center">
			<img
				src="https://cm-marketing.directus.app/assets/5da7ace1-5eb3-41f3-ab11-fda0fc63e2b1?width=24&amp;height=24"
				alt="N&uacute;mero 1"
			/>
			<p>{step1}</p>
		</li>
		<li class="flex gap-16 items-center">
			<img
				src="https://cm-marketing.directus.app/assets/ef2231f0-68cf-4768-a5e9-b9d7d417d38a?width=24&amp;height=24"
				alt="N&uacute;mero 2"
			/>
			<p>
				{@html step2}
			</p>
		</li>
		<li class="flex gap-16 items-center">
			<img
				src="https://cm-marketing.directus.app/assets/938117ca-9154-44e3-bf5b-315c9a47451a?width=24&amp;height=24"
				alt="N&uacute;mero 3"
			/>
			<p>
				{@html step3}
			</p>
		</li>
	</ol>
</div>
