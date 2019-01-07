
//function result(){
$(document).ready(function(){
    $("#board").submit(function(event){
    

var option =$("input:radio[name=optio]:checked").val();
var optionOne =$("input:radio[name=optionone]:checked").val();
var optionTwo =$("input:radio[name=optiontwo]:checked").val();
var optionThree =$("input:radio[name=optionthree]:checked").val();
var optionFour =$("input:radio[name=optionfour]:checked").val();
var opt = 0;


//if (answerOne === undefined || answerTwo === undefined || answerThree === undefined) {
   // $('#questionsIncomplete').text("Please Complete questions Before Submitting");

  //  }
   // else{

   
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
   // }


event.preventDefault();
$(".container").fadeOut();
$("#output").show();
$("#correct").text("Your Total Marks: " + opt+ "/50");
});
});
//}


 


