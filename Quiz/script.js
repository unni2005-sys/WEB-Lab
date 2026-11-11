document.getElementById("quizForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page reload
    
    let score = 0;

    // Check each question's selected value against the correct answer index
    if (document.querySelector('input[name="q1"]:checked')?.value === "0") score++;
    if (document.querySelector('input[name="q2"]:checked')?.value === "1") score++;
    if (document.querySelector('input[name="q3"]:checked')?.value === "0") score++;
    if (document.querySelector('input[name="q4"]:checked')?.value === "1") score++;
    if (document.querySelector('input[name="q5"]:checked')?.value === "2") score++;
    if (document.querySelector('input[name="q6"]:checked')?.value === "0") score++;
    if (document.querySelector('input[name="q7"]:checked')?.value === "0") score++;
    if (document.querySelector('input[name="q8"]:checked')?.value === "1") score++;
    if (document.querySelector('input[name="q9"]:checked')?.value === "0") score++;
    if (document.querySelector('input[name="q10"]:checked')?.value === "2") score++;

    alert("Total Marks: " + score + "/10");
});