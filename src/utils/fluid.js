export const fluid = (i, j, minWidth = 768, maxWidth = 1440) => {
  const widthRatio = minWidth / maxWidth;

  const b = (i - widthRatio * j) / (1 - widthRatio);

  // const match = (i - b) / minWidth === (j - b) / maxWidth;
  // if (!match) return console.log('Poor math...');

  const m = (i - b) / minWidth;
  return b > 0
    ? `clamp(${i}px, calc((100vw * ${m}) + ${b}px), ${j}px)`
    : `clamp(${i}px, calc((100vw * ${m}) - ${Math.abs(b)}px), ${j}px)`;
};
