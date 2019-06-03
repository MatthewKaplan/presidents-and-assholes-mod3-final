const BASE_URL = 'http://localhost:3001';

export const fetchAllPresidents = () => {
  return fetch(`${BASE_URL}/api/v1/presidents`).then(response => {
    if (!response.ok) {
      throw Error("Failed to fetch presidents");
    } else {
      return response.json();
    }
  });
};


