// IPO CS10 GRADE CALCULATOR By Oliver Lo

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
// Input
    let cl1 = +document.getElementById("cl1-in").value;
    let sp1 = +document.getElementById("sp1-in").value;
    let sp2 = +document.getElementById("sp2-in").value;
    let cl2 = +document.getElementById("cl2-in").value;
    let pa = +document.getElementById("pa-in").value;

    // Process
    let finalGrade = (cl1 + cl2 + sp1 + sp2 + pa) / 5

    // Output
    document.getElementById("output").innerHTML = finalGrade + "%"
}