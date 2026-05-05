function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
    } else {
        body.setAttribute('data-theme', 'dark');
    }
}

function generateLotto() {
    const resultsContainer = document.getElementById('lotto-results');
    resultsContainer.innerHTML = ''; // Clear previous results

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
        label.innerText = `Set ${i + 1}: `;
        label.style.minWidth = '60px';
        row.appendChild(label);

        numbers.forEach(num => {
            const ball = document.createElement('div');
            ball.className = 'lotto-ball';
            ball.innerText = num;
            
            // Optional: Color balls based on number ranges
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