
var check_btn = "<button class='fa fa-check'></button>";
var times_btn = "<button class='fa fa-times'></button>";

function addToList () {
  var text = $("#addNewItem").val();
  alert(text);
}

$(function() {
  $("#addText").on('click', addToList);
});
