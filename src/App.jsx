import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './companents/MyNavbar';
import LoremIpsum from './companents/LoremIpsum';
import TwoSaas from './companents/TwoSaas';
import WithAname from './companents/WithAname';
import SitAmet from './companents/SitAmet';
import KeepCalm from './companents/KeepCalm';

import Companets from './Companents';

import Posts from './companents/Posts';
import Cars from './companents/Cars';
import Books from './companents/Books';
import Users from './companents/Users';
import './App.css';


function App() {






  return (
    <div className='containe'>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path='/' element={<Companets/>}/>
          <Route path='/LoremIpsum' element={<LoremIpsum />} />
          <Route path='/TwoSaas' element={<TwoSaas />} />
          <Route path='/WithAname' element={  <WithAname />} />
          <Route path='/SitAmet' element={  <SitAmet />} />
          <Route path='/KeepCalm' element={ <KeepCalm />} />

          <Route path='/Posts' element={ <Posts />} />
          <Route path='/Cars' element={ <Cars />} />
          <Route path='/Books' element={ <Books />} />
          <Route path='/Users' element={ <Users />} />
        </Routes>
      </BrowserRouter>
      {/* <Cars/> */}


      
    
      
     
    </div>

  );
}

export default App;
