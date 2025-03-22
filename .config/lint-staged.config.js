module.exports = {
  '**/*.{js,jsx,ts,tsx}': [
    'yarn lint',
    'yarn tsc --noEmit',
    'yarn test --findRelatedTests --bail',
  ],
};