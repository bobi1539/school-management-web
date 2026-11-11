<script lang="ts">
  import Button from "#lib/components/ui/button/button.svelte";
  import * as Table from "#lib/components/ui/table/index.ts";
  import { Plus } from "@lucide/svelte";

  const invoices = [
    {
      name: "2027/2028",
      starDate: "01 Juli 2027",
      endDate: "30 Juni 2028",
      paymentMethod: "Credit Card",
    },
  ];
</script>

<div class="p-5 bg-white border rounded-3xl">
  <div class="flex justify-between items-center mb-1">
    <h1 class="text-xl font-bold text-gray-800 ms-1.5">Tahun Ajaran</h1>
    <Button class="px-5.5 py-5.5 bg-purple-100 text-purple-600 rounded-full border-0 hover:bg-purple-100 hover:cursor-pointer hover:shadow-lg transition-all">
      <Plus />
      <span>Tambah</span>
    </Button>
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
      {#each invoices as invoice (invoice)}
        <Table.Row class="border-none hover:bg-gray-100">
          <Table.Cell class="py-3.5 first:rounded-l-md">{invoice.name}</Table.Cell>
          <Table.Cell class="py-3.5">{invoice.starDate}</Table.Cell>
          <Table.Cell class="py-3.5">{invoice.endDate}</Table.Cell>
          <Table.Cell class="py-3.5 text-end">{invoice.paymentMethod}</Table.Cell>
          <Table.Cell class="py-3.5 last:rounded-r-md text-end">{invoice.paymentMethod}</Table.Cell>
        </Table.Row>
      {/each}
    </Table.Body>
  </Table.Root>
</div>
