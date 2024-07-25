<script lang="ts">
	export let name: string;
	export let icon: string;

	const iconPath = `/src/lib/assets/images/${icon}.svg`;

	const hoverStyle = 'hover:border-primary';
	const defaultStyle =
		'p-2 bg-grey rounded-lg shadow-md w-28 h-28 flex flex-col items-center justify-center border-2 border-grey duration-200 box-border';

	const computedStyle = `${defaultStyle} ${hoverStyle}`;
</script>

<article class={computedStyle}>
	<div class="w-10 h-10 mb-4 justify-center flex">
		<img src={iconPath} alt={name} />
	</div>
	<h2 class="text-xs font-medium">{name}</h2>
</article>
