import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
  editMode: false,
  currentTodo: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
    toggleEditMode: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      state.editMode = !state.editMode;
      state.currentTodo = todo || null;
    },
    updateTodo: (state, action) => {
      const selectedTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      console.log(action.payload);
      console.log(selectedTodo?.text);
    },
  },
});

export const { addTodo, removeTodo, toggleEditMode, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
