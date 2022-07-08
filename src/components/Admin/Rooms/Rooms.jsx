import './Rooms.css';
import { NavLink, useLocation } from 'react-router-dom';
import AdminHeader from '../AdminHeader/AdminHeader';
import { useEffect, useState } from 'react';

function Rooms() {

    const { state } = useLocation();
    const { data } = state;
    const [HotelData] = useState(data)
    const [Gallary, setGallery] = useState([])
    useEffect(() => {
        //console.log(Rooms)
        setGallery(HotelData.gallary)
        console.log(HotelData)
    })

    return (
        <div className="rooms">
            <AdminHeader></AdminHeader>
            <div className="rooms-container">

                <div className="hotel-gallary">
                    {Gallary.map((images, xid) => (
                        <div className="hotel-gallary-container" key={xid}>
                            <img src={images.image} alt="" />
                        </div>
                    ))}

                </div>

                <div className="hotel-info">
                    <div className="hotel-info-details">
                        <h2>Details</h2>
                        <div className="hotel-info-desc">
                            <p>{HotelData.description}</p><br />
                            <p>full description</p>

                        </div>
                    </div>
                    <div className="hotel-info-spacks">
                        <h2>Info</h2>
                        <div className="hotel-info-spacks-details">
                            <div className="hotel-info-label">
                                <p>Price  </p>
                                <p>: R{HotelData.price}</p>
                            </div>
                            <div className="hotel-info-label">
                                <p>Size </p>
                                <p>: 125heiht</p>
                            </div>
                            <div className="hotel-info-label">
                                <p>amenities </p>
                                <p>: pool,etc</p>
                            </div>
                            <div className="hotel-info-label">
                                <p>view</p>
                                <p>: swimming pool</p>
                            </div>
                            <div className="hotel-info-label">
                                <p>size</p>
                                <p>: 20m²</p>
                            </div>
                            <div className="hotel-info-label">
                                <p>bedType</p>
                                <p>: queen bed</p>
                            </div>
                            <div className="hotel-info-label">
                                <p>categories</p>
                                <p>: standard single room</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="rooms-button">
                    <button type="button" className='rooms-button-delete'>Delete Room</button>
                    <button type="button" className='rooms-button-Edit'>Update Room</button>
                </div>
            </div>
        </div>
    )

}

export default Rooms;