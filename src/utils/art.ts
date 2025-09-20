import { nChars } from '@/utils/petscii';

type matrix = (number | null)[][];

export const anatoly: matrix = [
  [85, 64, 64, 64, 73],
  [93, null, 46, null, 93, ...nChars(11, null), 112, 110],
  [
    93,
    ...nChars(3, null),
    93,
    112,
    64,
    73,
    85,
    64,
    73,
    112,
    110,
    85,
    64,
    73,
    93,
    93,
    112,
    114,
    110,
  ],
  [
    93,
    ...nChars(3, null),
    93,
    93,
    null,
    93,
    93,
    46,
    93,
    93,
    107,
    93,
    46,
    93,
    93,
    93,
    93,
    null,
    93,
  ],
  [
    109, 64, 113, 64, 125, 109, 113, 125, 74, 64, 113, 74, 113, 74, 64, 75, 74,
    113, 74, 64, 93, 58,
  ],
  [...nChars(18, null), 74, 64, 75],
];

const waveHalf = [111, 82, 82, 70, 64, 68, 69, 69, 119];

export const wave: number[] = [111, ...waveHalf, 119, ...waveHalf.toReversed()];

export function socialBox(
  length1: number,
  length2: number,
  length3: number
): matrix {
  return [
    [null, 240, ...nChars(length1 + length2 + length3 + 1, 192), 238, null],
    [
      107,
      221,
      ...nChars(length1, null),
      102,
      ...nChars(length2, null),
      // 102,
      ...nChars(length3, null),
      221,
      115,
    ],
    [null, 237, ...nChars(length1 + length2 + length3 + 1, 192), 253, null],
  ];
}

export function blogBox(length: number): matrix {
  return [
    [233, 111, ...nChars(length, 111), 111, 223],
    [106, 93, ...nChars(length, null), 93, 116],
    [95, 119, ...nChars(length, 119), 119, 105],
  ];
}
