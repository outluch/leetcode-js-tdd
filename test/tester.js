const fs = require('fs')
const assert = require('assert')
const _ = require('lodash')

const toStr = JSON.stringify

const truncOpts = { length: 30, omission: ' ...' }

function run(fn, cases) {
  cases.forEach(c => {
    const hrstart = process.hrtime()
    const result = fn.apply(null, c.in)
    const hrend = process.hrtime(hrstart)

    const inStr = _.chain(c.in)
      .map(toStr)
      .join(', ')
      .truncate(truncOpts)
      .value()

    const outStr =
      typeof c.out === 'function'
        ? '[checkfn]'
        : _.truncate(toStr(c.out), truncOpts)

    const timeStr = `${(hrend[0] + hrend[1] / 1000000).toFixed(6)}`

    it(`${timeStr}: ( ${inStr} ) -> ${outStr}`, () => {
      if (typeof c.out === 'function') {
        assert.ok(c.out(result))
      } else assert.deepEqual(result, c.out)
    })
  })
}

fs.readdirSync('./problems').forEach(srcPath => {
  const { fn, cases } = require(`../problems/${srcPath}`)
  if (!fn || !cases) return
  describe(srcPath.slice(srcPath.lastIndexOf('/') + 1), () => {
    run(fn, cases)
  })
})
