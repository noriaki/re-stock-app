# Re-Stock アプリのコーディング規約

## 命名規則

### ファイル名
- コンポーネントファイル: kebab-case（例: `user-profile.tsx`）
- コンポーネント名: PascalCase（例: `UserProfile`）
- ユーティリティ関数: camelCase（例: `formatDate.ts`）
- 型定義ファイル: kebab-case（例: `user-types.ts`）
- テストファイル: 対象ファイル名 + `.test.ts(x)`（例: `user-profile.test.tsx`）

### 変数・関数名
- 変数名: camelCase（例: `userName`）
- 関数名: camelCase（例: `getUserData`）
- クラス名: PascalCase（例: `UserRepository`）
- インターフェース名: PascalCase（例: `UserData`）
- 型名: PascalCase（例: `UserId`）
- 定数: UPPER_SNAKE_CASE（例: `MAX_RETRY_COUNT`）

### コンポーネントProps
- Props型は明示的に定義する
- Props型名はコンポーネント名 + `Props`（例: `UserProfileProps`）
- 必須でないPropsはオプショナルとして明示する

```typescript
type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
};
```

## コードフォーマット

- インデント: 2スペース
- 行の最大長: 100文字
- セミコロン: 必須
- クォート: シングルクォート（`'`）を優先
- コンマ: 末尾コンマを使用
- 括弧: 開始括弧は同じ行に配置

```typescript
function example(
  param1: string,
  param2: number,
) {
  // 実装
}
```

## TypeScript

### 型定義
- `any`型の使用を避ける
- 必要な場合は`unknown`型を使用し、型の絞り込みを行う
- 関数の戻り値の型を明示する
- ジェネリック型を適切に活用する
- インデックスシグネチャよりも明示的なプロパティを優先する

### 型安全性
- ブランド型を活用して型安全性を高める
- 列挙型（enum）よりもユニオン型を優先する
- 型ガードを適切に使用する
- `as`キーワードの使用を最小限に抑える

### エラー処理
- Result型を使用して成功/失敗を明示的に表現する
- エラー型を具体的に定義する
- try/catchブロックでは具体的なエラー型を処理する

## コンポーネント

### 構造
- 関数コンポーネントを使用する
- 小さく、単一責任の原則に従ったコンポーネントを作成する
- 複雑なロジックはカスタムフックに抽出する
- メモ化（React.memo, useMemo, useCallback）を適切に使用する

### スタイリング
- Tailwind CSSのユーティリティクラスを基本とする
- 変数ベースの色（`bg-primary`, `text-primary-foreground`など）を使用する
- 命名クラスよりもユーティリティクラスを優先する
- カスタムクラスは必要最小限にとどめる

### アクセシビリティ
- セマンティックなHTML要素を使用する
- 適切なaria属性を設定する
- キーボードナビゲーションをサポートする
- コントラスト比を確保する

## テスト

### 単体テスト
- 各関数、コンポーネントに対するテストを作成する
- テスト名は「状況→操作→結果」の形式に従う
- モックは最小限に抑え、実際の振る舞いをテストする
- エッジケースを考慮したテストを含める

### コンポーネントテスト
- React Testing Libraryを使用する
- ユーザーの視点からテストを書く
- 実装の詳細ではなく、振る舞いをテストする
- アクセシビリティのテストを含める

## コメント

### 基本方針
- コードは自己説明的であるべき
- 複雑なロジックや非直感的な部分にのみコメントを追加する
- なぜそうしたのか（why）を説明するコメントを優先する
- 何をしているか（what）は明確なコードで表現する

### JSDoc
- 公開APIやライブラリ関数にはJSDocを使用する
- パラメータと戻り値の型を明記する
- 例外がスローされる条件を記述する
- 使用例を含める

```typescript
/**
 * ユーザーIDから詳細情報を取得する
 * @param userId - 取得対象のユーザーID
 * @returns ユーザー情報を含むResult型。エラーの場合はApiErrorを返す
 * @throws ネットワークエラーが発生した場合
 * @example
 * const result = await fetchUserDetails('user123');
 * if (result.ok) {
 *   const user = result.value;
 *   // ユーザー情報を使用
 * }
 */
async function fetchUserDetails(userId: string): Promise<Result<User, ApiError>> {
  // 実装
}
```

## インポート

### 順序
1. 外部ライブラリ
2. 内部モジュール（相対パスではないもの）
3. 相対パスのインポート

```typescript
// 外部ライブラリ
import React, { useState, useEffect } from 'react';
import { z } from 'zod';

// 内部モジュール
import { Button } from '@/components/ui/button';
import { useUserStore } from '@/stores/user-store';

// 相対パスのインポート
import { formatUserName } from '../../utils/format';
import type { UserData } from './types';
```

### エイリアス
- `@/`プレフィックスを使用して絶対パスインポートを行う
- 深いネストを避けるために適切なエイリアスを設定する

## 状態管理

### Zustand
- ストアは機能ごとに分割する
- 状態と更新ロジックを明確に分離する
- 複雑な更新ロジックは関数として抽出する
- 永続化が必要な場合はmiddlewareを使用する

### ローカルステート
- コンポーネント固有の状態にはuseStateを使用する
- 関連する複数の状態はuseReducerでまとめる
- 派生状態にはuseMemoを使用する

## パフォーマンス

### 最適化
- 不要な再レンダリングを避ける
- 大きなリストには仮想化を検討する
- 重い計算はuseMemoでキャッシュする
- イベントハンドラはuseCallbackでメモ化する

### バンドルサイズ
- 動的インポートを活用する
- 大きなライブラリは必要な部分だけをインポートする
- 画像は最適化する
- 未使用のコードを削除する

## セキュリティ

### 入力検証
- すべてのユーザー入力を検証する
- zodなどのバリデーションライブラリを使用する
- サーバーサイドでも検証を行う

### XSS対策
- ユーザー入力をエスケープする
- dangerouslySetInnerHTMLの使用を避ける
- Content Security Policyを設定する

## バージョン管理

### コミット
- 1つの論理的な変更ごとにコミットを作成する
- コミットメッセージは変更内容を明確に伝える
- プレフィックスを使用してコミットの種類を示す（例: `feat:`, `fix:`, `docs:`, `refactor:`）

### ブランチ
- 機能開発は`feature/`ブランチで行う
- バグ修正は`fix/`ブランチで行う
- リリース準備は`release/`ブランチで行う
- 緊急修正は`hotfix/`ブランチで行う

### プルリクエスト
- PRの説明には目的、変更内容、テスト結果を明記する
- レビュー時の注目ポイントを明示する
- 関連するイシューへのリンクを含める
