const fs = require('fs')
const assert = require('assert')
const _ = require('lodash')

const toStr = function(input) {
  let cache = new Set()
  let result = JSON.stringify(input, function(key, value) {
    if (typeof value === 'object' && value !== null) {
      if (cache.has(value)) return
      cache.add(value)
    }
    return value
  })
  cache = null
  return result
}

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

    const timeStr = `${hrend[0]}.${_.padEnd(hrend[1], 10, '0').slice(0, 6)}`

    it(`${timeStr}: ( ${inStr} ) -> ${outStr}`, () => {
      if (typeof c.out === 'function') {
        assert.ok(c.out(result))
      } else assert.deepEqual(result, c.out)
    })
  })
}

fs.readdirSync('./problems').forEach(srcPath => {
  const { ignore, fn, cases } = require(`../problems/${srcPath}`)
  if (ignore || !fn || !cases) return
  describe(srcPath.slice(srcPath.lastIndexOf('/') + 1), () => {
    run(fn, cases)
  })
})
