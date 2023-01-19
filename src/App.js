import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import AddContact from './AddContact';
import ContactsContex from './AvatarContext';


function App() {
  const [contacts, setContacts] = useState([
    {
      user: { id: crypto.randomUUID(), avatar: `https://robohash.org/Gl.png?set=set3`, _color: `black` }
      , name: 'hamza demnani', tel: '0682490112', ville: "Tanger"
    }
  ]);
  const [avatar, setAvatar] = useState('');
  return (
    <div className="App">
      <div className="container py-5">
        <div className="row app-wrapper ">
          <div className={`col-5 py-0 row justfiy-content-center align-items-center ${avatar == '' ? 'bg-warning' :''}`} style={{backgroundColor:`${avatar == '' ? '' : avatar._color}`}}>
            <img src={`${avatar == '' ? 'https://robohash.org/Gl.png?set=set3' : avatar.avatar}`} alt="" />
          </div>
          <div className="col-7 contact-list">
            <NavBar />
            <ContactsContex.Provider value={{ contacts, setContacts, avatar, setAvatar }}>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path='new-contact' element={<AddContact />} />
                </Route>
              </Routes>
            </ContactsContex.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
