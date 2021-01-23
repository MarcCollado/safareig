export const getRandom = (min, max) => {
  let minInt = parseInt(min);
  let maxInt = parseInt(max);

  minInt = Math.ceil(minInt);
  maxInt = Math.floor(maxInt);

  // maxInt not inclusive
  return Math.floor(Math.random() * (maxInt - minInt) + minInt);
};
