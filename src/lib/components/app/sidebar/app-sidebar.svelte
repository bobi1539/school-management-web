<script lang="ts">
  import * as Sidebar from "#lib/components/ui/sidebar/index.ts";
  import { BookOpen, Calendar, DoorOpen, LayoutDashboard, Receipt, Users, Wallet } from "@lucide/svelte";
  import type { Component } from "svelte";
  import AppSidebarMenuButton from "./app-sidebar-menu-button.svelte";

  type SidebarGroup = {
    label: string;
    contents: SidebarMenuItem[];
  };

  type SidebarMenuItem = {
    url: string;
    icon: Component;
    label: string;
  };

  const dashboardMenuItem: SidebarMenuItem = {
    url: "/dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
  };

  const sidebarGroups: SidebarGroup[] = [
    {
      label: "Master Data",
      contents: [
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
      label: "Akademik",
      contents: [
        {
          icon: BookOpen,
          label: "Data Akademik",
          url: "/akademik",
        },
      ],
    },
    {
      label: "Keuangan",
      contents: [
        {
          icon: Wallet,
          label: "Pembayaran",
          url: "/keuangan",
        },
      ],
    },
  ];
</script>

<Sidebar.Root class="bg-white px-2 border border-gray-300">
  <Sidebar.Header class="h-16 flex justify-center items-center bg-white">
    <h1 class="text-lg font-bold text-gray-800">RAA Thawalib</h1>
  </Sidebar.Header>
  <Sidebar.Content class="bg-white">
    <Sidebar.Group>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          <Sidebar.MenuItem>
            <AppSidebarMenuButton url={dashboardMenuItem.url} icon={dashboardMenuItem.icon} label={dashboardMenuItem.label} />
          </Sidebar.MenuItem>
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
    {#each sidebarGroups as group}
      <Sidebar.Group>
        <Sidebar.GroupLabel>{group.label}</Sidebar.GroupLabel>
        <Sidebar.GroupContent>
          <Sidebar.Menu>
            {#each group.contents as content}
              <Sidebar.MenuItem>
                <AppSidebarMenuButton url={content.url} icon={content.icon} label={content.label} />
              </Sidebar.MenuItem>
            {/each}
          </Sidebar.Menu>
        </Sidebar.GroupContent>
      </Sidebar.Group>
    {/each}
  </Sidebar.Content>
  <Sidebar.Footer class="bg-white" />
</Sidebar.Root>
