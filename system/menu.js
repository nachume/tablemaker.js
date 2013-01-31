function popupMenuCreated(pm,sn)
{
    if (sn == 'WriteMessage' || sn == 'WPSelText') {
        // 書込みウィンドウ本文の右クリックメニューの「余分な空白と改行を解除」の直上に「テーブルメイカ―」を追加
        // 書込みウィンドウ本文のテキストを範囲選択状態の上での右クリックメニューの「変換不能文字→参照」の直上に「テーブルメイカーを追加
        var tableMakerMenuObject = eval(String(v2c.readStringFromFile(new java.io.File(v2c.saveDir + '/script/tablemaker_menu.js'))));
        tableMakerMenuObject.register(pm, sn);
    }
}