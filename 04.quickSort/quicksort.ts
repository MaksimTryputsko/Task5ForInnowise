const quickSort = (array: number[]): number[] => {
  if (array.length < 2) return array
  let pivot: number = array[0]
  let less = array.slice(1).filter((el) => el <= pivot)
  let greater = array.slice(1).filter((el) => el > pivot)
  return quickSort(less).concat(pivot, quickSort(greater))
}
