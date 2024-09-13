/**
ZU-TASK:

Shunday function yozing, u parametridagi array ichida takrorlanmagan raqamlar yig'indisini qaytarsin.
MASALAN: sumOfUnique([1,2,3,2]) return 4

**/

function sumOfUnique(arr: number[]): number {
	const numCount: { [key: number]: number } = {};
	for (const num of arr) {
		numCount[num] = (numCount[num] || 0) + 1;
	}
	return Object.keys(numCount)
		.filter((key) => numCount[Number(key)] === 1)
		.reduce((sum, key) => sum + Number(key), 0);
}

console.log(sumOfUnique([1, 2, 3, 2]));
