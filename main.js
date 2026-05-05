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

const CALORIE_DB = {
    "김치찌개": 450, "된장찌개": 320, "비빔밥": 580, "불고기": 470, "삼겹살": 750,
    "떡볶이": 350, "김밥": 400, "돈가스": 600, "짜장면": 700, "짬뽕": 750,
    "치킨": 800, "피자": 900, "햄버거": 550, "파스타": 650, "샐러드": 200,
    "샌드위치": 450, "라멘": 600, "쌀국수": 500, "초밥": 550, "회": 300
};

const MBTI_FOOD = {
    "INTJ": { food: "파인다이닝 코스", desc: "체계적이고 완벽한 논리 구조를 즐기는 당신에게 어울리는 고품격 미식" },
    "ENFP": { food: "멕시칸 퓨전 타코", desc: "창의적이고 새로운 시도를 좋아하는 당신의 열정과 닮은 맛" },
    "ISTP": { food: "평양냉면", desc: "자극적이지 않지만 깊은 본연의 맛에 집중하는 담백한 미식가" },
    "ESFJ": { food: "한정식 상차림", desc: "함께 나누는 정과 조화로운 구성을 소중히 여기는 따뜻한 마음의 식사" },
    "INTP": { food: "수제 버거", desc: "본질적인 맛의 조합을 분석하며 즐기는 지적인 미식가" },
    "ENFJ": { food: "이탈리안 파스타", desc: "사람들과 어울려 따뜻한 분위기 속에서 즐기는 로맨틱한 식사" },
    "ISFP": { food: "디저트 오마카세", desc: "감각적이고 섬세한 미각을 만족시키는 예술적인 달콤함" },
    "ESTJ": { food: "스테이크", desc: "클래식하고 확실한 결과물을 선호하는 당신에게 어울리는 정석 미식" }
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

    const calorie = CALORIE_DB[foodName];
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

// --- Tool: MBTI Compatibility ---
function checkMBTI() {
    const input = document.getElementById('mbti-input');
    if (!input) return;
    const mbti = input.value.toUpperCase();
    
    if (mbti.length !== 4) {
        alert("MBTI 4자리를 정확히 입력해주세요.");
        return;
    }

    const result = MBTI_FOOD[mbti] || { food: "비빔밥", desc: "모든 성향이 조화롭게 어우러지는 완벽한 밸런스의 맛" };
    const resultArea = document.getElementById('mbti-result');
    
    if (resultArea) {
        resultArea.innerHTML = `
            <div class="result-card gold" style="border-top: 4px solid #b08d57; background: #fff;">
                <h3 style="color: #b08d57;">${mbti}의 소울푸드: ${result.food}</h3>
                <p style="margin-top: 10px;">${result.desc}</p>
                <button class="btn-primary" style="margin-top: 15px; padding: 8px 20px; font-size: 14px; background: #34495e;" onclick="shareResult('${mbti}', '${result.food}')">결과 공유하기</button>
            </div>
        `;
    }
}

function shareResult(mbti, food) {
    alert(`${mbti}의 소울푸드 [${food}] 결과를 복사했습니다! (데모 기능)`);
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) document.body.setAttribute('data-theme', savedTheme);
});