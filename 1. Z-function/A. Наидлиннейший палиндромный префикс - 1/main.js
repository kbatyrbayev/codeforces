const { readline, print } = require('@ip-algorithmics/codeforces-io');

var x = parseInt(readline());
var res = [];

for (var i = 0; i < x; i++) {
    var str = readline();
    res[i] = main(str);
}

print(res.join(" \n"));

function main(str) {
    var sub = '';
    var cnt = 0;
    for (var s = 0; s < str.length; s++) {
        sub+=str[s];
        if (checkPalindrom(sub) && sub.length > cnt) {
            cnt = sub.length;
        }
    }
    return cnt;
}

function checkPalindrom(str) {
    return str === str.split("").reverse().join("");
}
