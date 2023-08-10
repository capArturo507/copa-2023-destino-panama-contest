export function match(value: string) {
	return /^[\w-_]{1,20}$/.test(value);
}
