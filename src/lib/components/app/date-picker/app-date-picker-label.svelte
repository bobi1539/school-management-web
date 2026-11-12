<script lang="ts">
  import Button from "#lib/components/ui/button/button.svelte";
  import Calendar from "#lib/components/ui/calendar/calendar.svelte";
  import * as Popover from "#lib/components/ui/popover/index.ts";
  import { dateTimeUtil } from "#lib/utils/date-time-util.ts";
  import { type DateValue } from "@internationalized/date";
  import { CalendarDays } from "@lucide/svelte";
  import AppFieldLabel from "../field/app-field-label.svelte";

  type AppDatePickerLabelProps = {
    label: string;
    name: string;
    value?: DateValue;
  };

  let { value = $bindable(), ...props }: AppDatePickerLabelProps = $props();
</script>

<AppFieldLabel label={props.label}>
  <Popover.Root>
    <Popover.Trigger id={props.name}>
      {#snippet child({ props: triggerProps })}
        <Button {...triggerProps} class="py-5 justify-between font-light bg-white text-gray-700 border rounded-none border-gray-300 hover:cursor-pointer hover:bg-white data-[state=open]:border-app-600 data-[state=open]:ring-1 data-[state=open]:ring-app-600">
          <span>{value ? dateTimeUtil.formatDateLongStyle(value) : ""}</span>
          <CalendarDays />
        </Button>
      {/snippet}
    </Popover.Trigger>
    <Popover.Content class="w-auto p-0 rounded-none" align="start">
      <Calendar type="single" bind:value />
    </Popover.Content>
  </Popover.Root>
</AppFieldLabel>
