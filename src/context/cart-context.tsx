import * as React from "react";
import { ReactNode, createContext, useContext, useReducer } from "react";

/**
 * @todo - need to update types, reducer, actions etc...
 */

interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  total: string;
  quantity: number;
}
interface IQuantity {
  quantity: number;
  id: number;
}
export const enum ActionTypes {
  ADD = "add to cart",
  REMOVE = "remove from cart",
  INCQUANTITY = "increase quantity",
}
interface InitalState {
  cart: any[];
}
export type CartAction = {
  type: ActionTypes;
  payload: IProduct | IQuantity;
};
type Dispatch = (action: CartAction) => void;

const CartContext = createContext<
  { state: InitalState; dispatch: Dispatch } | undefined
>(undefined);

function cartReducer(state: InitalState, action: CartAction): InitalState {
  const { type, payload } = action;
  switch (type) {
    case "add to cart":
      return { cart: [...state.cart, payload] };
    case "remove from cart":
      const removedItem = state.cart.filter(
        (prod: IProduct) => prod.id !== payload.id
      );
      return { cart: removedItem };
    case "increase quantity":
      const foundProdIndx = state.cart.findIndex(
        (prod: IProduct) => prod.id === payload.id
      );
      state.cart[foundProdIndx].quantity += payload.quantity;
      state.cart[foundProdIndx].total =
        Number(state.cart[foundProdIndx].quantity) *
        Number(state.cart[foundProdIndx].price);
      return state;
    default:
      return state;
  }
}

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });

  const value = { state, dispatch };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
