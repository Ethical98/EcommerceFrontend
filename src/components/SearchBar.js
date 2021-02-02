import React from 'react';

const SearchBar = () => {
  return (
    <div>
      <div class='input-group ' style={{ width: '130%' }}>
        <input
          type='text'
          className='form-control form-inline'
          placeholder='Search'
          
        />
        <div class='input-group-prepend'>
          <button class='btn btn-outline-secondary' type='button'>
            <i class='fa fa-search '></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
