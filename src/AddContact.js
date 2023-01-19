import React, {useRef } from 'react'
import { useDispatch } from 'react-redux';
import { addContact } from './redux/slices/contactSilce';
import './App.css';

function AddContact() {
  const dispatch = useDispatch();
  const phoneRef = useRef();
  const cityRef = useRef();
  const nameRef = useRef();

  const handleAddContacts =  (e) => {
    let color = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
    let name = nameRef.current.value.trim();
    let tel = phoneRef.current.value.trim();
    let ville = cityRef.current.value.trim();
    if (name =='' || tel=='' || ville =='') {
      return;
    }
    dispatch(addContact({
      name,ville,tel,color
    }));
    phoneRef.current.value = '';
    nameRef.current.value = '';
    cityRef.current.value = '';
  }
  return (
    <div className="col-9 mx-auto mt-5 py-2 px-4">
      <div className="mb-3 row text-dark">
        <div className="col">
          <label className="form-label">Phone Number</label>
          <input type="text" ref={phoneRef} className="form-control shadow-none" placeholder="Phone Number..." aria-describedby="emailHelp" />
        </div>
        <div className="col">
          <label className="form-label">Name</label>
          <input type="text" ref={nameRef} className="form-control shadow-none" placeholder="Name..." aria-describedby="emailHelp" />
        </div>
      </div>
      <div className="mb-3 row text-dark">
        <div className="col">
          <label className="form-label">City</label>
          <input type="text" ref={cityRef} className="form-control shadow-none" placeholder="City..." aria-describedby="emailHelp" />
        </div>
      </div>
      <div className="row">
        <button onClick={handleAddContacts} className='col-5 mx-auto btn' style={{ background: '#F6EAD3' }}>
          Add To Contacts
        </button>
      </div>
    </div>
  )
}


export default AddContact;