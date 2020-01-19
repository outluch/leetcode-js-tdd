# leetcode-js-tdd

Simple boilerplate for leetcode warriors

## How to use

1. Clone this repo
2. Install [LeetCode extension](https://marketplace.visualstudio.com/items?itemName=shengchen.vscode-leetcode) in your vscode
3. Configure extension to use `problems` folder in the repo
4. Export solution with cases as in `1.two-sum.js`

```js
module.exports = {
  // ignore: true,
  fn: twoSum,
  cases: [
    { in: [[2, 7, 11, 15], 9], out: [0, 1] },
    { in: [[11, 2, 15, 7], 9], out: [1, 3] },
  ],
}
```

5. `npm start`

## Features

### Ignoring problems

You can ignore problem if you export `ignore: true`

### Testing for unordered results

If you are asked to provide an array of solutions without particular order, you can use helper method to test your functions. See `49.group-anagrams.js`
