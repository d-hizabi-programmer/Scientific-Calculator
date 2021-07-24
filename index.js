function clearEntries(evt) {
  $("#display").val("0");
  console.log("Entries Cleared!");
  evt.preventDefault();
}

//values click event handler
function inputValues(evt, number) {
  var newValue;
  var currentValue = $("#display").val();
  evt.preventDefault();

  // fir first number typed in textbox, it shoud remove default value zero.
  if (currentValue == 0 && currentValue.length == 1) {
    if (currentValue == 0 && number == ".") {
      $("#display").val("0.");
      console.log(". Added!");
    } else {
      $("#display").val(number);
    }
  } else {
    //for toggling negative number
    if (number == "-") {
      if (currentValue[0] == "-") {
        newValue = currentValue.slice(1);
        console.log("newVla" + newValue);
      } else {
        newValue = "-" + currentValue;
        console.log("new val" + newValue + "\n current val:" + currentValue);
      }
    } else {
      newValue = currentValue + number;
    }
    $("#display").val(newValue);
  }
  console.log("Value added succesfully!");
}

$(document).ready(function () {
  $("#display").focus();

  //for clearing entries
  $("#clear").on("click", clearEntries);
  console.log("Value is:" + $("#display").val());

  //numer 0 click event
  $("#numZero").on("click", (evt) => {
    inputValues(evt, 0);
  });

  //numer 1 click event
  $("#numOne").on("click", (evt) => {
    inputValues(evt, 1);
  });

  //numer 2 click event
  $("#numTwo").on("click", (evt) => {
    inputValues(evt, 2);
  });

  //numer 3 click event
  $("#numThree").on("click", (evt) => {
    inputValues(evt, 3);
  });

  //numer 4 click event
  $("#numFour").on("click", (evt) => {
    inputValues(evt, 4);
  });

  //numer 5 click event
  $("#numFive").on("click", (evt) => {
    inputValues(evt, 5);
  });

  //numer 6 click event
  $("#numSix").on("click", (evt) => {
    inputValues(evt, 6);
  });

  //number 7 click event
  $("#numSeven").on("click", (evt) => {
    inputValues(evt, 7);
  });

  //numer 8 click event
  $("#numEight").on("click", (evt) => {
    inputValues(evt, 8);
  });

  //numer 9 click event
  $("#numNine").on("click", (evt) => {
    inputValues(evt, 9);
  });

  //numer . (decimal)click event
  $("#decimal").on("click", (evt) => {
    inputValues(evt, ".");
  });

  // - click event
  $("#negative").on("click", (evt) => {
    inputValues(evt, "-");
  });

  //opening bracket
  $("#openingBrace").on("click", (evt) => {
    inputValues(evt, "(");
  });

  //closing brace
  $("#closingBrace").on("click", (evt) => {
    inputValues(evt, ")");
  });

  //cos cick event
  $("#cos").on("click", (evt) => {
    evt.preventDefault();
    currentValue = $("#display").val();
    newValue = Math.cos(currentValue);
    $("#display").val(newValue);
  });

  $("#sin").on("click", (evt) => {
    evt.preventDefault();
    currentValue = $("#display").val();
    newValue = Math.sin(currentValue);
    $("#display").val(newValue);
  });
  $("#tan").on("click", (evt) => {
    evt.preventDefault();
    currentValue = $("#display").val();
    newValue = Math.tan(currentValue);
    $("#display").val(newValue);
  });
});
