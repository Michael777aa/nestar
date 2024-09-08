/**
ZR-TASK:

Shunday function yozing, u parametridagi string ichidagi raqam va sonlarni sonini sanasin.
MASALAN: countNumberAndLetters(“string152%\¥”) return {number:3, letter:6}
**/

function countNumberAndLetters(input: string): { number: number; letter: number } {
	let numberCount = 0;
	let letterCount = 0;

	for (let char of input) {
		if (/[0-9]/.test(char)) {
			numberCount++;
		} else if (/[a-zA-Z]/.test(char)) {
			letterCount++;
		}
	}

	return { number: numberCount, letter: letterCount };
}

console.log(countNumberAndLetters('string152%¥'));
