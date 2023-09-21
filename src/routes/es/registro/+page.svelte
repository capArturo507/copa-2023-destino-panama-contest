<script>
	import Input from '$lib/components/input.svelte';
	import StepHero from '$lib/components/step-hero.svelte';
	const step = 'Paso 1 de 3';
	const title = 'Llena tus datos';
	const description =
		'Solo tienes una oportunidad para participar con el mismo usuario de Instagram, correo electrónico o teléfono. El tiempo empieza a correr en cuanto se muestren las preguntas.';

	export let form;
</script>

<svelte:head>
	<title>Llena tus datos</title>
</svelte:head>
<StepHero {step} {title} {description} />
<div class="container mx-auto my-64">
	<form method="POST" class="grid auto-rows-auto grid-cols-1 grid-flow-row gap-16 md:gap-24">
		<Input
			name="full_name"
			imagSource="https://cm-marketing.directus.app/assets/fb624d42-8d5e-44e1-b803-34839285e31a.svg"
			type="text"
			label="Nombre completo"
			maxlength={255}
			minlength={3}
			placeholder="Nombre y apellido"
			value={form?.full_name}
		/>
		<Input
			name="instagram"
			imagSource="https://cm-marketing.directus.app/assets/39b5b181-d1c4-4dc8-aaa6-7eaf4c4ca8c4.svg"
			type="text"
			label="Cuenta de instagram"
			maxlength={30}
			minlength={3}
			placeholder="Nombre de usuario"
			value={form?.instagram}
		/>
		<Input
			name="email"
			imagSource="https://cm-marketing.directus.app/assets/3cb41f3e-17e2-4e57-ab8b-8870a93f6906.svg"
			type="email"
			label="Correo electrónico"
			maxlength={320}
			minlength={3}
			placeholder="correo@dominio.com"
			value={form?.email}
		/>
		<Input
			name="phone"
			imagSource="https://cm-marketing.directus.app/assets/d85fc86b-b0f4-4c65-9baa-c873ef54e2f6.svg"
			type="tel"
			label="Número de teléfono"
			maxlength={15}
			minlength={4}
			placeholder="+5072172672"
			pattern="^\+[1-9][0-9]+$"
			patron="Debe empezar con + seguido del código de país y el número sin guiones"
			value={form?.phone}
		/>
		<div class="grid auto-cols-auto grid-flow-col justify-start gap-8">
			<input
				type="checkbox"
				name="accept_terms"
				id=""
				required
				class="transition-colors square-20 appearance-none rounded-[4px] cursor-pointer before:content-[''] before:rounded-[4px] before:grid before:place-content-center before:bg-grey-0 before:square-20 before:border before:border-grey-500 hover:before:border-primary-ultradark focus:before:bg-backgound-lightblue outline-2 outline-offset-0 outline-primary-light/40 focus:before:border-primary-ultradark active:before:bg-primary active:before:text-grey-0 active:before:content-['✓'] checked:before:content-['✓'] checked:before:border-primary-ultradark checked:before:bg-primary checked:before:text-grey-0 caret-transparent checked:hover:border-primary-ultradark checked:focus:before:bg-primary focus:outline active:outline active:before:border-primary-ultradark"
			/>
			<label for="accept_terms" class="text-12/16 text-600 max-w-prose">
				Haciendo clic en esta casilla, autorizo a Copa Airlines en forma libre, expresa e
				inequívoca, a la recopilación, uso, consulta y tratamiento de mis datos personales e
				información aquí ingresada para propósitos del concurso Destino Panamá de Copa Airlines y
				por lo tanto otorgo mi consentimiento informado, de conformidad con la legislación
				aplicable. Así mismo autorizo a Copa Airlines a trasladar y/o transferir a sus empresas
				afiliadas, subcontratistas y/o representantes autorizados la información, datos y documentos
				que resulten necesarios para poder completar el proceso correspondiente. De igual forma
				declaro y reconozco que he leído los <a
					href="/es/reglas"
					class="text-primary-light hover:underline"
					target="_blank">Términos y condiciones</a
				> de Concurso de Copa Airlines y estoy de acuerdo y conforme con lo ahí expuesto.
			</label>
		</div>
		<input type="submit" value="Participar" class="button transition-colors block max-w-sm" />
	</form>
</div>
