const _ = require('lodash')

module.exports = {
  checkUnordered: solutions => submissions => {
    return (
      solutions.length == submissions.length &&
      _.every(solutions, solution =>
        _.some(submissions, submission =>
          _.isEqual(_.sortBy(solution), _.sortBy(submission))
        )
      )
    )
  },
}
