<script lang="ts">
	import { filter, head, ifElse, isEmpty, path, pipe, prop, propEq } from 'ramda';

	type QuestionTranslations = {
		prompt: string;
		languages_code: string;
	};

	type StatementTranslation = {
		statement: string;
		languages_code: string;
	};

	type Statement = {
		id: number;
		translations: StatementTranslation[];
	};

	type QuestionAnswer = {
		correct_answer: boolean;
		statement_id: Statement;
	};

	type Question = {
		id: number;
		category: number;
		translations: QuestionTranslations[];
		Answers: QuestionAnswer[];
	};

	export let question: Question;
	export let language: string;
	export let index: number;

	const { id, translations, category, Answers } = question;

	const isSameLanguage = propEq(language, 'languages_code');

	const filterTranslation = filter(isSameLanguage, translations);

	const ifEmptyNotFound = ifElse(isEmpty, () => 'not found', head);

	const prompt = ifEmptyNotFound(filterTranslation);

	const getAnswerID = path(['statement_id', 'id']);

	const getAnswerTranslationProp = path(['statement_id', 'translations']);

	const getAnswerStatement = pipe(head, prop('statement'));

	const getStatementOrNotFound = ifElse(isEmpty, () => 'not found', getAnswerStatement);

	const getAnswerCorrectTranslation = (translations: StatementTranslation[]) =>
		getStatementOrNotFound(filter(isSameLanguage, translations));

	const getAnswerTranslation = pipe(getAnswerTranslationProp, getAnswerCorrectTranslation);
</script>

<li
	class="grid grid-cols-1 auto-rows-auto gap-16 grid-flow-rows my-32 justify-items-start mx-auto w-fit lg:mx-0"
>
	<p class="grid auto-cols-auto gap-4 justify-items-start grid-flow-col max-w-[calc(132px_*_3)]">
		<span>{index + 1}.</span><span>{prompt.prompt}</span>
	</p>
	<div
		class="grid grid-cols-3 auto-cols-fr grid-flow-col gap-[9px] p-4 rounded-md border border-primary shadow-medium bg-grey-0"
	>
		{#each Answers as option}
			{@const optionId = getAnswerID(option)}
			<div
				class="relative grid grid-cols-1 grid-rows-1 before:content-['''] before:w-[1px] before:opacity-50 before:bg-grey-300 before:h-120 before:absolute before:-left-[5px] before:top-4 first:before:content-none w-128 max-w-[128px]"
			>
				<input
					class="appearance-none w-full h-128 min-w-[100px] max-w-[128px] row-start-1 col-start-1 hover:bg-backgound-lightblue focus:bg-backgound-lightblue focus:outline-2 focus:outline-offset-1 focus:outline-primary-light/40 active:bg-primary checked:bg-primary checked:text-grey-0 rounded-sm checked:hover:bg-primary-light checked:focus:bg-primary checked:active:bg-primary-dark peer transition-colors"
					type="radio"
					name={id.toString()}
					id="option-{optionId}"
					value={optionId}
					required
				/>
				<label
					for="option-{optionId}"
					class="text-12/16 text-grey-800 font-body-medium text-center row-start-1 col-start-1 grid place-content-center peer-checked:text-grey-0"
				>
					{getAnswerTranslation(option)}
				</label>
			</div>
		{/each}
	</div>
</li>
