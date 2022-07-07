import confirm from './BookingConfirmation.module.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function BookingConfirmation() {
    const { state } = useLocation();
    const { data, hotelData } = state;

    const [BookingInformation, setBookingInformation] = useState({})
    const [HotelData, setHotelData] = useState({})

    const [UserData, setUserData] = useState({
        guestName: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    useEffect(() => {

        setBookingInformation(data)
        setHotelData(hotelData)
        console.log(BookingInformation)
        console.log(HotelData)

    })

    function confirmCheckIn() {

    }



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
                        <labe>Accommodation Type: Standard Single Room</labe>
                        <div className={confirm.formGroup}>
                            <label>Full Guest Name</label>
                            <input type="text" name="guestName" className={confirm.controlForm} onClick={UserData.guestName} onChange={handleChange} />
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
                            <lable className={confirm.radioform}><input type="radio" name="paymentMethod" className={confirm.controlForm} value="Pay on Arrival" /><span className={confirm.pay}>Pay on Arrival</span></lable>
                            <label className={confirm.paylabel}>Pay with cash on arrival.</label>
                        </div>

                        <div className={confirm.formGroup}>
                            <lable className={confirm.radioform}><input type="radio" name="paymentMethod" className={confirm.controlForm} value="Pay via PayPal" /><span className={confirm.pay}>Pay via PayPal</span></lable>
                            <label className={confirm.paylabel}>Visa, MasterCard, Discover, or American Express. Use the card number 5555555555554444 with CVC 123 and a valid expiration date to test a payment.</label>
                        </div>

                        <div className={confirm.formGroup}>
                            <lable className={confirm.radioform}><input type="radio" name="paymentMethod" className={confirm.controlForm} value="Pay by Card (Stripe)" /><span className={confirm.pay}>Pay by Card (Stripe)</span></lable>
                            <label className={confirm.paylabel}>Pay with your credit card via Stripe. Use the card number 4242424242424242 with CVC 123, a valid expiration date and random 5-digit ZIP-code to test a payment.</label>
                        </div>
                    </div>

                </div>
                <div className={confirm.check}>
                    <input type="checkbox" name="check" className={confirm.checkBox} />
                    <label className={confirm.checkLabel}> I've read and accept the <navLink></navLink></label>
                </div>
            </div>
            <button type="button" className={confirm.submitAvailability} onClick={confirmCheckIn}>Check Now</button>
        </div>
    )

    return (
        <div className={confirm.confirm}>
            {confirmPopUp}
        </div>
    )
}

export default BookingConfirmation;