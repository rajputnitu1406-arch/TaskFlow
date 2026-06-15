import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/dashboard">TaskFlow</Link>
      </div>
      <div className="navbar-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/tasks">Tasks</Link>
        <span className="user-name">{user?.name}</span>
        <button type="button" className="btn btn-secondary" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
