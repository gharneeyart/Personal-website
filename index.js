function updateTime() {
    const currentTimeUTC = new Date().toISOString().split('T')[1].slice(0, 8);
    document.querySelector('[data-testid="currentTimeUTC"]').innerText = currentTimeUTC;
}

function updateDay() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[new Date().getUTCDay()];
    document.querySelector('[data-testid="currentDay"]').innerText = currentDay;
}

document.addEventListener('DOMContentLoaded', () => {
    updateTime();
    updateDay();
    setInterval(updateTime, 60000);  
});
