import ResourceTable from './ResourceTable';

const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/';

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'description', label: 'Focus' },
  { key: 'members', label: 'Members' },
];

export default function Teams() {
  return <ResourceTable resource="teams" endpoint={apiEndpoint} title="Find your pace" description="Friendly teams turn consistency into something shared." columns={columns} />;
}
