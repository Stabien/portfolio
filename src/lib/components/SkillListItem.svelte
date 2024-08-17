<script lang="ts">
	export let name: string;
	export let icon: string;

	const iconPath = `/src/lib/assets/images/${icon}.svg`;

	const hoverStyle = 'hover:border-primary';
	const defaultStyle =
		'p-2 bg-grey rounded-lg shadow-md size-28 md:size-32 lg:size-32 flex flex-col items-center justify-center border-2 border-grey duration-200 box-border';

	const computedStyle = `${defaultStyle} ${hoverStyle}`;
</script>

<article class={computedStyle}>
	<div class="size-10 lg:size-12 mb-4 justify-center flex">
		<img src={iconPath} alt={name} />
	</div>
	<h2 class="text-xs lg:text-sm font-medium">{name}</h2>
</article>
