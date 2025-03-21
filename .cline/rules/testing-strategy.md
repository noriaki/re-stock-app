# Re-Stock アプリのテスト戦略

## テスト駆動開発 (TDD)

### 基本原則

テスト駆動開発（TDD）は以下のサイクルで進める開発手法です：

1. **Red**: まず失敗するテストを書く
2. **Green**: テストが通るように最小限の実装をする
3. **Refactor**: コードをリファクタリングして改善する

### 実装戦略

- **テストは仕様である**: テストコードは実装の仕様を表現したもの
- 小さな単位で反復する
- 継続的なリファクタリングを行う

## テストフレームワーク

- **Jest**: Next.js のデフォルトテストフレームワーク
- **React Testing Library**: UI コンポーネントのテスト
- **Cypress**: E2E テスト（必要に応じて）

## テスト種別

### 単体テスト

- 各関数、コンポーネントに対するテストを作成する
- テスト名は「状況 → 操作 → 結果」の形式に従う
- モックは最小限に抑え、実際の振る舞いをテストする
- エッジケースを考慮したテストを含める

### コンポーネントテスト

- React Testing Library を使用する
- ユーザーの視点からテストを書く
- 実装の詳細ではなく、振る舞いをテストする
- アクセシビリティのテストを含める

### 統合テスト

- 複数のコンポーネントやモジュールの連携をテストする
- 実際のユーザーフローに沿ったテストを作成する
- 主要なユースケースをカバーする

### E2E テスト

- 重要なユーザーフローに対してのみ作成する
- 実際のブラウザ環境での動作を確認する
- CI/CD パイプラインに組み込む

## テスト作成の重要な考え方

### Assert-Act-Arrange の順序で考える

1. まず期待する結果（アサーション）を定義
2. 次に操作（テスト対象の処理）を定義
3. 最後に準備（テスト環境のセットアップ）を定義

### テスト名の付け方

テスト名は「状況 → 操作 → 結果」の形式で記述する：

例: 「有効なトークンの場合にユーザー情報を取得すると成功すること」

## リポジトリのテスト

- インメモリ実装を使用したテスト
- 永続化ロジックとドメインロジックを分離してテスト
- エッジケースを考慮したテスト（空の結果、エラーケースなど）

## リファクタリングフェーズのツール

テストが通った後のリファクタリングフェーズでは、以下のツールを活用します：

1. **静的解析・型チェック**:

   - `yarn tsc --noEmit <target>`
   - `yarn lint <target>`

2. **コードカバレッジ測定**:

   - `yarn test --coverage`

3. **Git によるバージョン管理**:
   - 各フェーズ（テスト作成 → 実装 → リファクタリング）後にコミットする
   - タスク完了時にユーザーに確認する

## テスト可能性を高めるための設計

- 依存性の注入を活用する
- 副作用を分離する
- 純粋関数を優先する
- テスト用のモックやスタブを容易に作成できるようにする

## テストデータの管理

- テストデータはテストファイル内で定義する
- 共通のテストデータはファクトリ関数を使用して生成する
- テストごとに必要最小限のデータを使用する
- テストデータは実際のデータに近いものを使用する
