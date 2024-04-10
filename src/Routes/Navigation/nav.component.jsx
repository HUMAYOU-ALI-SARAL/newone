import { ReactComponent as CrownLogo } from "../../assets/crown.svg"
import { useContext } from "react"
import { UserContext } from "../../context/Context"
import { CardContext } from "../../context/Card.context"
import { Fragment } from "react"
import { Outlet,Link } from "react-router-dom"
import './navigation.styles.scss'
import { signOutUser } from "../../utils/FireBase/fireBase.utils"
import CardIcon from "../../Components/Card-icon/CardIcon.component"
import Dropdown from "../../Components/Card-dropdown/CardDropDown.component"

const Navigation = () =>{
  const {currentUser}=useContext(UserContext)
  const {isCardOpen}=useContext(CardContext)
    return(
       <Fragment>
         <div className="navigation">
        <Link to={'/home'}  className="logo-container">
          <CrownLogo className="logo"/>
        </Link>
            <div className="nav-links-container">
                 <Link to={'/shopdata'} className='nav-link'>
                 Shop
                 </Link> 
                 {
                  currentUser?(
                      <span className="nav-link" onClick={()=>signOutUser()}>Sign Out</span>
                  ):
                  (
                 <Link to={'/Authentication'} className='nav-link'>
                 Signin
                 </Link> 
                  )
                 }
                 <CardIcon/>
            </div>
            {isCardOpen&&<Dropdown/>}
         </div>
        <Outlet/>
       </Fragment>
    )
}

export default Navigation