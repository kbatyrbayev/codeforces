const { readline, print } = require('@ip-algorithmics/codeforces-io');

var str = readline();
var res = getZ(str);
print(res);

function getZ(str) {
    var res = '';
    for (var i = 0; i < str.length; i++) {
        res += compareStrs(str, str.substring(i, str.length)) + ' ';
    }
    return res;
}


function compareStrs(str1, str2) {
    var cnt = 0;
    for (var i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) break;
        cnt++;
    }
    return cnt === str1.length ? 0 : cnt;
}


