import React, { useState } from 'react'
import "./searchbar.css"
import { CiSearch } from 'react-icons/ci';
import { TfiLayoutSliderAlt } from "react-icons/tfi";
import { MdOutlineFormatListBulleted } from "react-icons/md"
function Searchbar({ placeholder, data }) {

  //to filter data by importing the use State
  //this controls when the search option window should be displayed}
  // conditionally it should be displayed when the search bar is empty that is equal to zero}
  const [filteredData, setFilteredData] = useState([])

  const handleFilter = (event) => {
    const searchWord = event.target.value
    //the logic responsible for showing a specific data
    const newFilter = data.filter((value) => {
      return value.Name.toUpperCase().includes(searchWord.toUpperCase());
    });

    //controls the disappearing of search options wen search bar is empty
    if (searchWord === "") {
      setFilteredData([])
    } else {
      setFilteredData(newFilter);
    }

    //then go down to the map function to display the actual filter data gitten
  }

  return (
    <div className='search-bar'>
      <div className='search-field'>
        <input type="text" placeholder={placeholder} onChange={handleFilter} />
        <CiSearch />
      </div>

      {filteredData.length !== 0 &&
        <div className="dataResult">

          {filteredData.map((value, key) => {
            return <div className="dataItem">
              <p className="dataTxt">{value.Name}</p>
            </div>
          })}
        </div>
      }

      <div className='select-menu'>
        <select>
          <option value="volvo">Monday,6th March</option>
          <option value="saab">Tuesday,7th March</option>
          <option value="opel">Wednesday,8th March</option>
          <option value="audi">Thursday,9th March</option>
        </select>
      </div>

      <div className='button-content'>
        <div className='button-one-container'>
          <TfiLayoutSliderAlt className="tfi-icon" />
          <button className='btn-one'>Card</button>
        </div>
        <div className='button-two-container'>
          <MdOutlineFormatListBulleted className='mdo-icon' />
          <button className='btn-two'>List</button>
        </div>
      </div>

    </div>
  )
}

export default Searchbar