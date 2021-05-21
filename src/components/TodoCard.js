import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography
} from "@material-ui/core";
import { Done, DeleteOutlined, UndoOutlined } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { markAsCompleted, deleteTodo } from "../features/todoSlice";

export default function TodoCard({ id, status, taskName }) {
  const dispatch = useDispatch();

  const handleDoneClick = () => {
    dispatch(markAsCompleted(id));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <Card style={{ width: "fit-content", margin: "20px 20px 0 0" }}>
      <CardContent>
        <Typography variant="body1">{taskName}</Typography>
        <Typography variant="subtitle1">{status}</Typography>
      </CardContent>
      <CardActions>
        {/* Done Button */}
        {/* Pending -> Completed */}
        {/* tasks.map */}
        <IconButton
          onClick={handleDoneClick}
          style={{
            backgroundColor: status === "completed" ? "black" : "teal",
            color: "white"
          }}
        >
          {/* Conditional Rendering */}
          {/* To display separate icons for different task status */}
          {status === "completed" ? <UndoOutlined /> : <Done />}
        </IconButton>

        {/* Delete Button */}
        {/* Task should be removed -> tasks.filter */}
        <IconButton
          onClick={handleDeleteClick}
          style={{
            backgroundColor: "#eee"
          }}
        >
          <DeleteOutlined />
        </IconButton>
      </CardActions>
    </Card>
  );
}
