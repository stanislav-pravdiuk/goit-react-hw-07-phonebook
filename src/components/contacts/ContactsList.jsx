import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilteredContacts } from "redux/selectors";
import { deleteContact } from "redux/contactsSlice";
import { deleteContactThunk } from "components/thunk";

function ContactList() {

        const dispatch = useDispatch();
        const contacts = useSelector(getFilteredContacts);

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

export default ContactList;