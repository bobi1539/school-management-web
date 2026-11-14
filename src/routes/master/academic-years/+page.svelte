<script lang="ts">
  import AppButtonAdd from "#lib/components/app/button/app-button-add.svelte";
  import Badge from "#lib/components/ui/badge/badge.svelte";
  import * as Card from "#lib/components/ui/card/index.ts";
  import Spinner from "#lib/components/ui/spinner/spinner.svelte";
  import * as Table from "#lib/components/ui/table/index.ts";
  import { FE_ENDPOINT_ACADEMIC_YEAR } from "#lib/constants/fe-endpoint.ts";
  import { dateTimeUtil } from "#lib/utils/date-time-util.ts";
  import { goto } from "$app/navigation";
  import { CalendarDays } from "@lucide/svelte";
  import { useAcademicYear, type AcademicYearState } from "./academic-year.svelte.ts";

  const academicYearState: AcademicYearState = useAcademicYear();

  $effect(() => {
    academicYearState.fetchAcademicYears();
  });
</script>

<Card.Root class="w-full">
  <Card.Header class="flex justify-between items-center pb-0">
    <Card.Title>Tahun Ajaran</Card.Title>
    <AppButtonAdd onclick={() => goto(`${FE_ENDPOINT_ACADEMIC_YEAR}/add`)} />
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
        {#if academicYearState.loading}
          <Table.Row>
            <Table.Cell colspan={5} class="h-32">
              <div class="flex items-center justify-center">
                <Spinner class="size-6" />
              </div>
            </Table.Cell>
          </Table.Row>
        {:else if academicYearState.academicYears.length === 0}
          <Table.Row>
            <Table.Cell colspan={5} class="h-32">
              <div class="flex justify-center items-center gap-2">
                <CalendarDays class="size-6" />
            <p>Belum ada data tahun ajaran.</p>
              </div>
            </Table.Cell>
          </Table.Row>
        {:else}
          {#each academicYearState.academicYears as academicYear (academicYear.id)}
            <Table.Row class="border-none hover:bg-gray-100">
              <Table.Cell class="px-5 py-3.5">{academicYear.name}</Table.Cell>
              <Table.Cell class="px-5 py-3.5">{dateTimeUtil.formatDateLongStyle(academicYear.startDate)}</Table.Cell>
              <Table.Cell class="px-5 py-3.5">{dateTimeUtil.formatDateLongStyle(academicYear.endDate)}</Table.Cell>
              <Table.Cell class="px-5 py-3.5">
                <Badge class="{academicYear.status.textColor} {academicYear.status.bgColor}">{academicYear.status.label}</Badge>
              </Table.Cell>
              <Table.Cell class="px-5 py-3.5">Aksi</Table.Cell>
            </Table.Row>
          {/each}
        {/if}
      </Table.Body>
    </Table.Root>
  </Card.Content>
</Card.Root>
