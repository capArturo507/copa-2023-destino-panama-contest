export function match(value: string) {
	return /^[a-zA-Z]{2}(-[a-zA-Z]{2}$|$)/.test(value);
}
