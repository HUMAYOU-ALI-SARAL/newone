import { useState} from "react"
import {  createUserWithEmailAndPAssword,createUserFromAuth} from "../../utils/FireBase/fireBase.utils"
import FormInput from "../form-input/form-input.component"
import Button from "../button/Button.component"
import '../sign-up/sign-up.styles.scss'
import '../form-input/form-input.styles.scss'
const userData={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}
const SignUp=()=>{
    const [inputValue,setInputValue]=useState(userData)
    const {displayName,email,password,confirmPassword}=inputValue
    
    const resetFromField=()=>{
     setInputValue(userData)
    }
    const submitHandler=async (e)=>{
        e.preventDefault();
        alert(123)
        if(password!==confirmPassword){
            alert("password and confirm password does not match")
            return
        }
        
       try{
        const {user}=await createUserWithEmailAndPAssword(email,password)
        await createUserFromAuth(user,{displayName})
        resetFromField();
       }
       catch(error){
       if(error.code==='auth/email-already-in-use'){
        alert('YOU ALREADY HAVE AN ACCOUNT')
       }
       }
    }

    const inputEventHandler=(event)=>{
     const {name,value}=event.target
     setInputValue({...inputValue,[name]:value})
    }

    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form action="" onSubmit={submitHandler}>
                <FormInput
                 label='Display Name' 
                 type="text" 
                 name="displayName"
                 value={displayName}
                 onChange={inputEventHandler}/>
                
                <FormInput
                  type="email"
                  label='Email'
                  name='email' value={email} 
                  onChange={inputEventHandler}/>

                <FormInput
                 type="password" 
                 label='Type Password'
                 name="password"
                 value={password}
                 onChange={inputEventHandler}/>

                <FormInput
                 type="password" 
                 label='confirm password' 
                 name="confirmPassword" 
                 value={confirmPassword} 
                 onChange={inputEventHandler}/>
                <Button buttonType={'inverted'} type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default SignUp