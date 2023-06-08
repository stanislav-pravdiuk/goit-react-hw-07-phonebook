import React from "react";
import css from './filter.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getContactsFilter } from "redux/selectors";
import { filterContacts } from "redux/filter/filterSlice";

function Filter() {
    
    const dispatch = useDispatch();
    const filter = useSelector(getContactsFilter);

    return (
        <label className={css.filter}>Find contacts by name
            <input
                type="text"
                value={filter}
                onChange={(e) => dispatch(filterContacts(e.target.value))}
            >
            </input>
        </label>
    );
};

export default Filter;