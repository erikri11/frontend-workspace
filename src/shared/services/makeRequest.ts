import { env } from '@app/config/env';
const API_BASE = env.apiBase;

export async function makeRequest<T>(url: string, options: RequestInit = {}): Promise<T> {
  const method = (options.method ?? 'GET').toUpperCase();
  const headers = new Headers(options.headers);

  // Default to JSON Accept header
  if (!headers.has('Accept')) headers.set('Accept', 'application/json');

  // Only set JSON content-type when sending a JSON body
  const hasBody = options.body !== undefined && method !== 'GET';
  if (hasBody && !headers.has('Content-Type') && !(options.body instanceof FormData)) {
    headers.set('Content-Type', 'application/json');
  }

  // Make the request
  const res = await fetch(`${API_BASE}${url}`, {
    ...options,
    method,
    headers,
  });

  // No Content
  if (res.status === 204) return undefined as T;
  
  // Read response text
  const text = await res.text().catch(() => '');

  // Error
  if (!res.ok) {
    try {
      const json = text ? JSON.parse(text) : null;
      const message = json?.error ?? json?.message ?? `${res.status} ${res.statusText}`;
      throw new Error(message);
    } catch {
      throw new Error(text || `${res.status} ${res.statusText}`);
    }
  }

  // Handle non-JSON responses
  const contentType = res.headers.get('content-type') ?? '';
  if (!contentType.includes('application/json')) {
    return (text || undefined) as unknown as T;
  }

  // Handle empty JSON body
  return (text ? JSON.parse(text) : undefined) as T;
}
