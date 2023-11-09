import {configureStore} from "@reduxjs/toolkit";
import calculateSlice from "@/store/slices/calculate.slice";
import constructorSlices from "@/store/slices/constructor.slices";

export const store = configureStore({
    reducer: {
        calculate: calculateSlice,
        constructorCalculate: constructorSlices

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
