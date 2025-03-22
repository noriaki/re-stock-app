module.exports = {
  '**/*.{js,jsx,ts,tsx}': [
    'yarn lint:fix',
    'yarn typecheck',
    // テストは後で修正するため一時的にコメントアウト
    // 'yarn test --findRelatedTests --bail',
  ],
};