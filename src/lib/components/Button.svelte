<script lang="ts">
	export let type: 'filled' | 'outlined' = 'filled';

	const typeStyles = {
		filled: 'bg-primary text-black',
		outlined: 'border-primary border-2 text-primary hover:bg-primary hover:text-black'
	};

	const style = `${typeStyles[type]} font-regular text-sm rounded-xl duration-200 ${$$restProps.class}`;
</script>

<button class={style}>
	<slot />
</button>
