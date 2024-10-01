<script lang="ts">
	export let name: string;
	export let icon: string;

	const defaultStyle =
		'p-2 bg-grey rounded-lg shadow-md size-28 xs:size-32 flex flex-col items-center justify-center border-2 border-grey duration-300 box-border ';
</script>

<article class="{defaultStyle} relative">
	<div class="mb-4 flex size-10 justify-center">
		{#await import(`$lib/assets/images/${icon}.svg`) then iconSrc}
			<img src={iconSrc.default} alt={name} />
		{/await}
	</div>
	<h2 class="text-center text-sm font-medium">{name}</h2>
</article>
