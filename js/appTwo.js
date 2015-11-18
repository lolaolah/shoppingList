
var check_btn = "<button class='fa fa-check'></button>";
var times_btn = "<button class='fa fa-times'></button>";


$(document).ready( function () {

  $('#add_shopping').click( function(e) {
    e.preventDefault();
    var shoppingDescription = $('#shopping_description').val();

    $('.shopping_list').append('<div class="shopping" >'

        + '<div class="shopping_description">'
            + shoppingDescription
        + '</div>'

        + '<div>'

            + '<input class="check_shopping" name="check_shopping" type="checkbox" placeholder="hello" />'

        + '</div>'

        + '<div>'
            + '<input class="delete_shopping" name="delete_shopping" type="checkbox" />'
        + '</div>'

    + '</div>');

    $('#shopping_form')[0].reset();
  });
});

/*$( "#item" ).submit(function( event ) {
  event.preventDefault();
  var x = $("input").val();
  $('.BuyList').prepend("<li>"+x+del_btn+check_btn+"</li>");
});


$(document).ready( function () {

  // When the button is clicked
  $("#button").click(function(){

    // Prepend this HTML
    $("#BuyList").prepend("<li>Apples</li>");
  })
});
*/
