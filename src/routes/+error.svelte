<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { onMount } from 'svelte';

	let countdown = $state(5);

	onMount(() => {
		const interval = setInterval(() => {
			countdown--;
			if (countdown <= 0) {
				clearInterval(interval);
				goto(resolve('/'));
			}
		}, 1000);

		return () => clearInterval(interval);
	});

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Tab' && !e.ctrlKey && !e.altKey && !e.metaKey) {
			e.preventDefault();
		}
	}
</script>

<svelte:window onkeydown={handleKeyDown} />

<main>
	<pre><br /><h1>___Iyan Armanda Websites v1.0.0 (tty1)</h1>
Logon Time: {new Date().toLocaleDateString()}
Status    : <strong>ERROR 404</strong>, PATH_NOT_FOUND
Mouse     : ENABLED
  </pre>
	<br />
	<p class="redirect-message">Redirecting system to root in <strong>{countdown}</strong>s...</p>
</main>

<style>
	.redirect-message {
		opacity: 0.7;
	}
</style>
