import ResourceTable from './ResourceTable';

const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/';

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'createdAt', label: 'Joined' },
];

export default function Users() {
  return <ResourceTable resource="users" endpoint={apiEndpoint} title="People moving together" description="Profiles, progress, and the community behind every session." columns={columns} />;
}
