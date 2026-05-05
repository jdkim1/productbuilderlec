function toggleTheme(checkbox) {
    const body = document.body;
    const themeLabel = document.getElementById('theme-label');

    if (checkbox.checked) {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        if (themeLabel) themeLabel.innerText = 'Dark Mode';
    } else {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        if (themeLabel) themeLabel.innerText = 'Light Mode';
    }
}

// Initial theme setup
document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem('theme');
    const themeLabel = document.getElementById('theme-label');
    const themeCheckbox = document.getElementById('checkbox');

    if (currentTheme) {
        document.body.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            if (themeCheckbox) themeCheckbox.checked = true;
            if (themeLabel) themeLabel.innerText = 'Dark Mode';
        }
    }
});

function generateLotto() {
    const resultsContainer = document.getElementById('lotto-results');
    resultsContainer.innerHTML = ''; 

    for (let i = 0; i < 5; i++) {
        const numbers = [];
        while (numbers.length < 6) {
            const num = Math.floor(Math.random() * 45) + 1;
            if (!numbers.includes(num)) {
                numbers.push(num);
            }
        }
        numbers.sort((a, b) => a - b);

        const row = document.createElement('div');
        row.className = 'lotto-row';
        
        const label = document.createElement('span');
        label.className = 'set-label';
        label.innerText = `번호 ${i + 1}: `;
        row.appendChild(label);

        numbers.forEach(num => {
            const ball = document.createElement('div');
            ball.className = 'lotto-ball';
            ball.innerText = num;
            
            if (num <= 10) ball.style.backgroundColor = '#f1c40f';
            else if (num <= 20) ball.style.backgroundColor = '#3498db';
            else if (num <= 30) ball.style.backgroundColor = '#e74c3c';
            else if (num <= 40) ball.style.backgroundColor = '#95a5a6';
            else ball.style.backgroundColor = '#2ecc71';
            
            row.appendChild(ball);
        });

        resultsContainer.appendChild(row);
    }
}

// Simple page navigation
function showPage(pageId) {
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);
}