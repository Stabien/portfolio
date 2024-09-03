<script lang="ts">
	import SkillListItem from './SkillListItem.svelte';
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
</script>

<div class="flex flex-row gap-4">
	<div class="flex flex-col gap-8 mx-auto">
		<SkillListByTag title="Front-end" skills={skillByTag.front} />
		<SkillListByTag title="Full stack" skills={skillByTag.fullstack} />
		<SkillListByTag title="Base de données" skills={skillByTag.database} />
		<SkillListByTag title="Testing" skills={skillByTag.testing} />
		<SkillListByTag title="Back-end" skills={skillByTag.back} />
		<SkillListByTag title="DevOps" skills={skillByTag.devops} />
		<SkillListByTag title="Mobile" skills={skillByTag.mobile} />
	</div>
</div>
