<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:window oncontextmenu={(e) => e.preventDefault()} onmousedown={(e) => e.preventDefault()} />

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
