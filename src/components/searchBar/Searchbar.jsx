import React, {useState} from 'react'
import "./searchbar.css"
import { CiSearch } from 'react-icons/ci';
function Searchbar() {

    const [active, setActive] = useState(false)
    const handleClick = () => {
        setActive(!active);

    };
  return (
      <div className='search-bar'>
        <div className='search-field'>
            <input type="text" placeholder='Search' />
              <CiSearch />
        </div>
        <div className='select-menu'>
            <select>
                <option value="volvo">Monday,6th March</option>
                <option value="saab">Tuesday,7th March</option>
                <option value="opel">Wednesday,8th March</option>
                <option value="audi">Thursday,9th March</option>
            </select>
        </div>

        <div className='button-content'>
            <button onClick={handleClick} style={{backgroundColor: active ? "black" : "white"}} className='btn-one'>
                <span></span>
                Card
                </button>
              <button   className='btn-two'>
                <span></span>
                List
            </button>
        </div>

      </div>
  )
}

export default Searchbar