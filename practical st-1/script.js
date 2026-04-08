function calculateResult(){
    var subjects = parseInt(document.getElementById("subjects").value);
    var total = 0;
    for(var i = 1; i <= subjects; i++){
        var marks = parseFloat(prompt("Enter marks for subject " + i));
        total = total + marks;
    }
    var average = total / subjects;
    var grade;
    var result;
    if(average >= 90){
        grade = "A+";
    }
    else if(average >= 75){
        grade = "A";
    }
    else if(average >= 60){
        grade = "B";
    }
    else if(average >= 50){
        grade = "C";
    }
    else{
        grade = "F";
    }
    if(average >= 40){
        result = "PASS";
    }
    else{
        result = "FAIL";
    }

    document.getElementById("result").innerHTML =
    "Total Marks: " + total + "<br>" +
    "Average Marks: " + average.toFixed(2) + "<br>" +
    "Grade: " + grade + "<br>" +
    "Result: " + result;
}