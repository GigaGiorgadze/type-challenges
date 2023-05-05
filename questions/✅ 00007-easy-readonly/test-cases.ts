import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K] 
}

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}
