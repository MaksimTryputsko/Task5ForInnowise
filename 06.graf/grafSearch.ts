import { graph, isSeller } from './grafData'

const search = (name: string, graph: Record<string, string[]>) => {
  graph = graph || {}
  const inner = (waited: string[], visited: string[]): boolean => {
    waited = waited || []
    if (waited.length === 0) return false
    const person = waited[0]
    const waitedCloned = waited.slice(1)
    if (visited.indexOf(person) !== -1) return inner(waitedCloned, visited)
    if (isSeller(person)) {
      console.log(person + ' is a mango seller!')
      return true
    }
    return inner(waitedCloned.concat(graph[person]), visited.concat(person))
  }
  return inner(graph[name], [])
}

search('you', graph)
