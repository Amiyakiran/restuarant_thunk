import restaurantSlice from "./restaurantSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer:{
        restaurantSlice
    }
})

export default store