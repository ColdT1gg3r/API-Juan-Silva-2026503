import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import { TasksFormPage } from "./pages/TasksFormPage";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f0f0f0",
    minHeight: "100vh",
  },
  navBar: {
    backgroundColor: "#333",
    color: "#ffffff",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pageContainer: {
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  toaster: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1000,
  },
};

function App() {
  return (
    <BrowserRouter>
      <div style={styles.appContainer}>
        <Navigation style={styles.navBar} />
        <Routes>
          <Route path="/" element={<Navigate to="/tasks" />} />
          <Route path="/tasks" element={<TasksPage style={styles.pageContainer} />} />
          <Route path="/tasks-create" element={<TasksFormPage style={styles.pageContainer} />} />
          <Route path="/tasks/:id" element={<TasksFormPage style={styles.pageContainer} />} />
        </Routes>
        <Toaster style={styles.toaster} />
      </div>
    </BrowserRouter>
  );
}

export default App;