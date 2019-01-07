

$(document).ready(function(){
    $("form#board").submit(function(event){
    

var option =$("input:radio[name=option]:checked").val();
var optionOne =$("input:radio[name=optionOne]:checked").val();
var optionTwo =$("input:radio[name=optionTwo]:checked").val();
var optionThree =$("input:radio[name=optionThree]:checked").val();
var optionFour =$("input:radio[name=optionFour]:checked").val();
var opt = 0;

   
if (option === "Mefu") {
    opt = opt + 10;
};
if (optionOne === "Division") {
    opt =opt+ 10;
};
if (optionTwo  === "literal") {
    opt = opt + 10;
};
if ( optionThree === "expressions") {
    opt = opt + 10;
};
if ( optionFour === "Based") {
    opt = opt + 10;
};
 
event.preventDefault();
$(".container").fadeOut();
$("#output").show();
$("#correct").text("Your Total Marks: " + opt + "/50");
});
});



 


