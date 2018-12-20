var option = $("input:radio[name=option]:").val();
var optionOne = $("input:radio[name=optionOne]:").val();
var optionTwo = $("input:radio[name=optionTwo]:").val();
var optionThree = $("input:radio[name=optionThree]:").val();
var optionFour = $("input:radio[name=optionFour]:").val();

$(document).ready(function() {
    $("form#board").submit(function(event) {
    event.preventDefault();
    $("#output").text(result);
    });
    });
    