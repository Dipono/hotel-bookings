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
        location: '',
        price: '',
        duration: '',
        amenities: '',
        view: '',
        size: '',
        bedType: '',
        roomType: '',
        categories: '',
        descriptive: '',
        capacity: '',
        gallary: []
    })

    const [hotelImage, setHotelImage] = useState(null)

    const [UploadImages] = useState([])
    //const [imageUpload, setimageUpload] = useState(null)

    const [FileImage, setFileImage] = useState(null)
    const handleimage = (e) => {
        setFileImage(e.target.files[0]);
    }

    const fileImage = '';

    const duration = [{ name: 'Per Night' }, { name: 'Per Day' }]

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

        if (!AddHotel.name || !AddHotel.description || !AddHotel.location || !AddHotel.price || !AddHotel.duration || !AddHotel.amenities || !AddHotel.view || !AddHotel.size
            || !AddHotel.bedType || !AddHotel.roomType || !AddHotel.categories || !AddHotel.descriptive || !AddHotel.capacity) {
                return alert('No field should be left blank')
        }

        await addDoc(userCollectionRef, {
            hotel: hotelImage, name: AddHotel.name, description: AddHotel.description, location: AddHotel.location, price: AddHotel.price,
            duration: AddHotel.duration, amenities: AddHotel.amenities, view: AddHotel.view, size: AddHotel.size, bedType: AddHotel.bedType, roomType: AddHotel.roomType,
            categories: AddHotel.categories, descriptive: AddHotel.descriptive, capacity: AddHotel.capacity, gallary: UploadImages
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
                        <input type="text" className="control-form" placeholder="eg Hotel, Apartment, Motel, etc" name="categories" value={AddHotel.categories} onChange={handleChanges} />
                    </div>
                    <div className="form-group">
                        <label>Price <span className='require'>*</span></label>
                        <input type="number" className="control-form" name="price" value={AddHotel.price} onChange={handleChanges} />
                    </div>

                    <div className="form-group">
                        <label>location <span className='require'>*</span></label>
                        <input type="text" className="control-form" placeholder="Province, City or/and Town" name="location" value={AddHotel.location} onChange={handleChanges} />
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
                        <input type="text" className="control-form" name="duration" value={AddHotel.duration} onChange={handleChanges} />
                    </div>
                    <div className="form-group">
                        <label>Size <span className='require'>*</span></label>
                        <input type="text" className="control-form" name="size" value={AddHotel.size} onChange={handleChanges} />
                    </div>
                    <div className="form-group">
                        <label>Bed Type <span className='require'>*</span></label>
                        <input type="text" className="control-form" placeholder="eg Queen bed" name="bedType" value={AddHotel.bedType} onChange={handleChanges} />
                    </div>
                    <div className="form-group">
                        <label>Room Type <span className='require'>*</span></label>
                        <input type="text" className="control-form" placeholder="standard single room, suit" name="roomType" value={AddHotel.roomType} onChange={handleChanges} />
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