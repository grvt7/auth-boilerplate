/* eslint-disable */
/*@ts-ignore */
import { getSession } from 'next-auth/react';

export const getDecodedToken = async () => {
  const session = await getSession();
  if (session && session.accessToken) {
    const token = session.accessToken;
    const decoded = jwtDecode(token);
    return decoded;
  }
  return null;
};

export const validateTokenAlgo = async () => {
  const session = await getSession();
  if (session && session.accessToken) {
    const decodedHeader = jwtDecode(session.accessToken, { header: true });
    return decodedHeader?.alg;
  }
  return null;
};

export const getToken = async () => {
  const session = await getSession();
  return session ? session.accessToken : null;
};

export const isExpired = (tokenExpiration) => {
  const expirationDate = new Date(0);
  expirationDate.setUTCSeconds(tokenExpiration);

  if (expirationDate <= new Date()) return true;
  return false;
};

// My react way of doing the same
// import { jwtDecode } from 'jwt-decode';
// let decodedPayload = null;
// const ACCESS_TOKEN = 'access_token';

// export const getDeodedToken = () => {
//   if (!decodedPayload)
//     decodedPayload = jwtDecode(localStorage.getItem(ACCESS_TOKEN));
//   return { ...decodedPayload };
// };

// export const validateTokenAlgo = () => {
//   const token = getToken();
//   const decodedHeeader = jwtDecode(token, {
//     header: true
//   });
//   return decodedHeeader?.alg;
// };

// export const getToken = () => {
//   return localStorage.getItem(ACCESS_TOKEN);
// };

// export const setToken = (token) => {
//   localStorage.setItem(ACCESS_TOKEN, token);
// };

// export const isExpired = (tokenExpiration) => {
//   const expirationDate = new Date(0);
//   expirationDate.setUTCSeconds(tokenExpiration);

//   if (expirationDate <= new Date()) return true;
//   return false;
// };
