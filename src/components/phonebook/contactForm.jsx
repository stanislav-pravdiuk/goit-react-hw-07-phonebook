import { useState } from "react";
import css from './contact-form.module.css';
import { useDispatch } from "react-redux";
import { postContactThunk } from "services/thunk";

function ContactForm() {

    const dispatch = useDispatch();

    const [state, setState] = useState({
        name: '',
        number: '',
    });

    function handleInputChange(event) {
        const { name, value } = event.currentTarget;
        setState(state => ({ ...state, [name]: value }));
    };

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(postContactThunk(state));
        setState({ name: '', number: '', });
    };
    
    return (
        <form
            className={css.contactForm}
            onSubmit={handleSubmit}>
            <label>Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={state.name}
                    onChange={handleInputChange}
                />
            </label>
            <label>Number
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={state.number}
                    onChange={handleInputChange}
                />
            </label>
            <button type="submit">Add contact</button>
        </form>
    );
};

export default ContactForm;