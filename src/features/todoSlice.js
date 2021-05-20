import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: "",
    tasks: [],
    snackbar: {
      open: false,
      message: ""
    }
  },
  reducers: {
    addTodo: (state, action) => {
      if (state.todo) {
        // Check if the task that we're adding exists in the current store.
        let taskExists = state.tasks.findIndex(
          // 1 == "1" true 1 === "1" false
          (task) => task.name === state.todo
        );

        // If it doesn't exist, add the task.
        if (taskExists === -1) {
          state.tasks.push({
            id: uuidv4(),
            name: state.todo,
            status: "pending" // pending
          });

          // Open snackbar
          state.snackbar = {
            open: true,
            message: "Todo Added"
          };
        } else {
          state.snackbar = {
            open: true,
            message: "Task already exists. Please add a different task!"
          };
        }
      } else {
        // Open snackbar
        state.snackbar = {
          open: true,
          message: "Please type something..."
        };
      }
    },
    storeTodoInput: (state, action) => {
      state.todo = action.payload;
    },
    closeSnackbar: (state) => {
      state.snackbar = {
        open: false,
        message: ""
      };
    },
    markAsCompleted: (state, action) => {
      // Task Id to update
      let taskId = action.payload;

      // Updater
      state.tasks = state.tasks.map((task) => {
        // If task id matches then
        // Change status to completed
        if (task.id === taskId) {
          return {
            ...task,
            status: "completed"
          };
        } else {
          return task;
        }
      });
    }
  }
});

export const {
  storeTodoInput,
  addTodo,
  closeSnackbar,
  markAsCompleted
} = todoSlice.actions;
export default todoSlice.reducer;
