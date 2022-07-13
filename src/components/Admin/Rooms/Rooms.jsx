import './Rooms.css';
import { useLocation } from 'react-router-dom';
import AdminHeader from '../AdminHeader/AdminHeader';
import { useEffect, useState } from 'react';

function Rooms() {

    const { state } = useLocation();
    const { data } = state;
    const [HotelData] = useState(data)
    const [Gallary, setGallery] = useState([])
    useEffect(() => {
        console.log(HotelData)
        setGallery(HotelData.gallary)
    })

    return (
        <div className="rooms">
            <AdminHeader></AdminHeader>
            <div className="rooms-container">

                <div className="hotel-gallary">
                    {Gallary.map((images, xid) => (
                        <div className="hotel-gallary-container" key={xid}>
                            <img src={images} alt={HotelData.name} />
                        </div>
                    ))}

                </div>

                <div className="hotel-info">
                    <div className="hotel-info-details">
                        <h2>Details</h2>
                        <div className="hotel-info-desc">
                            <p>{HotelData.description}</p><br />
                            <p>{HotelData.descriptive}</p>

                        </div>
                    </div>
                    <div className="hotel-info-spacks">
                        <h2>Info</h2>
                        <div className="hotel-info-spacks-details">
                            <div className="hotel-info-label">
                                <p>Price  </p>
                                <p className="hotel-info-label-data">: R{HotelData.price}</p>
                            </div>
                            <div className="hotel-info-label">
                                <p>Size </p>
                                <p className="hotel-info-label-data">: {HotelData.size}</p>
                            </div>
                            <div className="hotel-info-label">
                                <p>amenities </p>
                                <p className="hotel-info-label-data">: {HotelData.amenities}</p>
                            </div>
                            <div className="hotel-info-label">
                                <p>view</p>
                                <p className="hotel-info-label-data">: {HotelData.view}</p>
                            </div>
                            <div className="hotel-info-label">
                                <p>bed Type</p>
                                <p className="hotel-info-label-data">: {HotelData.bedType}</p>
                            </div>
                            <div className="hotel-info-label">
                                <p>categories</p>
                                <p className="hotel-info-label-data">: {HotelData.categories}</p>
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