import React, { useState } from "react";

// let logoutTimer;

const DepAuthContext = React.createContext({
  token: "",
  isDepLoggedIn: false,
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

export const DepAuthContextProvider = (props) => {
  // const tokenData = retrieveStoredToken();
  // let initialToken;
  const initialToken = localStorage.getItem("DepToken");
  // if (tokenData) {
  //   initialToken = tokenData.token;
  // }
  const [token, setToken] = useState(initialToken);

  const DepIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("DepToken");

    // if (logoutTimer) {
    //   clearTimeout(logoutTimer);
    // }
  };

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("DepToken", token);
    // localStorage.setItem("expirationTime", expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);

    // logoutTimer = setTimeout(logoutHandler, remainingTime);
    setTimeout(logoutHandler, remainingTime);
  };

  const depContextValue = {
    token: token,
    isDepLoggedIn: DepIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <DepAuthContext.Provider value={depContextValue}>
      {props.children}
    </DepAuthContext.Provider>
  );
};

export default DepAuthContext;
