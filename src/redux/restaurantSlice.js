import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//api call -  createAsyncThunk
export const fetchRestuarants = createAsyncThunk('restaurantList/fetchRestuarants',()=>{
    //api call - axios - install it npm i axios
   const res= axios.get('/restaurant.json').then(response=>response.data.restaurants)
   console.log(res);
   return res

})

const restaurantSlice = createSlice({
    name:'restaurantList',
    initialState:{
        loading:false, //pending or not
        allRestaurants:[],
        error:''
    },//we are doing api calls here which works on promise that have three state - pending reject accept

    //now need to do api call - which is a asynchronous function but reduxe is a synchronous function
    //use createAsyncThunk: accepts an action type string and a function that returns a promise, and generates a thunk that dispatches pending/fulfilled/rejected action types based on that promise
    // createAsyncThunk is not a part of slice its a method in toolkit

    extraReducers:(builder)=>{
       //builder holds the value/response from the thunk
       builder.addCase(fetchRestuarants.pending,(state)=>{
        state.loading=true
       })
       builder.addCase(fetchRestuarants.fulfilled,(state,action)=>{
        state.loading=false
        state.allRestaurants = action.payload
        state.error = ""
       })
       builder.addCase(fetchRestuarants.rejected,(state,action)=>{
        state.loading=false
        state.allRestaurants = ""
        state.error = action.error.message
       }) 
    }
})


export default restaurantSlice.reducer