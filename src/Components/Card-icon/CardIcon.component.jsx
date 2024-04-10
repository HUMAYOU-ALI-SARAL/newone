import { useContext } from 'react'
import { CardContext } from '../../context/Card.context'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'

const CardIcon=()=>{
 
  const {isCardOpen,setIsCardOpen,cardCount}=useContext(CardContext)
    const ToggleCardOpen=()=>  {setIsCardOpen(!isCardOpen)}
  
    return(
        <div className="cart-icon-container" onClick={ToggleCardOpen}>
          <ShoppingIcon className='shopping-icon'/>
        <div className="item-count">{cardCount}</div>
        </div>
    )
}


export default CardIcon