import ResourceTable from './ResourceTable';

const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/';

const columns = [
  { key: 'title', label: 'Workout' },
  { key: 'difficulty', label: 'Level' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'description', label: 'Description' },
];

export default function Workouts() {
  return <ResourceTable resource="workouts" endpoint={apiEndpoint} title="Your next session" description="Simple plans that meet you where you are and help you go further." columns={columns} />;
}
