import ResourceTable from './ResourceTable';

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'user', label: 'Athlete' },
  { key: 'points', label: 'Points' },
  { key: 'period', label: 'Period' },
];

export default function Leaderboard() {
  return <ResourceTable resource="leaderboard" title="Leaderboard" description="Celebrate progress, not perfection, with a little healthy competition." columns={columns} />;
}
