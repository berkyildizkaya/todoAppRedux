import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
    name: "todos", // Reducerin ismi 
    initialState: [], // State'nin ilk hali
    reducers: {
        todoAdd: (state, action) => { // Ekleme actionu 
            const newTodo = {
                id: state.length + 1,
                TodoText: action.payload,
                isComplete: false
            };
            state.push(newTodo);
        },
        todoDelete: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload)
        },
        todoComplete: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.isComplete = !todo.isComplete;
            }
        }
    }
});
export const { todoAdd, todoDelete,todoComplete } = todoListSlice.actions;
export default todoListSlice.reducer;