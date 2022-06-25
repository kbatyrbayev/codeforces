const { readline, print } = require('@ip-algorithmics/codeforces-io');

// var x = parseInt(readline());
// abacaba
var z = [0, 0, 1, 0, 3, 0, 1];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var res = ['a'];

var elems = [];
console.log(z);
for (let i = 0; i < z.length; i++) {
  const zELem = z[i];
  if (zELem === 0) {
    elems.push({elem:zELem, val: alphabet[0]});
  } else if (zELem === 1) {
    elems.push({elem:zELem, val: alphabet[1]});
  }
  else {
    elems.push({elem:zELem, val: alphabet.slice(0, zELem)});
  }
}

console.log(elems);
