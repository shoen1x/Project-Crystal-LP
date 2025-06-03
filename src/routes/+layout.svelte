<script lang="ts">
	import '../styles/app.css';

	let { children } = $props();
</script>

<main class="max-w-screen mx-auto box-border">
	{@render children?.()}
</main>
