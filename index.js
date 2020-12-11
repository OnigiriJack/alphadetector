exports.printMsg = function () {
    console.log("This is a message from the demo package");
}

exports.toBinary = function (str) {
    let binaryVal = Buffer.from(str, "binary");
    console.log(binaryVal)
}