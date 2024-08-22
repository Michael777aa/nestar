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
/**

ZM-TASK:

Shunday function yozing, u function parametrga berilgan raqamlarni orqasiga ogirib qaytarsin.
MASALAN: reverseInteger(123456789) return 987654321



**/

function reverseInteger(input: number): any {
	const toString: string = '' + input;
	return Number(toString.split('').reverse().join(''));
}

console.log(reverseInteger(123456789));
