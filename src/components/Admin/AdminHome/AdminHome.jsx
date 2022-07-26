
import './AdminHome.css';
import AdminHader from '../AdminHeader/AdminHeader';
// import { db } from '../../config/firebase'
// import { collection, getDocs } from 'firebase/firestore';
import { useState,useEffect } from 'react';
//import bookings from '../../Data/Bookings';
import {collection,getDocs} from 'firebase/firestore';
import {db} from '../../config/firebase';
function AdminHome() {

    const [Bookings, setBookings]=useState([])
    const [RoomBooked, setRoomBooked]=useState(0)
    const [RoomAvailable, setRoomAvailable]=useState(0)
    const [Apartment, setApartment]=useState(0)
    const [DoubleRoom, setDoubleRoom]=useState(0)
    const [Adults, setAdults]=useState(0)
    const [Children, setChildren]=useState(0)

    

     const bookingsRef = collection(db,'user_hotel')
    useEffect(()=>{
        //setBookings(bookings)
        
        const getBookings = async () => {
             const data = await getDocs(bookingsRef);
             setBookings(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            console.log(Bookings)
            let booked = 0;
            var today = new Date();
            var date = today.getFullYear()+'-'+ ('0' + (today.getMonth()+1)).slice(-2)  +'-'+today.getDate();
            for(var booking = 0; booking< Bookings.length; booking++){
                
                if(Bookings[booking].checkIn >= date){
                    booked++
                }
            } 

            setRoomBooked(booked)
            console.log(RoomBooked)
        }
        getBookings();
    })

    return (
        <div className="admin-home">
            <AdminHader></AdminHader>
            <div className="admin-body">
                <div className="admin-rooms">
                    <div className="admin-form-group">
                        <label className="label">Rooms Booked</label>
                        <label className="value">{RoomBooked}</label>
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