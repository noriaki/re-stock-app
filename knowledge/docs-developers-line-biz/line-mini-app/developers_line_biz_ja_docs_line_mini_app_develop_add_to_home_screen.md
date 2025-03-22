# [\#](https://developers.line.biz/ja/docs/line-mini-app/develop/add-to-home-screen/#page-title) ユーザー端末のホーム画面にLINEミニアプリへのショートカットを追加する

認証済ミニアプリでのみ利用できます

この機能は、認証済ミニアプリでのみ利用できます。未認証ミニアプリの場合、開発用の内部チャネルではテストできますが、公開用の内部チャネルでは利用できません。

ユーザー端末のホーム画面にLINEミニアプリへのショートカットを追加できます。

[アクションボタン](https://developers.line.biz/ja/docs/line-mini-app/discover/builtin-features/#action-button) の［ **ホーム画面に追加**］をタップするか、 [`liff.createShortcutOnHomeScreen()`](https://developers.line.biz/ja/reference/liff/#create-shortcut-on-home-screen) メソッドを使うと、ショートカット追加画面が表示されます。ユーザーは、画面上の指示に従うことで、端末のホーム画面にLINEミニアプリへのショートカットを追加できます。これにより、ユーザー端末のホーム画面からLINEミニアプリに直接アクセスできるようになります。

**Android端末での表示**

一部のAndroid端末において、追加済みのショートカットが削除される場合があります

一部のAndroid端末において、ユーザーがLINEアプリの［ **設定**］>［ **アプリアイコン**］からアイコンを変更すると、追加済みのショートカットが削除される場合があります。詳しくは、『LINEヘルプセンター』の「 [【Android】LINEアプリアイコン変更後、LINEのショートカットに問題が発生した場合(opens new window)](https://help.line.me/line/smartphone/pc?lang=ja&contentId=200000315)」を参照してください。

![](https://developers.line.biz/assets/img/add-shortcut-screen-android-ja.57a5a61c.png)![](https://developers.line.biz/assets/img/shortcut-android.38caf27a.png)

**iOS端末での表示**

![](https://developers.line.biz/assets/img/add-shortcut-screen-ios-ja.6706a9af.png)![](https://developers.line.biz/assets/img/shortcut-ios-ja.218380ae.png)

会員証やモバイルオーダーなど、ユーザーの利用頻度の高いサービスでこの機能を活用することで、ユーザー体験を向上させることができます。

## [\#](https://developers.line.biz/ja/docs/line-mini-app/develop/add-to-home-screen/#operating-conditions) 動作条件

ユーザー端末のOSがiOSの場合、［ **ホーム画面に追加**］や `liff.createShortcutOnHomeScreen()` メソッドが動作する条件は以下のとおりです。動作しない環境において［ **ホーム画面に追加**］をタップしたり、 `liff.createShortcutOnHomeScreen()` メソッドを実行したりすると、エラーページが表示されます。

| デフォルトのブラウザ         | iOSのバージョン    | 動作するかどうか   |
| ---------------------------- | ------------------ | ------------------ |
| Safari                       | すべてのバージョン | 動作する           |
| Chrome                       | 16.4以降           | 動作する           |
| Safari、Chrome以外のブラウザ | 16.4以降           | 動作は保証されない |
| Safari以外のブラウザ         | 16.4未満           | 動作しない         |

たとえば、iOS 16.4未満において、Chromeで `liff.createShortcutOnHomeScreen()` メソッドを実行した場合は、以下のエラーページが表示されます。

![](https://developers.line.biz/assets/img/add-shortcut-screen-ios-error-ja.959242c3.png)
