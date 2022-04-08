let jumbotron = $("jumbotron");
//let now = $("moment");
let currentDay = $("")
let timeDisplayEl = $('#time-display');
//let button = $(".saveBtn");
let rightNow = $("ShowDate");
let containerEl = document.querySelector(".container");
console.log(containerEl);


function displayTime() {
    let rightNow = moment().format('LLLL');
    timeDisplayEl.text(rightNow);

}
setInterval(displayTime, 1000)

containerEl.addEventListener("click", function(event){
    if (event.target.matches("button")) {
        console.log(event.target.id);
        console.log(event.target.parentElement.previousElements.value);
        localStorage.setItem(event.target.id, event.parentElement.previousElementSibling.value);
    }
})
function renderLastRegistered(){
    let userSubmit = localStorage.getItem("9");
    let nine = document.getElementById("nine");
    nine.innerHTML = userSubmit;
}
window.onload-function() {
    renderLastRegistered();
}