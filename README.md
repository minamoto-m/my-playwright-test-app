# my-playwright-test-app

このリポジトリは、Next.js と Playwright を使用したエンドツーエンド（E2E）テストのサンプルプロジェクトです。  
ローカル環境での動作確認や、Playwright による基本的なブラウザテストの実行方法を体験できます。

---

## 📦 使用技術

- [Next.js](https://nextjs.org/)
- [Playwright](https://playwright.dev/)

---

## 🚀 セットアップ手順

### 1. リポジトリのクローン

```bash
git clone https://github.com/your-username/my-playwright-test-app.git
cd my-playwright-test-app
```

### 2. パッケージのインストール

```bash
npm install
```

### 3. Playwright のブラウザをインストール```bash

```bash
npx playwright install
```

## 🔧 開発サーバーの起動

```bash
npm run dev
```

## 🧪 テストの実行

```bash
npx playwright test
```

## テスト内容について

### クロスブラウザーテスト

以下3つの環境でテストが走ります。
- Chromium
- WebKit
- Firefox

ChromiumはGoogle ChromeやMicrosoft Edgeで使用されており、WebKitはSafariで使用されています。Firefoxは独自のエンジンを持っています。これらのブラウザをカバーすることで、ほとんどのユーザーに対応できます。

### ヘッドフルモード
playwright.config.tsに以下を追加することで、テスト実行時に実際のブラウザの挙動を見ることができます。

```typescript
use: {
    headless: false, // ヘッドフルモードで実行
}
```

### レコーディング・コード生成
以下のコマンドを叩くことでブラウザの操作を記録し、テストコードを生成します。

```bash
npx playwright codegen
```