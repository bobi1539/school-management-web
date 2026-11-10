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

<Sidebar.Root variant="sidebar" class="bg-purple-100 border-none">
  <Sidebar.Header class="px-3 py-4 bg-purple-100">
    <div class="flex items-center justify-center gap-3 px-2">
      <span class="text-sm font-semibold tracking-tight text-black"> RAA Thawalib </span>
    </div>
  </Sidebar.Header>

  <Sidebar.Content class="bg-purple-100">
    {#each sidebarContents as content}
      <Sidebar.Group>
        <Sidebar.GroupLabel>
          {content.groupLabel}
        </Sidebar.GroupLabel>

        <Sidebar.GroupContent>
          <Sidebar.Menu>
            {#each content.items as item}
              <Sidebar.MenuItem>
                <Sidebar.MenuButton onclick={() => goto(item.url)} isActive={page.url.pathname === item.url} class="py-4.5 border border-purple-100 transition-colors hover:bg-white hover:text-black hover:border hover:border-purple-200 hover:cursor-pointer data-[active=true]:bg-white data-[active=true]:text-black data-[active=true]:border data-[active=true]:border-purple-200">
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

  <Sidebar.Footer class="bg-purple-100" />
</Sidebar.Root>
