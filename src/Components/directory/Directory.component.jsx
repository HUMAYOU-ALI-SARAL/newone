import Category from "../category-item/Category-item.component"
const Directory=({categories})=>{
    console.log(categories)
  return(
    <div className="categories-container">
    {
      categories.map((category)=>{
        return(
     <Category key={category.id} categories={category}/>
        )
      })
    }
  </div>
  )
}

export default Directory