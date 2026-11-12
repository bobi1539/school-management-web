<script lang="ts">
  import * as Sidebar from "#lib/components/ui/sidebar/index.ts";
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import type { Component, ComponentProps } from "svelte";

  type AppSidebarMenuButtonProps = {
    url: string;
    icon: Component;
    label: string;
  } & ComponentProps<typeof Sidebar.MenuButton>;

  let { ...props }: AppSidebarMenuButtonProps = $props();
  const isActive = $derived(page.url.pathname.startsWith(props.url));
</script>

<Sidebar.MenuButton onclick={() => goto(props.url)} {isActive} {...props} class="px-5.5 py-5.5 transition-colors text-gray-700 rounded-none hover:bg-gray-100 hover:text-gray-700 hover:cursor-pointer hover:rounded-none data-[active=true]:font-light data-[active=true]:bg-app-700 data-[active=true]:text-white data-[active=true]:rounded-none">
  <props.icon />
  <span>{props.label}</span>
</Sidebar.MenuButton>
