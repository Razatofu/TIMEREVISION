var arr = ["talha", "habib", ["hussain", "yaseen"], "asad"];
console.log("select from "    + arr);

var findWord = prompt("Find word:");
console.log("your selected word     "   +     findWord);

var found = false;

var i = 0;
while (i < 4) {
    var temp = arr[i];

    // check element one by one manually
    if (i === 2) {
        var j = 0;
        while (j < 2) {
            if (temp[j] === findWord) {
                found = true;
                break;
            }
            j = j + 1;
        }
    } else {
        if (temp === findWord) {
            found = true;
        }
    }

    if (found) {
        break;
    }

    i = i + 1;
}

if (found) {
    alert("FOUND");
} else {
    alert("NOT FOUND");
}
