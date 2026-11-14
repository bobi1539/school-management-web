import type { ApiResponse } from "../api/dto";
import { BASIC_HEADER_REQUEST, BE_ENDPOINT_ACADEMIC_YEAR, HTTP_METHOD_POST } from "../shared/constants";
import { parseResponse } from "../shared/util";
import type { AcademicYearCreateRequest, AcademicYearResponse } from "./dto";

export const academicYearService = {
  getAll: async (): Promise<ApiResponse<AcademicYearResponse[]>> => {
    const response = await fetch(BE_ENDPOINT_ACADEMIC_YEAR);
    return parseResponse(response);
  },
  create: async (request: AcademicYearCreateRequest): Promise<ApiResponse<AcademicYearResponse>> => {
    const response = await fetch(BE_ENDPOINT_ACADEMIC_YEAR, {
      method: HTTP_METHOD_POST,
      headers: BASIC_HEADER_REQUEST,
      body: JSON.stringify(request),
    });
    return parseResponse(response);
  },
};
