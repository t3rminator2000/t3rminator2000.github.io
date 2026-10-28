document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('contactBtn');
    
    if (btn) {
        btn.addEventListener('click', () => {
            alert('Спасибо за интерес! Можете написать мне на почту или в Telegram.');
        });
    }
});
