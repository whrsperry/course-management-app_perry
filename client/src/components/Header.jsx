import { useState } from 'react';
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import initialCourseData from "../initialCourseData";

const Header = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Searching for:', searchTerm);
    
    // Filter courses based on the search term
    const filteredCourses = initialCourseData.filter((course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Log or update state with the filtered courses
    console.log('Filtered Courses:', filteredCourses);
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo-container">
          <img className="header__logo-image" src={logo} alt="learn. logo" />
          <span className="header__logo-learn">Learn.</span>
        </div>
        <ul className="header__link-list">
          <li className="header__link-item">
          <NavLink
            to="/"
            className="header__link"
            activeclassname="header__link--active"
            exact="true"
          >
            Home
          </NavLink>
          </li>
          <li className="header__link-item">
          </li>
        </ul>
        <div className="header__search-container">
          <input
            className='header__search-input'
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className='header__search-button' onClick={handleSearch}>Search</button>
        </div>
      </div>
    </header>
  )
};

export default Header;