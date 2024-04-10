import SignUp from '../../Components/sign-up/Sign-up.component'
import SignIn from '../../Components/signIn/signIn.component'
import './authentication.styles.scss'
const Authentication=()=>{
    

    return(
        <div className='authentication-container'>    
        <SignIn/>    
        <SignUp/>
        </div>
    )
}
export default Authentication