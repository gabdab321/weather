import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    devTools: true,
    reducer: {

    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch