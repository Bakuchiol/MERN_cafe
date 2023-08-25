// communicate with database
import axios from "axios";
// This is the base path of the Express route we'll define
const BASE_URL = "/api/users";

export async function signUp(userData) {
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
  const res = axios.post(BASE_URL, userData,
    {headers: { 'Content-Type': 'application/json' }},
    )

    console.log(res);
  // Check if request was successful
  if (res.status === 200) { // res.ok not part of axios response
    // status 200 or res.status === 200
    // res.json() will resolve to the JWT
    // axios automatically res.json so not needed only res.data
    // return res.json(); // return what backend sends us into json then back up to user form
    return res.data
  } else {
    throw new Error("Invalid Sign Up");
  }
}

// 500 -backend server not running