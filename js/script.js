function answer() {
    var option = document.board.option.value;
    var optionOne = document.board.optionOne.value;
    var optionTwo = document.board.optionTwo.value;
    var optionThree = document.board.optionThree.value;
    var optionFour = document.board.optionFour.value;
    var opt = 0;

//if (answerOne === undefined || answerTwo === undefined || answerThree === undefined) {
   // $('#questionsIncomplete').text("Please Complete questions Before Submitting");

    //}else{

   
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
   // }


document.getElementById("output").style.visibility = "visible";
document.getElementById("correct").innerHTML = "Your Total Marks: " + opt + " /50";
$(".container").fadeOut();

};

