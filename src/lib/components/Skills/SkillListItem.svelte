<script lang="ts">
	export let name: string;
	export let icon: string;

	const iconPath = `/src/lib/assets/images/${icon}.svg`;

	const defaultStyle =
		'p-2 bg-grey rounded-lg shadow-md size-28 sm:size-32 flex flex-col items-center justify-center border-2 border-grey duration-300 box-border ';
</script>

<article class="{defaultStyle} relative">
	<div class="size-10 mb-4 justify-center flex">
		<img src={iconPath} alt={name} />
	</div>
	<h2 class="text-sm font-medium text-center">{name}</h2>
</article>
