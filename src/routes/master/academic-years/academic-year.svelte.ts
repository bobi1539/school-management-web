import type { AcademicYearResponse } from "#lib/services/academic-year/dto.ts";
import { academicYearService } from "#lib/services/academic-year/service.ts";
import { toast } from "svelte-sonner";

export type AcademicYearState = {
  academicYears: AcademicYearResponse[];
  loading: boolean;
  fetchAcademicYears: () => Promise<void>;
};

export function useAcademicYear(): AcademicYearState {
  let academicYears = $state<AcademicYearResponse[]>([]);
  let loading = $state(false);

  const fetchAcademicYears = async (): Promise<void> => {
    try {
      loading = true;

      const response = await academicYearService.getAll();
      academicYears = response.data;
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      loading = false;
    }
  };

  return {
    get academicYears(): AcademicYearResponse[] {
      return academicYears;
    },
    get loading(): boolean {
      return loading;
    },
    fetchAcademicYears,
  };
}
