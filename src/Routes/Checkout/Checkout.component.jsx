import './checkout.styles.scss'
import { useContext } from "react"
import { CardContext } from "../../context/Card.context"
import CheckOutItem from '../../Components/CheckOutItem/CheckoutItem.component'
const Checkout=()=>{
    const {cardItems,total}=useContext(CardContext)
    return(
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Products</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                    </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            <h1>I am checkout page</h1>
                {
                    cardItems.map((cardItem)=>{
                        return(
                          <CheckOutItem cardItem={cardItem} key={cardItem.id}/>
                        )
                    })
                }
               <span className='total'>Total:${total}</span>
        </div>
    )
}

export default Checkout