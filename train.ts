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
