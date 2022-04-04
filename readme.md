- tsc --init
- in tsconfig.json

```
 "outDir": "./build",
 "rootDir": "./src"
```

- tsc
  command will know now to compile all of the files inside /src and dump into the /build

`tsc -w`

watches all the files inside the `rootdir`

- concurrently will run multiple scripts at the same time

## Bubble Sort Algorithm

simple algorithm. not recommended. double nested for loop. it will iterate through entire collection several times. For every iteration, it is going to consider each pair of elements inside of our collection of data. At every eleement pair, it will compare if left element is greater. If it is greater, then it will swap those two.

So the element with the maximum value will bubble its way to the last position. Now last element is sorted, we sort the rest of items

- space complexity O(1) because we are not creating any data structure. time complexity O(n^2)
  -for very iteration it is going to consider ech pair of elements inside of the collection. [0,10,-1,5] so [0,10] then [10,-1] since 10>-1 they will get sorted [-1,10] then [10,5]=>[5,10].10 is greatest number. now we are going to apply this algo to [0,-1,5]

- javascript .sort() is according to string Unicode points. the time and space complexity cannot be guaranteed as it is implementation dependent. implementation dependends are the engines that run javascript.
- The reason is the sort method converts the elements into strings then compares their sequences of UTF-16 code units values.
  [1,2,11] ==> [1,11,2]

```js
const spanish=['unico','arbol','cosas'] => sorted as ['cosas','arbol','unico'] "a" and "u" has unlem sign
spanish.sort((a,b)=> a.localeCompare(b) ) ==> sorted as ["arbol","cosas","unico"]
```

- When the attacker sends hundreds of thousands of form values that produce the same hash value, it creates significant additional work for the CPU, which causes the DoS condition.”

## Strings

Some aspects works like array but some others do not.

- indexing works as arrays. But strings in js is immutable. that means we cannot change a character with index. we could say `color[0]="d"` but this will not have any effect

- for primitive values we use `typeof`, strings, number, symbol and boolean. for reference type we use `instanceof`
