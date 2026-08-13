import ResourceTable from './ResourceTable';

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'createdAt', label: 'Joined' },
];

export default function Users() {
  return <ResourceTable resource="users" title="People moving together" description="Profiles, progress, and the community behind every session." columns={columns} />;
}
