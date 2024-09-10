/**
ZT-TASK:

Shunday function yozing, u parametridagi string ichida 1 martadan ortiq qaytarilmagan birinchi harf indeksini qaytarsin.
MASALAN: firstUniqueCharIndex(“stamp”) return 0


**/

function firstUniqueCharIndex(s: string): number {
	const charCountMap: Map<string, number> = new Map();
	for (const char of s) {
		charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
	}

	for (let i = 0; i < s.length; i++) {
		if (charCountMap.get(s[i]) === 1) {
			return i;
		}
	}
	return -1;
}

console.log(firstUniqueCharIndex('stamp'));
