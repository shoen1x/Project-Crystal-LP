<script lang="ts">
    import Vmlcolor from "$lib/images/icons/vmlcolor.svelte";
    import VmlStripe1 from "$lib/images/patterns/vmlStripe1.svelte";
</script>

<div class="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
    <div class="absolute flex items-center justify-center blur-lg">
        <VmlStripe1 />
    </div>
    <div class="absolute block left-1/2 top-[33%] lg:top-[30%] -translate-x-1/2">
        <Vmlcolor />
    </div>
    <span
		class="mask-alpha mask-y-from-70% mask-y-to-90% font-fancy text-stroke absolute left-1/2 top-1/2 block h-auto w-auto -translate-x-1/2 -translate-y-1/2 text-center clamp-[text,32rem,52rem,40rem,116rem] leading-none text-transparent opacity-30"
	>
	    VIBES
	</span>
    <div class="relative h-full flex flex-col items-center justify-center gap-5 lg:gap-12 w-11/12 z-5">
        <div class="relative flex flex-col items-center justify-center gap-2">
            <h1 class="clamp-[text,4rem,11.375rem,40rem,116rem] font-fancy text-center leading-none">COMING IN HOT</h1>
            <h2 class="clamp-[text,1.325rem,2.625rem,40rem,116rem] font-bold text-center leading-none">VIBES DROPPING SOON</h2>
        </div>
    </div>
</div>