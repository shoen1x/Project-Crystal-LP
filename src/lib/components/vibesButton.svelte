<script lang="ts">
    import type { Color } from '$lib/types/color';

	interface Props {
		PathExport?: string | undefined;
		children?: import('svelte').Snippet;
		[key: string]: any;
	}

    let {
		PathExport,
		children,
		...rest
	}: Props = $props();

</script>

<a {...rest} class="flex relative items-center justify-center min-w-40 px-4 lg:px-6 py-2 rounded-full bg-vml-background border-2 border-vml-main z-5 transition-all" href={PathExport}>
    <h1 class="font-fancy clamp-[text,1.125rem,1.5rem,40rem,116rem] leading-none text-center">{@render children?.()}</h1>
</a>