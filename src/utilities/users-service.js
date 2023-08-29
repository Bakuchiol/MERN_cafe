// service to customers
// import all named exports
import * as usersAPI from "./users-api";

export async function signUp(userData) {
  // Delegate the network request code to the uers-api.js
  // API module which ultimately return a JSON web token (JWT)
  // console.log('1');
  const token = await usersAPI.signUp(userData);
  // console.log('2');
  // baby step by returning whatever is sent back by the server
  // return token
  localStorage.setItem("token", token); // persists "token"
    return getUser();
  // return token;
}

// login
export async function login(credentials){
  const token = await usersAPI.login(credentials);

  // Persist the token
  localStorage.setItem('token', token);
  return getUser();
}

// users-service.js
export function getToken() {
  // getItem returns null if there's no string
  const token = localStorage.getItem("token"); // goes to localstorage and look at token, if empty return null
  if (!token) return null; // if no token, function over

  // Obtain the payload of the token
  const payload = JSON.parse(atob(token.split(".")[1]));
  // A JWT's exp is expressed in seconds, not milliseconds, so convert
  if (payload.exp < Date.now() / 1000) {
    // if payload has expired, remove token from localstorage and return null
    // Token has expired - remove it from localStorage
    localStorage.removeItem("token");
    return null;
  }
  // if everything good, return token
  return token;
}

export function getUser() {
  const token = getToken(); //return token or null
  // If there's a token, return the user in the payload, otherwise return null
  // atob - decoder
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

export function logOut(){
  localStorage.removeItem('token')
}

// practice
export async function checkToken(){
  alert('clicked');
  return usersAPI.checkToken().then(dateStr => new Date(dateStr))
}