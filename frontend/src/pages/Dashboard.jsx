import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import api from '../services/api';

function Dashboard() {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await api.get('/tasks/stats');
        setStats(data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load statistics');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="page">
      <Navbar />
      <main className="container">
        <div className="page-header">
          <h1>Dashboard</h1>
          <Link to="/tasks" className="btn btn-primary">
            Manage Tasks
          </Link>
        </div>

        {loading && <p className="muted">Loading statistics...</p>}
        {error && <p className="error">{error}</p>}

        {stats && (
          <div className="stats-grid">
            <div className="stat-card">
              <span>Total Tasks</span>
              <strong>{stats.totalTasks}</strong>
            </div>
            <div className="stat-card completed">
              <span>Completed</span>
              <strong>{stats.completedTasks}</strong>
            </div>
            <div className="stat-card pending">
              <span>Pending</span>
              <strong>{stats.pendingTasks}</strong>
            </div>
            <div className="stat-card overdue">
              <span>Overdue</span>
              <strong>{stats.overdueTasks}</strong>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
