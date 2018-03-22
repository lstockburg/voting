$(document).ready(function() {
  var age = parseInt(prompt("Enter your age"));
  if (age>=18) {
    $(".of-age").show();
  }
  else {
    $(".under-age").show();
  }
});
