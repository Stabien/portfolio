<script lang="ts">
	import SkillListItem from './SkillListItem.svelte';
	import skills from '$lib/assets/data/skills.json';
</script>

<div class="mx-auto flex flex-row flex-wrap gap-x-4 gap-y-4 justify-center md:w-[50rem]">
	{#each skills as skill}
		<SkillListItem name={skill.name} icon={skill.icon} />
	{/each}
</div>
