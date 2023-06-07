export const getPhoneBookItems = state => state.contacts.items; 

export const getContactsFilter = state => state.filter.filter;

export const getFilteredContacts = state => {
    const contacts = getPhoneBookItems(state);
    const filter = getContactsFilter(state);
    const getFilteredContacts = contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
    return getFilteredContacts;
};