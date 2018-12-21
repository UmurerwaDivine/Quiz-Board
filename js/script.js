
function result(){
    

var option = $("input:radio[name=option]:checked ").val();
var optionOne = $("input:radio[name=optionOne]:checked").val();
var optionTwo = $("input:radio[name=optionTwo]:checked").val();
var optionThree = $("input:radio[name=optionThree]:checked").val();
var optionFour = $("input:radio[name=optionFour]:checked").val();
var opt = 0;


//if (answerOne === undefined || answerTwo === undefined || answerThree === undefined) {
  //  $('#questionsIncomplete').text("Please Complete questions Before Submitting");

   // }else{

   
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
document.getElementById("fifth-p").style.visibility = "visible";
document.getElementById("correctNumber").innerHTML = "Your Total Marks " + opt + " /50";


 $(".container").fadeOut();

}

/*function check() {
    var questionOne = document.Quiz.questionOne.value;
    var questionTwo = document.Quiz.questionTwo.value;
    var questionThree = document.Quiz.questionThree.value;
    var questionFour = document.Quiz.questionFour.value;
    var questionFive = document.Quiz.questionFive.value;
    var right = 0;


    if (questionOne == "correct") {
        right = right + 10;
    };
    if (questionTwo == "correct") {
        right = right + 10;
    };
    if (questionThree == "correct") {
        right = right + 10;
    };
    if (questionFour == "correct") {
        right = right + 10;
    };
    if (questionFive == "correct") {
        right = right + 10;
    };



    document.getElementById("fifth-p").style.visibility = "visible";
    document.getElementById("correctNumber").innerHTML = "Your Total Marks: " + right + " /50";
    $(".container").fadeOut();

};*/

 


