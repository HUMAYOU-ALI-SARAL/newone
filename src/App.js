import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './Routes/Home/Home.component';
import ShopData from './Routes/Shop/ShopData'
import Navigation from './Routes/Navigation/nav.component';
import Authentication from './Routes/authentication/Authentication.component';
import Checkout from './Routes/Checkout/Checkout.component';

function App() {
  return (
    <Routes>
    <Route  path='/' element={<Navigation/>}>
    <Route  path='/home' element={<Home/>} index/>
    <Route path='/shopdata/*' element={<ShopData/>}/>
    <Route path='/Authentication' element={<Authentication/>}/>
    <Route path='Checkout' element={<Checkout/>}/>
    </Route>
    </Routes>
  );
}

export default App;
