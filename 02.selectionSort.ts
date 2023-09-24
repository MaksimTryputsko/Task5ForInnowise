const findSmallestIndex = (array: number[]) => {
  let smallestElement: number = array[0]
  let smallestIndex: number = 0

  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallestElement) {
      smallestElement = array[i]
      smallestIndex = i
    }
  }

  return smallestIndex
}

const selectionSort = (array: number[]) => {
  let sortedArray: number[] = []
  let length: number = array.length

  for (let i = 0; i < length; i++) {
    let smallestIndex: number = findSmallestIndex(array)
    sortedArray.push(array[smallestIndex])
    array.splice(smallestIndex, 1)
  }

  return sortedArray
}

const sourceArray: number[] = [5, 3, 6, 2, 10, 12, 4, 6, 7, 2]
const sourtedArray: number[] = selectionSort(sourceArray)

console.log('Source array - ', sourceArray)
console.log('New sorted array - ', sourtedArray)
