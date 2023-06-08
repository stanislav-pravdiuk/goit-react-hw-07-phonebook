import ContactForm from "./phonebook/contactForm";
import ContactList from "./contacts/ContactsList";
import Filter from "./contacts/Filter";
import Loader from "./loader";
import { useDispatch, useSelector } from "react-redux";
import { getContactsThunk } from "services/thunk";
import { useEffect } from "react";


function App() {

  const { items, isLoading, error } = useSelector((state) => state.contacts)

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

      {isLoading&& <Loader />}
      {items&& <ContactList />}
      {error&& <h2>{error}</h2>}

    </div>
  );
};

export default App;