import React, { useState } from "react";

// let logoutTimer;

const EmpAuthContext = React.createContext({
  token: "",
  isEmpLoggedIn: false,
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

export const EmpAuthContextProvider = (props) => {
  // const tokenData = retrieveStoredToken();
  // let initialToken;
  const initialToken = localStorage.getItem("EmpToken");
  // if (tokenData) {
  //   initialToken = tokenData.token;
  // }
  const [token, setToken] = useState(initialToken);

  const EmpIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("EmpToken");

    // if (logoutTimer) {
    //   clearTimeout(logoutTimer);
    // }
  };

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("EmpToken", token);
    // localStorage.setItem("expirationTime", expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);

    // logoutTimer = setTimeout(logoutHandler, remainingTime);
    setTimeout(logoutHandler, remainingTime);
  };

  const EmpContextValue = {
    token: token,
    isEmpLoggedIn: EmpIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <EmpAuthContext.Provider value={EmpContextValue}>
      {props.children}
    </EmpAuthContext.Provider>
  );
};

export default EmpAuthContext;
