import React, { useState } from "react";

// let logoutTimer;

const InvAuthContext = React.createContext({
  token: "",
  isInvLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

// const retrieveStoredToken = () => {
//   const storedToken = localStorage.getItem("token");
//   const storedExpirationDate = localStorage.getItem("expirationTime");

//   const remainingTime = calculateRemainingTime(storedExpirationDate);

//   if (remainingTime <= 60000) {
//     localStorage.removeItem("token");
//     localStorage.removeItem("expirationTime");
//     return null;
//   }

//   return {
//     token: storedToken,
//     duration: storedExpirationDate,
//   };
// };

export const InvAuthContextProvider = (props) => {
  // const tokenData = retrieveStoredToken();
  // let initialToken;
  const initialToken = localStorage.getItem("InvToken");
  // if (tokenData) {
  //   initialToken = tokenData.token;
  // }
  const [token, setToken] = useState(initialToken);

  const InvIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("InvToken");

    // if (logoutTimer) {
    //   clearTimeout(logoutTimer);
    // }
  };

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("InvToken", token);
    // localStorage.setItem("expirationTime", expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);

    // logoutTimer = setTimeout(logoutHandler, remainingTime);
    setTimeout(logoutHandler, remainingTime);
  };

  const invContextValue = {
    token: token,
    isInvLoggedIn: InvIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <InvAuthContext.Provider value={invContextValue}>
      {props.children}
    </InvAuthContext.Provider>
  );
};

export default InvAuthContext;
