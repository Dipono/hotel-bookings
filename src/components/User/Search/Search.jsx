
import Data from '../Data/Data';
import { useState } from 'react';
import search from './Search.module.css';


function Search() {
    let [SearchResults, setSearchResults] = useState([])
    let [HotelData] = useState(Data)

    function seraching(name) {
        var searchWord = name.target.value
        console.log(searchWord)

        var newFilter = HotelData.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLoweCase());
        })

        console.log(newFilter)
        setSearchResults(newFilter)
        console.log(SearchResults)


    }

    return (
        <div className="searchWord">
            <div className={search.formGroup}>
                <label>Room Type</label>
                <input type="text" className={search.controlForm} placeholder="Room Type" onChange={seraching} />
            </div>
            {SearchResults.map((data, xid) => (
                <div className={search.content2} key={xid}>
                    {data.name}
                </div>
            ))}

        </div>
    )
}

export default Search;