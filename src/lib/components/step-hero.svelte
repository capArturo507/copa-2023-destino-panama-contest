<script lang="ts">
	export let language: App.SupportedLanguage;
	export let stepNumber: 1 | 2;

	const data: Record<typeof stepNumber, App.StepDataByLanguage> = {
		1: {
			es: {
				step: 'Paso 1 de 3',
				title: 'Llena tus datos',
				description:
					'Solo tienes una oportunidad para participar con el mismo usuario de Instagram, correo electrónico o teléfono. El tiempo empieza a correr en cuanto se muestren las preguntas.'
			},
			en: {
				step: 'Step 1 of 3',
				title: 'Fill in your details',
				description:
					'You only have one chance to participate with the same Instagram user, email, or phone. Time starts running as soon as the questions are shown.'
			},
			pt: {
				step: 'Passo 1 de 3',
				title: 'Preencha seus dados',
				description:
					'Você tem apenas uma (1) oportunidade para participar com o mesmo usuário do Instagram, e-mail ou telefone. O tempo começa a contar assim que as perguntas aparecerem.'
			}
		},
		2: {
			es: {
				step: 'Paso 2 de 3',
				title: 'Contesta las preguntas',
				description:
					'Selecciona la respuesta correcta para cada una de las 10 preguntas. Tu tiempo acaba de iniciar ¡No demores!'
			},
			en: {
				step: 'Step 2 of 3',
				title: 'Answer the questions',
				description:
					'Select the correct answer for each of the 10 questions. Your time has just begun. Hurry!'
			},
			pt: {
				step: 'Passo 2 de 3',
				title: 'Responda às perguntas',
				description:
					'Escolha a resposta correta para cada uma das 10 perguntas. Seu tempo já começou, não demore!'
			}
		}
	};

	$: ({ step, title, description } = data[stepNumber][language]);
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
