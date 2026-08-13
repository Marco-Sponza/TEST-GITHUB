import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

const navigation = [
  { to: '/activities', label: 'Activities' },
  { to: '/workouts', label: 'Workouts' },
  { to: '/teams', label: 'Teams' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/users', label: 'Users' },
];

function Dashboard() {
  return (
    <main className="dashboard">
      <section className="dashboard-hero">
        <div>
          <p className="eyebrow">The everyday fitness companion</p>
          <h1>Small steps.<br /><em>Strong momentum.</em></h1>
          <p className="hero-copy">Track what you do, find your people, and make your next session feel possible.</p>
          <Link className="primary-action" to="/activities">Log your progress <span aria-hidden="true">-&gt;</span></Link>
        </div>
        <div className="hero-stamp" aria-label="OctoFit Tracker mark">
          <img src="/octofitapp-small.png" alt="" />
          <span>MOVE<br />TOGETHER</span>
        </div>
      </section>
      <section className="dashboard-grid" aria-label="Tracker sections">
        {navigation.slice(0, 4).map((item, index) => (
          <Link className={`feature-tile tile-${index + 1}`} to={item.to} key={item.to}>
            <span className="tile-number">0{index + 1}</span>
            <strong>{item.label}</strong>
            <span className="tile-arrow" aria-hidden="true">-&gt;</span>
          </Link>
        ))}
      </section>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="topbar">
          <Link className="brand" to="/">
            <img src="/octofitapp-small.png" alt="" />
            <span>OctoFit <b>Tracker</b></span>
          </Link>
          <nav className="main-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={item.to} key={item.to}>{item.label}</NavLink>
            ))}
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
        <footer className="site-footer"><span>OCTOFIT TRACKER</span><span>Built for consistency, not perfection.</span></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
