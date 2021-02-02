import React from 'react';
import ProductsPage from './ProductsPage';
import { Route, BrowserRouter } from 'react-router-dom';
import Description from './components/ProductDescription';
import Header from './components/Header';
const Productid = '1';
export default () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Route path='/' exact component={ProductsPage}></Route>
          <Route
            path={`/description/${Productid}`}
            exact
            component={Description}
          ></Route>
        </div>
      </BrowserRouter>
    </div>
  );
};
