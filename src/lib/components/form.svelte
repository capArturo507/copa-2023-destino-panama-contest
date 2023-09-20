<script>
	import Input from './input.svelte';
</script>

<form action="/register" method="post">
	<Input
		name="full_name"
		imagSource="https://cm-marketing.directus.app/assets/fb624d42-8d5e-44e1-b803-34839285e31a.svg"
		type="text"
		label="Nombre completo"
	/>
	<Input
		name="instagram"
		imagSource="https://cm-marketing.directus.app/assets/fb624d42-8d5e-44e1-b803-34839285e31a.svg"
		type="text"
		label="Cuenta de instagram"
	/>
	<Input
		name="email"
		imagSource="https://cm-marketing.directus.app/assets/fb624d42-8d5e-44e1-b803-34839285e31a.svg"
		type="email"
		label="Correo Electronico"
	/>
	<Input
		name="phone"
		imagSource="https://cm-marketing.directus.app/assets/fb624d42-8d5e-44e1-b803-34839285e31a.svg"
		type="tel"
		label="Telefono"
	/>
</form>
