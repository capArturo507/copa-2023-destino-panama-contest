<script>
	import Input from './input.svelte';
</script>

<form method="POST">
	<Input
		name="full_name"
		imagSource="https://cm-marketing.directus.app/assets/fb624d42-8d5e-44e1-b803-34839285e31a.svg"
		type="text"
		label="Nombre completo"
		maxlength={255}
		minlength={3}
	/>
	<Input
		name="instagram"
		imagSource="https://cm-marketing.directus.app/assets/fb624d42-8d5e-44e1-b803-34839285e31a.svg"
		type="text"
		label="Cuenta de instagram"
		maxlength={30}
		minlength={3}
	/>
	<Input
		name="email"
		imagSource="https://cm-marketing.directus.app/assets/fb624d42-8d5e-44e1-b803-34839285e31a.svg"
		type="email"
		label="Correo Electronico"
		maxlength={320}
		minlength={3}
	/>
	<Input
		name="phone"
		imagSource="https://cm-marketing.directus.app/assets/fb624d42-8d5e-44e1-b803-34839285e31a.svg"
		type="tel"
		label="Telefono"
		maxlength={15}
		minlength={4}
	/>
	<div>
		<input type="checkbox" name="accept_terms" id="" required />
		<label for="accept_terms" />
	</div>
	<div>
		<input type="submit" value="Participar" class="button transition-colors" />
	</div>
</form>
