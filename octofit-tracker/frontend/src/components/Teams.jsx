import ResourceTable from './ResourceTable';

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'description', label: 'Focus' },
  { key: 'members', label: 'Members' },
];

export default function Teams() {
  return <ResourceTable resource="teams" title="Find your pace" description="Friendly teams turn consistency into something shared." columns={columns} />;
}
