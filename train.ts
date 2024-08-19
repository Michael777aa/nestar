/**

ZL-TASK:

Shunday function yozing, u parametrda berilgan stringni kebab casega otkazib qaytarsin. Bosh harflarni kichik harflarga ham otkazsin.
MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”


**/

function stringToKebab(input: string): any {
	const str = input.split(' ');
	let vacant: any[] = [];
	for (let word of str) {
		vacant.push(word.toLowerCase());
	}

	// console.log(vacant);

	return vacant.join('-');
}

console.log(stringToKebab('I Love Kebab'));
