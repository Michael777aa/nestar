/**

ZN-TASK:

Shunday function yozing, uni array va number parametri bolsin. Ikkinchi parametrda berilgan raqamli indexgacha arrayni orqasiga ogirib qaytarsin.
MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3) return [5, 6, 1, 2, 3, 4]


**/

function rotateArray<T>(arr: T[], index: number): T[] {
	if (index < 0 || index >= arr.length) {
		throw new Error('Index is out of bounds');
	}

	const part1 = arr.slice(0, index).reverse();
	const part2 = arr.slice(index).reverse();

	return [...part1, ...part2].reverse();
}

console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));
