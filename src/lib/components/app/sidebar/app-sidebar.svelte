<script lang="ts">
  import * as Sidebar from "#lib/components/ui/sidebar/index.ts";
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import { BookOpen, Calendar, DoorOpen, House, Receipt, Users, Wallet } from "@lucide/svelte";

  const sidebarContents = [
    {
      groupLabel: "",
      items: [
        {
          icon: House,
          label: "Dashboard",
          url: "/dashboard",
        },
      ],
    },
    {
      groupLabel: "Master Data",
      items: [
        {
          icon: Calendar,
          label: "Tahun Ajaran",
          url: "/master/academic-years",
        },
        {
          icon: DoorOpen,
          label: "Ruang Kelas",
          url: "/master/classrooms",
        },
        {
          icon: Users,
          label: "Siswa",
          url: "/master/students",
        },
        {
          icon: Receipt,
          label: "Jenis Tagihan",
          url: "/master/bill-types",
        },
      ],
    },
    {
      groupLabel: "Akademik",
      items: [
        {
          icon: BookOpen,
          label: "Data Akademik",
          url: "/akademik",
        },
      ],
    },
    {
      groupLabel: "Keuangan",
      items: [
        {
          icon: Wallet,
          label: "Pembayaran",
          url: "/keuangan",
        },
      ],
    },
  ];
</script>

<Sidebar.Root variant="sidebar" class="bg-white px-2">
  <Sidebar.Header class="px-3 py-4 bg-white">
    <div class="flex items-center justify-center gap-3 px-2">
      <span class="text-sm font-semibold tracking-tight text-black">RAA Thawalib</span>
    </div>
  </Sidebar.Header>
  <Sidebar.Content class="bg-white">
    {#each sidebarContents as content}
      <Sidebar.Group>
        <Sidebar.GroupLabel>
          {content.groupLabel}
        </Sidebar.GroupLabel>
        <Sidebar.GroupContent>
          <Sidebar.Menu>
            {#each content.items as item}
              <Sidebar.MenuItem>
                <Sidebar.MenuButton onclick={() => goto(item.url)} isActive={page.url.pathname === item.url} class="px-5.5 py-5.5 transition-colors text-gray-600 rounded-full hover:bg-gray-100 hover:text-gray-600 hover:cursor-pointer hover:rounded-full data-[active=true]:bg-purple-100 data-[active=true]:text-purple-600 data-[active=true]:rounded-full">
                  <item.icon />
                  <span>{item.label}</span>
                </Sidebar.MenuButton>
              </Sidebar.MenuItem>
            {/each}
          </Sidebar.Menu>
        </Sidebar.GroupContent>
      </Sidebar.Group>
    {/each}
  </Sidebar.Content>
  <Sidebar.Footer class="bg-white" />
</Sidebar.Root>
