const graph: Record<string, Record<string, number>> = {}
graph['start'] = {}
graph['start']['a'] = 6
graph['start']['b'] = 2
graph['a'] = {}
graph['a']['fin'] = 1
graph['b'] = {}
graph['b']['a'] = 3
graph['b']['fin'] = 5
graph['fin'] = {}

const costs: Record<string, number> = {}
costs['a'] = 6
costs['b'] = 2
costs['fin'] = Infinity

const parents: Record<string, string | null> = {}
parents['a'] = 'start'
parents['b'] = 'start'
parents['fin'] = null

const findLowestCostNode = (
  costs: Record<string, number>,
  processed: string[]
) => {
  let lowestCost = Infinity
  let lowestCostIndex: string | null = null
  for (let node in costs) {
    let cost = costs[node]
    if (cost < lowestCost && processed.indexOf(node) === -1) {
      lowestCost = costs[node]
      lowestCostIndex = node
    }
  }
  return lowestCostIndex
}

const lowestCostWay = (
  graph: Record<string, Record<string, number>>,
  costs: Record<string, number>,
  parents: Record<string, string | null>
) => {
  let processed: string[] = []

  let node = findLowestCostNode(costs, processed)

  while (node !== null) {
    let cost = costs[node]
    let neighbors = graph[node]
    for (let n in neighbors) {
      let newCost = cost + neighbors[n]
      if (newCost < costs[n]) {
        costs[n] = newCost
        parents[n] = node
      }
    }
    processed.push(node)
    node = findLowestCostNode(costs, processed)
  }

  console.log(costs)
  console.log(parents)
  console.log(processed)
}

lowestCostWay(graph, costs, parents)
