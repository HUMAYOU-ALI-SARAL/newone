import { createContext,useReducer} from "react";

const addCardItem = (cardItems, productToAdd) => {
  const itemExists = cardItems.find((item) => {
    return item.id === productToAdd.id;
  });

  if (itemExists) {
    return cardItems.map((existingItem) => {
      return existingItem.id === productToAdd.id
        ? { ...existingItem, quantity: existingItem.quantity + 1 }
        : existingItem;
    });
  }

  return [...cardItems, { ...productToAdd, quantity: 1 }];
};
const removeCardItem = (cardItems, productToRemove) => {
  const existingCardItem = cardItems.find(
    (cardItem) => cardItem.id === productToRemove.id
  );
  if (existingCardItem.quantity === 1) {
    return cardItems.filter((cardItem) => cardItem.id !== productToRemove.id);
  }
  return cardItems.map((existingItem) => {
    return existingItem.id === productToRemove.id
      ? { ...existingItem, quantity: existingItem.quantity - 1 }
      : existingItem;
  });
};
const removeFromCheckout=(cardItems,itemToClear)=>{
return(
    cardItems.filter((cardItem)=>cardItem.id!==itemToClear.id)
)
}
export const CardContext = createContext({
  isCardOpen:false,
  setIsCardOpen: () => {},
  cardItems: [],
  addToCard: () => {},
  removeFromCard: () => {},
  clearCardItem:()=>{},
  cardCount: 0,
  total:0
});

export const CardContextProvider = ({ children }) => {


  const INITIAL_STATE={
    isCardOpen:false,
    cardItems:[],
    CardCount:0,
    total:0
  }

  const useReducerHandler=(state,action)=>{
    const {type,payload}=action
 
    switch(type)
    {
     case 'SET_CART_ITEMS':
      return{
        ...state,
        ...payload
      }
      case 'SET_IS_CARD_OPEN':
        return{
          ...state,
          isCardOpen:payload
        }

     default:
      throw new Error(`invalid type ${type} in card.context.jsx`)
      
    }
  }
   const [{cardItems,isCardOpen,cardCount,total},dispatch]=useReducer(useReducerHandler,INITIAL_STATE)

const updateCartItemsReducer=(newCartItems)=>{


  const cardCoun = cardItems.reduce((previous, next) => {
    return previous + next.quantity;
  }, 0);

  const Total= cardItems.reduce((previous, next) => {
    return previous + next.quantity*next.price;
  }, 0);

  dispatch({type:'SET_CART_ITEMS',payload:{cardItems:newCartItems,total:Total,cardCount:cardCoun}})
}
  const setIsCardOpen=(bool)=>{
   dispatch({type:'SET_IS_CARD_OPEN',payload:bool})
  }



  const addToCard = (productToAdd) => {
   const updateCard= addCardItem(cardItems, productToAdd);
   updateCartItemsReducer(updateCard)
  };
  const removeFromCard = (productToRemove) => {
    const updateCart=removeCardItem(cardItems, productToRemove);
   updateCartItemsReducer(updateCart)

  };
  const clearCardItem = (itemToClear) => {
    const updateCart=removeFromCheckout(cardItems, itemToClear);
    updateCartItemsReducer(updateCart)
  };

  const value = {
    isCardOpen,
    setIsCardOpen,
    addToCard,
    cardItems,
    cardCount,
    removeFromCard,
    clearCardItem,
    total
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
