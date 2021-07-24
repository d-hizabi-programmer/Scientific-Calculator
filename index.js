function clear() {
  $("values").val("");
}

//values click event handler
function values(number) {
  $("#values").val(number);
}

$(document).ready(function () {
  $("#clear").on(clear); //for clearing entries

  //click event of textbox
  $("#values").click(function () {
    $("#values").val("");
  });

  $("#numSeven").on(values(7));
  $("#numEight").on(values(8));
  $("#numNine").on(values(9));
});
