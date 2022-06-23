const { readline, print } = require('@ip-algorithmics/codeforces-io');

var x = parseInt(readline());

var result = [];
for(var k = 0; k < x; k++) {
  var str = readline().trim();
  result[k] = solve(str);
}

print(result.join(' \n'));

function solve(s) {
	var reversed_s = reverseStr(s);
	var res = 0;
	var n = s.length;
	for(var i = 0; i < n; i++) {
		for(var j = i; j < n; j++) {
      var rev = reversed_s.substr(0, j-i+1);
			var suffix = reverseStr(rev);
      res += ((s.substr(i, j - i + 1) == s.substr(0, j - i + 1)) ^ (s.substr(i, j - i + 1) == suffix));
		}
	}
	return res;
}

function reverseStr(str) {
  return str.split('').reverse().join('');
}
