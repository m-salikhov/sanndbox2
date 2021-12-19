export interface Car {
	_id: string;
	brand: string;
	model: string;
	type: string;
	number: string;
	price: number;
	city: string;
	photo: string;
	bookedInfo: {
		booked: boolean;
		date: {
			startDate: string;
			endDate: string;
		};
	};
}

export interface Message {
	body: string;
	createdAt: number;
	toUser: {
		email: string;
		username: string;
		_id: string;
	};
	user: {
		username: string;
		_id: string;
	};
	_id: string;
}

export interface OnlineUser {
	username: string;
	sub: string;
}

export interface ValResponse {
	access_token: string;
	payload: {
		sub: string;
		username: string;
	};
}
