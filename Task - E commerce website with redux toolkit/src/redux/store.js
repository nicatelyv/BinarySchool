import { configureStore } from '@reduxjs/toolkit';
import productsApi from './productsApi';
import cartReducer from "./productsSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productsApi.middleware)
    }
});

export default store;