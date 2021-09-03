import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Context } from '../Context.js';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import loadingGif from '../Res/loading.gif';

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

const PaymentForm = () => {
    const { setCartData, cartTotal, setCartTotal } = useContext(Context);
    const [success, setSuccess] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [location, setLocation] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })

        if(!error){
            try {
                const { id } = paymentMethod;
                const response = await axios.post('http://localhost:4000/payment', {
                    amount: 1000,
                    id
                })
    
                if(response.data.success && firstName && lastName && location && dob){
                    setSuccess(true); 
                    setCartData([]);
                    setCartTotal(0);

                    setTimeout(() => {
                        history.push('/');
                    }, 6000);
                } else {
                    alert('Missing input values');
                }   
                
            } catch (error){
                console.log('Error', error);
            }
        } else {
            console.log(error.message);
        }
    }

    return (
        //react 'fragment'; group child elements without adding extra nodes to DOM; slightly better performance
        <>
            {
                !success ?
                <form onSubmit={handleSubmit} className='checkout__form col'>
                    <div className='checkout__grid'>
                        <div className='col'>
                            <label>&ndash; First Name &ndash;</label>
                            <input placeholder='First name...' value={firstName} onChange={e => setFirstName(e.target.value)}/>
                        </div>

                        <div className='col'>
                            <label>&ndash; Surname &ndash;</label>
                            <input placeholder='Surname...' value={lastName} onChange={e => setLastName(e.target.value)}/>
                        </div>

                        <div className='col'>
                            <label>&ndash; Date Of Birth &ndash;</label>
                            <input placeholder='DD/MM/YYYY...' type='date' value={dob} onChange={e => setDob(e.target.value)} className='input__date'/>
                        </div>

                        <div className='col'>
                            <label>&ndash; Country &ndash;</label>
                            <input placeholder='Country...' value={location} onChange={e => setLocation(e.target.value)}/>
                        </div>
                    </div>

                    <fieldset className='FormGroup'>
                        <div className='FormRow'>
                            <CardElement options={CARD_OPTIONS}/>
                        </div>
                    </fieldset>

                    <button>Pay</button>
                </form> :
                <div className='checkout__msg-cont col'>
                    <h1>Payment Successfully Completed! Thank you for Shopping at Itunes Ecommerce!</h1>
                    
                    <h2>You will now be automatically re-directed to the Home Page...</h2>
                    <img src={loadingGif} alt='loading-gif'/>
                </div>
            }  
        </>
    )
}

export default PaymentForm;