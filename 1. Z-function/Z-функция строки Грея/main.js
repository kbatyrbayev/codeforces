const {readline, print} = require('@ip-algorithmics/codeforces-io');

var x = parseInt(readline());

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var gArr = [];

for (var i = 1; i <= alphabet.length - 1; i++) {
    if (i === 1) {
        gArr[i - 1] = 'a';
    } else {
        gArr[i - 1] = gArr[i - 2] + alphabet[i - 1] + gArr[i - 2];
    }
}

/*for (var l = 0; l < x; l++) {
    var line =
}*/

var k = 3;
var j = 3;
var g = gArr[k-1];
var res = compareStrs(g, g.substring(j, g.length));
print(res);


function compareStrs(str1, str2) {
    var cnt = 0;
    for (var i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) break;
        cnt++;
    }
    return cnt === str1.length ? 0 : cnt;
}
