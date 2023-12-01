const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const christmas = 25
    const date = new Date();
    let today = date.getDate();
    let remainingDays = christmas - today
    countdownDisplay.innerText = remainingDays
    // Task:
    // - Get today's date (you only need the day). //DONE   
    // - Calculate remaining days. //DONE
    // - Display remaining days in countdownDisplay. // DONE
}
 
renderCountdown()

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.