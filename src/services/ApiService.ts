/* eslint-disable */
/*@ts-ignore */

import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { getSession } from 'next-auth/react';

axios.defaults.headers.common['Content-Type'] = 'application/json';

const handleResponseInterception = (response: AxiosResponse) =>
  response && response.data;

const handleRequestInterception = async (config: any) => {
  let {
    headers: { common }
  } = config;

  // Get the session from next-auth (session contains the access token)
  // const session = await getSession();

  // if (session && session.accessToken) {
  //   common = { ...common, Authorization: `Bearer ${session.accessToken}` };
  // }

  // console.log('Api Service : ', session);
  config.headers.common = common;
  return config;
};

const handleResponseErrorInterception = (error: any) => {
  return Promise.reject(error);
};

const createHttpClient = (baseURL = '', headers = {}) => {
  const client = axios.create({ baseURL, headers });
  client.interceptors.request.use(handleRequestInterception);
  client.interceptors.response.use(
    handleResponseInterception,
    handleResponseErrorInterception
  );

  return client;
};

class ApiService {
  baseUrl: string;
  client: AxiosInstance;

  constructor(baseUrl: string, headers: any) {
    this.baseUrl = baseUrl;
    this.client = createHttpClient(baseUrl, headers);
  }

  all(...requestsArray: any[]) {
    return axios.all(requestsArray);
  }

  get(resource: any, params = {}) {
    return this.client.get(resource, { params });
  }

  post(resource: any, body = {}) {
    return this.client.post(resource, body);
  }

  put(resource: any, body = {}) {
    return this.client.put(resource, body);
  }

  patch(resource: any, body = {}) {
    return this.client.patch(resource, body);
  }

  delete(resource: any, body = {}) {
    return this.client.delete(resource, body);
  }
}

export { ApiService };

// Original React Version
// import axios, { AxiosInstance, AxiosResponse } from 'axios';
// import {
//   getDeodedToken,
//   getToken,
//   isExpired,
//   validateTokenAlgo
// } from './JwtService';

// const handleResponseInterception = (response: AxiosResponse) =>
//   response && response.data;

// axios.defaults.headers.common['Content-Type'] = 'application/json';

// let expiredToken = false;

// const handleResponseErrorInterception = (error: any) => {
//   if (expiredToken) {
//     expiredToken = false;
//     window.location.reload();
//   }
//   return Promise.reject(error);
// };

// axios.defaults.headers.common['Content-Type'] = 'application/json';

// const handleRequestInterception = (config: any) => {
//   let {
//     headers: { common }
//   } = config;
//   let token = getToken();
//   const decoded: any = getDeodedToken();
//   const expiredToken = isExpired(decoded?.exp);
//   const algoUsed = validateTokenAlgo();

//   if (expiredToken || algoUsed?.toLowerCase() === 'none') {
//     localStorage.clear();
//     sessionStorage.clear();
//   } else {
//     token = getToken();
//     if (token) {
//       common = { ...common, Authorization: `Bearer ${token}` };
//     }
//     config.headers.common = common;
//   }
//   return config;
// };

// const createHttpClient = (baseURL = '', headers = {}) => {
//   const client = axios.create({ baseURL, headers });
//   client.interceptors.request.use(handleRequestInterception);
//   client.interceptors.response.use(
//     handleResponseInterception,
//     handleResponseErrorInterception
//   );

//   return client;
// };

// class ApiService {
//   baseUrl: string;
//   client: AxiosInstance;

//   constructor(baseUrl: string, headers: any) {
//     this.baseUrl = baseUrl;
//     this.client = createHttpClient(baseUrl, headers);
//   }

//   all(...requestsArray: any[]) {
//     return axios.all(requestsArray);
//   }

//   get(resourse: any, params = {}) {
//     console.log(resourse, params);
//     return this.client.get(resourse, { params });
//   }

//   post(resource: any, body = {}) {
//     return this.client.post(resource, body);
//   }

//   put(resource: any, body = {}) {
//     return this.client.put(resource, body);
//   }

//   patch(resource: any, body = {}) {
//     return this.client.patch(resource, body);
//   }

//   delete(resource: any, body = {}) {
//     return this.client.delete(resource, body);
//   }
// }
// export { ApiService };
