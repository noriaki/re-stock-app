# [\#](https://developers.line.biz/ja/docs/line-login/getting-started/#page-title) LINEログインを始めよう

ここでは、簡単なウェブアプリ用のスターターアプリをデプロイして、LINEログインを利用する方法を説明します。スターターアプリにアクセスすると、ユーザーのLINEアカウントでログインできます。また、ログイン時に発行されるアクセストークンを利用して、ユーザープロフィールを取得することもできます。

このページの操作をすべて行うと、LINEログインの仕組みや、LINEログインをウェブアプリに組み込む方法について、よく理解できます。

LINE SDK fo iOS/Android/Unityのスターターアプリ

プラットフォームごとにLINEログインのスターターアプリを試すことができます：

- [スターターアプリを試してみる \- LINE SDK for iOS Swift](https://developers.line.biz/ja/docs/line-login-sdks/ios-sdk/swift/try-line-login/)
- [サンプルアプリを試してみる \- LINE SDK for Android](https://developers.line.biz/ja/docs/line-login-sdks/android-sdk/try-line-login/)
- [スターターアプリを試してみる \- LINE SDK for Unity](https://developers.line.biz/ja/docs/line-login-sdks/unity-sdk/try-line-login/)

## [\#](https://developers.line.biz/ja/docs/line-login/getting-started/#line-login-starter-app-prerequisites) 始める前に

LINEログインのスターターアプリを利用するには、以下の要件を満たす必要があります。

| 項目                   | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LINEアカウント         | LINEを利用するためのアカウントです。LINEアカウントは、スターターアプリを試すために必要です。LINEアカウントを作成するには、iOS版LINEまたはAndroid版LINEを [ダウンロード(opens new window)](https://line.me/) して、新規登録をしてください。登録方法について詳しくは、『LINEみんなの使い方ガイド』の「 [新規登録をする(opens new window)](https://guide.line.me/ja/signup-and-migration/line-signup.html)」を参照してください。                                                                                                                                                                                                                                                                                                            |
| プロバイダー           | プロバイダーは、アプリを提供する個人または組織を表す概念です。プロバイダーは、 [LINE Developersコンソール](https://developers.line.biz/console/) で作成します。1人のLINEユーザーは、プロバイダーごとに異なるユーザーIDを持ちます。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| LINEログインのチャネル | チャネルは、アプリとLINEプラットフォームを接続するための通信路です。プロバイダーの中に作成します。アプリごとに、チャネルを作成する必要があります。LINEログインのチャネルは、 [LINE Developersコンソール](https://developers.line.biz/console/register/line-login/channel/) で作成します。<br>注：<br>- LINE Developersコンソールを利用したことがない場合は、開発者として登録してからチャネルを作成します。<br> - チャネルの作成手順は [Step 1: LINEログインのチャネルを作成する](https://developers.line.biz/ja/docs/line-login/getting-started/#step-1-create-channel) で説明しています。<br>- スターターアプリを利用するためにLINEログインのチャネルを作成する際は、［ **アプリタイプ**］で、［ **ウェブアプリ**］を選択してください。 |
| Herokuアカウント       | [Heroku(opens new window)](https://www.heroku.com/) は、ウェブアプリをホストできるサービスです。スターターアプリをHerokuにデプロイするため、Heroku以外のサーバーを用意する必要がありません。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Heroku CLI             | Herokuの機能を利用するには、 [Heroku Command Line Interface (CLI)(opens new window)](https://devcenter.heroku.com/articles/heroku-cli) が必要です。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

Herokuの無料プランは廃止されました

Herokuの無料プランは、2022年11月27日をもって廃止されました。このスターターアプリを無料で試したい場合は、他のプラットフォームを利用してください。詳しくは、「 [Heroku’s Next Chapter(opens new window)](https://blog.heroku.com/next-chapter)」を参照してください。

## [\#](https://developers.line.biz/ja/docs/line-login/getting-started/#step-1-create-channel) Step 1: LINEログインのチャネルを作成する

まずは、LINEログインのチャネルを作成します。

[チャネル](https://developers.line.biz/ja/docs/line-developers-console/overview/#channel) は、アプリとLINEプラットフォームを接続するための通信路です。ウェブアプリごとに、 [LINE Developersコンソール](https://developers.line.biz/console/register/line-login/channel/) でLINEログインのチャネルを作成します。

1. [LINE Developersコンソール](https://developers.line.biz/console/) にアクセスします。
2. プロバイダーを選択し、［ **チャネル設定**］タブから［ **LINEログイン**］を選択します。
3. チャネルに必要な情報を入力します。以下の項目に情報を入力してLINEログインのチャネルを作成します。

| 項目                               | 入力必須項目 | 説明                                                                                                                                                                                                    | ユーザーに表示される画面                           |
| ---------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| **チャネルの種類**                 | ✅           | チャネルの種類。LINEログインを選択して、LINEログインチャネルを作成します。                                                                                                                              | -                                                  |
| **プロバイダー**                   | ✅           | チャネルの [プロバイダー](https://developers.line.biz/ja/docs/line-developers-console/overview/#provider)                                                                                               | LINEログインおよびLIFFアプリ起動時の権限の同意画面 |
| **サービスを提供する地域**         | ✅           | LINEログインを組み込んだサービスを提供する地域。以下のいずれかを選択します。<br>- 日本<br>- タイ<br>- 台湾<br>- インドネシア<br>※複数の地域でサービスを提供する場合は、地域ごとにチャネルを作成します。 | -                                                  |
| **会社・事業者の所在国・地域**     | ✅           | チャネルを管理する会社・事業者の所在国・地域                                                                                                                                                            | LINEログインおよびLIFFアプリ起動時の権限の同意画面 |
| **チャネルアイコン**               | ❌           | チャネルのアイコン                                                                                                                                                                                      | LINEログインおよびLIFFアプリ起動時の権限の同意画面 |
| **チャネル名**                     | ✅           | チャネルの名前<br>※チャネル名には、「LINE」またはそれに類する文字列を含めることはできません。                                                                                                           | LINEログインおよびLIFFアプリ起動時の権限の同意画面 |
| **チャネル説明**                   | ✅           | チャネルの説明                                                                                                                                                                                          | LINEログインおよびLIFFアプリ起動時の権限の同意画面 |
| **アプリタイプ**                   | ✅           | LINEログインを組み込むアプリの種類。以下のいずれかを選択します。<br>- ウェブアプリ<br>- ネイティブアプリ<br>※ スターターアプリをデプロイする場合は、［ **ウェブアプリ**］を選択してください。           | -                                                  |
| **メールアドレス**                 | ✅           | チャネルに関する重要な更新情報を受信するメールアドレス                                                                                                                                                  | -                                                  |
| **プライバシーポリシーURL**        | 説明を参照   | アプリのプライバシーポリシーのURL。 [認証プロバイダー](https://developers.line.biz/ja/docs/line-developers-console/overview/#certified-provider) の場合は必須です。                                     | LINEログインおよびLIFFアプリ起動時の権限の同意画面 |
| **サービス利用規約URL**            | ❌           | アプリの利用規約のURL                                                                                                                                                                                   | LINEログインおよびLIFFアプリ起動時の権限の同意画面 |
| **LINE開発者契約**                 | ✅           | [LINE開発者契約(opens new window)](https://terms2.line.me/LINE_Developers_Agreement?lang=ja) を読んで同意します。                                                                                       | -                                                  |
| **LINEヤフープライバシーポリシー** | 説明を参照   | ［ **サービスを提供する地域**］でタイを選択した場合のみ必須です。タイの [プライバシーポリシー(opens new window)](https://line.me/th/terms/policy/) を読んで承認します。                                 | -                                                  |

### [\#](https://developers.line.biz/ja/docs/line-login/getting-started/#channel-and-provider-linkage) チャネルとプロバイダーの連携に関する注意点

一度作成したチャネルを、後から他のプロバイダーに移動することはできません。

LINEログインチャネルとMessaging APIチャネルを連携するサービスを開発する場合は、これらのチャネルを同じプロバイダーの配下に作成してください。

開発者が提供するサービスを利用するLINEユーザーには、プロバイダーごとに異なるユーザーIDが割り当てられます。異なるプロバイダーに属するチャネル間では、ユーザーIDを利用して同一ユーザーであることを確認できません。

![](https://developers.line.biz/assets/img/different-user-ids.8c0c6c67.png)

チャネル作成時に特に注意が必要なケース

たとえば、以下のような場合には特に注意してください。

- チャネルとプロバイダーを別々の個人または企業が管理している。
- 1つのプロバイダー配下に、相互に関係がないサービスや企業のチャネルを作成する。
- チャネルの運用ツール等を運営するサービス（企業）が管理するプロバイダーの配下にチャネルを作成する。

このようなケースでは、後からチャネルをプロバイダー間で移動できないことや、プロバイダーごとに異なるユーザーIDが割り当てられることに起因して、将来的に問題が発生する可能性があります。そのリスクを十分検討した上で、適切なプロバイダーの配下にチャネルを作成してください。

## [\#](https://developers.line.biz/ja/docs/line-login/getting-started/#step-2-deploy-starter-app) Step 2: スターターアプリをデプロイする

次に、Herokuにスターターアプリをデプロイします。Step 1で作成したチャネルのチャネルIDとチャネルシークレットを利用します。以下の操作を行ってください。

1. GitHubの [line-login-starter(opens new window)](https://github.com/line/line-login-starter) リポジトリにアクセスします。
2. [READMEファイル(opens new window)](https://github.com/line/line-login-starter) の［ **Deploy to Heroku**］ボタンをクリックします。
3. Herokuの［Create New App］ページに必要な情報を入力します。

   - Heroku app name

     一意の名前を設定します。次のような名前を推奨します: `line-login-starter-{YYYYMMDD}`

   - Region
   - Config Vars
     - 次の形式のコールバックURL： `https://{Heroku app name}.herokuapp.com/auth`
     - チャネルID（ [LINE Developersコンソール](https://developers.line.biz/console/) で確認できます）
     - チャネルシークレット（ [LINE Developersコンソール](https://developers.line.biz/console/) で確認できます）

4. ［ **Deploy app**］をクリックし、アプリが正常にデプロイされたことを確認します。

## [\#](https://developers.line.biz/ja/docs/line-login/getting-started/#step-3-%E3%83%81%E3%83%A3%E3%83%8D%E3%83%AB%E3%81%AE%E8%A8%AD%E5%AE%9A%E7%A2%BA%E8%AA%8D%E3%81%97%E3%80%81%E3%82%B3%E3%83%BC%E3%83%AB%E3%83%8F%E3%82%99%E3%83%83%E3%82%AFurl%E3%82%92%E5%85%A5%E5%8A%9B%E3%81%99%E3%82%8B) Step 3: チャネルの設定確認し、コールバックURLを入力する

ウェブアプリ用のLINEログインのチャネルを使用する場合は、［ **アプリタイプ**］と［ **コールバックURL**］が正しく設定されている必要があります。

1. [LINE Developersコンソール](https://developers.line.biz/console/) で、Step 1で作成したチャネルを選択します。
2. ［ **チャネル基本設定**］タブをクリックし、［ **アプリタイプ**］に［ **ウェブアプリ**］が表示されていることを確認します。
3. ［ **LINEログイン設定**］タブをクリックし、［ **コールバックURL**］にHerokuのコールバックURL（ `https://{Heroku app name}.herokuapp.com/auth`）を入力します。

### [\#](https://developers.line.biz/ja/docs/line-login/getting-started/#line-login-basic-settings) LINEログインの **チャネル基本設定**

LINEログインチャネルの［ **チャネル基本設定**］タブで表示される情報は以下のとおりです。

| 項目                               | 説明                                                                                                                                                                                                        |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **チャネルID**                     | チャネルを区別するための識別子                                                                                                                                                                              |
| **サービスを提供する地域**         | LINEログインサービスを提供する地域（チャネル作成時のみ設定可能）                                                                                                                                            |
| **会社・事業者の所在国・地域**     | チャネルを管理する会社・事業者の所在国・地域                                                                                                                                                                |
| **チャネルアイコン**               | チャネルのアイコン                                                                                                                                                                                          |
| **チャネル名**                     | チャネルの名称                                                                                                                                                                                              |
| **チャネル説明**                   | チャネルの詳細説明                                                                                                                                                                                          |
| **メールアドレス**                 | チャネルに関する重要なお知らせを受信するメールアドレス                                                                                                                                                      |
| **プライバシーポリシーURL**        | アプリのプライバシーポリシーのURL                                                                                                                                                                           |
| **サービス利用規約URL**            | アプリの利用規約のURL                                                                                                                                                                                       |
| **アプリタイプ**                   | LINEログインを組み込むアプリの種類                                                                                                                                                                          |
| **権限**                           | このチャネルがアクセスできるユーザー情報の種類                                                                                                                                                              |
| **チャネルシークレット**           | アプリに対して、チャネルへのアクセスを許可したことを示す秘密鍵                                                                                                                                              |
| **アサーション署名キー**           | アサーション署名キーペアに紐づいたUUID                                                                                                                                                                      |
| **あなたのユーザーID**             | LINEアカウントのユーザーID                                                                                                                                                                                  |
| **リンクされたLINE公式アカウント** | チャネルにリンクされたLINE公式アカウント。友だち追加オプションで使用するLINE公式アカウントを選択します。同じプロバイダーに存在するMessaging APIチャネルと連携しているLINE公式アカウントのみを選択できます。 |
| **多言語対応**                     | 言語を追加することで、チャネルを多言語対応にすることができます。                                                                                                                                            |
| **メールアドレス取得権限**         | OpenID Connectを使用して、ユーザーのメールアドレスを要求できます。                                                                                                                                          |
| **チャネルの削除**                 | チャネルの削除                                                                                                                                                                                              |

## [\#](https://developers.line.biz/ja/docs/line-login/getting-started/#step-4-try-the-app) Step 4: ウェブアプリを試す

1. ウェブアプリのURL（ `https://{Heroku app name}.herokuapp.com`）にアクセスします。以下のように表示されます。

![LINEログインのスターターアプリのログイン画面](https://developers.line.biz/assets/img/line-login-starter-app-login.182f8863.png)

2. ［ **Log in**］をクリックします。

LINEログインの標準的なページにリダイレクトされます。リダイレクト先のURLは、 `https://access.line.me/oauth2/v2.1/` で始まり、多くのクエリパラメータが含まれています。クエリパラメータについて詳しくは、「 [ウェブアプリにLINEログインを組み込む](https://developers.line.biz/ja/docs/line-login/integrate-line-login/)」を参照してください。

3. LINEにログインし、ウェブアプリに必要な権限を与えることを同意します。

LINEアカウントでログインすると、LINEユーザーのプロフィール画像、表示名、およびステータスメッセージが表示されます。（iOSまたはAndroidを使用していて、すでにLINEアカウントでログイン済みの場合は、自動的にウェブアプリにログインされます。）

### [\#](https://developers.line.biz/ja/docs/line-login/getting-started/#try-other-starter-app-features) スターターアプリのその他の機能を試す

ウェブアプリにログインした後で以下のボタンをクリックすると、ウェブアプリのその他の機能を試すことができます。

- ユーザーのアクセストークンを検証する
- ユーザーのアクセストークンを更新する
- アクセストークンを取り消す（ユーザーをログアウトさせる）

### [\#](https://developers.line.biz/ja/docs/line-login/getting-started/#check-logs) ログを確認する

[Heroku CLI(opens new window)](https://devcenter.heroku.com/articles/heroku-cli) を使用して、ウェブアプリのログを確認します。

1. コマンドラインからHerokuにログインします。

```
heroku login

```

2. ログを確認します。

```
heroku logs --app {Heroku app name} --tail

```

## [\#](https://developers.line.biz/ja/docs/line-login/getting-started/#step-5-customize-your-app) Step 5: ウェブアプリをカスタマイズする

スターターアプリをローカルコンピューターにダウンロードして、テストしたり修正したりできます。修正後は、任意のウェブサーバーにアプリをデプロイできます。ここでは、Step 1でデプロイしたHerokuアプリに変更を加えて、再デプロイする方法について説明します。

以下のソフトウェアをインストール済みであることを確認します。

- JDK 1.8以降
- Maven™ 3.0以降
- Git™

1. GitHubの [line-login-starter(opens new window)](https://github.com/line/line-login-starter) リポジトリをクローンします。

```
git clone https://github.com/line/line-login-starter.git

```

2. `cd` コマンドを実行して、 `line-login-starter` ディレクトリに移動します。

3. Heroku用リモートをローカルリポジトリに追加します。

```
heroku git:remote -a {Heroku app name}

```

4. 変更を加えてコミットします（任意）。

```
git add .
git commit -m "First commit"

```

5. 変更をHerokuのmasterブランチにプッシュします。

```
git push heroku master

```

## [\#](https://developers.line.biz/ja/docs/line-login/getting-started/#step-6-publish-channel) Step 6: チャネルを公開する（任意）

LINEログインのチャネルは「開発中」のステータスで作成されます。チャネルが「開発中」の場合は、AdminまたはTesterの権限（詳しくは、「 [権限を管理する](https://developers.line.biz/ja/docs/line-developers-console/managing-roles/)」を参照）を持つユーザーのみがLINEログインを利用できます。そのほかのユーザーもLINEログインを利用できるようにするには、ステータスを「公開済み」に変更してください。ステータスを「公開済み」にするには、 [LINE Developersコンソール](https://developers.line.biz/console/) でLINEログインのチャネルを表示し、ページ上部の［ **開発中**］をクリックします。

LINEログインのテストのために使用する場合は、ステータスを変更する必要はありません。アプリのLINEログインを一般のユーザーが利用できるようにするときに限り、ステータスを「公開済み」に変更してください。なお、ステータスを「公開済み」に変更した場合、「開発中」に戻すことはできないため注意してください。

### [\#](https://developers.line.biz/ja/docs/line-login/getting-started/#how-to-test-login-channel) ステータスが「開発中」のLINEログインチャネルでのテスト方法

ステータスが「開発中」のLINEログインチャネルでテストを行う場合、チャネルでのテストが可能な権限が付与された開発者アカウントに、LINEアカウントが紐づけられている必要があります。開発者アカウントに紐づくビジネスアカウントにLINEアカウントを連携することで、開発者アカウントにLINEアカウントを紐づけることができます。

開発者アカウントには必ず1対1でビジネスアカウントが紐づけられていますが、ビジネスアカウントへのLINEアカウントの連携は任意です。そのため、ビジネスアカウントとLINEアカウントが連携されていない場合があります。LINEログインのテストを行う場合には、ビジネスアカウントとLINEアカウントが連携されているかを確認してください。

LINEログインのテストを行う際には、開発アカウントと紐づいているLINEアカウントでログインをする必要があります。ビジネスアカウントに登録しているメールアドレスとパスワードでは、ログインはできないことに注意してください。

ビジネスアカウントとLINEアカウントの連携について詳しくは、『LINE Developersコンソールドキュメント』の「 [ビジネスアカウントにLINEアカウントを連携させる](https://developers.line.biz/ja/docs/line-developers-console/login-account/#link-business-account-with-line-account)」を参照してください。

## [\#](https://developers.line.biz/ja/docs/line-login/getting-started/#getting-started-with-line-login-next-steps) 次のステップ

- [ウェブアプリにLINEログインを組み込む](https://developers.line.biz/ja/docs/line-login/integrate-line-login/)
- [iOSアプリにLINEログインを組み込む - Swift](https://developers.line.biz/ja/docs/line-login-sdks/ios-sdk/swift/integrate-line-login/)
- [AndroidアプリにLINEログインを組み込む](https://developers.line.biz/ja/docs/line-login-sdks/android-sdk/integrate-line-login/)
- [UnityゲームにLINEログインを組み込む](https://developers.line.biz/ja/docs/line-login-sdks/unity-sdk/integrate-line-login/)
