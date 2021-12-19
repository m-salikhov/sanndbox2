import 'regenerator-runtime/runtime';
import axios from 'axios';
import { x } from './sum';

// const x = axios
// 	.get('https://jsonplaceholder.typicode.com/users')
// 	.then((res) => res.data);

// x.then((res) => console.log(res));

let y = async (userId) => {
	try {
		const responseData = await axios
			.get('https://jsonplaceholder.typicode.com/users', {
				params: {
					id: userId,
				},
			})
			.then((res) => {
				return res.data[0];
			});
		if (!responseData) throw new Error('user not found');
		else return responseData;
	} catch (error) {
		console.error(error.message);
	}
};

Promise.all([y(3), y(5)]).then((res) => console.log(res));

let promise = new Promise(async function (resolve, reject) {
	// эта функция выполнится автоматически, при вызове new Promise

	// через 1 секунду сигнализировать, что задача выполнена с результатом "done"
	setTimeout(() => resolve('nya'), 5000);
});
promise.then(console.log);

// y(x);
