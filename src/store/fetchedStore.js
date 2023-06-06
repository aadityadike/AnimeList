import { createSlice } from "@reduxjs/toolkit";

const fetchedStore = createSlice({
    name: "fetchedStore",
    initialState: {
        animeData: []
    },
    reducers: {
        getFetchData: (state, action) => {
            state.animeData.push(action.payload.data);
        }
    }
})


export const Fetchdata = fetchedStore.actions;
export default fetchedStore;