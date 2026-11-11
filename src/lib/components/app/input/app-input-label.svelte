<script lang="ts">
  import * as Field from "#lib/components/ui/field/index.ts";
  import Input from "#lib/components/ui/input/input.svelte";
  import type { ComponentProps } from "svelte";

  type Props = {
    label: string;
    name: string;
    value?: any;
  } & ComponentProps<typeof Input>;

  let { value = $bindable(), ...props }: Props = $props();
</script>

<Field.Field>
  <Field.Label>{props.label}</Field.Label>
  <Input id={props.name} name={props.name} bind:value autocomplete="off" class="py-5 border-gray-300 rounded-lg focus-visible:ring-app-600 focus-visible:ring-1 focus-visible:border-app-600 " />
</Field.Field>
