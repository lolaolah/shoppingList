
function addToList () {
  var text = $("#addNewItem").val();
  alert(text);
}

$(function() {
  $("#addText").on('click', addToList);
});
