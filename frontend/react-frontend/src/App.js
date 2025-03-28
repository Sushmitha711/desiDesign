import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Header from './pages/header/header';
import Work from './pages/Work/work';
import Client from './pages/Client/client';
import Contacts from './pages/Contacts/contacts';
import Collections from './pages/Collections/Collections';

function App() {
  return (
   <>
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/our-work' element={<Work/>}/>
    <Route path='/clients' element={<Client/>}/>
    <Route path='/contacts' element={<Contacts/>}/>
    <Route path='/collections' element={<Collections/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
