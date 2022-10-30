import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Navigationbar from './routes/navigation/navbar.component';
import Landing from './components/landing/landing.component';
import Home from './routes/home/home.component';
import Authentication from './components/authentication/authentication.component';

import './App.css';



function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Navigationbar />}>
          <Route index element={<Landing />} />
          <Route path='home' element={<Home />} />
          <Route path='auth' element={<Authentication />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
