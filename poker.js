


//產生一副完整的牌
var poker = new Array(52);
for (var i = 1; i <= poker.length; i++) {
    poker[i - 1] = i;
}

//開始洗牌利用亂數後再做交換
var tmp = "";
var x = 0;
for (var i = 0; i < poker.length; i++) {
    x = Math.floor((Math.random() * 52));
    tmp = poker[i];
    poker[i] = poker[x];
    poker[x] = tmp;
}

//開始發牌
var p1 = "", p2 = "", p3 = "", p4 = "";
for (var i = 0; i < poker.length; i++) {
    switch (i % 4) {
        case 0:
            p1 += "<img src='img/" + poker[i] + ".jpg' />";
            break;
        case 1:
            p2 += "<img src='img/" + poker[i] + ".jpg' />";
            break;
        case 2:
            p3 += "<img src='img/" + poker[i] + ".jpg' />";
            break;
        case 3:
            p4 += "<img src='img/" + poker[i] + ".jpg' />";
            break;
    }
}
document.write("play1:" + p1 + "<br>play2:" + p2 + "<br>play3:" + p3 + "<br>play4:" + p4);