<script lang="ts">
  import AppButtonBack from "#lib/components/app/button/app-button-back.svelte";
  import AppButtonSave from "#lib/components/app/button/app-button-save.svelte";
  import AppDatePickerLabel from "#lib/components/app/date-picker/app-date-picker-label.svelte";
  import AppInputLabel from "#lib/components/app/input/app-input-label.svelte";
  import * as Card from "#lib/components/ui/card/index.ts";
  import * as Field from "#lib/components/ui/field/index.ts";
  import type { AcademicYearCreateRequest } from "#lib/services/academic-year/dto.ts";
  import { academicYearService } from "#lib/services/academic-year/service.ts";
  import { goto } from "$app/navigation";

  import { superForm, superValidate } from "sveltekit-superforms";
  import { zod, zodClient } from "sveltekit-superforms/adapters";
  import { z } from "zod/v3";

  // Define outside the load function so the adapter can be cached
  const schema = z.object({
    name: z.string(),
    startDate: z.string(),
    endDate: z.string(),
  });

  export const load = async () => {
    const form = await superValidate(zod(schema));

    // Always return { form } in load functions
    return { form };
  };

  const initialValues: AcademicYearCreateRequest = {
    name: "",
    startDate: "",
    endDate: "",
  };

  const { form, errors, enhance, submitting, message } = superForm(initialValues, {
    validators: zodClient(schema),

    onSubmit: async () => {
      await academicYearService.create($form);
    },
  });
</script>

<form method="POST" use:enhance>
  <Card.Root class="w-lg">
    <Card.Header>
      <Card.Title>Tambah Tahun Ajaran</Card.Title>
    </Card.Header>
    <Card.Content>
      <Field.Group>
        <AppInputLabel label="Nama" name="name" />
        <AppDatePickerLabel label="Tanggal Mulai" name="startDate" />
        <AppDatePickerLabel label="Tanggal Berakhir" name="endDate" />
      </Field.Group>
    </Card.Content>
    <Card.Footer class="justify-between">
      <AppButtonBack onclick={() => goto("/master/academic-years")} />
      <AppButtonSave />
    </Card.Footer>
  </Card.Root>
</form>
