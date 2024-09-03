<script lang="ts">
	import skills from '$lib/assets/data/skills.json';
	import type { Skill } from '../../../types';
	import SkillListByTag from './SkillListByTag.svelte';

	const groupByTag = (skills: Skill[]) => {
		const skillsByTag: Record<string, Skill[]> = {};

		for (const skill of skills) {
			skillsByTag[skill.tag] = [...(skillsByTag[skill.tag] ?? []), skill];
		}

		return skillsByTag;
	};

	const skillByTag = groupByTag(skills);

	const tags = [
		{
			key: 'front',
			title: 'Front-end'
		},
		{
			key: 'fullstack',
			title: 'Full stack'
		},
		{
			key: 'back',
			title: 'Back-end'
		},
		{
			key: 'database',
			title: 'Bases de données'
		},
		{
			key: 'devops',
			title: 'DevOps'
		},
		{
			key: 'testing',
			title: 'Testing'
		},
		{
			key: 'mobile',
			title: 'Mobile'
		}
	];
</script>

<div class="flex flex-row gap-4">
	<div class="flex flex-col gap-8 mx-auto">
		{#each tags as tag}
			<SkillListByTag title={tag.title} skills={skillByTag[tag.key]} />
		{/each}
	</div>
</div>
