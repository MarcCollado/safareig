export const trimDescriptions = (fullDescription, fullDescriptionHtml = '') => {
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
