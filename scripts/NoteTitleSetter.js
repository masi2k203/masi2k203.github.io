// Noteデータクラス
class NoteData {
    // コンストラクタ
    constructor(title, category, update) {
        this.title      = title;
        this.category   = category;
        this.update     = update;
    }

    // カテゴリ・更新日を追加するメソッド
    CreateInfo() {
        var htmlCode = 
        '<h2>' + this.title + '</h2>' +
        '<div class="text-right">' + 
        '<p>カテゴリ：' + this.category + " / 更新日：" + this.update + "</p>" + 
        '</div>';
        document.write(htmlCode);
    }
}

// データを作成
var noteData = new NoteData(receiveTitle, receiveCategory, receiveUpdate);
noteData.CreateInfo();