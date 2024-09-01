/**
ZQ-TASK:

Shunday function yozing, u parametridagi array ichida 2 marta qaytarilgan sonlarni alohida araryda qaytarsin.
MASALAN: findDuplicates([1,2,3,4,5,4,3,4]) return [3, 4]

**/

function findDuplicates(arr: number[]): number[] {
	const countMap = new Map<number, number>();
	const duplicates: number[] = [];
	for (const num of arr) {
		if (countMap.has(num)) {
			countMap.set(num, countMap.get(num)! + 1);
		} else {
			countMap.set(num, 1);
		}
	}
	for (const [num, count] of countMap.entries()) {
		if (count > 1) {
			duplicates.push(num);
		}
	}

	return duplicates;
}

console.log(findDuplicates([1, 2, 3, 4, 5, 4, 3, 4]));
