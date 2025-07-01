# Git ワークフロー手順書

このドキュメントでは、課題で使用するGitの基本的なワークフローを説明します。

## 基本的なブランチ戦略

### 1. リポジトリのクローンと初期設定

```sh
# リポジトリをクローン
git clone https://github.com/your-username/your-username.github.io.git
cd your-username.github.io

# ユーザー情報の設定（初回のみ）
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### 2. 開発用ブランチの作成

```sh
# メインブランチから開発ブランチを作成
git checkout -b develop

# 機能追加用のブランチを作成
git checkout -b feature/add-portfolio-section
```

## コミットメッセージの規約

### Conventional Commits形式を使用

```sh
# 新機能追加
git commit -m "feat: Add portfolio section with project cards"

# バグ修正
git commit -m "fix: Correct responsive layout on mobile devices"

# ドキュメント更新
git commit -m "docs: Update README with setup instructions"

# スタイル修正
git commit -m "style: Improve button hover animations"

# リファクタリング
git commit -m "refactor: Reorganize CSS structure"

# テスト追加
git commit -m "test: Add validation for contact form"
```

## プルリクエストのワークフロー

### 1. 機能実装とコミット

```sh
# ファイルを編集後、変更をステージング
git add .

# コミット
git commit -m "feat: Add contact form with validation"

# リモートにプッシュ
git push origin feature/add-contact-form
```

### 2. プルリクエストの作成

GitHubのWebインターフェースで：

1. "New pull request"をクリック
2. ベースブランチ（main）とコンペアブランチ（feature/xxx）を選択
3. タイトルと説明を記入

**良いプルリクエストの例：**

```
Title: Add contact form with validation

Description:
## 変更内容
- お問い合わせフォームの追加
- JavaScript validation の実装
- レスポンシブ対応

## 確認項目
- [ ] フォームの動作確認
- [ ] モバイルでの表示確認
- [ ] バリデーション機能の確認

## スクリーンショット
（必要に応じて画像を添付）
```

### 3. コードレビュー対応

```sh
# レビューで指摘された修正を実施
git add .
git commit -m "fix: Address code review comments"
git push origin feature/add-contact-form
```

### 4. マージ後の整理

```sh
# メインブランチに移動
git checkout main

# 最新の変更を取得
git pull origin main

# 不要になったブランチを削除
git branch -d feature/add-contact-form
git push origin --delete feature/add-contact-form
```

## コンフリクトの解決

### 1. コンフリクトが発生した場合

```sh
# メインブランチの最新変更を取得
git checkout main
git pull origin main

# 作業ブランチにマージしてコンフリクトを確認
git checkout feature/your-feature
git merge main
```

### 2. コンフリクトの修正

```sh
# コンフリクトファイルを編集（VS Codeなどで）
# <<<<<<< HEAD と >>>>>>> の部分を適切に修正

# 修正後、ファイルをステージング
git add conflicted-file.html

# マージコミット
git commit -m "resolve: Merge conflict in conflicted-file.html"
```

## 便利なGitコマンド

### 状態確認

```sh
# 現在の状態を確認
git status

# コミット履歴を確認
git log --oneline --graph

# ブランチ一覧
git branch -a
```

### 変更の確認

```sh
# 変更差分を確認
git diff

# ステージング済みの差分
git diff --staged

# 特定のコミットとの差分
git diff HEAD~1
```

### 作業の一時保存

```sh
# 作業を一時保存
git stash

# 保存した作業を復元
git stash pop

# 保存リストを確認
git stash list
```

## GitHub Pages のデプロイ

### 自動デプロイの設定

1. リポジトリ設定 → Pages
2. Source: "Deploy from a branch"
3. Branch: main / (root)
4. Save

### カスタムドメインの設定（任意）

```sh
# CNAMEファイルを作成
echo "your-domain.com" > CNAME
git add CNAME
git commit -m "feat: Add custom domain"
git push origin main
```

## トラブルシューティング

### よくある問題と解決策

1. **コミットできない**

   ```sh
   # ユーザー情報が設定されていない場合
   git config user.email "your.email@example.com"
   git config user.name "Your Name"
   ```

2. **プッシュできない**

   ```sh
   # リモートの変更を先に取得
   git pull origin main
   ```

3. **間違ったコミットメッセージ**

   ```sh
   # 直前のコミットメッセージを修正
   git commit --amend -m "New commit message"
   ```

4. **ファイルを間違ってコミット**

   ```sh
   # ファイルをインデックスから削除（ファイル自体は残す）
   git reset HEAD filename
   ```
