import { useState, useEffect } from 'react';

// Function to generate the endpoint URL based on the path
export const GetEndpoint = (path) => {
  // eslint-disable-next-line
  return process.env.REACT_APP_BACKEND_URL + path;
};

// Custom hook for making API requests
export const useApiUtil = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data function
    const fetchData = async () => {
      try {
        const response = await fetch(GetEndpoint('/search'), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: term
          })
        });

        if (response.ok) {
          const responseData = await response.json();
          setData(responseData);
          console.log(responseData);
          console.log('This is the data: ' + data);
        } else {
          throw new Error('Request failed');
        }
      } catch (error) {
        console.error('Error: ', error);
      }
    };

    console.log(term);
    fetchData();
  });

  return { data };
};

// Function to ping the backend
export const PingBackend = async () => {
  try {
    const response = await fetch(GetEndpoint('/search'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: ''
      })
    });

    if (response.ok) {
      console.log('Active Server Connection');
      const data = await response.json(); // Parse the response body
      return data; // Return the response data
    } else {
      throw new Error(
        'Warning: Initializing ping request to backend $REACT_APP_BACKEND_URL failed.'
      );
    }
  } catch (error) {
    console.error('Error: ', error);
    throw error; // Re-throw the error
  }
};
