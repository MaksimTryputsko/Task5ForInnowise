const graph: Record<string, string[]> = {}
graph['you'] = ['alice', 'bob', 'claire']
graph['bob'] = ['anuj', 'peggy']
graph['alice'] = ['peggy']
graph['claire'] = ['thom', 'jonny']
graph['anuj'] = []
graph['peggy'] = []
graph['thom'] = []
graph['jonny'] = []

const isSeller = (name: string) => {
  return name[name.length - 1] === 'm'
}

export { graph, isSeller }
