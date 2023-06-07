import ContactForm from "./phonebook/contactForm";
import ContactList from "./contacts/ContactsList";
import Filter from "./contacts/Filter";
import { useDispatch } from "react-redux";
import { getContactsThunk } from "services/thunk";
import { useEffect } from "react";


function App() {


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getContactsThunk())
  },[dispatch])
  
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />

      <ContactList />

    </div>
  );
};

export default App;