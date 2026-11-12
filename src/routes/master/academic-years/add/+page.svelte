<script lang="ts">
  import AppDatePickerLabel from "#lib/components/app/date-picker/app-date-picker-label.svelte";
  import AppInputLabel from "#lib/components/app/input/app-input-label.svelte";
  import Button from "#lib/components/ui/button/button.svelte";
  import * as Card from "#lib/components/ui/card/index.ts";
  import * as Field from "#lib/components/ui/field/index.ts";
  import { goto } from "$app/navigation";
  import { ArrowLeft, Save } from "@lucide/svelte";
</script>

<Card.Root class="w-lg">
  <Card.Header>
    <Card.Title class="text-gray-700 font-normal">Tambah Tahun Ajaran</Card.Title>
  </Card.Header>
  <Card.Content>
    <Field.Group>
      <AppInputLabel label="Nama" name="name" />
      <AppDatePickerLabel label="Tanggal Mulai" name="startDate" />
      <AppDatePickerLabel label="Tanggal Berakhir" name="endDate" />
    </Field.Group>
  </Card.Content>
  <Card.Footer class="justify-between">
    <Button onclick={() => goto("/master/academic-years")} class="px-5.5 h-11 font-light bg-white text-gray-700 rounded-none border border-gray-300 hover:bg-gray-100 hover:cursor-pointer transition-all">
      <ArrowLeft />
      <span>Kembali</span>
    </Button>
    <Button class="px-5.5 h-11 font-light bg-app-100 text-app-700 rounded-none border-0 hover:bg-app-100 hover:cursor-pointer hover:shadow-lg transition-all">
      <Save />
      <span>Simpan</span>
    </Button>
  </Card.Footer>
</Card.Root>
