const binarySearching = (numbers: number[], target: number) => {
  let left: number = 0
  let right: number = numbers.length - 1
  let mid: number
  while (left <= right) {
    mid = Math.round((left + right) / 2)
    if (target === numbers[mid]) return mid
    if (target < numbers[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return null
}

const list: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
console.log(binarySearching(list, 5))
