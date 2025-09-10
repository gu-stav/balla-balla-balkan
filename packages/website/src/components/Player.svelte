<script lang="ts">
	import { onMount } from 'svelte';
    import { episode, setEpisode } from '../utils/player.svelte';
    import { CirclePause, CirclePlay, X } from 'lucide-svelte';

    let iframeRef = $state(null);
    let apiLoaded = $state(false);
    let soundcloudWidget = $state(null)
    let soundcloudReady = $state(false)

    let isPlaying = $state(false)
    let duration = $state(0)
    let position = $state(0)

    const currentEpisode = $derived(() => {
        return episode.value;
    })

    const msToTime = (s) => {
        const ms = s % 1000;
        s = (s - ms) / 1000;
        const secs = s % 60;
        s = (s - secs) / 60;
        const mins = s % 60;
        const hrs = (s - mins) / 60;

        return `${`${hrs}`.padStart(2, "0")}:${`${mins}`.padStart(
            2,
            "0"
        )}:${`${secs}`.padStart(2, "0")}`;
        };

    $effect(() => {
        if (iframeRef && apiLoaded) {
            soundcloudWidget = window.SC.Widget(iframeRef)
        }
    })

    $effect(() => {
        if (!soundcloudWidget) return

        soundcloudWidget.bind(window.SC.Widget.Events.READY, () => {
            soundcloudWidget.getDuration((dur) => {
                duration = dur
                soundcloudReady = true
                soundcloudWidget.play()
        });
        })

        soundcloudWidget.bind(window.SC.Widget.Events.PLAY, () => {
            if (isPlaying === true) return;

            isPlaying = true
        });

        soundcloudWidget.bind(window.SC.Widget.Events.PAUSE, () => {
            if (isPlaying === false) return;

            isPlaying = false
        });

        soundcloudWidget.bind(window.SC.Widget.Events.PLAY_PROGRESS, () => {
            soundcloudWidget.getPosition((pos) => position = pos);
        });
    })

    onMount(() => {
        const script = document.createElement('script');
        script.src = 'https://w.soundcloud.com/player/api.js';
        script.async = true;

        script.onload = () => {
            apiLoaded = true
        };

        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    })
</script>

{#if currentEpisode()}
    <div class="bottom-0 fixed flex justify-center w-full">
        <div class="bg-yellow flex gap-8 items-center max-w-5xl px-12 relative w-full">
            <button class="cursor-pointer p-2" on:click={() => {
                if (isPlaying) {
                    soundcloudWidget.pause()
                } else {
                    soundcloudWidget.play()
                }
            }}>
                {#if isPlaying}
                    <CirclePause class="stroke-red h-[38px] w-[38px]" />
                {:else}
                    <CirclePlay class="stroke-red h-[38px] w-[38px]" />
                {/if}
            </button>

            <img src={currentEpisode().imageUrl} width="100" />

            <div class="flex gap-2 flex-col">
                <strong class="font-medium font-sans text-xl text-red tracking-tighter">
                    {currentEpisode()?.title}
                </strong>

                <div class="flex gap-8 items-center">
                    <input type="range" value={position} min="0" max={duration} on:change={(e) => {
                        soundcloudWidget.seekTo(e.target.value);
                    }} />

                <span class="font-medium font-sans text-sm tracking-tighter">{msToTime(position)}</span>
                </div>
            </div>
            

            {#if currentEpisode() && apiLoaded}
                <div class="hidden">
                    <iframe allow="autoplay" bind:this={iframeRef} src="https://w.soundcloud.com/player/?url={currentEpisode().soundcloudLink}"></iframe>
                </div>
            {/if}

            <button class="absolute bg-red cursor-pointer right-0 top-0" type="button" on:click|preventDefault={setEpisode(null)}>
                <X class="h-[24px] stroke-white w-[24px]" />
            </button>
        </div>
    </div>
{/if}

<style>
    input[type="range"] {
        -webkit-appearance: none;

    /*required for proper track sizing in FF*/
    width: 300px;
    }

    input[type="range"]:focus {
        outline: none;
    }

    input[type=range]::-webkit-slider-runnable-track,
    input[type=range]::-moz-range-track {
    width: 300px;
    height: 5px;
    background: #ddd;
    border: none;
    border-radius: 3px;
}

input[type=range]::-webkit-slider-thumb,
input[type=range]::-moz-range-thumb {
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--color-red);
    margin-top: -4px;
}

input[type=range]:focus::-webkit-slider-runnable-track,
input[type=range]:focus::-moz-range-track {
    background: var(--color-gray);
}

/*hide the outline behind the border*/
input[type=range]:-moz-focusring{
    outline: 1px solid var(--color-white);
    outline-offset: -1px;
}

</style>
