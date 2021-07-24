function clear() {
  $("values").val("");
}

$(document).ready(function () {
  $("#clear").on(clear);

  $("#values").click(function () {
    $("#values").val("");
  });
});
