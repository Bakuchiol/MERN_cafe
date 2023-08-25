// // class to function component exercise
import { useState } from "react";

// creating an instance of a class component
const SignUpForm = () => {

    const [ state, setState] = useState({})

    const handleChange = (evt) => {
            setState({
                ...state,
                [evt.target.name]: evt.target.value,
                error: '',
            })
            // setState({...state, 
            //     name: evt.target.value,
            //     email: evt.target.value,
            //     password: evt.target.value,
            //     confirm: evt.target.value,
            //     error: evt.target.value,
            // })
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(JSON.stringify(state))
    }

    const disable = state.password !== state.confirm;

    return (
        <div>
              <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                  <label>Name</label>
                  <input
                  type="text" 
                  name="name" 
                  value={state.name} 
                  onChange={handleChange} 
                  required 
                  />
                  <label>Email</label>
                  <input 
                  type="email" 
                  name="email" 
                  value={state.email} 
                  onChange={handleChange} 
                  required 
                  />
                  <label>Password</label>
                  <input 
                  type="password" 
                  name="password" 
                  value={state.password} 
                  onChange={handleChange} 
                  required 
                  />
                  <label>Confirm</label>
                  <input 
                  type="password" 
                  name="confirm" 
                  value={state.confirm} 
                  onChange={handleChange} 
                  required 
                  />
                  <button type="submit" disabled={disable}>SIGN UP</button>
                </form>
              </div>
              <p className="error-message">&nbsp;{state.error}</p>
            </div>
          );
    }

export default SignUpForm