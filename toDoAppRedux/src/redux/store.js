import { configureStore } from "@reduxjs/toolkit";
import  todoListSlice  from "./todo";

const store = configureStore({
    reducer:{
        todos:todoListSlice
    },
});
export default store;