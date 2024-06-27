import { TasksList } from "../components/TasksList";

const styles = {
  container: {
    padding: "30px",
    backgroundColor: "#333",
    borderRadius: "20px",
    boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
    maxWidth: "1000px",
    margin: "60px auto",
  },
  tasksList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "20px",
    margin: "0",
  },
};

export function TasksPage() {
  return (
    <div style={styles.container}>
      <TasksList style={styles.tasksList} />
    </div>
  );
}