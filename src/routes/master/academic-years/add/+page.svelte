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
  import { type DateValue } from "@internationalized/date";
  import { toast } from "svelte-sonner";

  import { superForm, superValidate } from "sveltekit-superforms";
  import { zod, zodClient } from "sveltekit-superforms/adapters";
  import { z } from "zod/v3";

  let startDate = $state<DateValue>();
  let endDate = $state<DateValue>();
  let isLoadingSave = $state<boolean>(false);

  const schema = z.object({
    name: z.string().trim().nonempty("Nama wajib diisi"),
    startDate: z.string().nonempty("Tanggal mulai wajib diisi"),
    endDate: z.string().nonempty("Tanggal berakhir wajib diisi"),
  });

  export const load = async () => {
    const form = await superValidate(zod(schema));
    return { form };
  };

  const initialValues: AcademicYearCreateRequest = {
    name: "",
    startDate: "",
    endDate: "",
  };

  $effect(() => {
    $form.startDate = startDate?.toString() ?? "";
  });

  $effect(() => {
    $form.endDate = endDate?.toString() ?? "";
  });

  const { form, errors, validateForm } = superForm(initialValues, {
    validators: zodClient(schema),
    validationMethod: "oninput",
  });

  const handleSubmit = async () => {
    // Jalankan validasi seluruh field
    const result = await validateForm({ update: true });

    // Jika tidak valid, hentikan proses
    if (!result.valid) return;

    isLoadingSave = true;

    try {
      const response = await academicYearService.create($form);
      toast.success(response.message, { position: "top-right", class: "font-light" });
      await goto("/master/academic-years");
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      isLoadingSave = false;
    }
  };
</script>

<form
  method="POST"
  onsubmit={(event) => {
    event.preventDefault();
    handleSubmit();
  }}
>
  <Card.Root class="w-lg">
    <Card.Header>
      <Card.Title>Tambah Tahun Ajaran</Card.Title>
    </Card.Header>
    <Card.Content>
      <Field.Group>
        <AppInputLabel label="Nama" name="name" bind:value={$form.name} error={$errors.name?.[0]} />
        <AppDatePickerLabel label="Tanggal Mulai" name="startDate" bind:value={startDate} error={$errors.startDate?.[0]} />
        <AppDatePickerLabel label="Tanggal Berakhir" name="endDate" bind:value={endDate} error={$errors.endDate?.[0]} />
      </Field.Group>
    </Card.Content>
    <Card.Footer class="justify-between">
      <AppButtonBack type="button" onclick={() => goto("/master/academic-years")} />
      <AppButtonSave isLoading={isLoadingSave} />
    </Card.Footer>
  </Card.Root>
</form>
