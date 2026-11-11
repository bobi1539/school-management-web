<script lang="ts">
  import Button from "#lib/components/ui/button/button.svelte";
  import * as Table from "#lib/components/ui/table/index.ts";
  import { Plus } from "@lucide/svelte";

  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
  ];
</script>

<div class="p-8 bg-white border rounded-3xl">
  <div class="flex justify-between">
    <h1 class="text-2xl font-bold text-gray-900 mb-5">Tahun Ajaran</h1>
    <Button class="px-5.5 py-5.5 bg-purple-100 text-purple-600 rounded-full border-0 hover:bg-purple-100 hover:cursor-pointer hover:shadow-lg transition-all">
      <Plus />
      <span>Tambah</span>
    </Button>
  </div>
  <div>
    <Table.Root>
      <Table.Header>
        <Table.Row class="hover:bg-transparent">
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
            <Table.Cell class="first:rounded-l-md py-4">{invoice.invoice}</Table.Cell>
            <Table.Cell>{invoice.paymentStatus}</Table.Cell>
            <Table.Cell>{invoice.paymentMethod}</Table.Cell>
            <Table.Cell class="text-end">{invoice.totalAmount}</Table.Cell>
            <Table.Cell class="last:rounded-r-md text-end">{invoice.totalAmount}</Table.Cell>
          </Table.Row>
        {/each}
      </Table.Body>
    </Table.Root>
  </div>
</div>
