/**
 * Exemplo sanitizado da organização da camada de API.
 *
 * O código de produção contém mais recursos e validações.
 * URLs, credenciais e informações internas não fazem parte
 * deste repositório público.
 */

const API_URL = import.meta.env.VITE_API_URL;

export class ApiError extends Error {
  constructor(message: string, readonly status?: number) {
    super(message);
    this.name = "ApiError";
  }
}

async function request<T>(
  path: string,
  init?: RequestInit,
  token?: string
): Promise<T> {
  if (!API_URL) {
    throw new ApiError("VITE_API_URL is not configured");
  }

  const headers = new Headers(init?.headers);

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(`${API_URL}${path}`, {
    ...init,
    headers,
  });

  if (!response.ok) {
    throw new ApiError(
      `API request failed: HTTP ${response.status}`,
      response.status
    );
  }

  return response.json() as Promise<T>;
}

export const PortfolioApi = {
  getPromotions: () => request("/api/promotions"),
  getDisplays: () => request("/api/displays"),
  getSettings: () => request("/api/settings"),
};
