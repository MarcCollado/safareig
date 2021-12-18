// Generate a random Int within a given range
exports.getRandom = function (min, max) {
  min = Math.ceil(parseInt(min));
  max = Math.floor(parseInt(max));

  // max not inclusive
  return Math.floor(Math.random() * (max - min) + min);
};

// Generate an array of three random and distinct Ints
exports.getRelatedEpisodes = function (min, max, self, getRandomFunc) {
  min = Math.ceil(parseInt(min));
  max = Math.floor(parseInt(max));
  self = parseInt(self);

  let relatedEpisodes = [];
  let newRandomEpisode;

  while (relatedEpisodes.length < 3) {
    newRandomEpisode = getRandomFunc(min, max);
    if (
      newRandomEpisode !== self &&
      !relatedEpisodes.includes(newRandomEpisode)
    ) {
      relatedEpisodes = [...relatedEpisodes, newRandomEpisode];
    }
  }

  return relatedEpisodes;
};

exports.trimDescriptions = function (
  fullDescription,
  fullDescriptionHtml = ''
) {
  // Show description as string
  fullDescription = fullDescription.toString();
  const i = fullDescription.indexOf('Show notes:');
  const showDescription = fullDescription.substring(0, i - 1);
  // Show notes as HTML
  const j = fullDescriptionHtml.indexOf('notes:</strong></p>');
  const showNotes = fullDescriptionHtml.substring(j + 19);
  return {
    showDescription: showDescription,
    showNotes: showNotes,
  };
};
