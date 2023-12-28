import { createSlice } from "@reduxjs/toolkit";
import data_cart from '../data/data_cart.json'
import AutosDisp from '../data/AutosDisp.json'

export const shopSlice = createSlice({
    name: "shop",
    initialState:{
        idMovilSelected: 0,
        Moviles_data: AutosDisp
    },
    reducers:{
        setIdMovilSelected: (state, action) => {
            state.idMovilSelected = action.payload
        }
    }
})

export const {setIdMovilSelected} = shopSlice.actions

export default shopSlice.reducer