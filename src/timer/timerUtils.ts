export function padWithZeroes(numberToPad: number): string {
  const numberString = numberToPad.toString();
  const minLength = 2;
  return numberString.length < minLength
    ? "0".repeat(minLength - numberString.length).concat(numberString)
    : numberToPad.toString();
}

export enum Mode {
  WORK,
  SHORT_BREAK,
  LONG_BREAK,
}
