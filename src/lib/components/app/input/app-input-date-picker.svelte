<script lang="ts">
  import Button from "#lib/components/ui/button/button.svelte";
  import Calendar from "#lib/components/ui/calendar/calendar.svelte";
  import * as Field from "#lib/components/ui/field/index.ts";
  import * as Popover from "#lib/components/ui/popover/index.ts";
  import { type DateValue, DateFormatter, getLocalTimeZone } from "@internationalized/date";
  import { CalendarDays } from "@lucide/svelte";

  type Props = {
    label: string;
    name: string;
    value?: DateValue;
  };

  let { value = $bindable(), ...props }: Props = $props();

  const df = new DateFormatter("id-ID", {
    dateStyle: "long",
  });
</script>

<Field.Field>
  <Field.Label for={props.name}>{props.label}</Field.Label>
  <Popover.Root>
    <Popover.Trigger id={props.name}>
      {#snippet child({ props: triggerProps })}
        <Button {...triggerProps} class="py-5 justify-between font-normal bg-white text-gray-600 border rounded-none border-gray-300 hover:cursor-pointer hover:bg-white data-[state=open]:border-app-600 data-[state=open]:ring-1 data-[state=open]:ring-app-600">
          <span>{value ? df.format(value.toDate(getLocalTimeZone())) : ""}</span>
          <CalendarDays />
        </Button>
      {/snippet}
    </Popover.Trigger>
    <Popover.Content class="w-auto p-0 rounded-none" align="start">
      <Calendar type="single" bind:value />
    </Popover.Content>
  </Popover.Root>
</Field.Field>
