<script lang="ts">
	import { filter, head, ifElse, isEmpty, propEq } from 'ramda';

	type QuestionTranslations = {
		prompt: string;
		languages_code: string;
	};

	type Question = {
		id: number;
		category: number;
		translations: QuestionTranslations[];
	};

	export let question: Question;
	export let language: string;

	const { id, translations, category } = question;

	const isSameLanguage = propEq(language, 'languages_code');

	const langPrompt = filter(isSameLanguage, translations);

	const ifEmptyNotFound = ifElse(isEmpty, () => 'not found', head);

	const prompt = ifEmptyNotFound(ifEmptyNotFound);
</script>

<div>
	<label for={id.toString()}>prompt.prompt</label>
	<input type="radio" name={id.toString()} id="answer" value="a" />
</div>
