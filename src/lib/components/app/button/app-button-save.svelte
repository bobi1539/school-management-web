<script lang="ts">
  import Button from "#lib/components/ui/button/button.svelte";
  import { Plus, Save } from "@lucide/svelte";
  import type { ComponentProps } from "svelte";

  type AppButtonSaveProps = {} & ComponentProps<typeof Button>;
    
  let { ...props }: AppButtonSaveProps = $props();
</script>

<Button {...props} class="px-5.5 h-11 font-light bg-app-700 text-white rounded-none border-0 hover:bg-app-700 hover:cursor-pointer transition-all">
  <Save />
  <span>Simpan</span>
</Button>
