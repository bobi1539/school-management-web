<script lang="ts">
  import * as Field from "#lib/components/ui/field/index.ts";
  import type { Snippet } from "svelte";

  type AppFieldLabelProps = {
    label: string;
    children: Snippet;
  };

  let props: AppFieldLabelProps = $props();
</script>

<Field.Field class="gap-2">
  <Field.Label class="text-gray-700 font-light">{props.label}</Field.Label>
  {@render props.children()}
</Field.Field>
