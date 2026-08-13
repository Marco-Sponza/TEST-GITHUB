import ResourceTable from './ResourceTable';

const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/';

const columns = [
  { key: 'type', label: 'Activity' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'distanceKm', label: 'Distance km' },
  { key: 'points', label: 'Points' },
  { key: 'completedAt', label: 'Completed' },
];

export default function Activities() {
  return <ResourceTable resource="activities" endpoint={apiEndpoint} title="Activity feed" description="A clear view of the work happening across the tracker." columns={columns} />;
}
