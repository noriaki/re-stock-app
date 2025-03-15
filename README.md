# Cline AI プログラミングボイラープレート

このプロジェクトは、[Cline](https://cline.ai)を使用した AI プログラミングのためのボイラープレートです。[Next.js](https://nextjs.org) App Router をベースにした最新の開発環境が整っており、新しいプロジェクトの開始点として利用できます。

## 特徴

- **Next.js 15.2.1**: App Router を使用した最新の React フレームワーク
- **React 19**: 最新の React ライブラリ
- **TypeScript**: 型安全な JavaScript 開発
- **TailwindCSS**: ユーティリティファーストの CSS フレームワーク
- **ESLint**: コード品質の維持
- **Cline 対応**: AI との共同開発のための設定

## 開発環境

このプロジェクトは VS Code Dev Containers を使用して開発環境を標準化しています。

### 前提条件

- [Docker](https://www.docker.com/get-started)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Remote - Containers 拡張機能](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- [Cline 拡張機能](https://marketplace.visualstudio.com/items?itemName=cline.cline)

### 開発環境の起動方法

1. リポジトリをクローン: `git clone https://github.com/yourusername/your-project-name.git`
2. VS Code でプロジェクトを開く
3. VS Code が開発コンテナの使用を検出し、メッセージが表示されます
4. 「Reopen in Container」をクリックしてコンテナ内で開発を開始

または、コマンドパレット（`F1`）から「Remote-Containers: Reopen in Container」を選択します。

### GitHub Codespaces の使用

このプロジェクトは GitHub Codespaces もサポートしています。GitHub リポジトリページの「Code」ボタンから「Create codespace」を選択するだけで開発を開始できます。

## Cline との連携

このボイラープレートは、Cline を使用した AI プログラミングのために最適化されています。

### Cline の設定

- `.clinerules`: Cline の振る舞いを定義するルールファイル
- `.cline/rules/`: .clinerules の元となる振る舞い・ルール
- `.cline/memory/`: Cline のメモリ保存用ディレクトリ
- `.cline/memory-bank/`: 追加のコンテキストや知識情報用ディレクトリ

## 開発の開始

開発サーバーを起動するには：

```bash
npm run dev
# または
yarn dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開くと結果が表示されます。

`app/page.tsx` を編集することでページの編集を開始できます。ファイルを編集すると、ページは自動的に更新されます。

## プロジェクトのカスタマイズ

このボイラープレートは、あなたのプロジェクトに合わせてカスタマイズすることを前提としています：

1. `package.json` の `name` フィールドを更新
2. `.clinerules` ファイルをプロジェクトの要件に合わせて調整
3. `README.md` を更新して、プロジェクト固有の情報を追加

## 学習リソース

Next.js について詳しく学ぶには、以下のリソースを参照してください：

- [Next.js ドキュメント](https://nextjs.org/docs) - Next.js の機能と API について学ぶ
- [Learn Next.js](https://nextjs.org/learn) - インタラクティブな Next.js チュートリアル

Cline について詳しく学ぶには、以下のリソースを参照してください：

- [Cline ドキュメント](https://cline.ai/docs) - Cline の使い方と機能について学ぶ

## デプロイ

Next.js アプリをデプロイする最も簡単な方法は、Next.js の作成者による Vercel プラットフォームを使用することです：

- [Vercel Platform](https://vercel.com/new)
- [Next.js デプロイドキュメント](https://nextjs.org/docs/app/building-your-application/deploying)
