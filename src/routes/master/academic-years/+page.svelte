<script lang="ts">
  import AppButtonAdd from "#lib/components/app/button/app-button-add.svelte";
  import Badge from "#lib/components/ui/badge/badge.svelte";
  import * as Card from "#lib/components/ui/card/index.ts";
  import * as Table from "#lib/components/ui/table/index.ts";
  import type { AcademicYearResponse } from "#lib/services/academic-year/dto.ts";
  import { academicYearService } from "#lib/services/academic-year/service.ts";
  import { dateTimeUtil } from "#lib/utils/date-time-util.ts";
  import { goto } from "$app/navigation";

  let academicYears = $state<AcademicYearResponse[]>([]);
  let loading = $state(false);
  let error = $state<string | null>(null);

  $effect(() => {
    const fetchAcademicYears = async () => {
      try {
        loading = true;

        const response = await academicYearService.getAll();
        academicYears = response.data;
      } catch (err) {
        error = "Gagal mengambil data academic year";
      } finally {
        loading = false;
      }
    };

    fetchAcademicYears();
  });
</script>

<Card.Root class="w-full">
  <Card.Header class="flex justify-between items-center pb-0">
    <Card.Title>Tahun Ajaran</Card.Title>
    <AppButtonAdd onclick={() => goto("/master/academic-years/add")} />
  </Card.Header>
  <Card.Content>
    <Table.Root>
      <Table.Header>
        <Table.Row class="border-b-gray-300 hover:bg-transparent">
          <Table.Head class="px-5 py-3.5 font-normal">Nama</Table.Head>
          <Table.Head class="px-5 py-3.5 font-normal">Tanggal Mulai</Table.Head>
          <Table.Head class="px-5 py-3.5 font-normal">Tanggal Berakhir</Table.Head>
          <Table.Head class="px-5 py-3.5 font-normal">Status</Table.Head>
          <Table.Head class="px-5 py-3.5 font-normal">Aksi</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body class="text-gray-700 font-light">
        {#each academicYears as academicYear (academicYear)}
          <Table.Row class="border-none hover:bg-gray-100">
            <Table.Cell class="px-5 py-3.5">{academicYear.name}</Table.Cell>
            <Table.Cell class="px-5 py-3.5">{dateTimeUtil.formatDateLongStyle(academicYear.startDate)}</Table.Cell>
            <Table.Cell class="px-5 py-3.5">{dateTimeUtil.formatDateLongStyle(academicYear.endDate)}</Table.Cell>
            <Table.Cell class="px-5 py-3.5">
              <Badge class="{academicYear.status.textColor} {academicYear.status.bgColor} rounded-none font-light">{academicYear.status.label}</Badge>
            </Table.Cell>
            <Table.Cell class="px-5 py-3.5">Aksi</Table.Cell>
          </Table.Row>
        {/each}
      </Table.Body>
    </Table.Root>
  </Card.Content>
</Card.Root>
