import { useNavigate } from "react-router-dom";

const styles = {
  cardContainer: {
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
    padding: "2rem",
    borderRadius: "20px",
    cursor: "pointer",
    margin: "2rem",
    backgroundColor: "#f7f7f7",
    transition: "box-shadow 0.2s ease"
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#222",
    margin: 0,
    textTransform: "uppercase"
  },
  description: {
    fontSize: "1.5rem",
    color: "#444",
    lineHeight: "1.5"
  },
  hr: {
    borderColor: "#ccc",
    margin: "2rem 0",
    opacity: 0.5
  }
};

export function TaskCard({ task }) {
  const navigate = useNavigate();

  return (
    <div
      style={styles.cardContainer}
      onClick={() => {
        navigate(`/tasks/${task.id}`);
      }}
    >
      <h1 style={styles.title}>{task.title}</h1>
      <p style={styles.description}>{task.description}</p>
      <hr style={styles.hr} />
    </div>
  );
}