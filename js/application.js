
//Delete Row on button click
var deleteRow = function () {
  console.log('event is firing');
  $(this).parents('tr').remove();
}
//create and insert row from input data
var createRow = function () {
  console.log('listener is working');
    var itemName = $('.new-item > td').children('input').first().val();
    var itemPrice = parseFloat($('.new-item > td').children('input').last().val()).toFixed(2);

    var newText;

    if (itemName && itemPrice) {
      console.log('kill me');
      newText = $('<tr class="row">' + '<td class="item col-2">' + itemName + '</td>' + '<td class="price col-2 mx-auto">' + '$' + itemPrice + '</td>' + '<td class="quantity col-3">' + '<b>' + 'QTY' + '</b>' + '<input type="text" name="quantity" value=""/>' + '</td>' + '<td class="col-1">' + '<button class="btn btn-secondary btn-sm cancel">' + 'Cancel' + '</button>' + '</td>' + '<td class="item-total col-1">' + '$0.00' + '</td>' +'</tr>');
      newText.insertBefore('.new-item');

    }
}
//individual row prices
var inputTimer;
var getItemTotal = function () {
  var calculateItemTotal = function () {
    var price = parseFloat($(this).children('.price').text().split('').slice(1).join(''));

    var quantity = $(this).children('.quantity').children('input').val();
    var total = price * quantity;

    $(this).children('.item-total').text('$' + String(total.toFixed(2)));
    window.clearInterval(inputTimer);
  }

  $('tbody tr').each(function (index, element) {
    if (index > 0) {
      calculateItemTotal.call(element);
    }
  });
}

$(document).ready(function () {
  getItemTotal();

  $('.create').click(createRow);

  $(document).on('click', '.cancel', deleteRow);

  //quantity input debouncer
  $(document).on('keyup', '.quantity > input', function () {
    window.clearInterval(inputTimer);
    inputTimer = window.setInterval(getItemTotal, 500);

  });
});
