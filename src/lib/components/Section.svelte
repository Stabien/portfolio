<script lang="ts">
	export let bg: 'light' | 'dark' = 'dark';
	export let style: string = '';

	const bgStyles = {
		light: 'bg-grey',
		dark: 'bg-black'
	};

	const computedStyle = `w-full ${bgStyles[bg]} p-4 ${style} my-8`;
</script>

<section class={computedStyle}>
	<slot />
</section>
