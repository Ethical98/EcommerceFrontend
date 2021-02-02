import React from 'react';

import './SelectSize.css';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const prices = options.map((option) => {
    return (
      <button
        className={`dropdown-item ${selected === option ? 'active' : ' '}`}
        key={option.size}
        onClick={() => {
          onSelectedChange(option);
        }}
      >
        {option.size}
      </button>
    );
  });
  return (
    <div>
      <legend className='text-center'>Select Your Size</legend>
      <div className='card size-card '>
        <div className='card-body'>
          <div className='row'>
            <input
              className='input-qty form-control m-1 btn btn-outline-light text-dark '
              type='text'
              placeholder='Qty'
            ></input>
            <div className='dropdown'>
              <button
                type='button'
                className=' dropdown-button btn btn-outline-light text-dark dropdown-toggle m-1 '
                data-toggle='dropdown'
              >
                {selected.size}
              </button>
              <div
                className='dropdown-menu'
                style={{ border: ' 1px solid lightgray' }}
              >
                {prices}
              </div>
            </div>
            <button className='m-1 btn btn-secondary size-button'>
              Size Guide
            </button>
          </div>
          <div className='row'>
            <div
              className={`badge badge-pill badge-warning text mx-1 ${
                selected === options[0] ? 'd-none' : ''
              }`}
            >
              Chest:{selected.chest}
            </div>
            <div
              className={` badge badge-pill badge-warning text mx-1 ${
                selected === options[0] ? 'd-none' : ''
              }`}
            >
              Chest:{selected.chest}
            </div>
            <div
              className={`badge badge-pill badge-warning text mx-1 ${
                selected === options[0] ? 'd-none' : ''
              }`}
            >
              Chest:{selected.chest}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
