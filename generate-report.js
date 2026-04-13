const report = require('multiple-cucumber-html-reporter');
const fs = require('fs');

const timestamp = new Date()
  .toISOString()
  .replace(/[:.]/g, '-'); // safe folder name

const reportPath = `playwright-report/html-report-${timestamp}`;

// Create the report directory if it doesn't exist
fs.mkdirSync(reportPath, { recursive: true });


report.generate({
  jsonDir: 'playwright-report',
  reportPath: reportPath,
  displayDuration: true,
  displayReportTime: true,

  metadata: {
    browser: {
      name: 'chrome',
      version: 'latest'
    },
    platform: {
      name: 'windows',
      version: '10'
    },
    customData: {
      title: 'Run Info',
      data: [
        { label: 'Project', value: 'Playwright Cucumber' },
        { label: 'Environment', value: 'QA' },
        { label: 'Executed By', value: 'Local Run' }
      ]
    }
  }
});