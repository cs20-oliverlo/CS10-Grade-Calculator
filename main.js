// IPO CS10 GRADE CALCULATOR By Oliver Lo

// Input
let clientSide1 = +prompt("Enter your Client-Side Scripting 1 mark (# only):");
let sP1 = +prompt("Enter your Structured Programming 1 mark (# only):");
let sP2 = +prompt("Enter your Structured Programming 2 mark (# only):");
let clientSide2 = +prompt("Enter your Client-Side Scripting 2 mark (# only):");
let pA = +prompt("Enter your Project A mark (# only):");

// Process
let finalGrade = (clientSide1 + sP1 + sP2 + clientSide2 + pA)/5

// Output
alert(`Your Final CS10 Grade is ${finalGrade}%.`)