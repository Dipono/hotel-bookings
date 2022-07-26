import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import './AddHotel.css';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../AdminHeader/AdminHeader';
import { useState } from 'react';
import { storage, db } from '../../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { ProgressBar } from 'react-bootstrap';

function AddHotel() {
    const navigate = useNavigate();
    const userCollectionRef = collection(db, 'hotel')
    const [AddHotel, setAddHotel] = useState({
        hotel: ``,
        name: '',
        description: '',
        city: '',
        province: '',
        town: '',
        code: '',
        price: '',
        amenities: '',
        view: '',
        size: '',
        descriptive: '',
        capacity: '',
        gallary: [],
        mapLink: ''
    })

    const [Duration, setDuration] = useState('')
    const [BedType, setBedType] = useState('')
    const [RoomType, setRoomType] = useState('')
    const [Category, setCategory] = useState('')


    const [hotelImage, setHotelImage] = useState(null)

    const [UploadImages] = useState([])

    const [FileImage, setFileImage] = useState(null)
    const handleimage = (e) => {
        setFileImage(e.target.files[0]);
    }

    const fileImage = '';

    const [file, setfile] = useState(null);
    const onInputChange = (e) => {
        setfile(e.target.files[0]);
        uploadImage(file)
    }

    const [progress, setprogress] = useState(0)
    const [progressImage, setprogressImage] = useState(0)

    const handleChanges = (e) => {
        const { name, value } = e.target;
        setAddHotel(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function uploadImage(file) {
        if (!file) return;
        const storageRef = ref(storage, `/assets/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed", (snapshot) => {
            const prog = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
            setprogressImage(prog);
        },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then(url => { return setHotelImage(url) })
            }
        );
    }

    let [NoImage, setNoImage] = useState(0);

    function addImage() {
        //UploadImages.push(FileImage)
        createGallery(FileImage)

    }

    function createGallery(image) {
        if (!image) return;
        const storageRef = ref(storage, `/assets/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.on("state_changed", (snapshot) => {
            const prog = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
            setprogress(prog);
        },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then(url => {
                        setNoImage(UploadImages.length + 1)
                        return UploadImages.push(url);

                    })
            }
        );
    }

    async function addHotel() {

        if (!AddHotel.name || !AddHotel.description || !AddHotel.price || !Duration || !AddHotel.amenities || !AddHotel.view || !AddHotel.size
            || !BedType || !RoomType || !Category || !AddHotel.descriptive || !AddHotel.capacity || !AddHotel.province || !AddHotel.city || !AddHotel.town
            || !AddHotel.code) {
            return alert('No field should be left blank')
        }
        const link = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13228.578755684342!2d18.3795401!3d-34.0144968!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8e9e3a3e89d178e1!2sVida%20Nova%20Retreat!5e0!3m2!1sen!2sza!4v1656510121019!5m2!1sen!2sza';

        await addDoc(userCollectionRef, {
            hotel: hotelImage, name: AddHotel.name, description: AddHotel.description, price: AddHotel.price,
            duration: Duration, amenities: AddHotel.amenities, view: AddHotel.view, size: AddHotel.size, bedType: BedType, roomType: RoomType,
            categories: Category, descriptive: AddHotel.descriptive, capacity: AddHotel.capacity, gallary: UploadImages, province: AddHotel.province,
            city: AddHotel.city, town: AddHotel.town, code: AddHotel.code, link:link
        })
        alert('submitted successfully')
        return navigate('/hotel')
    }





    return (
        <div className="add_hotel">
            <AdminHeader></AdminHeader>
            <div className="add_hotel-container">
                <div className="add_hotel-hotelDetails">
                    <h4>Details About Hotel</h4>
                    <div className="form-group">
                        <label>Hotel Image <span className='require'>*</span></label>
                        <input type="file" className="control-form" hidden name='hotel' id="add-control-hotelImage" value={AddHotel.hotel} onChange={onInputChange} />
                        <label for="add-control-hotelImage" className='btn btn-success uploadImage'>Click To Upload Hotel Image</label>
                        <div className='add-progress-bar'>
                            <ProgressBar now={progressImage} id='add-prog' />
                            <p id='add-progress-bar'>{progressImage} %</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Hotel Name <span className='require'>*</span></label>
                        <input type="text" className="control-form" placeholder="Name of Hotel" name="name" value={AddHotel.name} onChange={handleChanges} />
                    </div>
                    <div className="form-group">
                        <label>Category <span className='require'>*</span></label>
                        <select className="select-form" onChange={(e) => { setCategory(e.target.value); }} >
                            <option value='' className="control-form">---Select---</option>
                            <option value='Hotel' className="control-form">Hotel</option>
                            <option value='Apartment' className="control-form">Apartment</option>
                            <option value='Motel' className="control-form">Motel</option>
                            <option value='Resorts' className="control-form">Resorts</option>
                            <option value='Suite Hotels' className="control-form">Suite Hotels</option>
                        </select>
                        {/* <input type="text" className="control-form" placeholder="eg Hotel, Apartment, Motel, etc" name="categories" value={AddHotel.categories} onChange={handleChanges} /> */}
                    </div>
                    <div className="form-group">
                        <label>Price <span className='require'>*</span></label>
                        <input type="number" className="control-form" name="price" value={AddHotel.price} onChange={handleChanges} />
                    </div>

                    <div className="form-group">
                        <fieldset><label>Address <span className='require'>*</span></label>
                            <span className="add-address">
                                <input type="text" className="control-form" placeholder="Province" name="province" value={AddHotel.province} onChange={handleChanges} /> &emsp;
                                <input type="text" className="control-form" placeholder="City" name="city" value={AddHotel.city} onChange={handleChanges} />&emsp;
                                <input type="text" className="control-form" placeholder="Town" name="town" value={AddHotel.town} onChange={handleChanges} />&emsp;
                                <input type="number" className="control-form" placeholder="Code" name="code" value={AddHotel.code} onChange={handleChanges} />
                            </span>
                        </fieldset>
                    </div>

                    <div className="form-group">
                        <label>Description <span className='require'>*</span></label>
                        <textarea className="control-form" placeholder="Aboutt location, near to hospital, distance from malls, etc" name="description" value={AddHotel.description} onChange={handleChanges}></textarea>
                    </div>
                </div>

                <div className="add_hotel-hotelDetails">
                    <h4>Details About Room</h4>
                    <div className="form-group">
                        <label>View <span className='require'>*</span></label>
                        <input type="text" className="control-form" placeholder="eg Swiming Pool, Ocean, Table Mountain" name="view" value={AddHotel.view} onChange={handleChanges} />
                    </div>
                    <div className="form-group">
                        <label>Features/Amenities <span className='require'>*</span></label>
                        <input type="text" className="control-form" placeholder="Plasma TV, Cable, Wifi, etc" name="amenities" value={AddHotel.amenities} onChange={handleChanges} />
                    </div>
                    <div className="form-group">
                        <label>Duration <span className='require'>*</span></label>
                        <select className="select-form" onChange={(e) => { setDuration(e.target.value); }} >
                            <option value='' className="control-form" selected>---Select---</option>
                            <option value='Per Night' className="control-form">Per Night</option>
                            <option value='Daily' className="control-form">Daily</option>
                            <option value='Monthly' className="control-form">Monthly</option>
                            <option value='Annually' className="control-form">Annually</option>
                        </select>
                        {/* <input type="text" className="control-form" name="duration" value={AddHotel.duration}  /> */}
                    </div>
                    <div className="form-group">
                        <label>Size <span className='require'>*</span></label>
                        <input type="text" className="control-form" name="size" value={AddHotel.size} onChange={handleChanges} />
                    </div>
                    <div className="form-group">
                        <label>Bed Type <span className='require'>*</span></label>
                        <select className="select-form" onChange={(e) => { setBedType(e.target.value); }} >
                            <option value='' className="control-form" selected>---Select---</option>
                            <option value='Single Bed' className="control-form">Single Bed</option>
                            <option value='Double Bed' className="control-form">Double Bed</option>
                            <option value='Triple Bed' className="control-form">Triple Bed</option>
                            <option value='Quad Bed' className="control-form">Quad Bed</option>
                            <option value='Queen Bed' className="control-form">Queen Bed</option>
                            <option value='Twin Bed' className="control-form">Twin Bed</option>
                            <option value='Hollywood Twin Bed' className="control-form">Hollywood Twin Bed</option>
                            <option value='Double-double Bed' className="control-form">Double-double Bed</option>
                        </select>
                        {/* <input type="text" className="control-form" placeholder="eg Queen bed" name="bedType" value={AddHotel.bedType} onChange={handleChanges} /> */}
                    </div>
                    <div className="form-group">
                        <label>Room Type <span className='require'>*</span></label>
                        <select className="select-form" onChange={(e) => { setRoomType(e.target.value); }}>
                            <option value='' className="control-form" selected>---Select---</option>
                            <option value='Standard Single Room'  className="control-form">Standard Single Room</option>
                            <option value='Standard Double Room' className="control-form">Standard Double Room</option>
                            <option value='Hollywood Twin Room' className="control-form">Hollywood Twin Room</option>
                            <option value='Studio Room' className="control-form">Studio Room</option>
                            <option value='Suite / Executive Suite' className="control-form">Suite / Executive Suite</option>
                            <option value='Mini Suite or Junior Suite' className="control-form">Mini Suite or Junior Suite</option>
                            <option value='President Suite | Presidential Suite' className="control-form">President Suite | Presidential Suite</option>
                            <option value='Twin Bed' className="control-form">Twin Bed</option>
                            <option value='Murphy Room' className="control-form">Murphy Room</option>
                            <option value='Accessible Room / Disabled Room' className="control-form">Accessible Room / Disabled Room</option>
                        </select>
                        {/* <input type="text" className="control-form" placeholder="standard single room, suit" name="roomType" value={AddHotel.roomType} onChange={handleChanges} /> */}
                    </div>
                    <div className="form-group">
                        <label>Capacity <span className='require'>*</span></label>
                        <input type="number" className="control-form" name="capacity" value={AddHotel.capacity} onChange={handleChanges} />
                    </div>
                    <div className="form-group">
                        <label>Description <span className='require'>*</span></label>
                        <textarea className="control-form" placeholder="How can the room or hotel reach people's need eg Superior Double Rooms in our hotel are perfectly equipped for traveling couples or friends. or Retreat provides accommodations with a restaurant, free private parking, an outdoor swimming pool and a bar" name="descriptive" value={AddHotel.descriptive} onChange={handleChanges}></textarea>
                    </div>
                    <div className="form-group">
                        <label>Hotel Images</label>
                        <div className='uploadImage'>
                            <div>
                                <input type="file" id="add-control-form" hidden name='FileImage' onChange={handleimage} value={fileImage} />
                                <label for="add-control-form" className='btn btn-primary uploadImage'>Click To Upload Image</label>
                            </div>
                            <button className="add-control-button" onClick={addImage}>Add to Gallary</button>
                        </div>
                        <div className='add-progress-bar'>
                            <ProgressBar now={progress} id='add-prog' />
                            <p id='add-progress-bar'>{progress} %</p>
                        </div>

                        <p>image uploaded {NoImage}</p>
                    </div>
                </div>
                <div className='add-btn-submit'>
                    <button className="control-form add-submit" onClick={addHotel}>Submit</button>
                </div>


            </div>
        </div>
    )

}

export default AddHotel;