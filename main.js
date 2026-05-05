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

const mealData = {
    breakfast: ["전복죽", "계란 토스트", "요거트 볼", "사과와 견과류", "샌드위치", "순두부찌개", "시리얼", "바나나 팬케이크", "누룽지", "스크램블 에그"],
    lunch: ["김치찌개", "제육볶음", "돈가스", "비빔밥", "파스타", "쌀국수", "초밥", "햄버거", "된장찌개", "짜장면"],
    dinner: ["삼겹살", "스테이크", "치킨", "보쌈", "연어 스테이크", "곱창", "떡볶이와 튀김", "해물파전", "찜닭", "부대찌개"],
    snack: ["아메리카노", "조각 케이크", "과일 화채", "호떡", "떡볶이", "감자튀김", "쿠키", "빙수", "단백질 바", "고구마"]
};

function generateMeals() {
    const resultsContainer = document.getElementById('meal-results');
    resultsContainer.innerHTML = ''; 

    const categories = [
        { id: 'breakfast', label: '아침' },
        { id: 'lunch', label: '점심' },
        { id: 'dinner', label: '저녁' },
        { id: 'snack', label: '간식/디저트' }
    ];

    categories.forEach(cat => {
        const randomIndex = Math.floor(Math.random() * mealData[cat.id].length);
        const selectedMeal = mealData[cat.id][randomIndex];

        const card = document.createElement('div');
        card.className = 'meal-row';
        card.innerHTML = `
            <span class="meal-label">${cat.label}</span>
            <span class="meal-name">${selectedMeal}</span>
        `;
        resultsContainer.appendChild(card);
    });
}

function showPage(pageId) {
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);
}