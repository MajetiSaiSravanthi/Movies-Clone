// Function to make a GET request
function get(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .catch(error => {
        console.error('Request failed:', error);
        throw error;
      });
  }
  
  // Function to make a POST request
  function post(url, data) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  
    return fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .catch(error => {
        console.error('Request failed:', error);
        throw error;
      });
  }
  
  // Function to make a PUT request
  function put(url, data) {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  
    return fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .catch(error => {
        console.error('Request failed:', error);
        throw error;
      });
  }
  
  // Function to make a DELETE request
  function remove(url) {
    const options = {
      method: 'DELETE',
    };
  
    return fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .catch(error => {
        console.error('Request failed:', error);
        throw error;
      });
  }
  
  // Export the functions to be used in other modules
  export { get, post, put, remove };
  