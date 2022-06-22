const {readline, print} = require('@ip-algorithmics/codeforces-io');

function getUniqArray(array) {
    var res = {};
    array.forEach(elem => {
        res[elem] = (res[elem] || 0) + 1;
    });
    return res;
}

var firstLine = readline().split(" ").map(r => +r);
var n = firstLine[0];
var m = firstLine[1];

var a = readline().split(" ").map(r => +r);
var b = readline().split(" ").map(r => +r);

var arr1 = getUniqArray(a);
var arr2 = getUniqArray(b);


var keys1 = Object.keys(arr1).sort();
var keys2 = Object.keys(arr2).sort();

console.log(keys1)
console.log(keys2)


var i = 0, j = 0, res = 0;

for (var k = 0; k < (keys1.length + keys2.length); k++) {
    if (i >= keys1.length || j >= keys2.length) {
        break;
    }
    if (keys1[i] === keys2[j]) {
        res += arr1[keys1[i]] * arr2[keys2[j]];
        i++;
        j++;
        continue;
    }
    if (keys1[i] < keys2[j]) {
        i++;
    } else {
        j++;
    }
}

print(res);

