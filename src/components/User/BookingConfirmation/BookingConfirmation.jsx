import confirm from './BookingConfirmation.module.css';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { db } from '../../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import PopUpBook from '../PopUpBook/PopUpBook';
import './payment.css'
import { async } from '@firebase/util';

function BookingConfirmation() {
    const navigate = useNavigate()
    const { state } = useLocation();
    const { data, hotelData } = state;
    const userCollectionRef = collection(db, 'user_hotel')

    const [BookingInformation, setBookingInformation] = useState({})
    const [HotelData, setHotelData] = useState({})

    const [guestName, setguestName] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [check, setCheck] = useState(false);
    const [expDate, setexpDate] = useState('');
    const [cardNumber, setcardNumber] = useState('');
    const [cardName, setcardName] = useState('');
    const [cvv, setcvv] = useState('');


    const [ButtonPopup, setButtonPopup] = useState(false);


    useEffect(() => {

        setBookingInformation(data)
        setHotelData(hotelData)
        console.log(BookingInformation)
        //console.log(HotelData)

    })

    async function confirmCheckIn() {

        const userId = 'H31RdXp2hmHio2k0YQxj'
        console.log(guestName, paymentMethod, check)
        if (!guestName) return alert('Please enter guest name')
        if (!paymentMethod) return alert('Please select payment method')
        if (!check) return alert('Please accept our term and conditions')

        if (paymentMethod === 'Pay via PayPal') return setButtonPopup(true)
        if (paymentMethod === 'Pay by Card (Stripe)') return setButtonPopup(true)
        if (paymentMethod === 'Pay on Arrival') {
            await addDoc(userCollectionRef, {
                hotetId: HotelData.id, paymentMethod: paymentMethod, checkIn: BookingInformation.checkIn, checkOut: BookingInformation.checkOut,
                adult: BookingInformation.adult, child: BookingInformation.child, totalPrice: BookingInformation.totalPrice, userId: userId
            })
                .then(() => {
                    alert('Sussessfully Booked!')
                    navigate('/')
                })
        }
    }

    async function sendPayment() {
        const userId = 'H31RdXp2hmHio2k0YQxj'

        await addDoc(userCollectionRef, {
            hotetId: HotelData.id, paymentMethod: paymentMethod, checkIn: BookingInformation.checkIn, checkOut: BookingInformation.checkOut,
            adult: BookingInformation.adult, child: BookingInformation.child, totalPrice: BookingInformation.totalPrice, userId: userId, cardExpDate: expDate,
            cardNumber: cardNumber, cardName: cardName, cvv: cvv
        })
            .then(() => {
                alert('Sussessfully Booked!')
                navigate('/');
            })
    }

    let popupPayment = (
        <div className='popupPayment'>
            <h2>Payment</h2>

            <div className="form-group paymet-pop">
                <label className='payment-label'>Name Holder</label>
                <input type="text" className="control-form payment-control-form" placeholder="DJ Makhenzi" onChange={(e) => setexpDate(e.target.value)} />
            </div>
            <div className="form-group paymet-pop">
                <label className='payment-label'>Card Number</label>
                <input type="number" className="control-form" placeholder="5555-5555-5555-4444" maxlength='15' onChange={(e) => setcardNumber(e.target.value)} />
            </div>
            <div className="form-group paymet-pop">
                <label className='payment-label'>Exp Date</label>
                <input type="text" className="control-form" placeholder="MM/YYYY" maxlength='7' onChange={(e) => setcardName(e.target.value)} />
            </div>
            <div className="form-group paymet-pop">
                <label className='payment-label'>CVV</label>
                <input type="number" className="control-form" placeholder="332" maxlength="3" onChange={(e) => setcvv(e.target.value)} />
            </div>

            <button className="btn btn-primary payment-btn" onClick={sendPayment}>Cormfirm</button>
        </div>
    )


    let confirmPopUp = (
        <div className={confirm.confirm}>
            <div className={confirm.report}>
                <h2>Booking Confirmation</h2>
                <div className={confirm.card}>
                    <h4>Booking Date</h4>
                    <div className={confirm.bookingDate}>
                        <label>check-In  &emsp; &ensp;<span className={confirm.dateTime}>{BookingInformation.checkIn}</span></label>
                        <label>check-Out &emsp;<span className={confirm.dateTime}>{BookingInformation.checkOut}</span></label>
                    </div>
                </div>

                <div className={confirm.card}>
                    <h4> #1 Accommodation</h4>
                    <div className={confirm.accommodation}>
                        <labe>Accommodation Type: {HotelData.roomType}</labe>
                        <div className={confirm.formGroup}>
                            <label>Full Guest Name</label>
                            <input type="text" name="guestName" className={confirm.controlForm} onChange={(e) => setguestName(e.target.value)} />
                        </div>
                    </div>
                </div>

                <div className={confirm.card}>
                    <h4>Price Breakdown</h4>
                    <table>
                        <tbody>
                            <tr>
                                <td>#1 {hotelData.roomType}</td>
                                <td>R {hotelData.price} </td>
                            </tr>
                            <tr>
                                <td>Number of Nights</td>
                                <td>{BookingInformation.night}</td>
                            </tr>
                            <tr>
                                <td><b>Total</b></td>
                                <td><b>R {BookingInformation.totalPrice}</b></td>
                            </tr>
                        </tbody>

                    </table>
                </div>

                <div className={confirm.card}>
                    <h4>Payment Method</h4>
                    <div className={confirm.paymentMethod}>
                        <div className={confirm.formGroup}>
                            <lable className={confirm.radioform}><input type="radio" onChange={(e) => setPaymentMethod(e.target.value)} name="paymentMethod" className={confirm.controlForm} value="Pay on Arrival" /><span className={confirm.pay}>Pay on Arrival</span></lable>
                            <label className={confirm.paylabel}>Pay with cash on arrival.</label>
                        </div>

                        <div className={confirm.formGroup}>
                            <lable className={confirm.radioform}><input type="radio" onChange={(e) => setPaymentMethod(e.target.value)} name="paymentMethod" className={confirm.controlForm} value="Pay via PayPal" /><span className={confirm.pay}>Pay via PayPal</span></lable>
                            <label className={confirm.paylabel}>Visa, MasterCard, Discover, or American Express. Use the card number 5555555555554444 with CVC 123 and a valid expiration date to test a payment.</label>
                        </div>

                        <div className={confirm.formGroup}>
                            <lable className={confirm.radioform}><input type="radio" onChange={(e) => setPaymentMethod(e.target.value)} name="paymentMethod" className={confirm.controlForm} value="Pay by Card (Stripe)" /><span className={confirm.pay}>Pay by Card (Stripe)</span></lable>
                            <label className={confirm.paylabel}>Pay with your credit card via Stripe. Use the card number 4242424242424242 with CVC 123, a valid expiration date and random 5-digit ZIP-code to test a payment.</label>
                        </div>
                    </div>

                </div>
                <div className={confirm.check}>
                    <input type="checkbox" name="check" className={confirm.checkBox} onChange={(e) => setCheck(e.target.value)} />
                    <label className={confirm.checkLabel}> I've read and accept the <navLink></navLink></label>
                </div>
            </div>
            <button type="button" className={confirm.submitAvailability} onClick={confirmCheckIn}>Check Now</button>

            <PopUpBook trigger={ButtonPopup} setTrigger={setButtonPopup}>
                {popupPayment}
            </PopUpBook>
        </div>
    )

    return (
        <div className={confirm.confirm}>
            {confirmPopUp}
        </div>
    )
}

export default BookingConfirmation;