import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import { TaskCard } from "./TaskCard";

const styles = {
  tasksContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "2rem",
    padding: "4rem",
    backgroundColor: "#f7f7f7",
  },
  taskCard: {
    margin: "0",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "15px",
    overflow: "hidden",
  },
};

export function TasksList() {
  const [tasks, setTasks] = useState([]); 

  useEffect(() => {
    async function loadTasks() {
      const res = await getAllTasks();
      setTasks(res.data);
    }
    loadTasks();
  }, []);

  return (
    <div style={styles.tasksContainer}>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} style={styles.taskCard} />
      ))}
    </div>
  );
}