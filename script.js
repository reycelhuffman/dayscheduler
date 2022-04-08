//Variables here//
let timeDisplayEl = $('#time-display');
let containerEl = document.querySelector(".container")
console.log(containerEl);

//Added button for the sumbit file //
containerEl.addEventListener("click", function (event) {
    // console.log(event.target);
    if (event.target.matches("button")) {
        console.log(event.target.id)
        console.log(event.target.parentElement.previousElementSibling.value)
        localStorage.setItem(event.target.id, event.target.parentElement.previousElementSibling.value)

    }
})
// Used moment time to show time and date currently //
function displayTime() {
    let rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
    // console.log(displayTime);
}
setInterval(displayTime, 1000);

// created function for the local storage made sure it submit and saved into the store //  
function showTextInput() {
    let wordsHours = ["nine", "ten", "eleven", "twelve", "one", "two", "three", "four", "five"]

    let numberHours = ["9", "10", "11", "12", "1", "2", "3", "4", "5"]

    for (let i = 0; i < 9; i++) {
        let userSubmit = localStorage.getItem(numberHours[i]);
        let textBox = document.getElementById(wordsHours[i]);
        textBox.innerHTML = userSubmit;
    }
}
// Create a color change for the hours past, present & future //
function timeTracker() {

    let hourNow = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        // To check the time and add the classes for background indicators
        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass(".past");
        }
        else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass(".present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass(".future");

        }
    })
}
showTextInput();