/**

ZK-TASK:

Shunday function yozing, u har soniyada bir marta consolega 1 dan 5 gacha bolgan raqamlarni chop etsin va 5 soniyadan keyin ishini toxtatsin.
MASALAN: printNumbers()

**/

function printNumbers(): any {
	let counter = 1;

	const interval = setInterval(() => {
		console.log(counter);
		counter++;

		if (counter > 5) {
			clearInterval(interval);
		}
	}, 1000);
}

printNumbers();
