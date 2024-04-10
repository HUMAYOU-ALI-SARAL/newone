import Button from "../button/Button.component"
import { useContext } from "react"
import { CardContext } from "../../context/Card.context"
import './product-card.styles.scss'
const ProductCard=({product})=>{
    const {addToCard}=useContext(CardContext)
    const {name,price,imageUrl}=product
    const addProductsToCard=()=>{
        addToCard(product)
    }
    return(
        <div className="product-card-container">
        <img src={imageUrl} alt="name" />
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <Button buttonType={'inverted'} onClick={addProductsToCard} >Add to card</Button>
    </div>
    )
}

export default ProductCard