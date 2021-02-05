var htmlCode = 
'<div class="TopNavBar fixed-top">' +
    '<nav class="navbar navbar-expand-sm navbar-light bg-light shadow">' + 
        '<a href="/index.html" class="navbar-brand">ターミナルサイト</a>' + 
        '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navmenu1"aria-controls="navmenu1" aria-expanded="false" aria-label="Toggle navigation">' +
            '<span class="navbar-toggler-icon"></span>' +
        '</button>'+
        '<div class="collapse navbar-collapse" id="navmenu1">' +
            '<div class="navbar-nav">' + 
                '<a class="nav-item nav-link" href="/Productions/index.html">製作物</a>' + 
                '<a class="nav-item nav-link" href="/Note/index.html">ブログ</a>' +
                '<a class="nav-item nav-link" href="#">買ったものリスト</a>'+
            '</div>'+
        '</div>'+
    '</nav>'+
'</div>'
document.write(htmlCode)