<script lang="ts">
	import SkillCard from './SkillCard.svelte';
	import skills from '$lib/assets/data/skills.json';
</script>

<div class="mx-auto flex flex-row flex-wrap gap-x-4 gap-y-4 justify-center md:w-[40rem]">
	{#each skills as skill}
		<SkillCard name={skill.name} icon={skill.icon} />
	{/each}
</div>
