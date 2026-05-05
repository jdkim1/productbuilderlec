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

const foodCalories = {
    "김치찌개":250,"된장찌개":200,"순두부찌개":300,"부대찌개":600,"청국장":250,
    "콩비지찌개":300,"비빔밥":550,"돌솥비빔밥":650,"불고기":450,"제육볶음":600,
    "삼겹살":700,"목살구이":650,"갈비구이":650,"닭갈비":700,"닭볶음탕":700,
    "치킨후라이드":800,"치킨양념":900,"간장치킨":850,"마늘치킨":850,
    "백반":700,"정식":800,"칼국수":500,"잔치국수":400,"비빔국수":600,
    "쫄면":700,"냉면":450,"라면":500,"짜장면":800,"짬뽕":700,
    "볶음밥":700,"김치볶음밥":650,"새우볶음밥":700,"오므라이스":750,
    "돈까스":900,"치즈돈까스":1000,"떡볶이":500,"로제떡볶이":700,
    "순대":400,"순대국":600,"김밥":400,"참치김밥":500,"치즈김밥":550,
    "불고기김밥":550,"잡채":300,"갈비탕":500,"설렁탕":450,"곰탕":400,
    "육개장":450,"해장국":500,"선지해장국":500,"아구찜":600,"해물탕":500,
    "매운탕":500,"파전":600,"김치전":550,"해물파전":700,"계란말이":300,
    "계란찜":150,"불닭볶음면":550,"샤브샤브":600,"초밥":500,
    "연어초밥":600,"참치초밥":550,"우동":450,"튀김우동":600,"돈부리":700,
    "김치볶음":150,"멸치볶음":120,"콩나물무침":80,"시금치무침":90,
    "도라지무침":100,"오이무침":70,"무생채":60,"장조림":200,
    "두부조림":180,"감자조림":200,"연근조림":180,"고등어조림":400,
    "갈치조림":450,"삼치구이":350,"고등어구이":400,"갈치구이":450,
    "계란후라이":90,"계란스크램블":150,"떡국":500,"만두국":600,
    "떡만두국":650,"콩국수":600,"막국수":550,"비빔막국수":600,
    "수제비":500,"감자수제비":550,"칼제비":550,"카레라이스":700,
    "하이라이스":750,"오징어볶음":400,"낙지볶음":500,"쭈꾸미볶음":450,
    "닭곰탕":500,"삼계탕":800,"추어탕":500,"보쌈":600,"족발":800,
    "편육":500,"토스트":300,"버터토스트":350,"프렌치토스트":400,
    "샌드위치":350,"햄버거":600,"치즈버거":700,"불고기버거":650,
    "감자튀김":400,"핫도그":450,"피자한조각":300,"치즈피자":800,
    "페퍼로니피자":900,"고구마피자":850,"불고기피자":900,
    "스파게티":700,"크림파스타":900,"토마토파스타":700,"로제파스타":850,
    "리조또":800,"샐러드":150,"치킨샐러드":300,"시저샐러드":400,
    "과일샐러드":200,"인절미":300,"송편":250,"절편":200,"꿀떡":220,
    "약과":300,"한과":250,"붕어빵":250,"호떡":300,"초코케이크":400,
    "치즈케이크":450,"생크림케이크":400,"마카롱":120,"쿠키":150,
    "도넛":300,"아메리카노":10,"카페라떼":150,"바닐라라떼":250,
    "카페모카":300,"카라멜마끼아또":300,"녹차라떼":250,"핫코코":300,
    "밀크티":250,"버블티":400,"콜라":150,"사이다":150,"환타":160,
    "이온음료":120,"에너지드링크":200,"소주":400,"맥주":500,
    "막걸리":300,"와인":600,"사과":100,"바나나":120,"귤":80,
    "오렌지":90,"포도":120,"수박":90,"참외":80,"딸기":50,
    "복숭아":90,"배":120
};

const mbtiFoodMap = {
    "ISTJ": ["백반", "된장찌개", "갈비탕", "김밥", "설렁탕"],
    "ISFJ": ["김치찌개", "계란찜", "잡채", "떡국", "불고기"],
    "INFJ": ["샐러드", "초밥", "카페라떼", "과일샐러드", "순두부찌개"],
    "INTJ": ["아메리카노", "돈부리", "카레라이스", "고등어구이", "샤브샤브"],

    "ISTP": ["라면", "햄버거", "돈까스", "감자튀김", "쫄면"],
    "ISFP": ["마카롱", "붕어빵", "호떡", "치즈케이크", "딸기"],
    "INFP": ["떡볶이", "로제떡볶이", "핫코코", "쿠키", "바닐라라떼"],
    "INTP": ["짜장면", "짬뽕", "불닭볶음면", "피자한조각", "에너지드링크"],

    "ESTP": ["삼겹살", "족발", "치킨양념", "부대찌개", "제육볶음"],
    "ESFP": ["치킨후라이드", "치즈피자", "버블티", "도넛", "로제파스타"],
    "ENFP": ["닭갈비", "떡볶이", "마늘치킨", "카라멜마끼아또", "고구마피자"],
    "ENTP": ["매운탕", "아구찜", "불닭볶음면", "짬뽕", "쭈꾸미볶음"],

    "ESTJ": ["정식", "갈비구이", "순대국", "육개장", "보쌈"],
    "ESFJ": ["비빔밥", "김치전", "해물파전", "잔치국수", "불고기김밥"],
    "ENFJ": ["돌솥비빔밥", "샤브샤브", "연어초밥", "치킨샐러드", "녹차라떼"],
    "ENTJ": ["치즈돈까스", "크림파스타", "갈비구이", "삼계탕", "페퍼로니피자"]
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

// --- Tool: MBTI Food Compatibility ---
function recommendFood() {
    const input = document.getElementById("mbti-input");
    const resultArea = document.getElementById("mbti-result");
    if (!input || !resultArea) return;

    const mbti = input.value.toUpperCase().trim();
    if (!mbtiFoodMap[mbti]) {
        alert("올바른 MBTI를 입력해주세요. 예: ENFP, ISTJ");
        return;
    }

    const foods = mbtiFoodMap[mbti];
    const randomFood = foods[Math.floor(Math.random() * foods.length)];
    const calories = foodCalories[randomFood] || 500;

    resultArea.innerHTML = `
        <div class="result-card gold" style="border-top: 4px solid #ff5722; background: #fff; animation: fadeInUp 0.5s ease-out;">
            <p style="font-size: 14px; color: #666;">당신의 MBTI는 <strong>${mbti}</strong></p>
            <p style="margin: 10px 0;">오늘의 궁합 음식은</p>
            <h3 style="font-size: 28px; color: #ff5722; margin-bottom: 10px;">🍽️ ${randomFood}</h3>
            <div class="calorie-tag" style="background: #ff7043;">${calories} kcal</div>
            <p style="margin-top: 20px; font-size: 13px; color: #888;">이 결과를 친구들과 공유해보세요!</p>
        </div>
    `;
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) document.body.setAttribute('data-theme', savedTheme);
});