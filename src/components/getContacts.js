const BASE_URL = 'https://64758efae607ba4797dc0873.mockapi.io/contacts';

export const getContacts = async () => {
    const data = await fetch(BASE_URL)
    return await data.json()
};