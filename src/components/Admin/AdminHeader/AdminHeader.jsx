import './AdminHeader.css';
import { useNavigate, NavLink } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';

function AdminHeader() {
    const navigate = useNavigate()
    const [username, setUsername]=useState('username')
    useEffect(() => {
        setUsername(localStorage.getItem('userEmail'))
    })
    function logout() {
        localStorage.removeItem('userId')
        localStorage.removeItem('userEmail')
        navigate('/')
    }
    return (
        <div className="admin-head">
            <div className="admin-headnavBar">
                <ul className="admin-nav">
                    <li><NavLink to={'/admin_home'} className="admin-headisActive" >Home</NavLink></li>
                    <li><NavLink to={'/bookings'} className="admin-headisActive">Bookings</NavLink></li>
                    <li><NavLink to={'/hotel'} className="admin-headisActive">Hotel</NavLink></li>
                </ul>
                <label className="admin-username">{username}</label>
                <label className="admin-logout" onClick={logout}>Logout</label>
            </div>
        </div>
    )

}

export default AdminHeader;