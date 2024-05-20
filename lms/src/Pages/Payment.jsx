// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const PaymentForm = () => {
//     const stripe = useStripe();
//     const elements = useElements();
//     const [paymentError, setPaymentError] = useState(null);
//     const [paymentSuccess, setPaymentSuccess] = useState(null);

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!stripe || !elements) {
//             return;
//         }

//         const cardElement = elements.getElement(CardElement);

//         try {
//             const { error, paymentMethod } = await stripe.createPaymentMethod({
//                 type: 'card',
//                 card: cardElement,
//             });

//             if (error) {
//                 setPaymentError(error.message);
//                 setPaymentSuccess(null);
//             } else {
//                 setPaymentError(null);
//                 setPaymentSuccess(paymentMethod);
//             }
//         } catch (error) {
//             setPaymentError('Something went wrong, please try again.');
//             setPaymentSuccess(null);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <CardElement />
//             <button type="submit" disabled={!stripe}>
//                 Pay
//             </button>
//             {paymentError && <p style={{ color: 'red' }}>{paymentError}</p>}
//             {paymentSuccess && <p style={{ color: 'green' }}>Payment successful!</p>}
//         </form>
//     );
// };

// export default PaymentForm;
