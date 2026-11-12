<script lang="ts">
  import favicon from "#lib/assets/favicon.svg";
  import AppSidebar from "#lib/components/app/sidebar/app-sidebar.svelte";
  import * as Sidebar from "#lib/components/ui/sidebar/index.ts";
  import type { LayoutProps } from "./$types";
  import "./layout.css";

  let { children }: LayoutProps = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<Sidebar.Provider>
  <AppSidebar />
  <main class="w-full bg-white">
    <div class="h-20 border-b border-gray-300 sticky top-0 z-50 bg-white flex items-center px-5">
      <Sidebar.Trigger class="p-5 rounded-none border border-gray-300 hover:cursor-pointer hover:rounded-none hover:bg-gray-100" />
    </div>
    <div class="px-5 pt-5 pb-20 flex justify-center">
      {@render children?.()}
    </div>
  </main>
</Sidebar.Provider>
