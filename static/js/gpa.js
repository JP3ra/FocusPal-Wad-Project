let courseList = [];

function addCourse() {
    const course = document.getElementById("course");
    const credits = document.getElementById("credits");
    const grade = document.getElementById("grade");

    const courseName = course.options[course.selectedIndex].text;
    const courseCredits = parseInt(credits.value);
    const courseGrade = parseFloat(grade.value);

    const courseData = {
        name: courseName,
        credits: courseCredits,
        grade: courseGrade
    };

    courseList.push(courseData);

    const courseTable = document.getElementById("courseList");
    const newRow = courseTable.insertRow(-1);
    const nameCell = newRow.insertCell(0);
    const creditsCell = newRow.insertCell(1);
    const gradeCell = newRow.insertCell(2);

    nameCell.innerHTML = courseName;
    creditsCell.innerHTML = courseCredits;
    gradeCell.innerHTML = courseGrade;

    course.value = "";
    credits.value = "";
    grade.value = "4.0";
}

function calculateGPA() {
    let totalCredits = 0;
    let totalGradePoints = 0;

    for (let i = 0; i < courseList.length; i++) {
        const course = courseList[i];
        totalCredits += course.credits;
        totalGradePoints += (course.credits * course.grade);
    }

    const gpa = (totalGradePoints / totalCredits).toFixed(2);
    document.getElementById("gpa").innerHTML = gpa;
}

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    calculateGPA();
});