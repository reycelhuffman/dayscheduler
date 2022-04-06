var timeDisplayEl = $('#time-display');

function displayTime() {
    var rightNow =moment().format('LLLL');
    timeDisplayEl.text(rightNow);
    console.log(timeDisplayEl);
}
setInterval(displayTime, 1000)

