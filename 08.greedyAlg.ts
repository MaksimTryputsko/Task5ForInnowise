let statesNeeded = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az'])

const stations: Record<string, Set<string>> = {}
stations['kone'] = new Set(['id', 'nv', 'ut'])
stations['ktwo'] = new Set(['wa', 'id', 'mt'])
stations['kthree'] = new Set(['or', 'nv', 'ca'])
stations['kfour'] = new Set(['nv', 'ut'])
stations['kfive'] = new Set(['ca', 'az'])

const finalStations: Set<string | null> = new Set()

while (statesNeeded.size) {
  let bestStation: string | null = null
  let statesCovered = new Set()
  for (let station in stations) {
    const states: Set<string> = stations[station]
    const covered: Set<string> = new Set(
      [...statesNeeded].filter((x) => states.has(x))
    )
    if (covered.size > statesCovered.size) {
      bestStation = station
      statesCovered = covered
    }
  }
  statesNeeded = new Set([...statesNeeded].filter((x) => !statesCovered.has(x)))
  finalStations.add(bestStation)
}

console.log(finalStations)
