const BASE_URL = 'https://64758efae607ba4797dc0873.mockapi.io';

export const getContacts = async (endpoint) => {
    const data = await fetch(`${BASE_URL}${endpoint}`)
    return await data.json()
};