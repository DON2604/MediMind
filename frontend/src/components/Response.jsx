import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom

function Response() {
  // Use useLocation hook to access location state
  const location = useLocation();
  const { responseData } = location.state || {};

  return (
    <div>
      <h2>Response</h2>
      {responseData ? (
        <div>
          <p>Response Data:</p>
          <pre>{JSON.stringify(responseData.generatedText, null, 2)}</pre>
        </div>
      ) : (
        <p>No response data available</p>
      )}
    </div>
  );
}

export default Response;
