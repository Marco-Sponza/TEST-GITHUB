import ResourceTable from './ResourceTable';

const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/';

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'user', label: 'Athlete' },
  { key: 'points', label: 'Points' },
  { key: 'period', label: 'Period' },
];

export default function Leaderboard() {
  return <ResourceTable resource="leaderboard" endpoint={apiEndpoint} title="Leaderboard" description="Celebrate progress, not perfection, with a little healthy competition." columns={columns} />;
}
