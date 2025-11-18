// Simple API client with tenant and token handling
const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function getTenantId() {
  return localStorage.getItem('tenant_id') || 'demo-tenant'
}

function getToken() {
  return localStorage.getItem('token') || ''
}

export async function apiFetch(path, { method = 'GET', body, headers = {}, tenant } = {}) {
  const url = `${API_BASE}${path}`
  const finalHeaders = {
    'Content-Type': 'application/json',
    'X-Tenant-ID': tenant || getTenantId(),
    ...headers,
  }
  const token = getToken()
  if (token) finalHeaders['Authorization'] = `Bearer ${token}`

  const res = await fetch(url, {
    method,
    headers: finalHeaders,
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!res.ok) {
    let message = `${res.status} ${res.statusText}`
    try {
      const data = await res.json()
      message = data.detail || data.message || message
    } catch {}
    throw new Error(message)
  }
  try {
    return await res.json()
  } catch {
    return null
  }
}

export { API_BASE }
