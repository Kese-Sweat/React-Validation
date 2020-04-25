import React, { useState} from 'react'
import validator from 'validator'



function Form(props){
    const [name, setName]= useState('')
    const [nameError, setNameError] = useState ('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError]= useState('')
    const [username, setUserName] = useState('')
    const [usrError, setUsrError] = useState ('')
    const [password, setPassword] = useState ('')
    const [passwordError, setPasswordError]= useState('')
    const [confirmPassword, setConfirmPassword] = useState ('')
    const [confirmError, setConfirmError] = useState ('')
    const [website, setWebsite]= useState ('')
    const [websiteError, setWebsiteError] = useState ('')

    
    function handleSubmit (e){
        e.preventDefault()
        
        let valid = true
        if (name === ''){
            valid = false
            setNameError(' cannot be blank.')
        }
        else{
            setNameError('')
        }

        if (email === ''){
            valid = false
            setEmailError( ' cannot be blank')
        }

        if (validator.isEmail(email)) {
            setEmailError('')
        }

        else{ valid = false
            setEmailError( ' cannot be blank')}
        
        if (username === ''){
            valid = false
            setUsrError (' cannot be blank')
        }
        else {
            setUsrError ('')
        }
        if (password === ''){
            valid = false
            setPasswordError (' cannot be blank')
        }
        else {
            setPasswordError ('')
        }
        if (confirmPassword === ''){
            valid = false
            setConfirmError (' cannot be blank')
        }
        else {
            setConfirmError ('')
        }

        if (website === ''){
            valid = false
            setWebsiteError (' cannot be blank')
        }
        else {
            setWebsiteError ('')
        }
        
        if(valid){
            props.history.push('/success')
          }

        

    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label
                    className= {nameError ? 'error' : ''}
                    htmlFor="fname">Name{nameError}</label>
                    <input id="fname" type="text" className= {nameError ? 'error' : ''} onChange={(e)=> setName(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <label
                    className= {emailError ? 'error' : ''}
                    htmlFor="email">Email{emailError ? emailError : null}</label>
                    <input id="email" type="email" className= {nameError ? 'error' : ''} onChange={(e)=> setEmail(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <label
                    className= {usrError ? 'error' : ''}
                    htmlFor="username">Username {usrError ? usrError : null}</label>
                    <input id="username" type="text" className= {nameError ? 'error' : ''} onChange={(e)=> setUserName(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <label className= {passwordError ? 'error' : ''}
                    htmlFor="name">Password{passwordError ? passwordError : null}</label>
                    <input id="Password" type="password" className= {nameError ? 'error' : ''} onChange={(e)=> setPassword(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <label className= {confirmError ? 'error' : ''}
                    htmlFor="confirmpassword">Confirm Password{confirmError? confirmError : null}</label>
                    <input id="confirmpassword" type="password" className= {nameError ? 'error' : ''} onChange={(e)=> setConfirmPassword(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <label className= {websiteError ? 'error' : ''}
                     htmlFor="website">Website{websiteError ? websiteError : null}</label>
                    <input id="website" type="url" className= {nameError ? 'error' : ''} onChange={(e)=> setWebsite(e.target.value)}/>
             </fieldset>
             <fieldset>
                 <button type="submit" >Submit</button>
             </fieldset>
            </form>
        </div>


    )}

export default Form