const countdown = (num: number): number | null => {
  console.log(num)
  return num <= 1 ? null : countdown(num - 1)
}

const greet2 = (name: string) => {
  console.log('how are you, ' + name + '?')
}

const bye = () => {
  console.log('ok bye!')
}

const greet = (name: string) => {
  console.log('hello, ' + name + '!')
  greet2(name)
  console.log('getting ready to say bye...')
  bye()
}

greet('adit')

const factorial = (x: number): number => {
  if (x === 0) return 1
  return x * factorial(x - 1)
}

console.log(factorial(5))
