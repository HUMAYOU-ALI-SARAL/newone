import './checkout-item.styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft,faAngleRight,faXmark} from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react"
import { CardContext } from "../../context/Card.context"
const CheckOutItem=({cardItem})=>{
    const {name,imageUrl,price,quantity}=cardItem
    const {addToCard,clearCardItem,removeFromCard}=useContext(CardContext)

    return(
     <div className="checkout-item-container">
        <div className="image-container">
            <img src={imageUrl} alt={name} />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{price}</span>
        <span className="price">
            <span className="arrow" onClick={()=>removeFromCard(cardItem)}>
            <FontAwesomeIcon icon={faAngleLeft} />
            </span>
            {quantity}
            <span className="arrow"  onClick={()=>addToCard(cardItem)}>
             <FontAwesomeIcon icon={faAngleRight} />
            </span>
            
            </span>
        <span className="remove-button"  onClick={()=>{clearCardItem(cardItem)}}>
        <FontAwesomeIcon icon={faXmark} />
        </span>
     </div>
    )
}

export default CheckOutItem