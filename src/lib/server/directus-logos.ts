const Logo = class implements Directus.Logo {
	constructor(public code: string) {}
};

export const isLogo = (value: any): value is Directus.Logo => value instanceof Logo;

export const extractLogoCode = ({ code }: Directus.Logo) => code;
