
import './Booking.css'
import { db } from '../../config/firebase'
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Booking() {
    const navigate = useNavigate()
    const [Email, setEmail] = useState('')
    const [Bookings, setBookings] = useState('')
    const [UserBookings, setUserBookings] = useState([])
    const bookCollectionRef = collection(db, "user_hotel")

    useEffect(() => {
        setEmail(localStorage.getItem('userEmail'))
        let setBook = []
        async function getBookings() {
            if (Email !== '') {
                return;
            }
            const userId = localStorage.getItem('userEmail')

            const data = await getDocs(bookCollectionRef);
            setBookings(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            console.log(Bookings)
            for(var books= 0; books < Bookings.length; books++) {
                if(Bookings[books].userId === userId) {
                    setBook.push(Bookings[books])
                }
            }
            setUserBookings(setBook)
            console.log(UserBookings)
            
        }
        getBookings()

    })
    function viewHistory() {
        navigate('/booking_history')
    }

    return (
        <div className="booking-home">
            <div className="history-header">
                <button className="btn-view-history" onClick={viewHistory}>View History Bookings</button>
            </div>
            <div className="history-body">
                <div className="confirm-bookings">
                    <h2>Confirmed Booking</h2>
                    <div className="booking-info">
                        <div className="booking-date">
                            <p>From : 12/12/2022</p>
                            <p>to : 12/13/2022</p>

                        </div>
                        <div className="booking-data">
                            <p>Hotel Name : <b>my hotel</b></p>
                            <p>Adult &emsp;&emsp;&ensp;: <b>2</b></p>
                            <p>Child &emsp;&ensp;&nbsp;: <b>2</b></p>
                            <p>Booking Id &ensp;: <b>2hjjhdvs5448shjb</b></p>
                            <p>No of Days &ensp;: <b>2</b></p>
                        </div>
                        <div className="book-statuses">
                            <button disabled className="confirm-status">Confirmed</button>
                        </div>
                    </div>
                </div>
                <div className="panding-bookings">
                    <h2>Pending Booking</h2>
                    <div className="booking-info">
                        <div className="booking-date">
                            <p>From : 12/12/2022</p>
                            <p>to : 12/13/2022</p>

                        </div>
                        <div className="booking-data">
                            <p>Hotel Name : <b>my hotel</b></p>
                            <p>Adults &emsp;&emsp;&ensp;: <b>2</b></p>
                            <p>children &emsp;&ensp;&nbsp;: <b>2</b></p>
                            <p>Booking Id &ensp;: <b>2hjjhdvs5448shjb</b></p>
                            <p>No of Days &ensp;: <b>2</b></p>
                        </div>
                        <div className="book-statuses">
                            <button disabled className="panding-status">Pending</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Booking;