<script lang="ts">
  import Input from "#lib/components/ui/input/input.svelte";
  import type { ComponentProps } from "svelte";
  import AppFieldLabel from "../field/app-field-label.svelte";

  type AppInputLabelProps = {
    label: string;
    name: string;
    value?: any;
  } & ComponentProps<typeof Input>;

  let { value = $bindable(), ...props }: AppInputLabelProps = $props();
</script>

<AppFieldLabel label={props.label}>
  <Input id={props.name} name={props.name} bind:value autocomplete="off" class="py-5 border-gray-300 rounded-none focus-visible:ring-app-600 focus-visible:ring-1 focus-visible:border-app-600 " />
</AppFieldLabel>
