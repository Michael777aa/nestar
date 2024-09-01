/**
ZP-TASK:

shunday function yozing, u 2 ta array parametr qabul qilsin. Siz bu ikki arrayning qiymatlari o'xshash bo'lishini (ya'ni, ularning barcha elementlari bir xil bo'lishini) tekshirishingiz kerak.

MASALAN: 
areArraysEqual([1, 2, 3], [3, 1, 2]) // true
areArraysEqual([1, 2, 3], [3, 1, 2, 1]) // true
areArraysEqual([1, 2, 3], [4, 1, 2]) // false
**/

function areArraysEqual<T>(arr1: T[], arr2: T[]): boolean {
	const frequencyMap1 = createFrequencyMap(arr1);
	const frequencyMap2 = createFrequencyMap(arr2);

	if (Object.keys(frequencyMap1).length !== Object.keys(frequencyMap2).length) {
		return false;
	}
	for (let key in frequencyMap1) {
		if (frequencyMap1[key] !== frequencyMap2[key]) {
			return false;
		}
	}

	return true;
}
function createFrequencyMap<T>(arr: T[]): { [key: string]: number } {
	return arr.reduce(
		(acc, item) => {
			const key = item.toString();
			acc[key] = (acc[key] || 0) + 1;
			return acc;
		},
		{} as { [key: string]: number },
	);
}

console.log(areArraysEqual([1, 2, 3], [3, 1, 2]));
