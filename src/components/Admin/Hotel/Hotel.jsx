import './Hotel.css';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../AdminHeader/AdminHeader';
import { useState, useEffect } from 'react';
//import Data from '../../User/Data/Data'
import { db } from '../../config/firebase'
import { collection, getDocs } from 'firebase/firestore';

function Rooms() {
    
    const navigate = useNavigate()
    //const [Rooms] = useState(Data)

    const [Hotel, setHotel] = useState([])
    const usersCollectionRef = collection(db, "hotel")
    useEffect(() => {
        const getHotels = async () => {
            const data = await getDocs(usersCollectionRef);
            setHotel(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getHotels();
    }, []);

    function add_hotel(){
        navigate('/add_hotel')
    }
    
    function view_rooms(features){
        navigate('/rooms', {state: {data:features}})
    }
    return (
        <div className="rooms">
            <AdminHeader></AdminHeader>
            <div className="rooms-container">
                <div className="add-room">
                    <button className="add-room-btn" onClick={add_hotel} >Add Hotel</button>
                </div>
                <div className='display-rooms'>
                    {Hotel.map((room, xid) => (
                        <div className="room-image" key={xid}>
                            <img src={room.hotel} alt='' />
                            <button className="view-room" onClick={() => view_rooms(room)} >View Rooms / Features</button>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )

}

export default Rooms;