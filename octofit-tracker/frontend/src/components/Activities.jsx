import ResourceTable from './ResourceTable';

const columns = [
  { key: 'type', label: 'Activity' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'distanceKm', label: 'Distance km' },
  { key: 'points', label: 'Points' },
  { key: 'completedAt', label: 'Completed' },
];

export default function Activities() {
  return <ResourceTable resource="activities" title="Activity feed" description="A clear view of the work happening across the tracker." columns={columns} />;
}
