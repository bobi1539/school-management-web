<script lang="ts">
  import AppAddButton from "#lib/components/app/button/app-add-button.svelte";
  import Badge from "#lib/components/ui/badge/badge.svelte";
  import * as Card from "#lib/components/ui/card/index.ts";
  import * as Table from "#lib/components/ui/table/index.ts";
  import { goto } from "$app/navigation";

  const academicYears = [
    {
      name: "2027/2028",
      starDate: "01 Juli 2027",
      endDate: "30 Juni 2028",
      status: {
        label: "Tidak Aktif",
        textColor: "text-gray-700",
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
        textColor: "text-gray-700",
        bgColor: "bg-gray-100",
      },
    },
  ];
</script>

<Card.Root class="w-full">
  <Card.Header class="flex justify-between items-center">
    <Card.Title class="text-gray-700">Tahun Ajaran</Card.Title>
    <AppAddButton onclick={() => goto("/master/academic-years/add")} />
  </Card.Header>
  <Card.Content>
    <Table.Root>
      <Table.Header>
        <Table.Row class="border-b-gray-300 hover:bg-transparent ">
          <Table.Head>Nama</Table.Head>
          <Table.Head>Tanggal Mulai</Table.Head>
          <Table.Head>Tanggal Berakhir</Table.Head>
          <Table.Head>Status</Table.Head>
          <Table.Head>Aksi</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body class="text-gray-700">
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
  </Card.Content>
</Card.Root>
