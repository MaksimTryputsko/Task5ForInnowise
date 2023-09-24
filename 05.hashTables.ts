const book: Record<string, number> = {}
book['apple'] = 0.67
book['milk'] = 1.49
book['avocado'] = 1.49

console.log(book.apple)

const voted: Record<string, boolean> = {}

const checkVoter = (name: string) => {
  if (voted[name]) {
    console.log('kick them out!')
  } else {
    voted[name] = true
    console.log('let them vote!')
  }
}
