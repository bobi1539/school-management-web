<script lang="ts">
  import * as Field from "#lib/components/ui/field/index.ts";
  import type { Snippet } from "svelte";

  type AppFieldLabelProps = {
    label: string;
    children: Snippet;
  };

  let props: AppFieldLabelProps = $props();
</script>

<Field.Field class="gap-1">
  <Field.Label class="text-gray-600">{props.label}</Field.Label>
  {@render props.children()}
</Field.Field>
