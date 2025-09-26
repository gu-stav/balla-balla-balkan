<script lang="ts">
    import { setEpisode } from "../utils/player.svelte";
    import { Play } from "lucide-svelte";

    let { episode } = $props();
</script>

<button class="bg-black hover:bg-red focus:bg-red cursor-pointer sm:flex font-sans gap-2 hidden items-center py-2 px-6 rounded-full self-start text-md text-white uppercase" onclick={(event) => {
    event.preventDefault();
    setEpisode(episode);
}}>
    Anhören
    <Play class="fill-white h-4 w-4" />
</button>
