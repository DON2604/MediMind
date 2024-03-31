import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation from react-router-dom

function Response() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   // Check if access token and refresh token are present in cookies
  //   const accessToken = getCookie("accessToken");
  //   const refreshToken = getCookie("refreshToken");

  //   if (!accessToken || !refreshToken) {
  //     navigate("/login"); // Redirect to login page if tokens are not present
  //   }
  // }, [navigate]);

  // const getCookie = (name) => {
  //   const value = `; ${document.cookie}`;
  //   const parts = value.split(`; ${name}=`);
  //   if (parts.length === 2) return parts.pop().split(";").shift();
  // };
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
