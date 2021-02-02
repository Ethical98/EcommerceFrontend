import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './ProductDetail.css';
import imageSrc from '../images/shirt.jpg';
import SelectSize from './SelectSize';

const options = [
  {
    size: 'Select',
  },
  {
    label: 'BBPS SHIRT',
    size: '60',
    length: '1',
    shoulder: '2',
    chest: '3',
    price: 'Rs 40',
  },
  {
    label: 'BBPS SHIRT',
    size: '46',
    value: 'green',
    price: 'Rs 400',
    shoulder: '4',
    length: '5',
    chest: '6',
  },
  {
    label: 'BBPS SHIRT',
    size: '75',
    value: 'blue',
    price: 'Rs 60',
    shoulder: '7',
    length: '8',
    chest: '9',
  },
  {
    label: 'BBPS SHIRT',
    size: '74',
    value: 'blue',
    price: 'Rs 60',
    shoulder: '7',
    length: '8',
    chest: '9',
  },
  {
    label: 'BBPS SHIRT',
    size: '73',
    value: 'blue',
    price: 'Rs 60',
    shoulder: '7',
    length: '8',
    chest: '9',
  },
  {
    label: 'BBPS SHIRT',
    size: '72',
    value: 'blue',
    price: 'Rs 60',
    shoulder: '7',
    length: '8',
    chest: '9',
  },
  {
    label: 'BBPS SHIRT',
    size: '71',
    value: 'blue',
    price: 'Rs 60',
    shoulder: '7',
    length: '8',
    chest: '9',
  },
  {
    label: 'BBPS SHIRT',
    size: '79',
    value: 'blue',
    price: 'Rs 60',
    shoulder: '7',
    length: '8',
    chest: '9',
  },
  {
    label: 'BBPS SHIRT',
    size: '80',
    value: 'blue',
    price: 'Rs 60',
    shoulder: '7',
    length: '8',
    chest: '9',
  },
];

const ProductDetail = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className='container'>
      <div className='product-card card'>
        <div className='card-body text-center'>
          <Link to='/description/1'>
            <img className='card-img-top' src={imageSrc} alt='shirt'></img>
          </Link>

          <h4 className='card-title text-center'>Shirt</h4>
          <SelectSize
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
          />
          <button type='button' className='cart-button btn btn-primary'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
