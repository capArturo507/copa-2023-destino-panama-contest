<script lang="ts">
	import Input from '$lib/components/input.svelte';
	import StepHero from '$lib/components/step-hero.svelte';
	import { currentPage } from '$lib/stores.js';

	currentPage.set('signup');

	export let data;
	export let form;

	const title: Record<App.SupportedLanguage, string> = {
		en: 'Fill in your details',
		es: 'Llena tus datos',
		pt: 'Preencha seus dados'
	};

	const stepNumber = 1;

	const nameInput: Record<App.SupportedLanguage, { label: string; placeholder: string }> = {
		es: {
			label: 'Nombre completo',
			placeholder: 'Nombre y apellido'
		},
		en: {
			label: 'Full name',
			placeholder: 'First and last name'
		},
		pt: {
			label: 'Nome completo',
			placeholder: 'Nome e sobrenome'
		}
	};

	const instagramInput: Record<App.SupportedLanguage, { label: string; placeholder: string }> = {
		es: {
			label: 'Cuenta de Instagram',
			placeholder: 'Nombre de usuario'
		},
		en: {
			label: 'Instagram account',
			placeholder: 'Username'
		},
		pt: {
			label: 'Conta do Instagram',
			placeholder: 'Nome de usuário'
		}
	};

	const emailInput: Record<App.SupportedLanguage, { label: string; placeholder: string }> = {
		es: {
			label: 'Correo electrónico',
			placeholder: 'correo@dominio.com'
		},
		en: {
			label: 'Email',
			placeholder: 'mail@domain.com'
		},
		pt: {
			label: 'Correio eletrônico',
			placeholder: 'correio@domínio.com'
		}
	};

	const phoneInput: Record<
		App.SupportedLanguage,
		Record<'label' | 'placeholder' | 'patron', string>
	> = {
		es: {
			label: 'Número de teléfono',
			placeholder: '+5072172672',
			patron: 'Debe empezar con + seguido del código de país y el número sin guiones'
		},
		en: {
			label: 'Phone number',
			placeholder: '+15555551234',
			patron: 'Must start with + followed by country code and number without dashes.'
		},
		pt: {
			label: 'Número de telefone',
			placeholder: '+551122222222',
			patron: 'Deve começar com + seguido do código do país e do número sem hífens.'
		}
	};

	const acceptInput: Record<App.SupportedLanguage, string> = {
		en: `By clicking here, I freely, expressly and unequivocally authorize Copa Airlines to collect, use, consult and process my personal data and information entered here for purposes of the Copa Airlines Destination Panama contest. Therefore, I grant my informed consent, in accordance with the applicable legislation. In addition, I authorize Copa Airlines to share and/or transfer to its affiliated companies, subcontractors and/or authorized representatives the information, data and documents that are necessary to complete the corresponding process. Also, I declare and acknowledge that I have read and accept the <a	href="/en/rules" class="text-primary-light hover:underline" target="_blank">Contest Terms and Conditions</a> of Copa Airlines and I agree and comply with what is stated therein`,
		es: `Haciendo clic en esta casilla, autorizo a Copa Airlines en forma libre, expresa e inequívoca, a la recopilación, uso, consulta y tratamiento de mis datos personales e	información aquí ingresada para propósitos del concurso Destino Panamá de Copa Airlines y	por lo tanto otorgo mi consentimiento informado, de conformidad con la legislación aplicable. Así mismo autorizo a Copa Airlines a trasladar y/o transferir a sus empresas	afiliadas, subcontratistas y/o representantes autorizados la información, datos y documentos que resulten necesarios para poder completar el proceso correspondiente. De igual forma	declaro y reconozco que he leído los <a	href="/es/reglas" class="text-primary-light hover:underline" target="_blank">Términos y condiciones</a> de Concurso de Copa Airlines y estoy de acuerdo y conforme con lo ahí expuesto.`,
		pt: `Ao clicar nesta caixa, autorizo de forma livre, expressa e inequ&iacute;voca a Copa Airlines a coletar, utilizar, consultar e processar meus dados e informa&ccedil;&otilde;es pessoais aqui inseridos para fins do concurso 75 anos da Copa Airlines e, portanto, dou meu consentimento informado, em acordo com a legisla&ccedil;&atilde;o aplic&aacute;vel (Lei n&ordm; 13.709/2018 - Lei Geral de Prote&ccedil;&atilde;o de Dados &ndash; LGPD). Da mesma forma, autorizo a Copa Airlines a transferir e/ou transferir a suas afiliadas, subcontratadas e/ou representantes autorizados as informa&ccedil;&otilde;es, dados e documentos necess&aacute;rios para concluir o processo correspondente. Da mesma forma, declaro e reconhe&ccedil;o que li os <a	href="/pt/regras" class="text-primary-light hover:underline" target="_blank">Termos e Condi&ccedil;&otilde;es do Concurso</a> da Copa Airlines e concordo e cumpro com o que nele consta`
	};

	$: ({ language } = data);
</script>

<svelte:head>
	<title>{title[language]}</title>
</svelte:head>
<StepHero {stepNumber} {language} />
<div class="container mx-auto my-64">
	<form method="POST" class="grid auto-rows-auto grid-cols-1 grid-flow-row gap-16 md:gap-24">
		<Input
			name="full_name"
			imagSource="https://cm-marketing.directus.app/assets/fb624d42-8d5e-44e1-b803-34839285e31a.svg"
			type="text"
			label={nameInput[language].label}
			maxlength={255}
			minlength={3}
			placeholder={nameInput[language].placeholder}
			value={form?.full_name}
		/>
		<Input
			name="instagram"
			imagSource="https://cm-marketing.directus.app/assets/39b5b181-d1c4-4dc8-aaa6-7eaf4c4ca8c4.svg"
			type="text"
			label={instagramInput[language].label}
			maxlength={30}
			minlength={3}
			placeholder={instagramInput[language].placeholder}
			value={form?.instagram}
		/>
		<Input
			name="email"
			imagSource="https://cm-marketing.directus.app/assets/3cb41f3e-17e2-4e57-ab8b-8870a93f6906.svg"
			type="email"
			label={emailInput[language].label}
			maxlength={320}
			minlength={3}
			placeholder={emailInput[language].placeholder}
			value={form?.email}
		/>
		<Input
			name="phone"
			imagSource="https://cm-marketing.directus.app/assets/d85fc86b-b0f4-4c65-9baa-c873ef54e2f6.svg"
			type="tel"
			label={phoneInput[language].label}
			maxlength={15}
			minlength={4}
			placeholder={phoneInput[language].placeholder}
			pattern="^\+[1-9][0-9]+$"
			patron={phoneInput[language].patron}
			value={form?.phone}
		/>
		<div class="grid auto-cols-auto grid-flow-col justify-start gap-8">
			<input
				type="checkbox"
				name="accept_terms"
				required
				class="transition-colors square-20 appearance-none rounded-[4px] cursor-pointer before:content-[''] before:rounded-[4px] before:grid before:place-content-center before:bg-grey-0 before:square-20 before:border before:border-grey-500 hover:before:border-primary-ultradark focus:before:bg-backgound-lightblue outline-2 outline-offset-0 outline-primary-light/40 focus:before:border-primary-ultradark active:before:bg-primary active:before:text-grey-0 active:before:content-['✓'] checked:before:content-['✓'] checked:before:border-primary-ultradark checked:before:bg-primary checked:before:text-grey-0 caret-transparent checked:hover:border-primary-ultradark checked:focus:before:bg-primary focus:outline active:outline active:before:border-primary-ultradark"
			/>
			<label for="accept_terms" class="text-12/16 text-600 max-w-prose">
				{@html acceptInput[language]}
			</label>
		</div>
		<input type="submit" value="Participar" class="button transition-colors block max-w-sm" />
	</form>
</div>
