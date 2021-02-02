import React from 'react';
import './Header.css';
import url from '../images/asu-top-logo.png';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-sm bg-dark fixed-top '>
        <div className='navbar-brand'>
          <img
            src={url}
            style={{
              marginTop: '-5%',
              paddingLeft: '80px',
              height: '4.5rem',
              width: '15rem',
            }}
          ></img>
        </div>

        <ul className='navbar-nav'>
          <li className='nav-item m-1'>
            <i
              className='fa filter navbar-toggler'
              data-toggle='collapse'
              data-target='#collapsibleNavbar'
            ></i>
          </li>
          <li className='nav-item  m-1'>
            <span className='navbar-text'>Call us on : (011) 49188800</span>
          </li>
          <li className='nav-tem m-1'>
            <SearchBar />
          </li>
        </ul>
        <ul className='navbar-nav' style={{ marginLeft: '20%' }}>
          <li className='nav-item '>
            <button>OFFERS</button>
          </li>
          <li className='nav-item  '>
            <a style={{ borderRight: '1px solid white', padding: '3px' }}>
              Track Your Order
            </a>
          </li>
          <li className='nav-item '>
            <a style={{ borderRight: '1px solid white', padding: '3px' }}>
              Cart
            </a>
          </li>
          <li className='nav-item ml-1'>
            <a>Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
