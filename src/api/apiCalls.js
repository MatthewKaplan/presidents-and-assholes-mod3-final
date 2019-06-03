const BASE_URL = 'http://localhost:3001';

export const fetchAllPresidents = () => {
  return fetch(`${BASE_URL}/api/v1/president`).then(response => {
    if (!response.ok) {
      throw Error (response.statusText);
    } else {
      return response.json();
    }
  });
};

