import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography
} from "@material-ui/core";
import { Done, DeleteOutlined } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { markAsCompleted } from "../features/todoSlice";

export default function TodoCard({ id, status, taskName }) {
  const dispatch = useDispatch();

  const handleDoneClick = () => {
    dispatch(markAsCompleted(id));
  };

  return (
    <Card>
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
            backgroundColor: "teal",
            color: "white"
          }}
        >
          <Done />
        </IconButton>

        {/* Delete Button */}
        {/* Task should be removed -> tasks.filter */}
        <IconButton
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
