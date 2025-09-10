export let episode = $state({
  value: null,
});

export function setEpisode(newEpisode) {
  episode.value = newEpisode;
}
