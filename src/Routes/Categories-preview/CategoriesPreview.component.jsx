import { useContext } from "react";
import CategoryPreview from "../../Components/category-preview/CategoriesPreview.compontent";
import { ProductsContext } from "../../context/Products.context";
const CategoriesPreview = () => {
  const { products } = useContext(ProductsContext);
  console.log(products)
  return (
    <div>
      {Object.keys(products).map((product) => {
        const produc=products[product]
      return(
           <CategoryPreview key={product} products={produc} title={product}/>
      )
      })}
    </div>
  );
};

export default CategoriesPreview;
