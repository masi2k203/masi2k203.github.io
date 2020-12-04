// ---------------------------------------- //
// 製作物ページの製作物タイトル一覧の取得
// Productions/index.htmlで使用
// ---------------------------------------- //

// class = card-titleの要素を全て取得する
var productElements = document.getElementsByClassName("card-title");
// タイトルを抽出する
var productTitle = new Array();
for (let i = 0; i < productElements.length; i++) {
    productTitle.push(productElements[i].innerHTML);
}
// HTMLに設定する
document.write("<h2>リスト</h2>");
document.write("<ul>");
for (let i = 0; i < productTitle.length; i++) {
    document.write("<li>" + productTitle[i] + "</li>");
}
document.write("</ul>");