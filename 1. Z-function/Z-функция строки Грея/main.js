const { readline, print } = require('@ip-algorithmics/codeforces-io');

var k = parseInt(readline());
 
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 
var gArr = ['a'];
for (var i = 2; i <= 26; i++) {
    gArr[i - 1] = gArr[i - 2] + alphabet[i - 1] + gArr[i - 2];
}
 
var res = [];
for (var l = 0; l < k; l++) {
    var line = readline().split(' ').map(r => +r);
    var g = gArr[line[0] - 1];
    res[l] = compareStrs(g, g.substring(line[1], g.length));
}
 
print(res.join(' \n'));
 
function compareStrs(str1, str2) {
    var cnt = 0;
    for (var i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) break;
        cnt++;
    }
    return cnt === str1.length ? 0 : cnt;
}
