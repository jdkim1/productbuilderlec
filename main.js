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
    breakfast: ["전복죽", "계란 토스트", "요거트 볼", "샌드위치", "순두부찌개", "시리얼", "누룽지"],
    lunch: ["김치찌개", "비빔밥", "파스타", "쌀국수", "돈가스", "제육볶음", "냉면"],
    dinner: ["삼겹살", "스테이크", "치킨", "보쌈", "찜닭", "부대찌개", "회"],
    snack: ["아메리카노", "조각 케이크", "떡볶이", "빙수", "단백질 바", "호떡", "과일"]
};

const mealDetails = {
    "김치찌개": {
        recipe: "1. 냄비에 식용유를 두르고 돼지고기를 볶다가 김치를 넣고 충분히 볶습니다.\n2. 김치가 나른해지면 쌀뜨물이나 육수를 붓고 끓입니다.\n3. 국물이 끓어오르면 고춧가루, 다진 마늘로 간을 합니다.\n4. 두부와 대파를 넣고 한소끔 더 끓여 마무리합니다.",
        ingredients: "신김치 1/4포기, 돼지고기 150g, 두부 1/2모, 대파 1대, 다진 마늘 1큰술, 고춧가루 2큰술, 쌀뜨물 3컵",
        calories: "약 250kcal (1인분)",
        image: "https://images.unsplash.com/photo-1583213048507-98566f670d80?auto=format&fit=crop&w=800&q=80",
        searchQuery: "서울 김치찌개 맛집"
    },
    "비빔밥": {
        recipe: "1. 콩나물은 데치고 고사리, 시금치 등 나물은 소금과 참기름으로 밑간합니다.\n2. 애호박과 당근은 채 썰어 팬에 볶습니다.\n3. 그릇에 밥을 담고 준비한 나물들을 색감 있게 올립니다.\n4. 가운데 달걀프라이를 올리고 고추장, 참기름을 곁들입니다.",
        ingredients: "밥 1공기, 콩나물 50g, 애호박 1/4개, 당근 1/4개, 고사리, 시금치, 달걀 1개, 고추장 1큰술, 참기름",
        calories: "약 550kcal",
        image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80",
        searchQuery: "비빔밥 맛집"
    },
    "삼겹살": {
        recipe: "1. 신선한 삼겹살을 준비하여 달궈진 불판에 올립니다.\n2. 고기 한쪽 면이 노릇하게 익으면 뒤집어 반대편도 익힙니다.\n3. 함께 구운 마늘, 양파와 함께 먹기 좋은 크기로 자릅니다.\n4. 상추나 깻잎에 고기와 쌈장을 얹어 맛있게 즐깁니다.",
        ingredients: "삼겹살 200~300g, 상추, 깻잎, 마늘, 고추, 양파, 쌈장, 기름장",
        calories: "약 650kcal (1인분)",
        image: "https://images.unsplash.com/photo-1621972033036-778736f32e3a?auto=format&fit=crop&w=800&q=80",
        searchQuery: "삼겹살 맛집"
    },
    "돈가스": {
        recipe: "1. 돈가스용 고기는 망치로 두드려 연하게 만든 뒤 소금, 후추로 간을 합니다.\n2. 밀가루를 묻히고 달걀물을 입힌 뒤 빵가루를 꾹꾹 눌러 입힙니다.\n3. 170도 예열된 기름에 노릇하고 바삭하게 튀겨냅니다.\n4. 먹기 좋게 잘라 소스와 양배추 샐러드를 곁들입니다.",
        ingredients: "돼지등심 150g, 빵가루 1컵, 달걀 1개, 밀가루, 식용유, 소금, 후추, 돈가스 소스",
        calories: "약 500kcal",
        image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&w=800&q=80",
        searchQuery: "돈가스 맛집"
    },
    "전복죽": {
        recipe: "1. 전복은 솔로 깨끗이 닦아 살과 내장을 분리하여 얇게 썹니다.\n2. 달궈진 냄비에 참기름을 두르고 불린 쌀과 전복 내장을 넣고 볶습니다.\n3. 쌀이 투명해지면 물을 붓고 쌀이 푹 퍼질 때까지 끓입니다.\n4. 전복 살을 넣고 소금으로 간을 맞춘 뒤 참기름을 살짝 뿌립니다.",
        ingredients: "전복 2~3마리, 불린 쌀 1컵, 참기름 2큰술, 물 6컵, 소금 약간",
        calories: "약 300kcal",
        image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=800&q=80",
        searchQuery: "전복죽 맛집"
    },
    "스테이크": {
        recipe: "1. 고기는 키친타월로 핏물을 닦고 소금, 후추, 올리브유로 시즈닝합니다.\n2. 팬에 오일을 두르고 연기가 날 정도로 달군 뒤 고기를 올립니다.\n3. 앞뒤로 크러스트가 생기게 굽다가 버터, 마늘, 로즈마리를 넣어 향을 입힙니다.\n4. 구워진 고기는 5분 정도 레스팅하여 육즙이 퍼지게 합니다.",
        ingredients: "소고기 채끝 또는 등심 200g, 올리브유, 버터, 마늘, 로즈마리, 소금, 후추",
        calories: "약 400~600kcal",
        image: "https://images.unsplash.com/photo-1546241072-48010ad28c2c?auto=format&fit=crop&w=800&q=80",
        searchQuery: "스테이크 맛집"
    },
    "떡볶이": {
        recipe: "1. 냄비에 물과 다시마, 멸치를 넣어 육수를 냅니다.\n2. 고추장, 고춧가루, 설탕, 간장을 섞어 양념장을 만듭니다.\n3. 육수에 떡과 어묵, 양념장을 넣고 국물이 걸쭉해질 때까지 끓입니다.\n4. 대파와 삶은 달걀을 넣어 마무리합니다.",
        ingredients: "떡볶이 떡 200g, 어묵 2장, 대파, 고추장 2큰술, 고춧가루 1큰술, 설탕 1큰술",
        calories: "약 350kcal (1인분)",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
        searchQuery: "떡볶이 맛집"
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
            <div class="meal-info">
                <span class="meal-label">${cat.label}</span>
                <span class="meal-name">${selectedMeal}</span>
            </div>
            <div class="meal-action">
                <span class="recipe-hint">레시피 보기</span>
                <span class="view-detail"> ></span>
            </div>
        `;
        resultsContainer.appendChild(card);
    });
}

function showDetail(mealName) {
    const detail = mealDetails[mealName] || {
        recipe: "1. 식재료를 깨끗이 손질합니다.\n2. 팬에 기름을 두르고 재료를 볶거나 끓입니다.\n3. 기호에 맞게 양념을 추가하여 완성합니다.",
        ingredients: mealName + " 주재료, 양념류 등",
        calories: "정보 확인 중",
        image: "https://images.unsplash.com/photo-1495195129352-aec325b55b65?auto=format&fit=crop&w=800&q=80",
        searchQuery: mealName + " 맛집"
    };

    document.getElementById('detail-name').innerText = mealName;
    document.getElementById('detail-image').src = detail.image;
    document.getElementById('detail-ingredients').innerText = detail.ingredients;
    
    // Formatting recipe lines with line breaks
    const recipeContainer = document.getElementById('detail-recipe');
    recipeContainer.innerHTML = detail.recipe.split('\n').join('<br>');
    
    document.getElementById('detail-calories').innerText = detail.calories;
    
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