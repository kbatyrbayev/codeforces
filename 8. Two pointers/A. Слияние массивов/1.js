const { readline, print } = require('@ip-algorithmics/codeforces-io');

var firstLine = readline().split(" ").map(r => +r);
var n = firstLine[0];
var m = firstLine[1];

var firstArray = readline().split(" ").map(r => +r);
var secondArray = readline().split(" ").map(r => +r);

var res = Array(firstArray.length+secondArray.length);
var i = 0, j = 0;
console.log(secondArray.length, 'secondArray.length')
while (i < firstArray.length || j < secondArray.length) {
    console.log(i, j, 'i and j')
    if (j === secondArray.length || firstArray[i] < secondArray[j]) {
        res[i+j] = firstArray[i];
        i++;
    } else {
        res[i+j] = secondArray[j];
        j++;
    }
}

print(res.join(" "))