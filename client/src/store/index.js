import { configureStore } from "@reduxjs/toolkit";
import fetchedStore from "./fetchedStore";


const store = configureStore({
    reducer: {
        fetchData: fetchedStore.reducer,
    }
})

export default store