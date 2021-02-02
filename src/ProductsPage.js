import React from 'react';
import ProductDetail from './components/ProductDetail';
import Accordion from './components/Accordion';

import './ProductsPage.css';

const items = [
  {
    title: 'boys uniform',
    content: 'React is front end javascript framework',
  },
  {
    title: 'Girls uniform',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'fancy uniform',
    content: 'You use React by creating components ',
  },
];
export default () => {
  return (
    <div className='container mr-4'>
      <div className='row'>
        <div className='col-sm-4 col-md-3 col-lg-3 col-xl-2.5 side-bar'>
          <Accordion items={items} />
        </div>

        <div className='row  Products'>
          <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 product'>
            <ProductDetail />
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 product '>
            <ProductDetail />
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 product'>
            <ProductDetail />
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 product'>
            <ProductDetail />
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 product '>
            <ProductDetail />
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 product'>
            <ProductDetail />
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 product'>
            <ProductDetail />
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 product'>
            <ProductDetail />
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 product'>
            <ProductDetail />
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 product'>
            <ProductDetail />
          </div>
        </div>
      </div>
    </div>
  );
};
