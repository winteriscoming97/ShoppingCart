$(document).ready(function () {
  calculateTotalPrice();
});


var calculateTotalPrice = function () {
  $('tbody tr').each(function (index, element) {
    if (index > 0) {
      var price = parseFloat($(this).children('.price').text().split('').slice(1).join(''));

      var quantity = $(this).children('.quantity').children('input').val();
      var total = price * quantity;

      $(this).children('.item-total').text('$' + String(total.toFixed(2)));

    }
  });
}
