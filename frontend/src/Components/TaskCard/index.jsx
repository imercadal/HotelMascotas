import React from "react";
import { useTasks } from "../../Context/TasksContext";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box
} from '@mui/material';

const TaskCard = ({ task }) => {

  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/task/${task._id}`);
  }


  const { deleteTask } = useTasks();
  return (
    <Card>
      <CardContent sx={{justifyContent: "center"}}>
        <Typography variant="h4">
          {task.title}
        </Typography>
        <Typography variant="body1">{task.description}</Typography>
        <Typography variant="h6">{new Date(task.date).toLocaleDateString()}</Typography>
        <Box>
          <Button onClick={() => deleteTask(task._id)} variant="secondary">delete</Button>
          <Button onClick={ handleEdit } variant="secondary">edit</Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
