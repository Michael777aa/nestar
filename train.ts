/**
ZJ-TASK:

Shunday function yozing, u berilgan arrayni ichidagi numberlarni qiymatini hisoblab qaytarsin.
MASALAN: reduceNestedArray([1, [1, 2, [4]]]) return 8

**/

function reduceNestedArray(arr: any): any {
	const newArr = arr.flat(Infinity);

	let count: number = 0;

	for (let i = 0; i < newArr.length; i++) {
		count += newArr[i];
	}

	return count;
}

console.log(reduceNestedArray([1, [1, 2, [4]]]));
