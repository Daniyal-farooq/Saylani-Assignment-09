var str = "log";
var strr = str.split("");
for (var index = 0; index < str.length; index++) {
    var str2 = str.slice(index + 1, str.length);
    var str3 = [strr[index]];
    console.log(strr[index]);
    for (var index2 = 0; index2 < str2.length; index2++) {
        str3[index2 + 1] = str2[index2];
        console.log(str3.join(""));
    }
}
