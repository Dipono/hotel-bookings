
import './Booking_History.css';
import { useNavigate } from 'react-router-dom';

function Booking_History() {
    const navigate = useNavigate()

    function viewBookings() {
        navigate('/booking')
    }

    return (
        <div className="booking-history">
            <div className="booking-history-header">
                <button className="btn-view-history" onClick={viewBookings}>View History Bookings</button>
            </div>
            <div className='booking-history-body'>
                <table className=''>
                    <thead>
                        <tr>
                            <th>Booking Reference</th>
                            <th>Checkin Date</th>
                            <th>Checkout Date</th>
                            <th>Hotel Name</th>
                            <th>Adult</th>
                            <th>Child</th>
                            <th>Guest Name</th>
                            <th>Total Payment</th>
                            <th>Type of Payment</th>
                        </tr>

                    </thead>
                </table>
            </div>
        </div>
    )
}

export default Booking_History;