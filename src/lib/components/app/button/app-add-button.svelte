<script lang="ts">
  import Button from "#lib/components/ui/button/button.svelte";
  import { Plus } from "@lucide/svelte";
  import type { ComponentProps } from "svelte";

  type AppAddButtonProps = {} & ComponentProps<typeof Button>;
    
  let { ...props }: AppAddButtonProps = $props();
</script>

<Button {...props} class="px-5.5 h-11 bg-app-100 text-app-600 rounded-none border-0 hover:bg-app-100 hover:cursor-pointer hover:shadow-lg transition-all">
  <Plus />
  <span>Tambah</span>
</Button>
