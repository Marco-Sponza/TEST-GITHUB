const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim();

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

export function getRecords(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.results)) return payload.results;
  if (Array.isArray(payload?.data)) return payload.data;
  return [];
}

export async function fetchRecords(resource, endpoint = `${apiBaseUrl}/api/${resource}/`) {
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error(`Unable to load ${resource} (${response.status})`);
  }
  return getRecords(await response.json());
}
