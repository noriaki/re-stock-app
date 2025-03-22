# [\#](https://developers.line.biz/ja/reference/liff-server/#page-title) サーバーAPI

LIFF SDKとはバージョン番号が異なります

サーバーAPIのバージョン番号は、LIFF SDKのバージョン番号とは異なります。現在公開されているLIFF SDKのバージョンは `v2` ですが、サーバーAPIのバージョンは `v1` です。

## [\#](https://developers.line.biz/ja/reference/liff-server/#server-api) サーバーAPI

### [\#](https://developers.line.biz/ja/reference/liff-server/#preparing-channel-access-token) チャネルアクセストークンを準備する

LIFFのサーバーAPIは、LINEログインチャネル上のLIFFアプリを操作するためのAPIです。このため、サーバーAPIを利用するには、LINEログインチャネルのチャネルアクセストークンが必要です。利用できるチャネルアクセストークンの種類は、 [短期のチャネルアクセストークン](https://developers.line.biz/ja/reference/messaging-api/#issue-shortlived-channel-access-token) または [ステートレスチャネルアクセストークン](https://developers.line.biz/ja/reference/messaging-api/#issue-stateless-channel-access-token) です。

### [\#](https://developers.line.biz/ja/reference/liff-server/#add-liff-app) LIFFアプリをチャネルに追加する

LIFFアプリをチャネルに追加します。チャネルごとに、最大30件のLIFFアプリを追加できます。

LINEミニアプリとしての作成を推奨します

今後、LIFFとLINEミニアプリは、ブランド統合を予定しています。この統合により、LIFFはLINEミニアプリに統合されます。そのため、LIFFアプリを新規作成する際は、LINEミニアプリとして作成することを推奨します。詳しくは、「 [2025年2月12日のニュース](https://developers.line.biz/ja/news/2025/02/12/line-mini-app/)」を参照してください。

_例_

Shell

```
curl -X POST https://api.line.me/liff/v1/apps \
-H "Authorization: Bearer {channel access token}" \
-H "Content-Type: application/json" \
-d '{
    "view": {
        "type": "full",
        "url": "https://example.com/myservice"
    },
    "description": "Service Example",
    "features": {
        "qrCode": true
    },
    "permanentLinkPattern": "concat",
    "scope": ["profile", "chat_message.write"],
    "botPrompt": "none"
}'

```

#### [\#](https://developers.line.biz/ja/reference/liff-server/#add-liff-app-http-request) HTTPリクエスト

`POST https://api.line.me/liff/v1/apps`

#### [\#](https://developers.line.biz/ja/reference/liff-server/#add-liff-app-request-headers) リクエストヘッダー

Authorization

必須

Bearer `{channel access token}`

詳しくは、「 [チャネルアクセストークンを準備する](https://developers.line.biz/ja/reference/liff-server/#preparing-channel-access-token)」を参照してください。

Content-Type

必須

application/json

#### [\#](https://developers.line.biz/ja/reference/liff-server/#add-liff-app-request-body) リクエストボディ

view.type

String

必須

LIFFアプリの画面サイズ。以下のいずれかの値を指定します。

- `full`
- `tall`
- `compact`

詳しくは、「 [LIFFアプリの画面サイズ](https://developers.line.biz/ja/docs/liff/overview/#screen-size)」を参照してください。

view.url

String

必須

エンドポイントURL。LIFFアプリを実装したウェブアプリのURLです（例： `https://example.com`）。LIFF URLを利用してLIFFアプリを起動した際に、このURLが利用されます。

URLスキームは **https** である必要があります。なお、URLフラグメント（#URL-fragment）は指定できません。

view.moduleMode

Boolean

任意

LIFFアプリをモジュールモードで使用する場合は、 `true`。モジュールモードの場合は、ヘッダーのアクションボタンが非表示になります。

description

String

任意

LIFFアプリの名前。

LIFFアプリ名には、「LINE」またはそれに類する文字列、不適切な文字列は含められません。

features.qrCode

Boolean

任意

LIFFアプリで二次元コードリーダーを使用する場合は `true` を指定します。使用しない場合は `false` を指定します。デフォルト値は `false` です。

permanentLinkPattern

String

任意

LIFF URLの追加情報の処理方法。 `concat` を指定してください。

詳しくは、『LIFFドキュメント』の「 [LIFFアプリを開く](https://developers.line.biz/ja/docs/liff/opening-liff-app/)」を参照してください。

scope

Array of strings

任意

LIFF SDKの一部のメソッドを使用するために必要なスコープの配列。

- `openid`
- `email`
- `profile`
- `chat_message.write`

デフォルト値は `["profile", "chat_message.write"]` です。各スコープについて詳しくは、『LIFFドキュメント』の「 [LIFFアプリをチャネルに追加する](https://developers.line.biz/ja/docs/liff/registering-liff-apps/#registering-liff-app)」を参照してください。

botPrompt

String

任意

[友だち追加オプション](https://developers.line.biz/ja/docs/line-login/link-a-bot/) の設定を、以下のいずれかの値で指定します。

- `normal`：チャネル同意画面に、LINE公式アカウントを友だち追加するオプションを表示する。
- `aggressive`：チャネル同意画面の後に、LINE公式アカウントを友だち追加するかどうかを確認する画面を表示する。
- `none`：LINE公式アカウントを友だち追加するオプションを表示しない。

デフォルト値は `none` です。

#### [\#](https://developers.line.biz/ja/reference/liff-server/#add-liff-app-response) レスポンス

ステータスコード `200` と以下のプロパティを含むJSONオブジェクトを返します。

liffId

String

LIFFアプリID

_例_

JSON

```
{
  "liffId": "{liffId}"
}

```

#### [\#](https://developers.line.biz/ja/reference/liff-server/#add-liff-app-error-response) エラーレスポンス

以下のいずれかのステータスコードを返します。

| ステータスコード | 説明                                                                                                                         |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 400              | 以下のどちらかです。<br>- リクエストに無効な値が含まれています。<br>- チャネルに追加できるLIFFアプリ数の上限に達しています。 |
| 401              | 認証に失敗しました。                                                                                                         |

### [\#](https://developers.line.biz/ja/reference/liff-server/#update-liff-app) LIFFアプリの設定を更新する

LIFFアプリの設定を、部分的に更新します。

_例_

Shell

```
curl -X PUT https://api.line.me/liff/v1/apps/{liffId} \
-H "Authorization: Bearer {channel access token}" \
-H "Content-Type: application/json" \
-d '{
    "view": {
        "url": "https://new.example.com"
    }
}'

```

#### [\#](https://developers.line.biz/ja/reference/liff-server/#put-liff-app-http-request) HTTPリクエスト

`PUT https://api.line.me/liff/v1/apps/{liffId}`

#### [\#](https://developers.line.biz/ja/reference/liff-server/#put-liff-app-request-headers) リクエストヘッダー

Authorization

必須

Bearer `{channel access token}`

詳しくは、「 [チャネルアクセストークンを準備する](https://developers.line.biz/ja/reference/liff-server/#preparing-channel-access-token)」を参照してください。

Content-Type

必須

application/json

#### [\#](https://developers.line.biz/ja/reference/liff-server/#put-liff-app-path-parameters) パスパラメータ

liffId

必須

更新するLIFFアプリのID

#### [\#](https://developers.line.biz/ja/reference/liff-server/#put-liff-app-request-body) リクエストボディ

view.type

String

任意

LIFFアプリの画面サイズ。以下のいずれかの値を指定します。

- `full`
- `tall`
- `compact`

詳しくは、「 [LIFFアプリの画面サイズ](https://developers.line.biz/ja/docs/liff/overview/#screen-size)」を参照してください。

view.url

String

任意

エンドポイントURL。LIFFアプリを実装したウェブアプリのURLです（例： `https://example.com`）。LIFF URLを利用してLIFFアプリを起動した際に、このURLが利用されます。

URLスキームは **https** である必要があります。なお、URLフラグメント（#URL-fragment）は指定できません。

view.moduleMode

Boolean

任意

LIFFアプリをモジュールモードで使用する場合は、 `true`。モジュールモードの場合は、ヘッダーのアクションボタンが非表示になります。

description

String

任意

LIFFアプリの名前。

LIFFアプリ名には、「LINE」またはそれに類する文字列、不適切な文字列は含められません。

features.qrCode

Boolean

任意

LIFFアプリで二次元コードリーダーを使用する場合は `true` を指定します。使用しない場合は `false` を指定します。

permanentLinkPattern

String

任意

LIFF URLの追加情報の処理方法。 `concat` を指定してください。

詳しくは、『LIFFドキュメント』の「 [LIFFアプリを開く](https://developers.line.biz/ja/docs/liff/opening-liff-app/)」を参照してください。

scope

Array of strings

任意

LIFF SDKの一部のメソッドを使用するために必要なスコープの配列。

- `openid`
- `email`
- `profile`
- `chat_message.write`

各スコープについて詳しくは、『LIFFドキュメント』の「 [LIFFアプリをチャネルに追加する](https://developers.line.biz/ja/docs/liff/registering-liff-apps/#registering-liff-app)」を参照してください。

botPrompt

String

任意

[友だち追加オプション](https://developers.line.biz/ja/docs/line-login/link-a-bot/) の設定を、以下のいずれかの値で指定します。

- `normal`：チャネル同意画面に、LINE公式アカウントを友だち追加するオプションを表示する。
- `aggressive`：チャネル同意画面の後に、LINE公式アカウントを友だち追加するかどうかを確認する画面を表示する。
- `none`：LINE公式アカウントを友だち追加するオプションを表示しない。

注意

リクエストボディに指定しなかったプロパティは変更されません。

#### [\#](https://developers.line.biz/ja/reference/liff-server/#put-liff-app-response) レスポンス

ステータスコード `200` を返します。

#### [\#](https://developers.line.biz/ja/reference/liff-server/#put-liff-app-error-response) エラーレスポンス

以下のいずれかのステータスコードを返します。

| ステータスコード | 説明                                                                                                                   |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 400              | リクエストに無効な値が含まれています。                                                                                 |
| 401              | 認証に失敗しました。                                                                                                   |
| 404              | 以下のどちらかです。<br>- 指定したLIFFアプリは存在しません。<br>- 指定したLIFFアプリは別のチャネルに追加されています。 |

### [\#](https://developers.line.biz/ja/reference/liff-server/#get-all-liff-apps) すべてのLIFFアプリを取得する

チャネルに追加されているすべてのLIFFアプリの情報を取得します。

_例_

Shell

```
curl -X GET https://api.line.me/liff/v1/apps \
-H "Authorization: Bearer {channel access token}"

```

#### [\#](https://developers.line.biz/ja/reference/liff-server/#get-all-liff-apps-http-request) HTTPリクエスト

`GET https://api.line.me/liff/v1/apps`

#### [\#](https://developers.line.biz/ja/reference/liff-server/#get-all-liff-apps-request-headers) リクエストヘッダー

Authorization

必須

Bearer `{channel access token}`

詳しくは、「 [チャネルアクセストークンを準備する](https://developers.line.biz/ja/reference/liff-server/#preparing-channel-access-token)」を参照してください。

#### [\#](https://developers.line.biz/ja/reference/liff-server/#get-all-liff-apps-response) レスポンス

ステータスコード `200` と以下のプロパティを含むJSONオブジェクトを返します。

apps

Array of objects

LIFFアプリオブジェクトの配列

apps\[\].liffId

String

LIFFアプリID

apps\[\].view.type

String

LIFFアプリの画面サイズ。以下のいずれかの値が含まれます。

- `full`
- `tall`
- `compact`

詳しくは、「 [LIFFアプリの画面サイズ](https://developers.line.biz/ja/docs/liff/overview/#screen-size)」を参照してください。

apps\[\].view.url

String

エンドポイントURL。LIFFアプリを実装したウェブアプリのURLです（例： `https://example.com`）。LIFF URLを利用してLIFFアプリを起動した際に、このURLが利用されます。

apps\[\].view.moduleMode

Boolean

LIFFアプリをモジュールモードで使用する場合は、 `true`。モジュールモードの場合は、ヘッダーのアクションボタンが非表示になります。

apps\[\].description

String

LIFFアプリの名前

apps\[\].features.ble

Boolean

LINE ThingsのためにBluetooth® Low Energyに対応している場合は `true`。対応しない場合は `false`。

apps\[\].features.qrCode

Boolean

LIFFアプリで二次元コードリーダーを起動できる場合は `true`。起動できない場合は `false`。

apps\[\].permanentLinkPattern

String

LIFF URLの追加情報の処理方法。 `concat` が返されます。

詳しくは、『LIFFドキュメント』の「 [LIFFアプリを開く](https://developers.line.biz/ja/docs/liff/opening-liff-app/)」を参照してください。

apps\[\].scope

Array of strings

LIFFアプリのスコープ。

- `openid`
- `email`
- `profile`
- `chat_message.write`

各スコープについて詳しくは、『LIFFドキュメント』の「 [LIFFアプリをチャネルに追加する](https://developers.line.biz/ja/docs/liff/registering-liff-apps/#registering-liff-app)」を参照してください。

apps\[\].botPrompt

String

[友だち追加オプション](https://developers.line.biz/ja/docs/line-login/link-a-bot/) の設定。

- `normal`：チャネル同意画面に、LINE公式アカウントを友だち追加するオプションを表示する。
- `aggressive`：チャネル同意画面の後に、LINE公式アカウントを友だち追加するかどうかを確認する画面を表示する。
- `none`：LINE公式アカウントを友だち追加するオプションを表示しない。

_例_

JSON

```
{
  "apps": [\
    {\
      "liffId": "{liffId}",\
      "view": {\
        "type": "full",\
        "url": "https://example.com/myservice"\
      },\
      "description": "Happy New York",\
      "permanentLinkPattern": "concat"\
    },\
    {\
      "liffId": "{liffId}",\
      "view": {\
        "type": "tall",\
        "url": "https://example.com/myservice2"\
      },\
      "features": {\
        "ble": true,\
        "qrCode": true\
      },\
      "permanentLinkPattern": "concat",\
      "scope": ["profile", "chat_message.write"],\
      "botPrompt": "none"\
    }\
  ]
}

```

#### [\#](https://developers.line.biz/ja/reference/liff-server/#get-all-liff-apps-error-response) エラーレスポンス

以下のいずれかのステータスコードを返します。

| ステータスコード | 説明                               |
| ---------------- | ---------------------------------- |
| 401              | 認証に失敗しました。               |
| 404              | チャネルにLIFFアプリがありません。 |

### [\#](https://developers.line.biz/ja/reference/liff-server/#delete-liff-app) LIFFアプリをチャネルから削除する

LIFFアプリをチャネルから削除します。

_例_

Shell

```
curl -X DELETE https://api.line.me/liff/v1/apps/{liffId} \
-H "Authorization: Bearer {channel access token}"

```

#### [\#](https://developers.line.biz/ja/reference/liff-server/#delete-liff-app-http-request) HTTPリクエスト

`DELETE https://api.line.me/liff/v1/apps/{liffId}`

#### [\#](https://developers.line.biz/ja/reference/liff-server/#delete-liff-app-request-headers) リクエストヘッダー

Authorization

必須

Bearer `{channel access token}`

詳しくは、「 [チャネルアクセストークンを準備する](https://developers.line.biz/ja/reference/liff-server/#preparing-channel-access-token)」を参照してください。

#### [\#](https://developers.line.biz/ja/reference/liff-server/#delete-liff-app-path-parameters) パスパラメータ

liffId

必須

削除するLIFFアプリのID

#### [\#](https://developers.line.biz/ja/reference/liff-server/#delete-liff-app-response) レスポンス

ステータスコード `200` を返します。

#### [\#](https://developers.line.biz/ja/reference/liff-server/#delete-liff-app-error-response) エラーレスポンス

以下のいずれかのステータスコードを返します。

| ステータスコード | 説明                                                                                                                   |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 401              | 認証に失敗しました。                                                                                                   |
| 404              | 以下のどちらかです。<br>- 指定したLIFFアプリは存在しません。<br>- 指定したLIFFアプリは別のチャネルに追加されています。 |
