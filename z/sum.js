function sum(a, b) {
	return a + b;
}

console.log(sum(4, 6));

let fillArr = (num) => {
	if (!num) return [];
	return [...fillArr(num - 1), num];
};
let x = fillArr(5);

let fillArr2 = (num) => {
	let arr = [];
	for (; num; num--) arr.push(num);
	return arr.reverse();
};
let y = fillArr2(5);
console.log(y);

console.log(Object.keys(y));
