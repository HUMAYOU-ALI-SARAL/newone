import { useState,useEffect} from 'react'
import {createContext} from 'react'
import { getCategaroiesAndReference} from '../utils/FireBase/fireBase.utils.js'


export const ProductsContext=createContext({
products:{}
})

export const ContextProvider=({children})=>{
  const [products,setProducts]=useState({})  
useEffect(()=>{
    const getCategoriesMap=async()=>{
      const categoryMap= await getCategaroiesAndReference()
      setProducts(categoryMap)
    } 
    getCategoriesMap()
},[])
    const value={products}
    return(
   <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>

    )
}