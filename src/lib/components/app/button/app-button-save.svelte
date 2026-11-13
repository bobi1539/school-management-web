<script lang="ts">
  import Button from "#lib/components/ui/button/button.svelte";
  import Spinner from "#lib/components/ui/spinner/spinner.svelte";
  import { Save } from "@lucide/svelte";
  import type { ComponentProps } from "svelte";

  type AppButtonSaveProps = {
    isLoading?: boolean;
  } & ComponentProps<typeof Button>;

  let { ...props }: AppButtonSaveProps = $props();
</script>

<Button {...props} disabled={props.isLoading || props.disabled} type="submit" class="px-5.5 h-11 font-light bg-app-700 text-white rounded-none border-0 hover:bg-app-700 hover:cursor-pointer transition-all">
  {#if props.isLoading}
    <Spinner />
  {:else}
    <Save />
  {/if}
  <span>Simpan</span>
</Button>
