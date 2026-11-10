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
  <main class="w-full bg-purple-100">
    {@render children?.()}
  </main>
</Sidebar.Provider>
