import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Navigationbar from './routes/navbar/navbar.component';
import Home from './routes/home/home.component';
import SignIn from './components/sign-in/sign-in.component';

import './App.css';



function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Navigationbar />}>
          <Route path='home' element={<Home />} />
          <Route path='sign-in' element={<SignIn />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
