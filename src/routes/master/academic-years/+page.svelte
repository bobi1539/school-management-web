<script lang="ts">
  import AppAddButton from "#lib/components/app/button/app-add-button.svelte";
  import AppDatePickerLabel from "#lib/components/app/date-picker/app-date-picker-label.svelte";
  import AppInputLabel from "#lib/components/app/input/app-input-label.svelte";
  import Badge from "#lib/components/ui/badge/badge.svelte";
  import Button from "#lib/components/ui/button/button.svelte";
  import * as Dialog from "#lib/components/ui/dialog/index.ts";
  import * as Field from "#lib/components/ui/field/index.ts";
  import * as Table from "#lib/components/ui/table/index.ts";
  import { Save, X } from "@lucide/svelte";

  const academicYears = [
    {
      name: "2027/2028",
      starDate: "01 Juli 2027",
      endDate: "30 Juni 2028",
      status: {
        label: "Tidak Aktif",
        textColor: "text-gray-600",
        bgColor: "bg-gray-100",
      },
    },
    {
      name: "2026/2027",
      starDate: "01 Juli 2026",
      endDate: "30 Juni 2027",
      status: {
        label: "Aktif",
        textColor: "text-green-600",
        bgColor: "bg-green-100",
      },
    },
    {
      name: "2025/2026",
      starDate: "01 Juli 2025",
      endDate: "30 Juni 2026",
      status: {
        label: "Tidak Aktif",
        textColor: "text-gray-600",
        bgColor: "bg-gray-100",
      },
    },
  ];
</script>

<div class="p-5 bg-white border border-gray-300 rounded-none">
  <div class="flex justify-between items-center mb-1">
    <h1 class="text-xl font-bold text-gray-800 ms-1.5">Tahun Ajaran</h1>
    <Dialog.Root>
      <Dialog.Trigger>
        <AppAddButton />
      </Dialog.Trigger>
      <Dialog.Content class="p-5 -mt-32 rounded-none">
        <Dialog.Header>
          <Dialog.Title class="text-lg font-semibold">Tambah Tahun Ajaran</Dialog.Title>
        </Dialog.Header>
        <Field.Group>
          <AppInputLabel label="Nama" name="name" />
          <AppDatePickerLabel label="Tanggal Mulai" name="startDate" />
          <AppDatePickerLabel label="Tanggal Berakhir" name="endDate" />
        </Field.Group>
        <Dialog.Footer>
          <div class="w-full flex justify-between">
            <Dialog.Close>
              <Button class="px-5.5 h-11 bg-white text-gray-600 rounded-none border border-gray-300 hover:bg-gray-100 hover:cursor-pointer transition-all">
                <X />
                <span>Batal</span>
              </Button>
            </Dialog.Close>
            <Button class="px-5.5 h-11 bg-app-100 text-app-600 rounded-none border-0 hover:bg-app-100 hover:cursor-pointer hover:shadow-lg transition-all">
              <Save />
              <span>Simpan</span>
            </Button>
          </div>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  </div>
  <Table.Root>
    <Table.Header>
      <Table.Row class="hover:bg-transparent text-gray-800 font-bold">
        <Table.Head>Nama</Table.Head>
        <Table.Head>Tanggal Mulai</Table.Head>
        <Table.Head>Tanggal Berakhir</Table.Head>
        <Table.Head>Status</Table.Head>
        <Table.Head class="text-end">Aksi</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body class="text-gray-600">
      {#each academicYears as academicYear (academicYear)}
        <Table.Row class="border-none hover:bg-gray-100">
          <Table.Cell class="py-3.5">{academicYear.name}</Table.Cell>
          <Table.Cell class="py-3.5">{academicYear.starDate}</Table.Cell>
          <Table.Cell class="py-3.5">{academicYear.endDate}</Table.Cell>
          <Table.Cell class="py-3.5">
            <Badge class="{academicYear.status.textColor} {academicYear.status.bgColor} rounded-none">{academicYear.status.label}</Badge>
          </Table.Cell>
          <Table.Cell class="py-3.5"></Table.Cell>
        </Table.Row>
      {/each}
    </Table.Body>
  </Table.Root>
</div>
