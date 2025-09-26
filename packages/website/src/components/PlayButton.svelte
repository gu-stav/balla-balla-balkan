<script lang="ts">
    import { setEpisode } from "../utils/player.svelte";
    import { Play } from "lucide-svelte";

    let { episode } = $props();
</script>

<button class="bg-black hover:bg-red focus:bg-red cursor-pointer sm:flex font-medium font-sans gap-2 hidden items-center py-2 px-6 rounded-full self-start text-lg text-white uppercase" onclick={(event) => {
    event.preventDefault();
    setEpisode(episode);
}}>
    Anhören
    <Play class="fill-white h-3 w-3" />
</button>
