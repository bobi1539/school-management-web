<script lang="ts">
  import Button from "#lib/components/ui/button/button.svelte";
  import { ArrowLeft } from "@lucide/svelte";
  import type { ComponentProps } from "svelte";

  type AppButtonBackProps = {} & ComponentProps<typeof Button>;

  let { ...props }: AppButtonBackProps = $props();
</script>

<Button {...props} class="px-5.5 h-11 font-light bg-white text-gray-700 rounded-none border border-gray-300 hover:bg-gray-100 hover:cursor-pointer transition-all">
  <ArrowLeft />
  <span>Kembali</span>
</Button>
