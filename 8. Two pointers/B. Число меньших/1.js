const { readline, print } = require('@ip-algorithmics/codeforces-io');

var firstLine = readline().split(" ").map(r => +r);
var n = firstLine[0];
var m = firstLine[1];

var firstArray = readline().split(" ").map(r => +r);
var secondArray = readline().split(" ").map(r => +r);

var i = 0, j = 0;
var res = [];
while (i < firstArray.length || j < secondArray.length) {
    if (j === secondArray.length || firstArray[i] < secondArray[j]) {
        i++;
    } else {
        res[j] = i;
        j++;
    }
}

print(res.join(" "))