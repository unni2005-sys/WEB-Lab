
function stringFunctions() {
    let str = document.getElementById("str").value;

    let start = Number(document.getElementById("start").value);
    let end = Number(document.getElementById("end").value);

    let sub = str.substring(start, end);

    document.getElementById("result").innerHTML =
        "Length: " + str.length + "<br>" +
        "Uppercase: " + str.toUpperCase() + "<br>" +
        "Lowercase: " + str.toLowerCase() + "<br>" +
        "Substring: " + sub + "<br>" +
        "Replace: " + str.replace("a", "A") + "<br>" +
        "Concatenation: " + str.concat(" and fun!") + "<br>" +
        "First occurrence of a: " + str.indexOf("a") + "<br>" +
        "Last occurrence of s: " + str.lastIndexOf("s");
}

function mathFunctions() {
    let radius = Number(document.getElementById("radius").value);
    let roundNum = Number(document.getElementById("roundNum").value);
    let absNum = Number(document.getElementById("absNum").value);
    let sqrtNum = Number(document.getElementById("sqrtNum").value);

    document.getElementById("mathResult").innerHTML =
        "Area of Circle: " + (Math.PI * radius * radius) + "<br>" +
        "Round: " + Math.round(roundNum) + "<br>" +
        "Absolute Value: " + Math.abs(absNum) + "<br>" +
        "Square Root: " + Math.sqrt(sqrtNum) + "<br>" +
        "Random Number: " + (Math.random() * 10);
}
