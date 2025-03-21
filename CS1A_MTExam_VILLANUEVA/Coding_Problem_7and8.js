let DSA = [];
let WebDev = [];


while (true) {
    let subjectChoice = prompt("Select a subject:\n(A) DSA\n(B) WebDev\n(C) Exit").toUpperCase();

    let selectedSubject;
    if (subjectChoice === "A") {
        selectedSubject = DSA;
    } else if (subjectChoice === "B") {
        selectedSubject = WebDev;
    } else if (subjectChoice === "C") {
        break; 
    } else {
        alert("Invalid choice! Try again.");
        continue;
    }

   
    while (true) {
        let operation = prompt("Choose an operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit").toUpperCase();

        if (operation === "A") {
            
            let studentName = prompt("Enter student name:");
            selectedSubject.push(studentName); 
            alert(`${studentName} has been enrolled!`);

        } else if (operation === "B") {
            
            if (selectedSubject.length === 0) {
                alert("No students enrolled!");
                continue;
            }
            alert("Enrolled students: " + selectedSubject.join(", "));
            let studentName = prompt("Enter the student name to remove:");
            
            let index = selectedSubject.indexOf(studentName);
            if (index !== -1) {
                selectedSubject.splice(index, 1);
                alert(`${studentName} has been unenrolled.`);
            } else {
                alert("Student not found!");
            }

        } else if (operation === "C") {
            break;

        } else if (operation === "D") {
            alert("Exiting program...");
            console.log("Final Student Lists:");
            console.log("DSA:", DSA);
            console.log("WebDev:", WebDev);
            exit(); 

        } else {
            alert("Invalid operation! Try again.");
        }
    }
}
