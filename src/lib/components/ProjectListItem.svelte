<script lang="ts">
	import type { Project } from "../../types";
	import Button from "./Button.svelte";

  export let data: Project;
</script>

<article class="flex flex-col space-y-4 p-4 rounded-md bg-grey duration-200 border-2 border-grey box-border">
  <div class="flex flex-col space-y-2">
    <h1 class="text-xl font-regular text-primary flex flex-row space-x-2">
      <img src="/src/lib/assets/images/{data.icon}" alt={data.name} class="w-8 h-8 rounded-md"/>
      <span class="h-fit my-auto">{data.name}</span>
    </h1>
    <p>{data.description}</p>
  </div>
  <Button class="w-fit p-2 px-3 rounded-3xl">Voir le détail</Button>
</article>