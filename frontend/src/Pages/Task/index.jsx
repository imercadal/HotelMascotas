import Layout from "../../Layout";

import TaskCard from "../../Components/TaskCard";

import { useEffect } from "react";
import { useTasks } from "../../Context/TasksContext";

import { 
  Stack
} from '@mui/material';

function TaskPage() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return <h1>No hay tareas</h1>;

  return (
    <Layout>
      <h1>My reservations</h1>
      <Stack spacing={2}>
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </Stack>
≈
    </Layout>
  );
}

export default TaskPage;
