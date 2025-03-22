# [\#](https://developers.line.biz/ja/docs/line-mini-app/develop/develop-overview/#page-title) 開発を始めよう

LINEミニアプリの開発を始める前に、特に以下の内容を確認してください。

- LINEミニアプリを知る
  - [仕様](https://developers.line.biz/ja/docs/line-mini-app/discover/specifications/)
- デザイン
  - [LINEミニアプリのアイコンを作成する](https://developers.line.biz/ja/docs/line-mini-app/design/line-mini-app-icon/)
  - [ランドスケープモードのセーフエリア](https://developers.line.biz/ja/docs/line-mini-app/design/landscape/)
  - [読み込み中アイコン](https://developers.line.biz/ja/docs/line-mini-app/design/loading-icon/)
- 開発
  - [パフォーマンスガイドライン](https://developers.line.biz/ja/docs/line-mini-app/develop/performance-guidelines/)
- 申請
  - [審査を依頼する](https://developers.line.biz/ja/docs/line-mini-app/submit/submission-guide/)
  - [LINEミニアプリポリシー(opens new window)](https://terms2.line.me/LINE_MINI_App?lang=ja)

## [\#](https://developers.line.biz/ja/docs/line-mini-app/develop/develop-overview/#create-line-mini-app-channel) LINEミニアプリチャネルを作成する

[チャネル](https://developers.line.biz/ja/docs/line-developers-console/overview/#channel) は、アプリとLINEプラットフォームを接続するための通信路です。LINEミニアプリごとに、LINE DevelopersコンソールでLINEミニアプリのチャネルを作成します。

1. [LINE Developersコンソール](https://developers.line.biz/console/) にアクセスし、プロバイダーを選択します。

2. ［ **チャネル設定**］>［ **新規チャネル作成**］>［ **LINEミニアプリ**］の順にクリックします。

![LINEミニアプリチャネル](https://developers.line.biz/assets/img/line-mini-app-channel-ja.fa40b615.png)

LINEミニアプリチャネルを作成する際は、サービスを提供する地域などの条件によって制限がある場合があります。詳しくは、「 [LINEミニアプリチャネルを作成する際の注意点](https://developers.line.biz/ja/docs/line-mini-app/develop/develop-overview/#precautions-for-channel-creation)」を参照してください。

3. 以下の項目に情報を入力して、LINEミニアプリのチャネルを作成します。

| 項目                                   | 入力必須項目 | 説明                                                                                                                                                                                                                                                          | ユーザーに表示される画面                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **チャネルの種類**                     | ✅           | チャネルの種類。「LINEミニアプリ」が選択されていることを確認します。                                                                                                                                                                                          | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **プロバイダー**                       | ✅           | [プロバイダー](https://developers.line.biz/ja/docs/line-developers-console/overview/#provider)。手順1で選択したプロバイダーが表示されていることを確認します。                                                                                                 | LINEミニアプリ起動時の権限の同意画面                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **サービスを提供する地域**             | ✅           | LINEミニアプリを提供する地域。以下のいずれかを選択します。<br>- 日本<br>- タイ<br>- 台湾<br>※複数の国でLINEミニアプリをリリースする場合は、国ごとにチャネルを作成します。                                                                                     | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **チャネルアイコン**                   | ❌           | チャネルのアイコン。アイコンのサイズやデザインについて詳しくは、「 [LINEミニアプリのアイコン](https://developers.line.biz/ja/docs/line-mini-app/design/line-mini-app-icon/)」を参照してください。                                                             | - LINEミニアプリ起動時の権限の同意画面<br>- [アクションボタン](https://developers.line.biz/ja/docs/line-mini-app/develop/configure-console/#built-in-share-settings) でLINEミニアプリのページをシェアしたときの、送信先のトークルーム<br>- [サービスメッセージ](https://developers.line.biz/ja/docs/line-mini-app/develop/service-messages/#template-elements) のフッターセクション<br>- [LINEアプリ内（ホームタブや検索機能など）](https://developers.line.biz/ja/docs/line-mini-app/discover/introduction/#access-line-mini-app-methods-for-users)<br>- [ショートカット追加画面](https://developers.line.biz/ja/docs/line-mini-app/develop/configure-console/#add-shortcut-screen) |
| **チャネル名**                         | ✅           | チャネルの名前<br>※チャネル名には、「LINE」またはそれに類する文字列を含めることはできません。                                                                                                                                                                 | - LINEミニアプリ起動時の権限の同意画面<br>- [アクションボタン](https://developers.line.biz/ja/docs/line-mini-app/develop/configure-console/#built-in-share-settings) でLINEミニアプリのページをシェアしたときの、送信先のトークルーム<br>- [サービスメッセージ](https://developers.line.biz/ja/docs/line-mini-app/develop/service-messages/#template-elements) のフッターセクション<br>- [LINEアプリ内（ホームタブや検索機能など）](https://developers.line.biz/ja/docs/line-mini-app/discover/introduction/#access-line-mini-app-methods-for-users)<br>- [ショートカット追加画面](https://developers.line.biz/ja/docs/line-mini-app/develop/configure-console/#add-shortcut-screen) |
| **チャネル説明**                       | ✅           | チャネルの説明。LINEミニアプリの開発担当企業とサービス事業主が異なる場合は、ユーザーに対して通知が必要です。詳しくは、『 [LINEミニアプリポリシー(opens new window)](https://terms2.line.me/LINE_MINI_App?lang=ja)』の「企業に関する情報」を参照してください。 | LINEミニアプリ起動時の権限の同意画面                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **メールアドレス**                     | ✅           | チャネルに関する重要な更新情報を受信するメールアドレス                                                                                                                                                                                                        | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **プライバシーポリシーURL**            | ✅ \*        | アプリのプライバシーポリシーのURL                                                                                                                                                                                                                             | LINEミニアプリ起動時の権限の同意画面                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **サービス利用規約URL**                | ❌           | アプリの利用規約のURL                                                                                                                                                                                                                                         | LINEミニアプリ起動時の権限の同意画面                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **LINE開発者契約**                     | ✅           | LINE開発者契約を読んで同意します。                                                                                                                                                                                                                            | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **LINEミニアプリプラットフォーム規約** | ✅           | LINEミニアプリプラットフォーム規約を読んで同意します。                                                                                                                                                                                                        | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **LINEミニアプリポリシー**             | ✅           | LINEミニアプリポリシーを読んで同意します。                                                                                                                                                                                                                    | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **サービス事業主の所在国・地域**       | ✅           | LINEミニアプリを提供する地域と、サービス事業主の所在国・地域が同一であることを表明し、保証します。                                                                                                                                                            | LINEミニアプリ起動時の権限の同意画面                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **LINEヤフープライバシーポリシー**     | 説明を参照   | ［ **サービスを提供する地域**］でタイを選択した場合のみ必須です。タイの [プライバシーポリシー(opens new window)](https://line.me/th/terms/policy/) を読んで承認します。                                                                                       | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

\\\* 認証プロバイダーの場合のみ、LINEミニアプリチャネル作成時にプライバシーポリシーURLの入力が必須となります

4. 「これらの規約に同意すること及びこれらの契約を締結することについて、会社を代表する必要かつ正当な権限を有していることを表明し、保証します。」から始まる文章を読み、表明および保証できる場合はチェックを付けます。

5. ［ **作成**］をクリックします。

6. 「情報利用に関する同意について」をよく読み、同意できる場合は［ **同意する**］をクリックします。

以上によりLINEミニアプリのチャネルが作成され、未認証ミニアプリとして利用可能な状態になります。

作成したLINEミニアプリチャネルの設定の変更について詳しくは、「 [LINE Developersコンソールで設定した内容が反映されるタイミングについて](https://developers.line.biz/ja/docs/line-mini-app/discover/console-guide/#timing-of-settings-reflection)」を参照してください。

### [\#](https://developers.line.biz/ja/docs/line-mini-app/develop/develop-overview/#precautions-for-channel-creation) LINEミニアプリチャネルを作成する際の注意点

LINEミニアプリチャネルを作成する際は、サービスを提供する地域などの条件によって制限がある場合があります。

- サービスを提供する地域が日本の場合は、 [LINEミニアプリポリシー(opens new window)](https://terms2.line.me/LINE_MINI_App?lang=ja) における「本サービスのご利用対象者」であれば、どなたでもLINEミニアプリチャネルを作成できます。
- サービスを提供する地域が日本であるにもかかわらず、LINEミニアプリチャネルを作成できない場合は、以下の方法をお試しください。
  - ビジネスアカウントにより [LINE Developersコンソール](https://developers.line.biz/console/) にログインしている場合、LINEアカウントと連携してください。ビジネスアカウントとLINEアカウントの連携について詳しくは、『LINE Developersコンソールドキュメント』の「 [ビジネスアカウントにLINEアカウントを連携させる](https://developers.line.biz/ja/docs/line-developers-console/login-account/#link-business-account-with-line-account)」を参照してください。
- サービスを提供する地域が台湾の場合は、当社現地法人より承認を受けた方のみLINEミニアプリチャネルを作成できます。詳しくは、『 [LINE MINI App official site for Taiwan users(opens new window)](https://tw.linebiz.com/service/other-solutions/line-mini-app/)』を参照してください。
- サービスを提供する地域がタイの場合は、当社現地法人より承認を受けた方のみLINEミニアプリチャネルを作成できます。承認を受けるためのお問い合わせ窓口は、現在準備中です。

### [\#](https://developers.line.biz/ja/docs/line-mini-app/develop/develop-overview/#privacy-policy-url-settings) プライバシーポリシーURLの設定について

LINEミニアプリの開発担当企業とサービス事業主が異なる場合は、［ **チャネル説明**］および［ **プライバシーポリシーURL**］を設定しないと審査を通過できません。詳しくは、『 [LINEミニアプリポリシー(opens new window)](https://terms2.line.me/LINE_MINI_App?lang=ja)』の「企業に関する情報」を参照してください。

LINEミニアプリチャネルを作成する際、認証プロバイダーの場合は［ **プライバシーポリシーURL**］を設定できますが、そうでない場合は設定できません。その場合は、まずLINEミニアプリチャネルを作成してから、［ **プライバシーポリシーURL**］を編集してください。

### [\#](https://developers.line.biz/ja/docs/line-mini-app/develop/develop-overview/#channel-and-provider-linkage) チャネルとプロバイダーの連携に関する注意点

一度作成したチャネルを、後から他のプロバイダーに移動することはできません。

開発者が提供するサービスを利用するLINEユーザーには、プロバイダーごとに異なるユーザーIDが割り当てられます。異なるプロバイダーに属するチャネル間では、ユーザーIDを利用して同一ユーザーであることを確認できません。

![](https://developers.line.biz/assets/img/different-user-ids.8c0c6c67.png)

チャネル作成時に特に注意が必要なケース

たとえば、以下のような場合には特に注意してください。

- チャネルとプロバイダーを別々の個人または企業が管理している。
- 1つのプロバイダー配下に、相互に関係がないサービスや企業のチャネルを作成する。
- チャネルの運用ツール等を運営するサービス（企業）が管理するプロバイダーの配下にチャネルを作成する。

このようなケースでは、後からチャネルをプロバイダー間で移動できないことや、プロバイダーごとに異なるユーザーIDが割り当てられることに起因して、将来的に問題が発生する可能性があります。そのリスクを十分検討した上で、適切なプロバイダーの配下にチャネルを作成してください。

## [\#](https://developers.line.biz/ja/docs/line-mini-app/develop/develop-overview/#develop-line-mini-app) LINEミニアプリの開発

LINEミニアプリチャネルを作成すると、LINEミニアプリの開発が始められます。 LINEミニアプリの開発は、 [LIFF](https://developers.line.biz/ja/docs/liff/overview/) の使用に加えて、このガイドで説明している追加機能と制約があるものと考えてください。

詳しくは、「 [LINEミニアプリの仕様](https://developers.line.biz/ja/docs/line-mini-app/discover/specifications/)」を参照してください。

### [\#](https://developers.line.biz/ja/docs/line-mini-app/develop/develop-overview/#internal-structure-of-a-line-mini-app-channel) LINEミニアプリチャネルの内部構造

LINE Developersコンソールの［ **チャネル設定**］タブでは、LINEミニアプリチャネルは1つに見えますが、内部では以下の3つのチャネル（以降、内部チャネル）で構成されています。

| 内部チャネル                 | 説明                                                                                                           |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------- |
| 開発用LINEミニアプリチャネル | 開発用に使用するLINEミニアプリチャネルです。チャネルステータスは常に「開発中」です。                           |
| 審査用LINEミニアプリチャネル | LINEヤフー株式会社による審査の際に使用するLINEミニアプリチャネルです。チャネルステータスは常に「開発中」です。 |
| 本番用LINEミニアプリチャネル | ユーザーに対して本番公開されるLINEミニアプリチャネルです。チャネルステータスは常に「公開中」です。             |

内部チャネルについて詳しくは、「 [LINEミニアプリ用LINE Developersコンソールガイド](https://developers.line.biz/ja/docs/line-mini-app/discover/console-guide/)」を参照してください。

### [\#](https://developers.line.biz/ja/docs/line-mini-app/develop/develop-overview/#using-apis) APIの使いかた

LINEミニアプリ用として提供されるAPIは、LIFF APIと [サービスメッセージAPI](https://developers.line.biz/ja/reference/line-mini-app/) の2種類があります。 LIFF APIはLINEミニアプリで呼び出し、サービスメッセージAPIはサーバーで呼び出します。 LIFF APIの利用方法については、『 [LIFFドキュメント](https://developers.line.biz/ja/docs/liff/overview/)』を参照してください。

たとえば、 [カスタムアクションボタンを実装する](https://developers.line.biz/ja/docs/line-mini-app/develop/share-messages/) ときは、LINEミニアプリでLIFF APIを呼び出します。また、 [サービスメッセージ](https://developers.line.biz/ja/docs/line-mini-app/develop/service-messages/) を送信する際は、サービスメッセージAPIをサーバーで呼び出します。

LIFF APIは常に改善を続けています

ユーザー体験を充実させるために、LIFF APIでは新規機能の追加や既存機能の改善が頻繁に行われています。

## [\#](https://developers.line.biz/ja/docs/line-mini-app/develop/develop-overview/#use-basic-authentication) 公開前のLINEミニアプリにベーシック認証でアクセス制限をかける

ステータスが「審査前」または「審査中」のLINEミニアプリでは、ベーシック認証が利用できます。特定の人のみが公開前のLINEミニアプリにアクセスできるよう、ベーシック認証を用いて制限がかけられます。

### [\#](https://developers.line.biz/ja/docs/line-mini-app/develop/develop-overview/#how-to-use-basic-authentication) ベーシック認証の利用方法

[LINE Developersコンソール](https://developers.line.biz/console/) の［ **ウェブアプリ設定**］タブで［ **開発用**］または［ **審査用**］の［ **エンドポイントURL**］にベーシック認証のかかったURLを指定します。そして、LINEミニアプリを [LIFFブラウザ](https://developers.line.biz/ja/glossary/#liff-browser) で開くと、ユーザー名とパスワードの入力を促すダイアログが表示されます。

![ベーシック認証画面](https://developers.line.biz/assets/img/basic-auth.f6a28554.png)

### [\#](https://developers.line.biz/ja/docs/line-mini-app/develop/develop-overview/#conditions-for-basic-authentication) ベーシック認証が利用できる条件

以下の条件をすべて満たす場合、ベーシック認証が利用できます。

- LINEミニアプリのステータスが「審査前」または「審査中」である
- LINEミニアプリを [LIFFブラウザ](https://developers.line.biz/ja/glossary/#liff-browser) で開いている

LIFFアプリ、およびステータスが「反映済み」のLINEミニアプリでは、ベーシック認証は利用できません。また、ダイジェスト認証は利用できません。

条件を満たしているのにベーシック認証が利用できない

LIFF間遷移後のLINEミニアプリではベーシック認証は利用できません。LIFF間遷移について詳しくは、『LIFFドキュメント』の「 [LIFFアプリから別のLIFFアプリを開いた場合の動作について（LIFF間遷移）](https://developers.line.biz/ja/docs/liff/opening-liff-app/#move-liff-to-liff)」を参照してください。

LIFFブラウザのベーシック認証に関する仕様については、『LIFFドキュメント』の [LIFFブラウザの仕様](https://developers.line.biz/ja/docs/liff/overview/#liff-browser-spec) を参照してください。

### [\#](https://developers.line.biz/ja/docs/line-mini-app/develop/develop-overview/#notes-on-using-basic-authentication) ベーシック認証を利用する際の注意

ベーシック認証は、簡易的なアクセス制限として用いられる認証方式です。LINEミニアプリの開発者は、ベーシック認証がセキュリティ要件を満たすものかをご自身で評価、判断したうえで利用してください。

この機能は、ベーシック認証の利用を推奨したり、ベーシック認証によるアクセス制限の安全性を保証したりするものではありません。

## [\#](https://developers.line.biz/ja/docs/line-mini-app/develop/develop-overview/#recommendations-for-development) 開発時に気をつけること

提供するサービスの主な機能を、ユーザーが早く簡単に利用できるようにLINEミニアプリを開発してください。私たちは以下の内容をお勧めします。

- ユーザーの現在の情報を確認するためには、HTML5の [Geolocation API(opens new window)](https://www.w3.org/TR/geolocation/) を利用してください。
- LIFF APIで取得できるユーザーのプロフィール情報を活用してください。たとえば、飲食店を予約するときに、ユーザーが改めて個人情報を入力する必要がなくなります。
- LINEミニアプリのユーザーによりよいユーザー体験を提供するために、LINEミニアプリのパフォーマンスを最適化してください。詳しくは、「 [パフォーマンスガイドライン](https://developers.line.biz/ja/docs/line-mini-app/develop/performance-guidelines/)」を参照してください。

## [\#](https://developers.line.biz/ja/docs/line-mini-app/develop/develop-overview/#request-line-mini-app-review) LINEミニアプリの審査を依頼する

LINEミニアプリチャネルを作成した段階では、LINEミニアプリは未認証ミニアプリであり、一部機能が制限されています。開発したLINEミニアプリを認証済ミニアプリにするには、LINEヤフー株式会社による認証審査を受ける必要があります。詳しくは、「 [審査を依頼する](https://developers.line.biz/ja/docs/line-mini-app/submit/submission-guide/)」を参照してください。
