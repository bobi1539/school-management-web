import type { ApiResponse } from "../api/dto";
import { HTTP_STATUS_UNAUTHORIZED } from "./constants";

export const parseResponse = async <T>(response: Response): Promise<ApiResponse<T>> => {
  const data: ApiResponse<T> = await response.json().catch(() => ({}));

  if (response.ok) {
    return data;
  }

  if (response.status === HTTP_STATUS_UNAUTHORIZED) {
    throw new Error(data.message ?? "Silahkan login dulu");
  }

  throw new Error(data.message ?? "Terjadi kesalahan");
};
