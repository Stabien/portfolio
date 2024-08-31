<script lang="ts">
	export let style: string = '';
	export let title: string = '';

	const computedStyle = `w-full p-4 ${style} mb-16 min-h-[36rem]`;
</script>

<section class={computedStyle}>
	<h1 class="text-[2.25rem] text-center mb-12">{title}</h1>
	<slot />
</section>
