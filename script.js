const countdownDate = new Date("January 30, 2025 00:00:00").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "Countdown has ended!";
        return;
    }

    const calculateTimeUnits = (time) => ({
        days: Math.floor(time / (1000 * 60 * 60 * 24)),
        hours: Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((time % (1000 * 60)) / 1000)
    });

    const { days, hours, minutes, seconds } = calculateTimeUnits(timeLeft);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
};

setInterval(updateCountdown, 1000);

document.getElementById("dark-mode-toggle").addEventListener("click", () => {
    const body = document.body;
    body.classList.toggle("dark-mode");
    
    // Toggle icon between sun and moon
    const icon = document.querySelector("#dark-mode-toggle i");
    if (body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});
