import type { Equal, Expect } from '@type-challenges/utils'


type TrimLeft<S extends string> = S extends `${infer U}${infer Rest}` ? 
  U extends Space
  ? TrimLeft<Rest> 
  : `${U}${Rest}`
 : ''


type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
  Expect<Equal<TrimLeft<''>, ''>>,
  Expect<Equal<TrimLeft<' \n\t'>, ''>>,
]
