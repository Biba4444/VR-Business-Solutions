let countdown = 30; // Таймер на 30 секунд

function redirectToClosePage() {
    window.location.href = 'index.html';
}

function updateTimer() {
    if (countdown > 0) {
        document.getElementById('timer').innerText = countdown;
        countdown--;
    } else {
        redirectToClosePage();
    }
}

// Немедленное обновление таймера при загрузке страницы
document.addEventListener('DOMContentLoaded', (event) => {
    updateTimer();
    // Обновление таймера каждую секунду
    setInterval(updateTimer, 1000);
});
