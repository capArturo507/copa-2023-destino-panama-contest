import { equals, filter, head, pipe, prop } from 'ramda';

export const filterCurrentLanguage = (language: string) => {
	const isCurrentLanguage = pipe(prop('languages_code'), equals(language));

	return pipe(filter(isCurrentLanguage), head);
};
