// --- Data ---
const SITUATIONS = {
    "breakfast": [
        { name: "전복죽", reason: "밤새 비어있던 위를 부드럽게 달래주며 에너지를 채워줍니다.", calories: 350 },
        { name: "에그 베네딕트", reason: "단백질이 풍부해 오전 집중력을 높여주는 든든한 아침입니다.", calories: 550 }
    ],
    "lunch": [
        { name: "김치찌개", reason: "한국인의 소울푸드, 매콤한 맛이 오후 업무의 스트레스를 날려줍니다.", calories: 450 },
        { name: "포케 보울", reason: "다양한 영양소를 한 번에 섭취할 수 있는 가볍고 건강한 선택입니다.", calories: 500 }
    ],
    "dinner": [
        { name: "삼겹살", reason: "지친 하루의 끝, 고소한 고기와 소주 한 잔은 완벽한 보상입니다.", calories: 750 },
        { name: "연어 스테이크", reason: "오메가-3가 풍부해 하루의 피로를 회복하고 숙면을 돕습니다.", calories: 480 }
    ],
    "weather_rainy": [
        { name: "해물파전", reason: "비 오는 소리와 지글거리는 기름 소리의 완벽한 공명, 기분을 돋웁니다.", calories: 600 },
        { name: "짬뽕", reason: "습한 날씨에 떨어진 체온을 높여주고 얼큰한 국물이 식욕을 돋웁니다.", calories: 700 }
    ]
};

// --- Page Engine ---
function toggleTheme() {
    const body = document.body;
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

// --- Tool: Decision Solver ---
function solveDecision() {
    const hours = new Date().getHours();
    let timeKey = "lunch";
    if (hours < 11) timeKey = "breakfast";
    else if (hours > 17) timeKey = "dinner";

    const isRainy = Math.random() > 0.7;
    const pool = isRainy ? SITUATIONS.weather_rainy : SITUATIONS[timeKey];
    const meal = pool[Math.floor(Math.random() * pool.length)];

    const resultArea = document.getElementById('recommend-result');
    if (resultArea) {
        resultArea.innerHTML = `
            <div class="result-card" style="animation: fadeInUp 0.5s ease-out;">
                <span class="badge" style="background: ${isRainy ? '#3498db' : '#b08d57'}; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px;">
                    ${isRainy ? '🌧️ 비 오는 날 추천' : '⏰ 시간대별 추천'}
                </span>
                <h3 style="margin: 15px 0 10px;">${meal.name}</h3>
                <p style="font-size: 15px; color: #666; margin-bottom: 15px;">"${meal.reason}"</p>
                <div style="padding: 10px; background: rgba(231, 76, 60, 0.1); border-radius: 8px; color: #e74c3c; font-weight: 700; font-size: 14px;">
                    🔥 예상 칼로리: ${meal.calories} kcal
                </div>
            </div>
        `;
    }
}

// --- Tool: Calorie Calculator ---
function calculateCalorie() {
    const input = document.getElementById('food-input');
    const resultArea = document.getElementById('calorie-result');
    if (!input || !resultArea) return;

    const foodName = input.value.trim();
    if (!foodName) {
        alert("음식 이름을 입력해주세요.");
        return;
    }

    // foodCalories is defined in mbti.js
    if (typeof foodCalories === 'undefined') {
        alert("데이터를 불러오는 중입니다. 잠시 후 다시 시도해주세요.");
        return;
    }

    const calorie = foodCalories[foodName];
    if (calorie) {
        resultArea.innerHTML = `
            <div class="result-card" style="border-left: 4px solid #e74c3c; background: #fff;">
                <h3 style="color: #333;">${foodName}</h3>
                <p style="font-size: 18px; color: #e74c3c; font-weight: 700; margin-top: 5px;">대략 ${calorie} kcal (1인분 기준)</p>
                <p style="font-size: 12px; color: #888; margin-top: 10px;">* 조리 방식과 재료에 따라 차이가 있을 수 있습니다.</p>
            </div>
        `;
    } else {
        resultArea.innerHTML = `
            <div class="result-card" style="background: #fdf2f2;">
                <p style="color: #c0392b;">죄송합니다. <strong>'${foodName}'</strong>에 대한 정보가 아직 없네요. <br>곧 업데이트하도록 하겠습니다!</p>
            </div>
        `;
    }
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) document.body.setAttribute('data-theme', savedTheme);
});