export const BASE_URL =
  process.env.REACT_APP_NODE_ENV == "production"
    ? process.env.PUBLIC_URL + "/api"
    : "http://localhost:3000/willow/api";
export const LOGIN_URL = BASE_URL + "/saml";
export const LOGOUT_URL = BASE_URL + "/logout";
export const ONELOGIN_URL = "https://ti-sandbox.onelogin.com/portal";

export const SEARCH_DEBOUNCE_TIMEOUT = 200;
export const getAbsoluteURL = (url) => {
  return `${BASE_URL}${url}`;
};
