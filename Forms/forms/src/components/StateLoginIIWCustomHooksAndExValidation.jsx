import React from 'react';
import { useState } from 'react';
import CustomInput from './CustomInput';
import { isEmail, hasMinLength } from '../util/validation';

const StateLoginIIWCustomHooksAndExValidation = () => {
    const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: ''
    });
    
      const [didEdit, setDidEdit] = useState({
        email: false,
        password: false
    });
    
    const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');
    const passwordIsInvalid = didEdit.password && enteredValues.password.trim().length < 6;
    // const emailIsInvalid = didEdit.email && !isEmail(enteredValues.email);
    // const passwordIsInvalid = didEdit.password && !hasMinLength(enteredValues.password, 4);

    function handleSubmit(event){
        event.preventDefault();
    };
    
    function handleInputChange(identifier, value){
       setEnteredValues(prevValues => ({
        ...prevValues,
        [identifier]: value
       }));
       setDidEdit(prevEdit => ({
        ...prevEdit,
        [identifier]: false
       }))
    };
    
    function handleInputBlur(identifier){
      setDidEdit(prevEdit => ({
        ...prevEdit,
        [identifier]: true
      }))
    }
    
    
    return (
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
    
          <div className="control-row">
            <CustomInput label="Email" id="email" type="email" name="email" error={emailIsInvalid && 'Please enter a valid email'} onBlur={() => handleInputBlur('email')} onChange={(event) => handleInputChange('email', event.target.value)} value={enteredValues.email}/>
            <CustomInput label="Password" id="password" type="password" name="password" error={passwordIsInvalid && 'Please enter a password above 6 length'} onBlur={() => handleInputBlur('password')} onChange={(event) => handleInputChange('password', event.target.value)} value={enteredValues.password}/>
          </div>
    
          <p className="form-actions">
            <button className="button button-flat">Reset</button>
            <button className="button">Login</button>
          </p>
        </form>
      );
}

export default StateLoginIIWCustomHooksAndExValidation