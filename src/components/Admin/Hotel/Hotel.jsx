import './Hotel.css';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../AdminHeader/AdminHeader';
import { useState } from 'react';
import Data from '../../User/Data/Data'

function Rooms() {
    const navigate = useNavigate()
    const [Rooms] = useState(Data)

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
                    {Rooms.map((room, xid) => (
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