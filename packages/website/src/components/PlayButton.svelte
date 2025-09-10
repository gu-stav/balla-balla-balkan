<script lang="ts">
    import { setEpisode } from "../utils/player.svelte";
    import { Play } from "lucide-svelte";

    let { episode } = $props();
</script>

<button class="bg-black hover:bg-red focus:bg-red cursor-pointer flex font-sans gap-2 items-center py-2 px-4 rounded-sm self-start text-xl text-white" href="/episode/{episode.slug}" on:click|preventDefault={() => setEpisode(episode)}>
    Anhören
    <Play class="fill-white h-4 w-4" />
</button>
