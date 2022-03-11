/* eslint-disable @typescript-eslint/no-var-requires */
// Import JSON Files
const companies = require('./companies.json');
const items = require('./items.json');

// Export Files
module.exports = () => ({
  items,
  companies
});
