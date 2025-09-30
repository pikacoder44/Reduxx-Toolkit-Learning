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
    setcurrentTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((t) => t.id === id);
      if (todo) {
        todo.text = text;
      }
      state.editMode = false;
      state.currentTodo = null;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  toggleEditMode,
  setcurrentTodo,
  updateTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
