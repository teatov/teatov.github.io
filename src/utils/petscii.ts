export function indexToEscapeChar(index: number | null): string {
  const mappings: number[] = [];
  for (let i = 0; i <= 26; i++) {
    mappings[0 + i] = 0x0040 + i;
  }
  mappings[27] = 0x005b;
  mappings[28] = 0x00a3;
  mappings[29] = 0x005d;
  mappings[30] = 0x2191;
  mappings[31] = 0x2190;
  for (let i = 0; i < 32; i++) {
    mappings[32 + i] = 0x0020 + i;
  }
  mappings[64] = 0x2500;
  mappings[65] = 0x2660;
  mappings[66] = 0x2502;
  mappings[73] = 0x256e;
  mappings[74] = 0x2570;
  mappings[75] = 0x256f;
  mappings[77] = 0x2572;
  mappings[78] = 0x2571;
  mappings[81] = 0x2022;
  mappings[83] = 0x2665;
  mappings[85] = 0x256d;
  mappings[86] = 0x2573;
  mappings[87] = 0x25cb;
  mappings[88] = 0x2663;
  mappings[90] = 0x2666;
  mappings[91] = 0x253c;
  mappings[93] = 0x2502;
  mappings[94] = 0x03c0;
  mappings[95] = 0x25e5;
  mappings[96] = 0x00a0;
  mappings[97] = 0x258c;
  mappings[98] = 0x2584;
  mappings[99] = 0x2594;
  mappings[100] = 0x2581;
  mappings[101] = 0x258e;
  mappings[102] = 0x2592;
  mappings[105] = 0x25e4;
  mappings[107] = 0x251c;
  mappings[108] = 0x2597;
  mappings[109] = 0x2514;
  mappings[110] = 0x2510;
  mappings[111] = 0x2582;
  mappings[112] = 0x250c;
  mappings[113] = 0x2534;
  mappings[114] = 0x252c;
  mappings[115] = 0x2524;
  mappings[116] = 0x258e;
  mappings[117] = 0x258d;
  mappings[121] = 0x2583;
  mappings[123] = 0x2596;
  mappings[124] = 0x259d;
  mappings[125] = 0x2518;
  mappings[126] = 0x2598;
  mappings[127] = 0x259a;

  const directPetscii = 0xee00;
  const charCode =
    (index && mappings[index]) ?? (index && directPetscii + index) ?? 0x00a0;
  return `&#x${charCode.toString(16)};`;
}

export function indexMatrixToHtml(matrix: (number | null)[][]): string {
  return matrix
    .map(row => row.map(cell => indexToEscapeChar(cell)).join(''))
    .join('<br>');
}

export function nChars(n: number, index: number | null): number[] {
  return Array(n).fill(index);
}
