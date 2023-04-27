import {createAsyncThunk} from '@reduxjs/toolkit';

import HomeService from './home.service';

export const showMessage = createAsyncThunk(
    "home/showMessage",
    async () =>{
        const res = await HomeService.showMessage();
        return res.data;
    }
)
