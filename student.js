
//Can still be edited

const anotherStudent = document.getElementById("anotherStudent");
const theDisplayArea = document.getElementById("displayAllStudents");
const searchStudent = document.getElementById("searchStudent");

let studentGrades = JSON.parse(localStorage.getItem("studentGrades")) || [];
  displayTheGrades();

anotherStudent.addEventListener('click', (e)=>{
    const studentName = document.getElementById("studentName").value.trim();
    const studentClass = document.getElementById("studentClass").value.trim();

    const compterStudiesMark = Number(document.getElementById("compterStudies").value);
    const mathsMark = Number(document.getElementById("Mathematics").value);
    const geoMark = Number(document.getElementById("Geography").value);
    const bioMark = Number(document.getElementById("Biology").value);
    const chemMark = Number(document.getElementById("Chemistry").value);
    const englishMark = Number(document.getElementById("English").value);
    const physicsMark = Number(document.getElementById("Physics").value);
     
    let averageMark = ((compterStudiesMark + mathsMark + geoMark 
        + bioMark + chemMark + englishMark + physicsMark) / 7).toFixed(2);
    
    let studentOveralGrade = calculate(averageMark);   


    const newStudentsGrades = {studentName, studentClass, compterStudiesMark, mathsMark, geoMark, 
        bioMark, chemMark, englishMark, physicsMark,  averageMark, studentOveralGrade};
         studentGrades.push(newStudentsGrades);

        localStorage.setItem("studentGrades", JSON.stringify(studentGrades));

         displayTheGrades();
});
//to search for a student (input) listens for every key typed
searchStudent.addEventListener('input', displayTheGrades);

function displayTheGrades(){
    theDisplayArea.innerHTML = "";
    //to search student
    const studentSearched = searchStudent.value.toLowerCase();
    studentGrades.forEach((element, index) => {
        //validate search input
        if(!element.studentName.toLowerCase().includes(studentSearched)) return;

        const studentList = document.createElement("div");
        studentList.className = "student-List";
        studentList.innerHTML = `
        <h3>Students Exam Records</h3>
        <pre><strong>Student Name:</strong>${element.studentName}</pre>
        <pre><strong>Class:</strong>${element.studentClass}</pre>
        <pre><strong>English Mark:</strong>${element.englishMark}</pre>
        <pre><strong>Computer Studies Mark:</strong>${element.compterStudiesMark}</pre>
        <pre><strong>Maths Mark:</strong>${element.mathsMark}</pre>
        <pre><strong>Geography Mark:</strong>${element.geoMark}</pre>
        <pre><strong>Chemistry Mark:</strong>${element.chemMark}</pre>
        <pre><strong>Physics Mark:</strong>${element.physicsMark}</pre>
        <pre><strong>Biology Mark:</strong>${element.bioMark}</pre>
        <pre><strong>The Average:</strong>${element.averageMark}</pre>
        <pre><strong>Grade:</strong>${element.studentOveralGrade}</pre>
        <hr>
        <button onclick="removeStudent(${index})">Remove this student</button>
        
        `;
        theDisplayArea.appendChild(studentList);
    });
};

function removeStudent(index) {
    studentGrades.splice(index ,1);
 //JSON.stringify converts arrays and objects to string to be accesed from the local storage
    localStorage.setItem("studentGrades", JSON.stringify(studentGrades));
    displayTheGrades();
};

function  calculate(averageMark){
    let score = Number(averageMark);
    if (score >= 80 && score <= 100){
        return "A plain"
    }
    else if (score >= 75 && score < 80) {
        return "A- minus"
    }
    else if (score >= 70 && score < 75) {
        return "B+ plus"
    }
    else if (score >= 65 && score < 70) {
        return "B plain"
    }
    else if (score >= 60 && score < 65) {
        return "B- minus"
    }
    else  {
        return "Below Average put in more work"
    };

};