<script lang="ts">
	import Button from '$lib/components/Base/Button.svelte';
	import Section from '$lib/components/Base/Section.svelte';
	import profilePicture from '$lib/assets/images/profile-v3.png';
</script>

<Section style="h-[52rem]">
	<div
		class="mx-auto flex h-[36rem] flex-col-reverse justify-between px-2 text-center xs:w-4/5 sm:px-0 lg:my-[10rem] lg:flex-row lg:text-left"
	>
		<div class="relative z-10 flex-1">
			<div class="relative z-10 mx-auto mb-0 w-fit">
				<h1
					class="text-[1.75rem] font-medium leading-6 text-primary xs:text-[2rem] xs:leading-8 sm:text-[2.25rem] sm:leading-[3rem]"
				>
					Bastien PIEDALLU
				</h1>
				<h2 class="text-lg sm:text-2xl">Développeur Full Stack JS</h2>
				<p class="mt-4 max-w-[36rem] text-sm font-light xs:text-[1rem] sm:text-[1rem] sm:leading-7">
					Passionné par le développement web et l'écosystème JavaScript, j'occupe actuellement le
					poste de développeur <span class="font-medium text-primary">React.js</span> chez
					Particeep.
					<br />
					Avec plus de 3 ans d'expérience en entreprise en tant que développeur
					<span class="font-medium text-primary">front-end</span>
					et <span class="font-medium text-primary">full stack</span>, j'ai eu l'opportunité
					d'acquérir une expertise solide et diversifiée en développement web
				</p>
				<div class="mt-6 flex flex-row justify-center lg:justify-between">
					<Button type="outlined" class="p-2 text-[1rem]"
						><a href="#contact">Me contacter</a></Button
					>
				</div>
			</div>
			<div
				class="absolute left-1/2 top-1/2 h-[10rem] w-[14rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600 blur-[8rem] sm:h-48 sm:w-64 lg:left-[20%] lg:top-1/4"
			></div>
		</div>
		<div class="relative mb-8 flex lg:flex-1">
			<img
				src={profilePicture}
				alt="profile"
				class="z-10 mx-auto size-[12rem] rounded-full border-4 border-pink-600 sm:size-[16rem]"
			/>
			<div
				class="absolute left-1/2 size-[12rem] -translate-x-1/2 rounded-full bg-pink-600 blur-[4rem] sm:size-[14rem]"
			></div>
		</div>
	</div>
</Section>
