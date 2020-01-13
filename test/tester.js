const fs = require('fs')
const assert = require('assert')
const toStr = JSON.stringify

const problems = fs.readdirSync('./problems')
problems.forEach(srcPath => {
  const { fn, cases } = require(`../problems/${srcPath}`)
  if (!fn || !cases) return
  describe(srcPath.slice(srcPath.lastIndexOf('/') + 1), () => {
    run(fn, cases)
  })
})

function run(fn, cases) {
  cases.forEach(c => {
    it(`( ${c.in.map(toStr).join(', ')} ) -> ${toStr(c.out)}`, () => {
      if (typeof c.out === 'function') {
        assert.ok(c.out(fn.apply(null, c.in)))
      } else assert.deepEqual(fn.apply(null, c.in), c.out)
    })
  })
}
