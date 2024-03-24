export function indexToEscapeChar(index: number | null): string {
  const at = 0xee00;
  const charCode = at + (index ?? 32);
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
