
import './AdminHome.css';
import AdminHader from '../AdminHeader/AdminHeader';

function AdminHome() {

    return (
        <div className="admin-home">
            <AdminHader></AdminHader>
            <div className="admin-body">
                <div className="admin-rooms">
                    <div className="admin-form-group">
                        <label className="label">Rooms Booked</label>
                        <label className="value">0</label>
                    </div>
                    <div className="admin-form-group">
                        <label className="label">Available Rooms</label>
                        <label className="value">0</label>
                    </div>
                </div>

                <div className="available-rooms">
                    <h2>AVAILABLE ROOM BY TYPE</h2>
                    <div className="admin-form-group">
                        <label className="label">Apartment</label>
                        <label className="value">0</label>
                    </div>
                    <div className="admin-form-group">
                        <label className="label">Double Room</label>
                        <label className="value">0</label>
                    </div>
                    <div className="admin-form-group">
                        <label className="label">Family Room</label>
                        <label className="value">0</label>
                    </div>
                    <div className="admin-form-group">
                        <label className="label">Single</label>
                        <label className="value">0</label>
                    </div>
                    <div className="admin-form-group">
                        <label className="label">Studio</label>
                        <label className="value">0</label>
                    </div>
                </div>

                <div className="guests">
                <h2>GUESTS</h2>
                <div className="admin-form-group">
                        <label className="label">Adults</label>
                        <label className="value">0</label>
                    </div>
                    <div className="admin-form-group">
                        <label className="label">Children</label>
                        <label className="value">0</label>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default AdminHome;