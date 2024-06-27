import { useEffect } from "react";
import { get, useForm } from "react-hook-form";
import { createTask, deleteTask, updateTask, getTask } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const styles = {
  container: {
    maxWidth: "800px",
    margin: "60px auto",
    padding: "30px",
    backgroundColor: "#333",
    borderRadius: "20px",
    boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
  },
  form: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    padding: "20px",
  },
  input: {
    width: "100%",
    padding: "15px",
    margin: "10px 0",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#444",
    color: "#fff",
  },
  error: {
    color: "#ff69b4",
    fontSize: "14px",
    marginBottom: "10px",
  },
  button: {
    backgroundColor: "#009688",
    color: "#fff",
    padding: "15px 30px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    color: "#fff",
    padding: "15px 30px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    marginLeft: "20px",
  },
};

export function TasksFormPage() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const navigate = useNavigate();
  const params = useParams();
  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateTask(params.id, data);
      toast.success("Tarea actualizada");
    } else {
      await createTask(data);
      toast.success("Tarea creada");
    }
    navigate("/tasks");
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const { data: { title, description } } = await getTask(params.id);
        setValue("title", title);
        setValue("description", description);
      }
    }
    loadTask();
  }, []);

  return (
    <div style={styles.container}>
      <form onSubmit={onSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Tittle"
          {...register("title", { required: true })}
          style={styles.input}
        />
        {errors.title && (
          <span style={styles.error}>THIS FIELD IS REQUIERED</span>
        )}
        <textarea
          rows="3"
          placeholder="Description"
          {...register("description", { required: true })}
          style={styles.input}
        />
        {errors.description && (
          <span style={styles.error}>THIS FIELD IS REQUIERED</span>
        )}
        <button style={styles.button}>Save</button>
      </form>
      {params.id && (
        <button
          onClick={async () => {
            const accepted = window.confirm("Are you sure?");
            if (accepted) {
              await deleteTask(params.id);
              toast.success("Tarea eliminada");
              navigate("/tasks");
            }
          }}
          style={styles.deleteButton}
        >
          Delete
        </button>
      )}
    </div>
  );
}