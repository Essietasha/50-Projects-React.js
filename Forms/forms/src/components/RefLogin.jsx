import React, { useState, useRef } from 'react'

const RefLogin = () => {
  const [formMailInvalid, setFormMailInvalid] = useState(false);

  const email = useRef();
  const password = useRef();
  
  function handleSubmit(event){
    event.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsInvalid = !enteredEmail.includes('@');

      if(emailIsInvalid){
        setFormMailInvalid(true);
        return;
      }

      setFormMailInvalid(false);
    };

    
    

    return (
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
    
          <div className="control-row">
            <div className="control no-margin">
              <label htmlFor="email">Email</label>
              <input id="email" type='email' name="email" ref={email}/>
              <div className='control-error'>{formMailInvalid && <p>Please enter a valid email</p>}</div>
            </div>
    
            <div className="control no-margin">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" name="password" ref={password}/>
            </div>
          </div>
    
          <p className="form-actions">
            <button className="button button-flat">Reset</button>
            <button className="button">Login</button>
          </p>
        </form>
      );
}

export default RefLogin;