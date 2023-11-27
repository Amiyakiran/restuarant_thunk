import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//api call -  createAsyncThunk
export const fetchRestuarants = createAsyncThunk('restaurantList/fetchRestuarants',()=>{
    //api call - axios - install it npm i axios
    return  axios.get('/restaurant.json').then(response=>response.data.restaurants)
   
   

})

const restaurantSlice = createSlice({
    name:'restaurantList',
    initialState:{
        loading:false, //pending or not
        allRestaurants:[],
        allRestaurantsContainer:[],// when filter is applied on returning to original state is not possible that is why a new state is created. 
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
        state.allRestaurantsContainer = action.payload
        state.error = ""
       })
       builder.addCase(fetchRestuarants.rejected,(state,action)=>{
        state.loading=false
        state.allRestaurants = ""
        state.error = action.error.message
       }) 
    },

    reducers:{
        searchRestaurant :(state,action)=>{
          state.allRestaurants =  state.allRestaurantsContainer.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
        }
    }
})


export const {searchRestaurant} = restaurantSlice.actions
export default restaurantSlice.reducer