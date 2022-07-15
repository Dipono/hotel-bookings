
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import { db } from '../../config/firebase'
import { collection, getDocs } from 'firebase/firestore';
import Data from '../Data/Data';

import header from './Header.module.css';
function Header() {
    const [usersInfo, setusersInfo] = useState([])
    const [oneUser, setoneUser] = useState({})
    const usersCollectionRef = collection(db, "client")

    useEffect(() => {
        let getId = localStorage.getItem('userId')
        if (getId === null || getId === '') return setoneUser('Username')
        const getHotels = async () => {
            const data = await getDocs(usersCollectionRef);
            setusersInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            for (var user = 0; user < usersInfo.length; user++) {
                if (usersInfo[user].id_ref === getId) {
                    setoneUser(usersInfo[user])
                }
            }
        }
        getHotels();

    }, [usersInfo])


    const HotelCollectionRef = collection(db, "hotel")
    let [HotelData] = useState(Data);

    let [SearchResults, setSearchResults] = useState([])

    function seraching(name) {
        var searchWord = name.target.value
        console.log(searchWord)

        var newFilter = HotelData.filter((value) => {
            return value.name.includes(searchWord);
        })
        setSearchResults(newFilter)
    }

    return (
        <div className={header.main}>
            <div className={header.navBar}>
                <ul className={header.nav}>
                    <li><NavLink to={'/'} className={header.isActive} >Home</NavLink></li>
                    <li><NavLink to={'/about'} className={header.isActive}>About</NavLink></li>
                    <li><NavLink to={'#'} className={header.isActive}>Services</NavLink></li>
                    <li><NavLink to={'#'} className={header.isActive}>Destination</NavLink></li>
                    <li><NavLink to={'#'} className={header.isActive}>Blog</NavLink></li>
                    <li><NavLink to={'#'} className={header.isActive}>Contact</NavLink></li>
                    <li><input type="text" className={header.searchBtn} onChange={seraching} /></li>
                </ul>
                <br/>
                {SearchResults.map((data, xid) => (
                    <div className={header.searchResults} key={xid}>
                        {data.name}
                    </div>
                ))}

                <label className={header.username}>{oneUser.name}</label>
                <label className={header.logout}>Logout</label>

            </div>

        </div>
    )
}

export default Header;

/*
className={isActive =>
    "nav-link" + (!isActive ? " unselected" : "")
  }
*/