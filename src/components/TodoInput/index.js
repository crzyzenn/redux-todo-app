import { TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { storeTodoInput } from "../../features/todoSlice";

export default function TodoInput() {
  const state = useSelector((state) => state.todo);
  console.log(state);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let todoInput = e.target.value;
    dispatch(storeTodoInput(todoInput));
  };

  return (
    <>
      <TextField
        style={{ display: "block", margin: "20px 0 15px 0" }}
        fullWidth
        label="Enter your todo task"
        variant="outlined"
        onChange={handleChange}
      />
    </>
  );
}
