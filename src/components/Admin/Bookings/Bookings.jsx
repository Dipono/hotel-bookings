import './Bookings.css';
import AdminHeader from '../AdminHeader/AdminHeader';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';

function Bookings() {
    const bookingsRef = collection(db, 'user_hotel')
    const [Bookings, setBookings] = useState([])

    useEffect(() => {
        const getBookings = async () => {
            const data = await getDocs(bookingsRef);
            setBookings(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            console.log(Bookings)
        }

        getBookings()
    })
    return (
        <div className="bookings">
            <AdminHeader></AdminHeader>
            <div className="bookings-container">
                <div className="admin_bookings">
                    <div className="table-admin-bookings">
                        <table>
                            <thead>
                                <th>Guest Name</th>
                                <th>Check-in Date</th>
                                <th>Check-out Date</th>
                                <th>Total Price</th>
                                <th>Payment Method</th>
                            </thead>
                            <tbody>
                                {Bookings.map((booking, xid) => (
                                    <tr key={xid}>
                                        <td>{booking.cardExpDate}</td>
                                        <td>{booking.checkIn}</td>
                                        <td>{booking.checkOut}</td>
                                        <td>{booking.totalPrice}</td>
                                        <td>{booking.paymentMethod}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Bookings;