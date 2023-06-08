import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilteredContacts } from "redux/selectors";
import { deleteContactThunk } from "services/thunk";

function ContactList() {

        const dispatch = useDispatch();
        const contacts = useSelector(getFilteredContacts);

        if (contacts.length !== 0) {
                return (
                        <ul>
                                {contacts.map((el) =>
                                        <li key={el.id}>
                                                <span>{el.name} {el.number}</span>
                                                <button onClick={() => dispatch(deleteContactThunk(el.id))}>Delete</button>
                                        </li>)}
                        </ul>
                );
        };
        
        return <p>No contacts found</p>
};

export default ContactList;