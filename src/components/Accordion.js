import React, { useState } from 'react';
import './Accordion.css';

const FilterCollapse = ({ items }) => {
  const [selectedBox, setSelectedBox] = useState(null);

  const onValueChange = (event) => {
    setSelectedBox(event.target.value);
  };
  const categories = items.map((item) => {
    return (
      <div className='form-check' key={item.title}>
        <label className='form-check-label'>
          <input
            type='radio'
            className='form-check-input'
            name='optradio'
            value={item.title}
            onChange={onValueChange}
          />
          {item.title}
        </label>
      </div>
    );
  });
  return (
    <div>
      <div
        className={`card ${
          window.innerWidth <= 576 ? 'collapse' : ''
        }`}
        id='collapsibleNavbar'
      >
        <div className='card uniform-buy'>
          <div
            className='card-header pull-left'
            data-toggle='collapse'
            data-target='#uniform-buy'
          >
            Buy Uniform in 3 Easy Steps
            <i className='fa pull-right' aria-hidden='true'></i>
          </div>

          <div id='uniform-buy' className='collapse show m-3'>
            <select className='form-control m-1'></select>
            <select className='form-control m-1'></select>
            <select className='form-control m-1'></select>
          </div>
        </div>
        <div className='card product-category'>
          <div
            className='card-header pull-left'
            data-toggle='collapse'
            data-target='#product-category'
          >
            Product Category
            <i className='fa pull-right' aria-hidden='true'></i>
          </div>

          <div id='product-category' className='form collapse show m-3'>
            {categories}
            <label>{selectedBox}</label>
          </div>
        </div>

        <div className='card seasonal-clothing'>
          <div
            className='card-header pull-left'
            data-toggle='collapse'
            data-target='#Seasonal-Clothing'
          >
            Seasonal Clothing
            <i className='fa pull-right' aria-hidden='true'></i>
          </div>

          <div id='Seasonal-Clothing' className='collapse show m-3'>
            <div className='form-check'>
              <label className='form-check-label'>
                <input
                  type='radio'
                  className='form-check-input'
                  name='optradio'
                  value='winter uniform'
                />
                Winter Uniform
              </label>
            </div>
            <div className='form-check'>
              <label className='form-check-label'>
                <input
                  type='radio'
                  className='form-check-input'
                  name='optradio'
                  value='Summer uniform'
                />
                Summer Uniform
              </label>
            </div>
          </div>
        </div>
        <div className='card class'>
          <div
            className='card-header pull-left'
            data-toggle='collapse'
            data-target='#class'
          >
            Class
            <i className='fa pull-right' aria-hidden='true'></i>
          </div>

          <div id='class' className='collapse show m-3'>
            <div className='form-check'>
              <label className='form-check-label'>
                <input
                  type='radio'
                  className='form-check-input'
                  name='optradio'
                  value='Nursery'
                />
                Nursery
              </label>
            </div>
            <div className='form-check'>
              <label className='form-check-label'>
                <input
                  type='radio'
                  className='form-check-input'
                  name='optradio'
                  value='Nursery'
                />
                Nursery
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCollapse;
