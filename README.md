# 04 GitHubプロフィール & ポートフォリオサイト

[GitHub Repository](https://github.com/studying-tech/exercise-github)

GitHubプロフィールリポジトリとポートフォリオサイトを作成し、開発者としてのプレゼンスを確立します。

## この演習で学べること

- GitHubプロフィールREADMEの作成と装飾
- GitHub Pagesを使用した静的サイトのホスティング
- Gitのブランチ戦略とプルリクエストワークフロー
- Markdownの高度な活用方法
- 個人ブランディングとポートフォリオ設計

## 演習の目標

魅力的なGitHubプロフィールと、自分のスキルをアピールできるポートフォリオサイトを作成します。これにより、企業の採用担当者や他の開発者に効果的にアピールできるオンラインプレゼンスを構築します。

## 前提条件

- GitHubアカウント（必須）
- Git/GitHubの基本的な操作知識
- HTML/CSSの基本知識
- Markdownの基本文法

## クイックスタート

```sh
# 1. プロフィールリポジトリの作成
# GitHubで新規リポジトリを作成（リポジトリ名 = あなたのユーザー名）

# 2. リポジトリをクローン
git clone https://github.com/[あなたのユーザー名]/[あなたのユーザー名].git
cd [あなたのユーザー名]

# 3. README.mdを作成・編集
# profile-template.mdを参考に作成

# 4. GitHub Pagesリポジトリの作成
# GitHubで新規リポジトリ「[username].github.io」を作成

# 5. ポートフォリオサイトの開発
cd ../[username].github.io
# HTMLファイルを作成
```

## プロジェクト構成

```txt
/
├── README.md                   # このファイル
├── profile-template.md         # プロフィールREADMEのテンプレート
├── portfolio/                  # ポートフォリオサイトの例
│   ├── index.html             # メインページ
│   ├── style.css              # スタイルシート
│   ├── script.js              # JavaScript
│   └── assets/                # 画像等のアセット
├── examples/                   # 参考例
│   ├── github-profile/        # プロフィール例
│   └── portfolio-site/        # ポートフォリオ例
├── git-workflow.md            # Git操作の手順書
└── submission-urls.md         # 提出URL記録用
```

## 開発の進め方

### ステップ1: GitHubプロフィールREADMEの作成

あなたのユーザー名と同じ名前のリポジトリを作成し、README.mdを編集します。

```markdown
# 👋 こんにちは！[あなたの名前]です

## About Me

- 🔭 現在取り組んでいること: [プロジェクト名]
- 🌱 学習中: [技術スタック]
- 💬 得意分野: [専門分野]
- 📫 連絡先: [メールまたはSNS]

## 🛠️ Tech Stack

![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=black)
```

### ステップ2: ポートフォリオサイトの構築

GitHub Pagesを使用してポートフォリオサイトをホスティングします。

```html
<!-- index.html の基本構造 -->
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>あなたの名前 - Portfolio</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    <!-- コンテンツ -->
  </body>
</html>
```

### ステップ3: Gitワークフローの実践

適切なブランチ戦略とコミットプラクティスを実践します。

```sh
# フィーチャーブランチの作成
git checkout -b feature/add-projects-section

# 変更をコミット
git add .
git commit -m "feat: プロジェクトセクションを追加"

# プッシュとPR作成
git push origin feature/add-projects-section
```

## 必須要件

- [ ] GitHubプロフィールリポジトリの作成とREADME.mdの装飾
- [ ] ポートフォリオサイト（[username].github.io）の作成と公開
- [ ] 最低3つのプロジェクトの紹介
- [ ] レスポンシブデザインの実装
- [ ] 適切なGitコミット履歴（ブランチ運用）

## 追加課題（オプション）

- [ ] GitHub Statsやバッジの追加
- [ ] ダイナミックなコンテンツ（最新のブログ記事等）
- [ ] カスタムドメインの設定
- [ ] Google Analyticsの導入
- [ ] 多言語対応（英語/日本語）

## 採点基準

| 項目     | 配点 | 評価内容                   |
| -------- | ---- | -------------------------- |
| 機能性   | 40点 | 必須機能の実装と動作確認   |
| デザイン | 30点 | UI/UX、レスポンシブ対応    |
| Git運用  | 20点 | コミット履歴、ブランチ戦略 |
| 創造性   | 10点 | オリジナリティ、追加機能   |

## トラブルシューティング

### プロフィールREADMEが表示されない

**問題**: リポジトリを作成したのにプロフィールに表示されない
**解決方法**:

- リポジトリ名がユーザー名と完全に一致しているか確認
- リポジトリが公開（Public）になっているか確認
- README.mdがリポジトリのルートにあるか確認

### GitHub Pagesが更新されない

**問題**: pushしても変更が反映されない
**解決方法**:

- ブラウザのキャッシュをクリア（Ctrl+Shift+R）
- Settings > Pages でソースブランチを確認
- GitHub Actionsの実行状況を確認

### 画像が表示されない

**問題**: READMEやポートフォリオで画像が表示されない
**解決方法**:

```markdown
<!-- 相対パスではなく完全なURLを使用 -->

![Image](https://raw.githubusercontent.com/username/repo/main/image.png)

<!-- またはissuesにアップロードした画像のURLを使用 -->
```

## 参考資料

- [GitHub Profile README Generator](https://github.com/rahuldkjain/github-profile-readme-generator)
- [Awesome GitHub Profile README](https://github.com/abhisheknaiidu/awesome-github-profile-readme)
- [GitHub Pages Documentation](https://docs.github.com/pages)
- [Shields.io - バッジ作成](https://shields.io/)

## 課題提出方法

1. このリポジトリをフォーク
2. `submission/[あなたの名前]` ブランチを作成
3. `submission-urls.md`に作成したURLを記載
4. プルリクエストを作成
5. 自動採点の結果を確認
6. 必要に応じて修正

### 詳細な提出手順

#### 1. リポジトリのフォーク

```sh
# GitHub で Fork ボタンをクリック後
git clone https://github.com/[あなたのユーザー名]/exercise-github.git
cd exercise-github
```

#### 2. ブランチ作成

```sh
git checkout -b submission/taro-yamada
```

#### 3. 実装とコミット

```sh
# 提出URLファイルの作成
echo "# 提出URL一覧" > submission-urls.md
echo "- GitHubプロフィール: https://github.com/[username]" >> submission-urls.md
echo "- ポートフォリオサイト: https://[username].github.io" >> submission-urls.md

git add submission-urls.md
git commit -m "docs: 提出URLを記録"

# スクリーンショットの追加（推奨）
git add screenshots/
git commit -m "docs: プロフィールとポートフォリオのスクリーンショットを追加"
```

#### 4. プッシュとPR作成

```sh
git push origin submission/taro-yamada
```

GitHubでプルリクエストを作成：

- タイトル: `[提出] 演習04: プロフィール＆ポートフォリオ - 山田太郎`
- 本文: 作成したサイトの特徴と工夫点を記載

## 開発のヒント

### 効果的なプロフィールREADME

- **視覚的要素**: GIF、画像、バッジを活用
- **統計情報**: GitHub Stats、言語使用率
- **構造化**: セクションを明確に分ける
- **更新頻度**: 定期的に内容を更新

### ポートフォリオサイトのポイント

- **ファーストビュー**: 3秒で何者か分かるデザイン
- **プロジェクト紹介**: デモリンクとソースコード
- **スキルセット**: 視覚的に分かりやすく
- **連絡先**: 複数の連絡方法を提供

### Gitコミットメッセージ

```sh
# 良い例
git commit -m "feat: プロジェクトカードにホバーアニメーションを追加"
git commit -m "fix: モバイル表示でのナビゲーションメニューの不具合を修正"

# 避けるべき例
git commit -m "更新"
git commit -m "fix"
```

頑張って魅力的なオンラインプレゼンスを構築してください！
