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
    breakfast: ["전복죽", "계란 토스트", "요거트 볼", "샌드위치", "순두부찌개"],
    lunch: ["김치찌개", "비빔밥", "파스타", "쌀국수", "돈가스"],
    dinner: ["삼겹살", "스테이크", "치킨", "보쌈", "찜닭"],
    snack: ["아메리카노", "조각 케이크", "떡볶이", "빙수", "단백질 바"]
};

const mealDetails = {
    "김치찌개": {
        recipe: "1. 냄비에 돼지고기와 김치를 넣고 볶습니다. 2. 김치가 투명해지면 육수를 붓고 끓입니다. 3. 두부와 파를 넣고 간을 맞춥니다.",
        ingredients: "김치 200g, 돼지고기 100g, 두부 1/2모, 대파, 마늘, 고춧가루",
        calories: "약 250kcal (1인분)",
        image: "https://images.unsplash.com/photo-1583213048507-98566f670d80?auto=format&fit=crop&w=800&q=80",
        searchQuery: "서울 김치찌개 맛집"
    },
    "비빔밥": {
        recipe: "1. 각종 채소를 볶거나 데칩니다. 2. 밥 위에 나물을 예쁘게 담습니다. 3. 고추장과 참기름을 얹어 비벼 먹습니다.",
        ingredients: "밥 1공기, 콩나물, 시금치, 당근, 고사리, 달걀, 고추장, 참기름",
        calories: "약 550kcal",
        image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80",
        searchQuery: "비빔밥 맛집"
    },
    "삼겹살": {
        recipe: "1. 달궈진 팬이나 그릴에 삼겹살을 올립니다. 2. 앞뒤로 노릇하게 굽습니다. 3. 먹기 좋은 크기로 잘라 쌈장과 채소를 곁들입니다.",
        ingredients: "삼겹살 200g, 상추, 깻잎, 마늘, 고추, 쌈장",
        calories: "약 650kcal (1인분)",
        image: "https://images.unsplash.com/photo-1621972033036-778736f32e3a?auto=format&fit=crop&w=800&q=80",
        searchQuery: "삼겹살 맛집"
    },
    "돈가스": {
        recipe: "1. 돼지고기를 두드려 펴고 소금, 후추로 간을 합니다. 2. 밀가루, 계란물, 빵가루 순으로 옷을 입힙니다. 3. 바삭하게 튀겨 소스를 곁들입니다.",
        ingredients: "돼지등심, 밀가루, 계란, 빵가루, 식용유, 돈가스 소스",
        calories: "약 500kcal",
        image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&w=800&q=80",
        searchQuery: "돈가스 맛집"
    },
    "전복죽": {
        recipe: "1. 전복을 손질하여 썰어둡니다. 2. 불린 쌀과 전복 내장을 함께 볶습니다. 3. 물을 붓고 쌀이 퍼질 때까지 뭉근히 끓입니다.",
        ingredients: "전복 2개, 쌀 1컵, 참기름, 소금",
        calories: "약 300kcal",
        image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=800&q=80",
        searchQuery: "전복죽 맛집"
    }
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
        card.className = 'meal-row clickable';
        card.onclick = () => showDetail(selectedMeal);
        card.innerHTML = `
            <span class="meal-label">${cat.label}</span>
            <span class="meal-name">${selectedMeal}</span>
            <span class="view-detail">상세보기 ></span>
        `;
        resultsContainer.appendChild(card);
    });
}

function showDetail(mealName) {
    const detail = mealDetails[mealName] || {
        recipe: "준비 중인 레시피입니다. 곧 업데이트될 예정입니다.",
        ingredients: "기본 식재료 (업데이트 예정)",
        calories: "정보 준비 중",
        image: "https://images.unsplash.com/photo-1495195129352-aec325b55b65?auto=format&fit=crop&w=800&q=80",
        searchQuery: mealName + " 맛집"
    };

    document.getElementById('detail-name').innerText = mealName;
    document.getElementById('detail-image').src = detail.image;
    document.getElementById('detail-ingredients').innerText = detail.ingredients;
    document.getElementById('detail-recipe').innerText = detail.recipe;
    document.getElementById('detail-calories').innerText = detail.calories;
    
    // Map URL (Using Google Maps search link as a reliable embed without API key)
    const mapIframe = document.getElementById('detail-map');
    const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(detail.searchQuery)}&output=embed`;
    mapIframe.src = mapUrl;

    showPage('detail');
}

function showPage(pageId) {
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);
}