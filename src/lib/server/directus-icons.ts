const Icon = class implements Directus.Icon {
	constructor(public code: string) {}
};

export const isIcon = (value: any): value is Directus.Icon => value instanceof Icon;

export const extractIconCode = ({ code }: Directus.Icon) => code;
