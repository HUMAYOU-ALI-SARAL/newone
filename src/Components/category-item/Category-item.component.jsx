import React from 'react'
import '../directory/directory.styles.scss'
 const Category=({categories})=>{
  const {imageUrl,title}=categories
  return(
    <div className="category-container">
  <div className="background-image" style={{
    backgroundImage:`url(${imageUrl})`
  }}/>
  <div className="category-body-container">
    <h2>{title}</h2>
    <p>shop now</p>
  </div>
</div>
  )
}
export default Category
