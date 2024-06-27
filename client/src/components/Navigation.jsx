import { Link } from "react-router-dom";

const styles = {
  navContainer: {
    backgroundColor: '#212121',
    padding: '2rem',
    display: 'flex',
    justifyContent: 'pace-between',
    alignItems: 'center',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '28px',
    transition: 'color 0.2s ease'
  },
  marginRight: {
    marginRight: '30px'
  }
};

export function Navigation(){
  return(
    <div style={styles.navContainer}>
      <Link to="/tasks" style={{...styles.link,...styles.marginRight }}>
        Task App
      </Link>
      <Link to="/tasks-create" style={styles.link}>
        Create Tasks
      </Link>
    </div>
  )
}