import { createSlice } from "@reduxjs/toolkit";

import * as HomeAction from "./home.action";

const homeSlice = createSlice({
    name: 'home',
    initialState:{
    },
    extraReducers: {
        [HomeAction.showMessage.fulfilled]: (state, action) => {
             return action.payload
        },
        [HomeAction.showMessage.rejected]: (state, action)=> {
            return {...state, ...{}}
        }
        
    }
})
export const {reducer} = homeSlice
export default reducer;