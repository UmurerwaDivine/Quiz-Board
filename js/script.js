
    $(document).ready(function(){
        $("#board").submit(function (event) {
     
    $('#output').text('');
    event.preventDefault();

var option = $("input:radio[name=option]:checked ").val();
var optionOne = $("input:radio[name=optionOne]:checked").val();
var optionTwo = $("input:radio[name=optionTwo]:checked").val();
var optionThree = $("input:radio[name=optionThree]:checked").val();
var optionFour = $("input:radio[name=optionFour]:checked").val();
var opt = 0;

if (answerOne === undefined || answerTwo === undefined || answerThree === undefined) {
    $('#questionsIncomplete').text("Please Complete questions Before Submitting");

    }else{

   
if (option == "Method") {
    opt = opt + 10;
};
if (optionOne == "Division") {
    opt =opt+ 10;
};
if (optionTwo  == "literal") {
    opt = opt + 10;
};
if ( optionThree == "expressions") {
    opt = opt + 10;
};
if ( optionFour == "Based") {
    opt = opt + 10;
};
}

 });
});
//document.getElementById("output").style.visibility = "visible";
//document.getElementById("correct").innerHTML = "Your Total Marks " + opt + " /50";


   // $(".container").fadeOut();


