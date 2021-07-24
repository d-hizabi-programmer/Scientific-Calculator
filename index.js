var currentValue, newValue;

function clearEntries(evt) {
  $("#display").val("0");
  console.log("Entries Cleared!");
  evt.preventDefault();
}

//values click event handler
function inputValues(evt, number) {
  currentValue = $("#display").val();
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

  //cos click event
  $("#cos").on("click", (evt) => {
    evt.preventDefault();
    currentValue = $("#display").val();
    newValue = Math.cos(currentValue);
    $("#display").val(newValue);
  });

  //sin click event
  $("#sin").on("click", (evt) => {
    evt.preventDefault();
    currentValue = $("#display").val();
    newValue = Math.sin(currentValue);
    $("#display").val(newValue);
  });

  //tan click event
  $("#tan").on("click", (evt) => {
    evt.preventDefault();
    currentValue = $("#display").val();
    newValue = Math.tan(currentValue);
    $("#display").val(newValue);
  });

  //square  click event
  $("#square").on("click", (evt) => {
    evt.preventDefault();
    currentValue = $("#display").val();
    newValue = Math.pow(currentValue, 2);
    $("#display").val(newValue);
  });

  //square root click event
  $("#sqrt").on("click", (evt) => {
    evt.preventDefault();
    currentValue = $("#display").val();
    newValue = Math.sqrt(currentValue, 2);
    $("#display").val(newValue);
  });

  //log (ln) click event
  $("#log").on("click", (evt) => {
    evt.preventDefault();
    currentValue = $("#display").val();
    newValue = Math.log(currentValue, 2);
    $("#display").val(newValue);
  });

  // e/exponent/x^  click event
  $("#exp").on("click", (evt) => {
    evt.preventDefault();
    currentValue = $("#display").val();
    newValue = Math.exp(currentValue, 2);
    $("#display").val(newValue);
  });

  //pi value will b shown in textbox
  $("#pi").on("click", (evt) => {
    evt.preventDefault();
    if ($("#display").val() == 0 || $("#display").val().length == 0) {
      newValue = 3.14159265359;
    } else {
      currentValue = parseFloat($("#display").val());
      newValue = currentValue * 3.14159265359;
    }
    $("#display").val(newValue.toFixed(8));
  });

  //addition click event
  $("#addition").on("click", (evt) => {
    inputValues(evt, "+");
  });

  //subtraction click event
  $("#subtraction").on("click", (evt) => {
    evt.preventDefault();
    currentValue = $("#display").val();
    newValue = currentValue + "-";
    $("#display").val(newValue);
  });

  //mulitplication click event
  $("#multiplication").on("click", (evt) => {
    inputValues(evt, "*");
  });

  //division click event
  $("#division").on("click", (evt) => {
    inputValues(evt, "/");
  });

  //backspace click event
  $("#backSpace").on("click", (evt) => {
    evt.preventDefault();
    console.log("inside backspace!");
    currentValue = $("#display").val();
    newValue = currentValue.slice(0, currentValue.length - 1);
    if (newValue.length == 0) {
      $("#display").val("0");
    } else {
      console.log("newval:" + newValue);
      $("#display").val(newValue);
    }
  });

  //percentage click event
  // $("#percent").on("click", (evt) => {
  //   evt.preventDefault();
  //   currentValue = $("#display").val();
  //   newValue = currentValue;
  //   $("#display").val(newValue);
  // });

  // equal to button click event
  $("#equal").on("click", (evt) => {
    evt.preventDefault();
    var computedValue = eval($("#display").val());
    $("#display").val(computedValue);
  });
});
