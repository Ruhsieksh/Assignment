var first = new Promise(function (resolve, reject) { resolve(5); });
var second = new Promise(function (resolve, reject) { resolve(10); });
var a = first;
var b = second;
Promise.all([first, second]).then(function (values) {
    var total = values.reduce(function (p, c) { return p + c; });
    console.log(total);
});
