//parameterized constructor with 5 parameters
function Student(lastName, firstName, prelimGrade, midtermGrade, finalGrade) {
  this.lastName = lastName;
  this.firstName = firstName;
  this.prelimGrade = Number(prelimGrade);
  this.midtermGrade = Number(midtermGrade);
  this.finalGrade = Number(finalGrade);
  this.semestralGrade = 0;

  //method for getting the fullname of a student starting from lastname, firstname
  this.getFullName = function () {
    return this.lastName + ", " + this.firstName;
  };

  //method for computing the semestral grade of a student
  this.computeSemestralGrade = function () {
    this.semestralGrade =
      prelimGrade * 0.3 + midtermGrade * 0.3 + finalGrade * 0.4;

    return this.semestralGrade.toFixed(2);
  };

  //method for getting the remarks if the student passed or failed depending on the prelim, midterm, and final grade input
  this.getRemrarks = function () {
    if (this.semestralGrade >= 60 && this.semestralGrade <= 100) {
      return "PASSED";
    } else {
      return "FAILED";
    }
  };
}

//this function validateForm() is to check for the user input error
function validateForm() {
  //if the user input is empty or did not put anything in the textfields
  if (
    lastName.value == "" ||
    firstName.value == "" ||
    prelimGrade.value == "" ||
    midtermGrade.value == "" ||
    finalGrade == ""
  ) {
    alert("Please input something in the textfields");
    return false;
    //checks if the user input is a nan numerical value
  } else if (
    isNaN(prelimGrade.value) ||
    isNaN(midtermGrade.value) ||
    isNaN(finalGrade.value)
  ) {
    alert("Please input numerical values only");
    return false;
    //checks for the user input if the user input a negative numbers
  } else if (
    prelimGrade.value < 0 ||
    midtermGrade.value < 0 ||
    finalGrade < 0
  ) {
    alert("Please input only positive values");
    return false;
  } else {
    return true;
  }
}

//showDetails() function, after the user clicked the process button, this function will display the details of student's grades
function showDetails() {
  //variables
  let lastName = document.getElementById("lastName").value;
  let firstName = document.getElementById("firstName").value;
  let prelimGrade = document.getElementById("prelimGrade").value;
  let midtermGrade = document.getElementById("midtermGrade").value;
  let finalGrade = document.getElementById("finalGrade").value;
  let pOutput = document.getElementById("pOutput");

  //checks for the user input
  if (validateForm() == false) {
    return;
    //if the user input something it will create a new object for student and display it on p tag
  } else {
    let student = new Student(
      lastName,
      firstName,
      prelimGrade,
      midtermGrade,
      finalGrade
    );

    pOutput.innerHTML =
      "<br>STUDENT FULL NAME : </br>" +
      student.getFullName() +
      "<br>" +
      "<br>PRELIM GRADE : </br>" +
      student.prelimGrade.toFixed(2) +
      "</br>" + //.toFixed() method round the string to a specified number of decimals
      "<br>MIDTERM GRADE : </br>" +
      student.midtermGrade.toFixed(2) +
      "</br>" +
      "<br>FINAL GRADE : </br>" +
      student.finalGrade.toFixed(2) +
      "</br>" +
      "<br>SEMESTRAL GRADE : </br>" +
      student.computeSemestralGrade() +
      "</br>" +
      "<br>REMARKS : </br>" +
      student.getRemrarks();
  }
}

//clear the fields of the text fields and the p tag
function clearFields() {
  document.getElementById("lastName").value = "";
  document.getElementById("firstName").value = "";
  document.getElementById("prelimGrade").value = "";
  document.getElementById("midtermGrade").value = "";
  document.getElementById("finalGrade").value = "";
  document.getElementById("pOutput").innerHTML = "[The Results will go here]";
}
