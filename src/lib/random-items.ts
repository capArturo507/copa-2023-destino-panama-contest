import { __, bind, curry, equals, gt, identity, invoker, multiply, pipe, prop } from 'ramda';
import { logError, returnNull } from './utils';

const floor = bind(Math.floor, Math);

const random = bind(Math.random, Math);

const generateRandomIndex = pipe(identity, multiply(random()), floor);

const addToSet: (value: number) => (set: Set<number>) => Set<number> = invoker(1, 'add');

const arrayFromSet = (set: Set<number>): number[] => Array.from(set);

const setHasItem: (value: number) => (set: Set<number>) => boolean = invoker(1, 'has');

const getSetSize: (set: Set<number>) => number = prop('size');

const generatUniqueIndexs = curry((set: Set<number>, desiredLength: number) => {
	const equalsDesiredLength = equals(desiredLength);

	const isSetSizeEqualsToDesiredLength = pipe(getSetSize, equalsDesiredLength);

	if (isSetSizeEqualsToDesiredLength(set)) return arrayFromSet(set);

	const newIndex = generateRandomIndex(desiredLength);

	const doesSetHasNewIndex = setHasItem(newIndex);

	const getNewFunction: (set: Set<number>) => any = generatUniqueIndexs(__, desiredLength);

	if (doesSetHasNewIndex(set)) return getNewFunction(set);

	const addNewIndexToSet = addToSet(newIndex);

	const newSet = addNewIndexToSet(set);

	return getNewFunction(newSet);
});

export const generateRandomIndices = curry((originalArrayLength: number, desiredLength: number) => {
	const isDesiredLengthGreaterThan = gt(desiredLength);

	const setErrorGateway = pipe(logError, returnNull);

	if (isDesiredLengthGreaterThan(originalArrayLength))
		setErrorGateway(
			`Desired total length (${desiredLength}) cannot be greater than the original array length (${originalArrayLength})`
		);

	const initRandomIndex = generatUniqueIndexs(new Set());

	return initRandomIndex(desiredLength);
});
