
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import { db } from '../../config/firebase'
import { collection, getDocs } from 'firebase/firestore';
import LohinRegPopup from '../../LoginAndRegister/LoginAndRegister'

import header from './Header.module.css';
function Header() {
    const navigate = useNavigate()
    const [usersInfo, setusersInfo] = useState([])
    const [oneUser, setoneUser] = useState({})

    const [ButtonPopUp, setButtonPopUp] = useState(false)



    const [username, setusername] = useState("Username")
    const usersCollectionRef = collection(db, "client")

    const HotelCollectionRef = collection(db, "hotel")
    let [HotelData, setHotelData] = useState([]);
    let [LogLabel, setLogLabel] = useState('login')
    let [Role, setRole]= useState('client')

    useEffect(() => {
        let getId = localStorage.getItem('userId')
        setusername(localStorage.getItem('userEmail'))
        if (username === null || username === "") return;
        const getUser = async () => {
            const data = await getDocs(usersCollectionRef);
            setusersInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            for (var user = 0; user < usersInfo.length; user++) {
                if (usersInfo[user].id_ref === getId) {
                    setoneUser(usersInfo[user])
                    setRole(usersInfo[user].role)
                    setLogLabel('Logout')
                }
            }
        }
        if(Role === 'admin') {
            navigate('/admin_home')
        }
        console.log(username)
        console.log(usersInfo)

        const getHotels = async () => {
            const hotelCollection = await getDocs(HotelCollectionRef);
            setHotelData(hotelCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getUser();
        getHotels();
    }, [usersInfo])




    let [SearchResults, setSearchResults] = useState([])

    function seraching(name) {
        var searchWord = name.target.value

        var newFilter = HotelData.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());

        })
        setSearchResults(newFilter)
    }

    function searchResults(data) {
        navigate('/hotel_info', { state: { data: data } })
    }

    function logout() {
        if (username === "Username") {
            return setButtonPopUp(true)
        }
        localStorage.removeItem('userId')
        localStorage.removeItem('userEmail')
        window.location.reload()
    }

    return (
        <div className={header.main}>
            <div className={header.navBar}>
                <ul className={header.nav}>
                    <li><NavLink to={'/'} className={header.isActive} >Home</NavLink></li>
                    <li><NavLink to={'/about'} className={header.isActive}>About</NavLink></li>
                    <li><NavLink to={'#'} className={header.isActive}>Services</NavLink></li>
                    <li><NavLink to={'/booking'} className={header.isActive}>Bookings</NavLink></li>
                    <li><input type="text" className={header.searchBtn} onChange={seraching} />
                        <div className={header.activeResults}>
                            {SearchResults.map((data, xid) => (
                                <div className={header.searchResults} key={xid}>
                                    <p onClick={() => searchResults(data)}>{data.name}</p>
                                </div>
                            ))}
                        </div>
                    </li>
                </ul>
                <br />


                <label className={header.username}>{username}</label>
                <label className={header.logout} onClick={logout}>{LogLabel}</label>

            </div>
            <LohinRegPopup trigger={ButtonPopUp} setTrigger={setButtonPopUp}></LohinRegPopup>

        </div>
    )
}

export default Header;