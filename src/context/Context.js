import {createContext,useEffect,useReducer} from 'react'
import { onAuthStateChangeListener,createUserFromAuth} from '../utils/FireBase/fireBase.utils'

export const UserContext=createContext({
    currentUser:null,
    // setCurrentUser:null
    });
    
     export const USER_ACTION_TYPES={
      SET_CURRENT_USER:'SET_CURRENT_USER'
     } 

    const userReducer=(state,action)=>{
       const {type,payload}=action;
       switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
          return{
            currentUser:payload
          }

          default:
            throw new Error(`unhandled type ${type} in context.js`)
       }


    }

    const INITIAL_STATE={
      currentUser:null
    }
    export const UserProvider=({children})=>{
      // const [currentUser,setCurrentUser]=useState(null)
      const [state,dispatch]=useReducer(userReducer,INITIAL_STATE)
      const {currentUser}=state
      const setCurrentUser=(user)=>{
        dispatch({type:USER_ACTION_TYPES.SET_CURRENT_USER,payload:user})
      }
      const value={currentUser,setCurrentUser}
      useEffect(()=>{
       const userState=onAuthStateChangeListener((user)=>{
        if(user){
        createUserFromAuth(user)
        }
          setCurrentUser(user)
       })
       return userState
      },[])
      return (
      <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}