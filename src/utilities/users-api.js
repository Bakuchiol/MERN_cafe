import sendRequest from "./send-request";
// communicate with database
// import axios from "axios";
// This is the base path of the Express route we'll define
// call from backend
const BASE_URL = "/api/users";

// connects to backend - API call
export async function signUp(userData) {

  return sendRequest(BASE_URL, 'POST', userData)

  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.

  //   *** FETCH ***
  //   const res = await fetch(BASE_URL, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' }, //default
  //     // Fetch requires data payloads to be stringified
  //     // and assigned to a body property on the options object
  //     body: JSON.stringify(userData) // req.body
  //   });

  //    *** AXIOS ***
  // const res = await axios.post(BASE_URL, userData,
  //   {headers: { 'Content-Type': 'application/json' }},
  //   )

  //   console.log(res);
  // // Check if request was successful
  // if (res.status === 200) { // res.ok not part of axios response
  //   // status 200 or res.status === 200
  //   // res.json() will resolve to the JWT
  //   // axios automatically res.json so not needed only res.data
  //   // return res.json(); // return what backend sends us into json then back up to user form
  //   return res.data
  // } else {
  //   throw new Error("Invalid Sign Up");
  // }
}

// 500 -backend server not running

// login
export function login(credentials){
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
}

/*--- Helper Functions ---*/

// async function sendRequest(url, method = 'GET', payload = null) {
//   // Fetch accepts an options object as the 2nd argument
//   // used to include a data payload, set headers, etc.
//   const options = { method };
//   if (payload) {
//     options.headers = { 'Content-Type': 'application/json' };
//     options.body = JSON.stringify(payload);
//   }
//   const res = await fetch(url, options);
//   // res.ok will be false if the status code set to 4xx in the controller action
//   if (res.ok) return res.json();
//   throw new Error('Bad Request');
// }