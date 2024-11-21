const news = [
    "העונה החדשה של 'מרגלי סייבר' מתחילה בשבוע הבא! אל תחמיצו!",
    "פרק הסיום של 'תעלומות אפלות': מיהו הרוצח המסתורי?",
    "תוכנית הלילה מארחת כוכב ידוע ביום חמישי הבא",
    "תוכנית הריאליטי 'שפים קיצוניים' מתחילה בליהוק לעונה חדשה"
];

function initTicker() {
    const tickerContent = document.getElementById('ticker-content');
    news.forEach((item, index) => {
        const p = document.createElement('p');
        p.textContent = item;
        p.style.opacity = index === 0 ? 1 : 0;
        p.classList.toggle('hidden', index !== 0);
        tickerContent.appendChild(p);
    });
}

function rotateTicker() {
    const tickerContent = document.getElementById('ticker-content');
    const current = tickerContent.querySelector('p:not(.hidden)');
    const next = current.nextElementSibling || tickerContent.querySelector('p:first-child');
    
    current.classList.add('hidden');
    current.style.opacity = 0;
    
    next.classList.remove('hidden');
    next.style.opacity = 1;
}

document.addEventListener('DOMContentLoaded', () => {
    initTicker();
    setInterval(rotateTicker, 5000);
});