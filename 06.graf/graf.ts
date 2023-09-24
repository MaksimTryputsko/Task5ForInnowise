import { graph, isSeller } from './grafData'

const searchSeller = (name: string) => {
  let searchQueue: string[] = []
  searchQueue = searchQueue.concat(graph[name])
  const searched = []
  while (searchQueue.length) {
    let person: string | undefined = searchQueue.shift()
    if (person) {
      if (searched.indexOf(person) === -1) {
        if (isSeller(person)) {
          console.log(person + ' is a mango seller!')
          return true
        }
        searchQueue = searchQueue.concat(graph[person])
        searched.push(person)
      }
    }
  }
  return false
}

console.log('this is graf', searchSeller('you'))
