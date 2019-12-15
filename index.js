var displayDate = document.getElementById("currentDay");
var h = moment().hour();
var date = moment().format("dddd, MMMM Do YYYY");
var hourTextArea = $("textarea");
//Runs upon loading
(function displayLocalStorage(){
    var timeDisplay = $(".hour");
    for (var i = 0; i < hourTextArea.length; i++ ){
        var todo = localStorage.getItem(timeDisplay[i].innerText);
        $(hourTextArea[i]).text(todo);
    }
    colorTextArea();
    displayDate.append(date);
})();
function colorTextArea(){
    for (var i = 0; i < hourTextArea.length; i++ ){
        var textAreaVal = hourTextArea[i].dataset.value;
        if (h > textAreaVal){
            $(hourTextArea[i]).addClass("past");
        }
        else if (h == textAreaVal){
            $(hourTextArea[i]).addClass("present");
        }
        else {
            $(hourTextArea[i]).addClass("future");
        }
    }
}
//Dynamic click event
$(".time-block").on("click", ".saveBtn", function(a){
    if (a.target.nodeName === "DIV"){
        var key = $(a.target).siblings(".hour")[0].innerText;
        localStorage.setItem(key, a.target.previousElementSibling.value);
    }
    else if (a.target.nodeName === "I"){
        var key = $(a.target.parentElement).siblings(".hour")[0].innerText;
        localStorage.setItem(key, a.target.parentElement.previousElementSibling.value);
    }
});