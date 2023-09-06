// IPO CS10 GRADE CALCULATOR By Oliver Lo

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
// Input
    let cl1 = +document.getElementById("cl1-in").value;
    let sp1 = +document.getElementById("sp1-in").value;
    let sp2 = +document.getElementById("sp2-in").value;
    let cl2 = +document.getElementById("cl2-in").value;
    let pa = +document.getElementById("pa-in").value;

    // Process & Output
    let finalGrade = (cl1 + cl2 + sp1 + sp2 + pa) / 5
    getLetterGrade(finalGrade);
}

function getLetterGrade(grade) {
    if (grade <= 49) {
        // Output
        document.getElementById("output").innerHTML = grade + "% F HAHHAHAHAHAHAA" 
    } else if (grade <= 59) {
        // Output
        document.getElementById("output").innerHTML = grade + "% D"
    } else if (grade <= 74) {
        // Output
        document.getElementById("output").innerHTML = grade + "% C"
    } else if (grade <= 89) {
        // Output
        document.getElementById("output").innerHTML = grade + "% B"
    } else {
        // Output
        document.getElementById("output").innerHTML = grade + "% A"
    }
}