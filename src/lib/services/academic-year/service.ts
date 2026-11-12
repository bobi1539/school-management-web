import type { ApiResponse } from "../api/dto";
import { BE_ENDPOINT_ACADEMIC_YEAR } from "../constants";
import type { AcademicYearCreateRequest, AcademicYearResponse } from "./dto";

export const academicYearService = {
  getAll: async (): Promise<ApiResponse<AcademicYearResponse[]>> => {
    const response = await fetch(BE_ENDPOINT_ACADEMIC_YEAR);
    return response.json();
  },
  create: async (request: AcademicYearCreateRequest): Promise<ApiResponse<AcademicYearResponse>> => {
    console.log("heelo")
    const response = await fetch(BE_ENDPOINT_ACADEMIC_YEAR, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
    return response.json();
  },
};
