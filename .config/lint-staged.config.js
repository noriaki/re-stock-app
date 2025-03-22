module.exports = {
  '**/*.{js,jsx,ts,tsx}': [
    'yarn lint:fix',
    'yarn typecheck',
    'yarn test --findRelatedTests --bail',
  ],
};