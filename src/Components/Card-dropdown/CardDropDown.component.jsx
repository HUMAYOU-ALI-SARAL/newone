import './cart-dropdown.styles.scss'
import Button from '../button/Button.component'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CardContext } from '../../context/Card.context'
import CardItem from '../CardItem/CardItem.component'
const Dropdown=()=>{
  const navigate=useNavigate()
  const goToCheckOut=()=>{
  navigate('/Checkout')
  }
  const {cardItems}=useContext(CardContext)
    return(
      <div className="cart-dropdown-container">
        <div className="cart-items">
            {
              cardItems.map((item)=>{
                 return(
                  <CardItem key={item.id} cardItem={item}/>
                 )
              })
            }
         </div>
         <Button onClick={goToCheckOut} >Checkout</Button>
      </div>
    )
}

export default Dropdown