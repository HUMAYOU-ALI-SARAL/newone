import {signInWithGooglePopup,SignInWithEmailAndPassword} from '../../utils/FireBase/fireBase.utils'
import { useState} from 'react'
import Button from '../button/Button.component'
import './sign-in.styles.scss'
import { signOutUser } from '../../utils/FireBase/fireBase.utils'
import FormInput from '../form-input/form-input.component'
const userData={
  email:'',
  password:''
}
const SignIn=()=>{
  const [formData,setFormData]=useState(userData)
  const {email,password}=formData
  signOutUser()

    const logGoogleUserIn=async()=>{
     await signInWithGooglePopup()
   
    }
    const handleSubmit=async(event)=>{
      event.preventDefault()
        try{
             
     await SignInWithEmailAndPassword(email,password)
     
        }
        catch(error){
          if(error.code==="auth/user-not-found"){
            alert("no user is associated with this account")
          }
         else if(error.code==="auth/wrong-password"){
            alert("Wrong Password")
          }
          else{
            console.log(error)
          }
        }
    }
    const inputFieldHandler=(event)=>{
      setFormData({...formData,[event.target.name]:event.target.value})
    }
    return(
     <div className='sign-up-container'>
       <h2>Already have an account?</h2>
      <span>Sign In with your email and password</span>
        <form onSubmit={handleSubmit}>
           <FormInput type='email' name='email' value={email} label="Email"   onChange={inputFieldHandler}/>
           <FormInput type='password' name='password' value={password} label='Password' onChange={inputFieldHandler}/>
            <div className="buttons-container">
            <Button type='button' buttonType={'google'}  onClick={logGoogleUserIn}>
            Google SignIN
          </Button>
          <Button type='submit'>
            sign in
          </Button>
            </div>
         </form>
     </div>
    )
}


export default SignIn