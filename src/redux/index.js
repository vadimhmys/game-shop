import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './cart/reducer';
import GamesReducer from './games/reducer';

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    games: GamesReducer
  }
}); 