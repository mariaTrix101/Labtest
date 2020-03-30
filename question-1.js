const mixedArray = ["Pizza", 10, true, 25, false, "Wings"];

let lowerCaseWords = function (arr) {
    let output = [];
    if (arr.length > 1) {
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            if (typeof item === 'string') {
                output.push(item.toLowerCase());
            }
        }
        return Promise.resolve(output);
    } else {
        var error = new Error("Error: Array elements issue!");
        return Promise.reject(error);
    }
}
lowerCaseWords(mixedArray)
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.log(error.message);
    })