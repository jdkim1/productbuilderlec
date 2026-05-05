const SITUATIONS = {
    "hangover": {
        label: "해장이 필요할 때",
        recommendations: [
            { name: "콩나물국밥", reason: "아스파라긴산이 풍부해 알코올 분해를 돕고 간 기능을 회복시킵니다.", calories: 450 },
            { name: "쌀국수", reason: "수분 보충과 함께 따뜻한 국물이 위벽을 보호하며 소화가 빠릅니다.", calories: 500 }
        ]
    },
    "date": {
        label: "성공적인 데이트",
        recommendations: [
            { name: "봉골레 파스타", reason: "조개의 감칠맛과 화이트 와인의 향이 분위기를 돋우며 깔끔한 식사가 가능합니다.", calories: 600 },
            { name: "연어 스테이크", reason: "오메가-3가 풍부해 혈행을 개선하고 피부에 윤기를 더해줍니다.", calories: 480 }
        ]
    },
    "rainy": {
        label: "비 오는 날",
        recommendations: [
            { name: "해물파전", reason: "바삭한 식감이 높은 습도에서 오는 불쾌감을 해소하고 전 부치는 소리가 빗소리와 공명합니다.", calories: 700 },
            { name: "짬뽕", reason: "매콤한 국물이 체온을 높여주고 습한 날씨에 떨어진 입맛을 깨워줍니다.", calories: 750 }
        ]
    },
    "solo": {
        label: "편안한 혼밥",
        recommendations: [
            { name: "포케 보울", reason: "신선한 단백질과 채소를 한 그릇에 담아 영양 균형이 완벽하며 간편합니다.", calories: 550 },
            { name: "텐동", reason: "튀김의 풍미와 밥의 조화로 오롯이 맛에만 집중할 수 있는 미식의 시간입니다.", calories: 850 }
        ]
    }
};

const MBTI_FOOD = {
    "INTJ": { food: "코스 요리", desc: "체계적이고 완벽한 구성을 즐기는 당신에게 어울리는 고품격 미식" },
    "ENFP": { food: "퓨전 타코", desc: "창의적이고 새로운 시도를 좋아하는 당신의 통통 튀는 매력과 닮은 맛" },
    "ISTP": { food: "평양냉면", desc: "자극적이지 않지만 깊은 본연의 맛에 집중하는 담백한 미식가" },
    "ESFJ": { food: "한정식", desc: "함께 나누는 정과 조화로운 구성을 소중히 여기는 따뜻한 마음의 식사" }
};

// --- Page Engine ---
function showPage(pageId, params = {}) {
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));
    const section = document.getElementById(pageId);
    if (section) {
        section.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// --- Tool: Decision Solver ---
function solveDecision() {
    const hours = new Date().getHours();
    let timeLabel = "점심";
    if (hours < 11) timeLabel = "아침";
    else if (hours > 17) timeLabel = "저녁";

    const keys = Object.keys(SITUATIONS);
    const randomSitu = SITUATIONS[keys[Math.floor(Math.random() * keys.length)]];
    const meal = randomSitu.recommendations[Math.floor(Math.random() * randomSitu.recommendations.length)];

    const resultArea = document.getElementById('recommend-result');
    resultArea.innerHTML = `
        <div class="result-card pulse">
            <span class="badge">${timeLabel} 추천</span>
            <h3>오늘의 메뉴: ${meal.name}</h3>
            <p><strong>이유:</strong> ${meal.reason}</p>
            <div class="calorie-tag">대략 ${meal.calories} kcal</div>
        </div>
    `;
}

// --- Tool: MBTI Compatibility ---
function checkMBTI() {
    const mbti = document.getElementById('mbti-input').value.toUpperCase();
    const result = MBTI_FOOD[mbti] || { food: "비빔밥", desc: "모든 성향을 아우르는 완벽한 조화의 맛" };
    
    document.getElementById('mbti-result').innerHTML = `
        <div class="result-card gold">
            <h3>${mbti}의 소울푸드: ${result.food}</h3>
            <p>${result.desc}</p>
        </div>
    `;
}

// --- UI Interaction ---
function toggleTheme() {
    const body = document.body;
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) document.body.setAttribute('data-theme', savedTheme);
});