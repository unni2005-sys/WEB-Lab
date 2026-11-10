
function calculateMarks() {

    let english = Number(document.getElementById("english").value);
    let hindi = Number(document.getElementById("hindi").value);
    let science = Number(document.getElementById("science").value);

    let total = english + hindi + science;
    let average = total / 3;

    let grade1, grade2, grade3;

    if (english >= 90)
        grade1 = "A";
    else if (english >= 80)
        grade1 = "B";
    else if (english >= 70)
        grade1 = "C";
    else if (english >= 60)
        grade1 = "D";
    else if (english >= 50)
        grade1 = "E";
    else
        grade1 = "F";

    if (hindi >= 90)
        grade2 = "A";
    else if (hindi >= 80)
        grade2 = "B";
    else if (hindi >= 70)
        grade2 = "C";
    else if (hindi >= 60)
        grade2 = "D";
    else if (hindi >= 50)
        grade2 = "E";
    else
        grade2 = "F";

    if (science >= 90)
        grade3 = "A";
    else if (science >= 80)
        grade3 = "B";
    else if (science >= 70)
        grade3 = "C";
    else if (science >= 60)
        grade3 = "D";
    else if (science >= 50)
        grade3 = "E";
    else
        grade3 = "F";

    document.getElementById("result").innerHTML =
        "English Grade: " + grade1 + "<br>" +
        "Hindi Grade: " + grade2 + "<br>" +
        "Science Grade: " + grade3 + "<br><br>" +
        "Total Marks: " + total + "<br>" +
        "Average Marks: " + average.toFixed(2);
}
