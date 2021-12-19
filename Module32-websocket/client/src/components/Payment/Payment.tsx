import axios from 'axios';
import { FormEvent, useState, MouseEvent } from 'react';
import './payment.scss';

interface PaymentProp {
	selectedUser: string;
}

type PaymentStatus = 'pending' | 'success' | 'failed';

export default function Payment({ selectedUser }: PaymentProp) {
	const [amount, setAmount] = useState('');
	const [isPamentProgress, setIsPamentProgress] = useState(false);
	const [isPaymentSuccess, setIsPaymentSuccess] =
		useState<PaymentStatus>('pending');
	const submitPayment = (
		e: FormEvent<HTMLFormElement> | MouseEvent<HTMLElement>
	) => {
		e.preventDefault();
		setIsPaymentSuccess('pending');
		if (selectedUser) {
			axios
				.post(
					'/payments',
					{
						amount,
						toUserId: selectedUser,
					},
					{
						headers: {
							authorization: `Bearer ${localStorage.getItem('access_token')}`,
						},
					}
				)
				.then((res) => res.data)
				.then(async (data) => {
					const key = data.paymentSessionKey;
					console.log('paymentSessionKey: ' + key);
					//@ts-ignore
					window.PMNTS.loadPinForm(key);
					setIsPamentProgress(true);

					while (true) {
						const paymentStatusResp = await axios
							.get(`/payments/check-status`, {
								headers: {
									authorization: `Bearer ${localStorage.getItem('access_token')}`,
								},
								params: {
									paymentSessionKey: key,
								},
							})
							.catch((error) => {
								console.log(`Ошибка: ${error.message}`);
								throw error;
							});
						console.log(paymentStatusResp.data);
						const { paymentStatus }: { paymentStatus: PaymentStatus } =
							paymentStatusResp.data;
						console.log('paymentStatus: ' + paymentStatus);

						if (paymentStatus !== 'pending') {
							setIsPamentProgress(false);
							setIsPaymentSuccess(paymentStatus);
							console.log(paymentStatus);
							break;
						}

						await (async () => {
							await new Promise((resolve) => setTimeout(resolve, 2500));
						})();
					}
				});
		}

		setAmount('');
	};

	return (
		<div className='payment'>
			<form>
				<label>
					<button onClick={submitPayment}>Payment:</button>

					<input
						className='amount'
						onChange={(e) => setAmount(e.target.value)}
						value={amount}
						placeholder='amount'
						type='text'
					/>
				</label>
			</form>
		</div>
	);
}
