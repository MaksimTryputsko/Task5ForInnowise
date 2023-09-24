const sumOfNumbers = (array: number[]): number => {
  let total: number = 0
  for (let i = 0; i < array.length; i++) {
    total += array[i]
  }
  return total
}
