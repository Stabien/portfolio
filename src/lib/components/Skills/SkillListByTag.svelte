<script lang="ts">
	import type { Skill } from '../../../types';
	import SkillListItem from './SkillListItem.svelte';

	export let title: string = '';
	export let skills: Skill[];
</script>

<div>
	<h2 class="text-lg mb-1">{title}</h2>
	<div class="mx-auto flex flex-row flex-wrap gap-x-4 gap-y-4">
		{#each skills as skill}
			<SkillListItem name={skill.name} icon={skill.icon} />
		{/each}
	</div>
</div>
