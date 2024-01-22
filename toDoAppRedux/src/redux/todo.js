import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
    name: "todos", // Reducerin ismi 
    initialState: [], // State'nin ilk hali
    reducers: {
        todoAdd: (state, action) => { // Ekleme actionu 
            const newTodo = {
                id: state.length + 1,
                TodoText: action.payload,
            };
            state.push(newTodo);
        },
        todoDelete: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload)
        }   
    }
});
export const { todoAdd, todoDelete } = todoListSlice.actions;
export default todoListSlice.reducer;