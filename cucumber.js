module.exports = {
  default: {
    require: [
      'steps/**/*.js',
      'hooks/**/*.js'
    ],
    paths: ['features/**/*.feature'],
    format: ['progress', 'json:playwright-report/cucumber-report.json'],
    publishQuiet: true
  }
};