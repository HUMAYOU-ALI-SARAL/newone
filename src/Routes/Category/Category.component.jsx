import { useContext,useEffect,useState} from "react"
import './Category.style.scss'
import { useParams } from "react-router-dom"
import ProductCard from "../../Components/ProductCards/ProductCards"
import { ProductsContext } from "../../context/Products.context"
const Category=()=>{
    const {category}=useParams()
    const {products}=useContext(ProductsContext)
    const [categoryItem,setCategoryItem]=useState()
      useEffect(()=>{
        setCategoryItem(products[category])
        
      },[category,products])
    
    return(
     <div className="container-category-preview">
          <h2 className="heading">{category}</h2>
        <div className="container-category">
      {
            categoryItem&&
        categoryItem.map((product)=>{
            return(
          <ProductCard product={product} key={product.id}/>

            )
        })
      }
        </div>
     </div>
    )
}


export default Category