<script lang="ts">
	import { cn, type WithElementRef } from "#lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
	bind:this={ref}
	data-slot="card-footer"
	class={cn("p-0 bg-white rounded-none gap-5 [.border-t]:pt-(--card-spacing) flex items-center", className)}
	{...restProps}
>
	{@render children?.()}
</div>
