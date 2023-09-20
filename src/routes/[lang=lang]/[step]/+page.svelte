<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { questions, rules, stepsHeaders, form } = data;

	console.log('questions', questions, 'rules', rules, 'steps', stepsHeaders, 'form', form);
</script>

Hey pero y entonces?
