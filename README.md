# leetcode-js-tdd

Simple boilerplate for leetcode warriors

## How to use

1. Clone this repo
2. Install [LeetCode extension](https://marketplace.visualstudio.com/items?itemName=shengchen.vscode-leetcode) in your vscode
3. Configure extension to use `problems` folder in the repo
4. Export solution with cases as in `1.two-sum.js`

```js
module.exports = {
  fn: twoSum,
  cases: [
    { in: [[2, 7, 11, 15], 9], out: [0, 1] },
    { in: [[11, 2, 15, 7], 9], out: [1, 3] },
  ],
}
```

5. `npm start`

## TODO

Make it possible to filter problems to run, because some of them can be too cpu heavy to run on each iteration.
