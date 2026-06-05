<script lang="ts">
	let focusedIndex = $state(0);

	const links = [
		{ id: 1, href: 'https://portfolio.izuli.my.id', label: 'Personal Portfolio' },
		{ id: 2, href: 'https://blog.izuli.my.id', label: 'Tech Blog & Articles' }
	];

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Tab' && !e.ctrlKey && !e.altKey && !e.metaKey) {
			e.preventDefault();
		}
		if (e.key === 'ArrowDown') {
			e.preventDefault();
			focusedIndex = (focusedIndex + 1) % links.length;
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			focusedIndex = (focusedIndex - 1 + links.length) % links.length;
		} else if (e.key === 'Enter') {
			e.preventDefault();
			const link = document.querySelector(
				`[data-link-index="${focusedIndex}"]`
			) as HTMLAnchorElement;
			if (link) link.click();
		}
	}
</script>

<svelte:window onkeydown={handleKeyDown} />

<main>
	<div>
		<pre><br /><h1>___Iyan Armanda Websites v1.0.0 (tty1)</h1>
Logon Time: {new Date().toLocaleDateString()}
Status    : LINK_ACCESS_GRANTED
Mouse     : ENABLED
	</pre>
		<p>Use [↑/↓] to navigate links, press [Enter] to execute target.</p>
		<br />
	</div>

	<ul>
		{#each links as link, index (link.id)}
			<li>
				<span>&nbsp;-</span>
				<a
					rel="external noopener noreferrer"
					href={link.href}
					data-link-index={index}
					class:active={focusedIndex === index}
				>
					{link.href}
				</a>
				{#if focusedIndex === index}
					<span class="link-label">&nbsp;&nbsp;&nbsp;{link.label}</span>
				{/if}
			</li>
		{/each}
	</ul>
</main>

<style>
	.link-label {
		opacity: 0.7;
	}
</style>
