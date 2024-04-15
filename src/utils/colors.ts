export const colors: Record<
  string,
  { bg: string; textHover: string; text: string }
> = {
  red: {
    bg: 'bg-red-light',
    textHover: 'text-red-dark',
    text: 'text-red-light',
  },
  yellow: {
    bg: 'bg-yellow',
    textHover: 'text-brown-light',
    text: 'text-yellow',
  },
  green: {
    bg: 'bg-green-light',
    textHover: 'text-green-dark',
    text: 'text-green-light',
  },
  blue: {
    bg: 'bg-blue-light',
    textHover: 'text-blue-dark',
    text: 'text-blue-light',
  },
};

export const getColorFromString = (str: string) => {
  let arr = str.split('');
  const hash = arr.reduce(
    (hashCode, currentVal) =>
      (hashCode =
        currentVal.charCodeAt(0) +
        (hashCode << 6) +
        (hashCode << 16) -
        hashCode),
    0
  );

  const colorVals = Object.values(colors);
  return colorVals[
    ((hash % colorVals.length) + colorVals.length) % colorVals.length
  ];
};
