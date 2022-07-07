import './AdminHeader.css';
import { NavLink } from 'react-router-dom'

function AdminHeader() {

    return (
        <div className="admin-head">
            <div className="admin-headnavBar">
                <ul className="admin-nav">
                    <li><NavLink to={'#'} className="admin-headisActive" >Home</NavLink></li>
                    <li><NavLink to={'#'} className="admin-headisActive">Bookings</NavLink></li>
                    <li><NavLink to={'#'} className="admin-headisActive">Rooms</NavLink></li>
                </ul>
                <label className="admin-username">Username</label>
                <label className="admin-logout">Logout</label>
            </div>
        </div>
    )

}

export default AdminHeader;