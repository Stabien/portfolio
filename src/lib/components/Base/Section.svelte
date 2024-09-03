<script lang="ts">
	export let style: string = '';
	export let title: string = '';

	const computedStyle = `w-full p-4 mb-16 min-h-[36rem] ${style}`;
</script>

<section class={computedStyle} {...$$restProps}>
	<h1 class="text-[2.25rem] text-center mb-12">{title}</h1>
	<slot />
</section>
