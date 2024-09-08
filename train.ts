/**
ZS-TASK:

Shunday function yozing, u parametridagi arrayni ichidagi 1 marta kelgan elemnetni qaytarsin.
MASALAN: singleNumber([4, 2, 1, 2, 1]) return 4
**/

function singleNumber(nums: number[]): number {
	const freq = new Array(101).fill(0);
	for (const num of nums) {
		freq[num]++;
	}
	for (let i = 0; i < freq.length; i++) {
		if (freq[i] === 1) {
			return i;
		}
	}
}
console.log(singleNumber([4, 2, 1, 2, 1]));
