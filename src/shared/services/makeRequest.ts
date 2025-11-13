const API_BASE = '/api';

export async function makeRequest<T>(url: string, options?: RequestInit): Promise<T> {
  const defaultOptions: RequestInit = {
    headers: { 'Content-Type': 'application/json' },
    method: 'GET'
  };
  const finalOptions = { ...defaultOptions, ...options };
  const res = await fetch(`${API_BASE}${url}`, finalOptions);

  if (!res.ok) {
    try {
      const json = await res.json();
      throw new Error(json?.error ?? `${res.status} ${res.statusText}`);
    } catch {
        const text = await res.text().catch(() => '');
        throw new Error(text || `${res.status} ${res.statusText}`);
      }
    }

    if (res.status === 204) { 
      return undefined as T 
    }

    const contentType = res.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      const text = await res.text();
      return (text || undefined) as T;
    }

    const raw = await res.text();
    return (raw ? JSON.parse(raw) : undefined) as T;
  };
