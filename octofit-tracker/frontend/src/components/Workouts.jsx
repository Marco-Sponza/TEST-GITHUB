import ResourceTable from './ResourceTable';

const columns = [
  { key: 'title', label: 'Workout' },
  { key: 'difficulty', label: 'Level' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'description', label: 'Description' },
];

export default function Workouts() {
  return <ResourceTable resource="workouts" title="Your next session" description="Simple plans that meet you where you are and help you go further." columns={columns} />;
}
