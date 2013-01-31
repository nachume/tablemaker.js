// tablemaker.js : Closure Compiler App のADVANCED_OPTIMIZATIONコンパイルに必要なexternsファイル
// 開発用のファイルで、通常の用途では必要ないので削除して構わない
// tablemaker_menu.jsやmenu.jsなどにはADVANCED_OPTIMIZATIONを想定していないので使用しないこと

/** @fileoverview Externs for ２ちゃんねるブラウザ「V2C」および「Jane View」のAPIの一部だけ実装
 */

/**
 * JaneScript オブジェクト
 * @const
 */
var JaneScript = {};

/**
 * @nosideeffects
 * @param {string} text トレースに書き出す文字列
 */
JaneScript.prototype.Log = function(text) {};

/**
 * @nosideeffects
 * @return {JaneScript.Inifile} そのスクリプト用のInifileオブジェクト
 */
JaneScript.prototype.GetScriptConfig = function() {};

/**
 * Inifile オブジェクト
 * @nosideeffects
 */
JaneScript.Inifile = {};

/**
 * @nosideeffects
 * @param {string} Section 取り出す設定値がIniファイル中で属するセクション
 * @param {string} Ident 取り出す設定値の項目名
 * @param {string} Default 設定値がIniファイル中に存在しない場合に戻り値となる値
 * @return {string} Iniファイルに設定された値。文字列型なので、特定の型が必要なら適宜変換する
 */
JaneScript.Inifile.prototype.Read = function(Section, Ident, Default) {};

/**
 * @nosideeffects
 * @param {string} Section 書き込む設定値がIniファイル中で属するセクション
 * @param {string} Ident 書き込む設定値の項目名
 * @param {string} Value 書き込む設定値
 */
JaneScript.Inifile.prototype.Write = function(Section, Ident, Value) {};

/**
 * @nosideeffects
 */
JaneScript.Inifile.prototype.UpdateFile = function() {};


/**
 * WriteForm オブジェクト
 * @nosideeffects
 * @const
 */
JaneScript.WriteForm = {};


// WriteForm.Board: Board

// WriteForm.Close(): Void

/**
 * @type {Edit}
 * @const
 * @nosideeffects
 */
JaneScript.WriteForm.FileBox;

/**
 * @type {Edit}
 * @const
 * @nosideeffects
 */
JaneScript.WriteForm.MailBox;

/**
 * @type {Edit}
 * @nosideeffects
 */
JaneScript.WriteForm.MsgBody;

/**
 * @type {Edit}
 * @const
 * @nosideeffects
 */
JaneScript.WriteForm.NameBox;

// WriteForm.Open(Item: Board / ThreadItem): Bool

/**
 * @type {number}
 * @nosideeffects
 */
JaneScript.WriteForm.PageIndex;

/**
 * @type {Edit}
 * @const
 * @nosideeffects
 */
JaneScript.WriteForm.PassBox;

/**
 * @type {boolean}
 * @nosideeffects
 */
JaneScript.WriteForm.SageChecked;

/**
 * @type {string}
 * @const
 * @nosideeffects
 */
JaneScript.WriteForm.SettingText;

/**
 * @type {boolean}
 * @const
 * @nosideeffects
 */
JaneScript.WriteForm.Showing;

/**
 * @type {string}
 * @nosideeffects
 */
JaneScript.WriteForm.StatusBarText;

/**
 * @type {Edit}
 * @nosideeffects
 */
JaneScript.WriteForm.SubjectBox;

// WriteForm.Thread: ThreadItem

/**
 * @type {Edit}
 * @nosideeffects
 */
JaneScript.WriteForm.WriteResult;

/**
 * Edit オブジェクト
 * @nosideeffects
 */
var Edit = {};

/**
 * @type {string}
 * @nosideeffects
 */
Edit.Text;

/**
 * @type {string}
 * @nosideeffects
 */
Edit.SelText;

/**
 * @nosideeffects
 * @param {string} Caption 入力ボックスのタイトルバーに表示する文字列
 * @param {string} InitialText テキストボックスの文字列の初期値
 * @return {NamedVariant} ユーザーの入力結果を保持したNamedVariant
 */
JaneScript.prototype.InputBox = function(Caption, InitialText) {};

/**
 * NamedVariant オブジェクト
 * @nosideeffects
 */
var NamedVariant = {};

/**
 * @type {boolean}
 * @nosideeffects
 */
NamedVariant.Canceled;

/**
 * @type {string}
 * @nosideeffects
 */
NamedVariant.Text;

/**
 * 保持している名前付き変数を全て消去する
 * @nosideeffects
 */
NamedVariant.prototype.Clear = function() {};

/**
 * 文字列を使ってプロパティにアクセスする。
 * @nosideeffects
 * @param {string} Name NamedVariant.HogeHoge と NamedVariant.Items("HogeHoge") は同じ。
 * @return {*}
 */
NamedVariant.prototype.Items = function(Name) {};

/**
 * @nosideeffects
 * @param {string} MenuName スクリプト用のメニューを追加したいメニューの名前 (menuconf.iniのセクション名) 例: "MainWnd.MainMenu"
 * @param {string} ItemName スクリプト用のメニューを追加したいメニューの親アイテム名 (menuconf.iniのメニュー名) 例: "MenuOpt"
 * @param {string|number} Index 親アイテムの中でメニューを追加する位置。
 * @return {MenuItem} 追加されたMenuItemオブジェクト
 */
JaneScript.prototype.InsertMenu = function(MenuName, ItemName, Index) {};

/**
 * MenuItem オブジェクト
 * @nosideeffects
 */
var MenuItem = {};

/**
 * @nosideeffects
 * @return {MenuItem} 新たに作成したメニューのMenuItem
 */
MenuItem.prototype.Add = function() {};

/**
 * @type {string}
 * @nosideeffects
 */
MenuItem.Caption;

/**
 * @type {boolean}
 * @nosideeffects
 */
MenuItem.Checked;

/**
 * @type {boolean}
 * @nosideeffects
 * @const
 */
MenuItem.Connected;

/**
 * @type {number}
 * @nosideeffects
 * @const
 */
MenuItem.Count;

/**
 * @nosideeffects
 */
MenuItem.prototype.Disconnect = function() {};

/**
 * @type {boolean}
 * @nosideeffects
 */
MenuItem.Enabled;

/**
 * @type {string}
 * @nosideeffects
 */
MenuItem.GestureName;

/**
 * @nosideeffects
 * @param {number} Index 新たなメニューを挿入する位置
 * @return {MenuItem} 新規に作成したメニューのMenuItemオブジェクト
 */
MenuItem.prototype.Insert = function(Index) {};

/**
 * @nosideeffects
 * @param {number} Index 取得するサブメニューのMenuItemの中での順番
 * @return {MenuItem} 対象メニューのMenuItemオブジェクト
 */
MenuItem.prototype.Items = function(Index) {};

/**
 * @type {Integer}
 * @nosideeffects
 * @const
 */
MenuItem.MenuIndex;

/**
 * @type {function}
 * @nosideeffects
 */
MenuItem.OnBeforeShow;

/**
 * @type {function}
 * @nosideeffects
 */
MenuItem.OnClick;

/**
 * @type {MenuItem}
 * @nosideeffects
 * @const
 */
MenuItem.ParentMenu;

/**
 * @type {string}
 * @nosideeffects
 */
MenuItem.ShortCut;

/**
 * @type {boolean}
 * @nosideeffects
 */
MenuItem.Visible;



/**
 * V2C オブジェクト
 * @const
 */
var v2c = {};

/**
 * @nosideeffects
 * @param {string} text スクリプトコンソールに書き出す文字列
 */
v2c.prototype.println = function(text) {};

/**
 * V2Cコンテキスト オブジェクト
 * @const
 */
v2c.context = {};

/**
 * V2C 外部コマンド引数Array
 * @type {Array.<String>}
 * @const
 */
v2c.context.args;

/**
 * V2C 外部コマンド引数Array
 * @type {String}
 * @const
 */
v2c.context.argLine;

/**
 * レス表示ペインオブジェクト
 * @type {org_monazilla_v2c_V2CScriptResPane} レス表示ペインオブジェクト
 * @const
 */
v2c.resPane;

/**
 * V2C レスパネル オブジェクト
 * @nosideeffects
 */
var org_monazilla_v2c_V2CScriptResPane = {};

/**
 * V2C スレッド オブジェクト
 * @type {org_monazilla_v2c_V2CScriptThreadItem} Threadアイテム
 * @const
 */
org_monazilla_v2c_V2CScriptResPane.selectedThread;

/**
 * V2C スレッド オブジェクト
 * @type {org_monazilla_v2c_V2CScriptThreadItem} Threadアイテム
 * @const
 */
v2c.context.thread;

/**
 * V2C スレッド オブジェクト
 * @nosideeffects
 */
var org_monazilla_v2c_V2CScriptThreadItem = {};

/**
 * @nosideeffects
 * @return {org_monazilla_v2c_V2CScriptWritePanel} 書き込み欄オブジェクトを返します
 */
org_monazilla_v2c_V2CScriptThreadItem.prototype.openWritePanel = function() {};

/**
 * V2C 書き込み欄 オブジェクト
 * @nosideeffects
 */
var org_monazilla_v2c_V2CScriptWritePanel = {};

/**
 * @type {org_monazilla_v2c_V2CScriptTextComp}
 * @nosideeffects
 */
org_monazilla_v2c_V2CScriptWritePanel.title;

/**
 * @type {org_monazilla_v2c_V2CScriptTextComp}
 * @nosideeffects
 */
org_monazilla_v2c_V2CScriptWritePanel.name;

/**
 * @type {org_monazilla_v2c_V2CScriptTextComp}
 * @nosideeffects
 */
org_monazilla_v2c_V2CScriptWritePanel.mail;

/**
 * @type {org_monazilla_v2c_V2CScriptTextComp}
 * @nosideeffects
 */
org_monazilla_v2c_V2CScriptWritePanel.message;

/**
 * @nosideeffects
 */
org_monazilla_v2c_V2CScriptWritePanel.prototype.close = function() {};

/**
 * @type {boolean}
 * @nosideeffects
 */
org_monazilla_v2c_V2CScriptWritePanel.preview;

/**
 * @type {boolean}
 * @nosideeffects
 */
org_monazilla_v2c_V2CScriptWritePanel.sage;

/**
 * @type {Object}
 * @nosideeffects
 */
var org_monazilla_v2c_V2CScriptTextComp = {};

/**
 * @nosideeffects
 */
org_monazilla_v2c_V2CScriptTextComp.prototype.copy = function() {};

/**
 * @nosideeffects
 */
org_monazilla_v2c_V2CScriptTextComp.prototype.paste = function() {};

/**
 * @nosideeffects
 */
org_monazilla_v2c_V2CScriptTextComp.prototype.cut = function() {};

/**
 * @type {string}
 * @nosideeffects
 */
org_monazilla_v2c_V2CScriptTextComp.text;

/**
 * @type {string}
 * @nosideeffects
 */
org_monazilla_v2c_V2CScriptTextComp.selText;

/**
 * @type {number}
 * @nosideeffects
 */
org_monazilla_v2c_V2CScriptTextComp.caretPos;

/**
 * @type {number}
 * @nosideeffects
 */
org_monazilla_v2c_V2CScriptTextComp.selStart;

/**
 * @type {number}
 * @nosideeffects
 */
org_monazilla_v2c_V2CScriptTextComp.selEnd;

/**
 * @nosideeffects
 * @param {number} 
 * @param {number} 
 */
org_monazilla_v2c_V2CScriptTextComp.prototype.select = function(is, ie) {};
