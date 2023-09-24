const sumRecursive = (arr: number[]): number => {
  if (arr.length == 0) return 0
  return arr[0] + sumRecursive(arr.slice(1))
}
