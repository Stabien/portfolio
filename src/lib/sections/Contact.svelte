<script lang="ts">
	const links = [
		{
			name: 'email',
			href: 'mailto:bastien.piedallu@sfr.fr'
		},
		{
			name: 'github',
			href: 'https://github.com/Stabien'
		},
		{
			name: 'linkedin',
			href: 'https://www.linkedin.com/in/bastien-piedallu-b16558182/'
		}
	];
</script>

<footer class="w-full mx-auto pt-12 pb-6" id="contact">
	<ul class="flex flex-row justify-center space-x-8">
		{#each links as link}
			<li>
				<a href={link.href} target="_blank">
					{#await import(`$lib/assets/images/${link.name}.svg`) then iconSrc}
						<img src={iconSrc.default} alt={link.name} class="w-8 h-8" />
					{/await}
				</a>
			</li>
		{/each}
	</ul>
	<span class="text-center block mt-4 font-light text-sm px-8"
		>&copy; 2024-present Bastien PIEDALLU. All Rights Reserved</span
	>
</footer>
