function clearEntries(evt) {
  $("#display").val("0");
  console.log("Entries Cleared!");
  evt.preventDefault();
}

//values click event handler
function inputValues(evt, number) {
  var currentValue = $("#display").val();
  evt.preventDefault();
  if (currentValue == 0) {
    $("#display").val(number);
  } else {
    var newValue = currentValue + number;
    $("#display").val(newValue);
  }
  console.log("Value added succesfully!");
}

$(document).ready(function () {
  $("#display").focus();

  //for clearing entries
  $("#clear").on("click", clearEntries);
  console.log("Value is:" + $("#display").val());

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
});
