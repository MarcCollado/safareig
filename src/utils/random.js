// Generate a random Int within a given range
export const getRandom = (min, max) => {
  min = Math.ceil(parseInt(min));
  max = Math.floor(parseInt(max));

  // max not inclusive
  return Math.floor(Math.random() * (max - min) + min);
};

// Generate an array of three random and distinct Ints
export const getRelatedEpisodes = (min, max, self) => {
  min = Math.ceil(parseInt(min));
  max = Math.floor(parseInt(max));
  self = parseInt(self);

  let relatedEpisodes = [];
  let newRandomEpisode;

  while (relatedEpisodes.length < 3) {
    newRandomEpisode = getRandom(min, max);
    if (
      newRandomEpisode !== self &&
      !relatedEpisodes.includes(newRandomEpisode)
    ) {
      relatedEpisodes = [...relatedEpisodes, newRandomEpisode];
    }
  }

  return relatedEpisodes;
};
