// service to customers
// import all named exports
import * as usersAPI from './users-api'

export async function signUp(userData){
    // Delegate the network request code to the uers-api.js
    // API module which ultimately return a JSON web token (JWT)
    console.log('1');
    const token = await usersAPI.signUp(userData)
    console.log('2');
    // baby step by returning whatever is sent back by the server
    return token
}