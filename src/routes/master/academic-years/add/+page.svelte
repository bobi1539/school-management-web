<script lang="ts">
  import AppButtonBack from "#lib/components/app/button/app-button-back.svelte";
  import AppButtonSave from "#lib/components/app/button/app-button-save.svelte";
  import AppDatePickerLabel from "#lib/components/app/date-picker/app-date-picker-label.svelte";
  import AppInputLabel from "#lib/components/app/input/app-input-label.svelte";
  import * as Card from "#lib/components/ui/card/index.ts";
  import * as Field from "#lib/components/ui/field/index.ts";
  import { goto } from "$app/navigation";
</script>

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
