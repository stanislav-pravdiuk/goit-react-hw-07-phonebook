const BASE_URL = 'https://64758efae607ba4797dc0873.mockapi.io';

export const getContacts = async (endpoint) => {
    const data = await fetch(`${BASE_URL}${endpoint}`)
    return await data.json()
};

export const postContact = async (endpoint, requestBody) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  return await response.json();
};

export const deleteContact = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: "DELETE",
  });

  return await response.json();
};