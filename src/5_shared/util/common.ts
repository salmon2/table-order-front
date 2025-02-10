export function createArray(length: number): number[] {
  const newArray = [];
  for (let i = 1; i <= length; i++) {
    newArray.push(i);
  }
  return newArray;
}
