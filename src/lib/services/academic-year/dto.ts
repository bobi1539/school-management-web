import type { AuditResponse } from "../audit/dto";

export type AcademicYearResponse = {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  status: AcademicYearStatusResponse;
  canBeActivate: boolean;
  audit: AuditResponse;
};

export type AcademicYearStatusResponse = {
  value: string;
  label: string;
  textColor: string;
  bgColor: string;
};

export type AcademicYearCreateRequest = {
  name: string;
  startDate: string;
  endDate: string;
};
