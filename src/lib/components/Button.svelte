<script lang="ts">
	export let type: 'filled' | 'outlined' = 'filled';

	const typeStyles = {
		filled: 'bg-primary text-black border-2 rounded-md',
		outlined: 'border-primary text-primary hover:bg-primary hover:text-black'
	};

	const style = `${typeStyles[type]} border-2 rounded-md p-2 duration-200`;
</script>

<button class={style}>
	<span class="font-medium">
		<slot />
	</span>
</button>
