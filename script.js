let store = $("localStorage");
let jumbotron = $("jumbotron");
let now = ("moment");
let timeDisplayEl = $('#time-display');
let button = $("saveButton");
let textEl = $("formControl");
let rightNow = $("ShowDate");


function displayTime() {
    let rightNow =moment().format('LLLL');
    timeDisplayEl.text(rightNow);
    console.log(timeDisplayEl);
}
setInterval(displayTime, 1000)

function doSomethingn(){
    let button = 
    console.log(button);

}
