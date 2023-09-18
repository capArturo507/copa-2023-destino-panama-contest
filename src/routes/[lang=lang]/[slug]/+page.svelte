<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const id = data.id;

	const setInputName = (name: DataBase.QueryParticipationKeys) => name;
</script>

<div class="bg-primary h-152" />
<form action="?/register" method="POST">
	<input type="hidden" name={setInputName('id')} value={id} />
	<input type="text" name={setInputName('full_name')} />
	<input type="text" name={setInputName('instagram')} />
	<input type="email" name={setInputName('email')} />
	<input type="phone" name={setInputName('phone')} />
	<input type="checkbox" name={setInputName('accepted_terms')} value="Terms" />
	<input type="submit" class="button button-outline-light" value="test register" />
</form>

<form action="?/send" method="POST">
	<input type="hidden" name="temp" value="temp" />
	<input type="submit" class="button" value="test send answers" />
</form>
