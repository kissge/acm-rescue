ACM Rescue
==========

1. ACM DLで論文のPDFファイルを開いたままブラウザを閉じると，次に復元したときにAccess Deniedなどというエラーが出ることがある
2. このChrome拡張を導入する
3. ハッピー

Requirements
------------

OS X 10.10.1 + Google Chrome 39で動作確認を行った．基本的にはOS問わずGoogle Chrome上での利用を想定している．もしかしてSafariとかOperaとかでも使えるのかしら．

Install
-------

1. Google ChromeのSettings -> Extensionsを開く (chrome://extensions/)
2. Developer modeにチェックを入れる
3. Load unpacked extension...をクリックし，manifest.jsonのあるディレクトリを指定する

Usage
-----

導入すると，Access Deniedが表示されると自動的にもとのPDFファイルへリダイレクトされるようになる．

License
-------

MIT Licenseに準じる．

なお，このChrome拡張にはjQueryが同梱されている．jQueryはMIT Licenseのもと提供される．
