import {ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import './AddHotel.css';
import { NavLink } from 'react-router-dom';
import AdminHeader from '../AdminHeader/AdminHeader';
import { useState } from 'react';
import {storage} from '../../config/firebase';

function AddHotel() {

    const [AddHotel, setAddHotel] = useState({
        hotel: '',
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

    const [UploadImages, setUploadImages] = useState([])
    const [imageUpload, setimageUpload]= useState(null)
    const fileImage= ''
    const handleimage = (e) => {
        setimageUpload(e.target.files[0]);
    }

    const [file,setfile] = useState(null);
    const onInputChange = (e) => {
        setfile(e.target.files[0]);
    }

    const [progress, setprogress] = useState(0)

    const handleChanges = (e) =>{
        const { name, value} = e.target;
        setAddHotel(prevState => ({
            ...prevState,
            [name]:value
        }))
    }

    function uploadImage(file){
        if(!file) return;
        const storageRef = ref(storage, `/assets/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed", (snapshot)=>{
            const prog = Math.round(snapshot.bytesTransferred / snapshot.totalBytes*100);
            setprogress(prog);
        },
            (err) => console.log(err),
            ()=>{
                getDownloadURL(uploadTask.snapshot.ref)
                .then(url =>{return url})
            }
        );
    }

    function addHotel(){
        AddHotel.hotel = uploadImage(file)
        if(!AddHotel.hotel){
            return alert('no file image uploaded')
        }


        
    }


    function addImage(){
        UploadImages.push(fileImage)

        console.log(UploadImages.length)
    }
    

    return (
        <div className="add_hotel">
            <AdminHeader></AdminHeader>
            <div className="add_hotel-container">
                <div className="add_hotel-hotelDetails">
                    <h4>Details About Hotel</h4>
                    <div className="form-group">
                        <label>Hotel Image</label>
                        <input type="file" className="control-form" name='hotel' value={AddHotel.hotel} onChange={onInputChange}/>
                        <p>{progress} %</p>
                    </div>
                    <div className="form-group">
                        <label>Hotel Name</label>
                        <input type="text" className="control-form" placeholder="Name of Hotel" name="name" value={AddHotel.name} onChange={handleChanges}  />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <input type="text" className="control-form" placeholder="eg Hotel, Apartment, Motel, etc" name="categories" value={AddHotel.categories} onChange={handleChanges}/>
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input type="number" className="control-form" name="price" value={AddHotel.price} onChange={handleChanges}/>
                    </div>

                    <div className="form-group">
                        <label>location</label>
                        <input type="text" className="control-form" placeholder="Province, City or/and Town" name="location" value={AddHotel.location} onChange={handleChanges}/>
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="control-form" placeholder="Aboutt location, near to hospital, distance from malls, etc" name="description" value={AddHotel.description} onChange={handleChanges}></textarea>
                    </div>
                </div>

                <div className="add_hotel-hotelDetails">
                    <h4>Details About Room</h4>
                    <div className="form-group">
                        <label>view</label>
                        <input type="text" className="control-form" placeholder="eg Swiming Pool, Ocean, Table Mountain" name="view" value={AddHotel.view} onChange={handleChanges}/>
                    </div>
                    <div className="form-group">
                        <label>Duration</label>
                        <input type="text" className="control-form" name="duration" value={AddHotel.duration} onChange={handleChanges}/>
                    </div>
                    <div className="form-group">
                        <label>size</label>
                        <input type="number" className="control-form" name="size" value={AddHotel.size} onChange={handleChanges}/>
                    </div>
                    <div className="form-group">
                        <label>Bed Type</label>
                        <input type="text" className="control-form" placeholder="eg Queen bed" name="bedType" value={AddHotel.bedType} onChange={handleChanges}/>
                    </div>
                    <div className="form-group">
                        <label>Room Type</label>
                        <input type="text" className="control-form" placeholder="standard single room, suit" name="roomType" value={AddHotel.roomType} onChange={handleChanges}/>
                    </div>
                    <div className="form-group">
                        <label>Capacity</label>
                        <input type="number" className="control-form" name="capacity" value={AddHotel.capacity} onChange={handleChanges}/>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="control-form" placeholder="How can the room or hotel reach people's need eg Superior Double Rooms in our hotel are perfectly equipped for traveling couples or friends. or Retreat provides accommodations with a restaurant, free private parking, an outdoor swimming pool and a bar" name="descriptive" value={AddHotel.descriptive} onChange={handleChanges}></textarea>
                    </div>
                    <div className="form-group">
                        <label>Hotel Image</label>
                        <input type="file" id="add-control-form" hidden name='fileImage' onChange={handleimage} value={fileImage} />
                        <label for="add-control-form" className='uploadImage'>Upload Image</label>
                        <button className="add-control-button" onClick={addImage}>Add to Gallary</button>
                    </div>
                </div>
                <button className="control-form" onClick={addHotel}>Submit</button>

            </div>
        </div>
    )

}

export default AddHotel;