const posts = [
    {
        id: "posture-correction",
        category: "Smart Workout",
        tag: "스마트 워크아웃",
        title: "오피스 레이디를 위한 5분 거북목 교정 루틴",
        summary: "컴퓨터 앞 업무가 많은 전문직 여성들을 위한 즉각적인 효과의 스트레칭 가이드입니다.",
        readTime: "4분",
        //image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
        image: "/asset/image/main_1.jpg",
        content: `
            <p>장시간 모니터를 응시하는 전문직 여성들에게 '거북목'은 피할 수 없는 숙명처럼 여겨지기도 합니다. 하지만 이는 단순히 외관상의 문제를 넘어 만성 두통과 어깨 통증의 주원인이 됩니다.</p>
            
            <div class="toc">
                <h4>목차</h4>
                <ul>
                    <li><a href="#section1">1. 거북목이 건강에 미치는 영향</a></li>
                    <li><a href="#section2">2. 오피스 스트레칭 3단계</a></li>
                    <li><a href="#section3">3. 생활 속 바른 자세 체크리스트</a></li>
                </ul>
            </div>

            <h2 id="section1">1. 거북목이 건강에 미치는 영향</h2>
            <p>머리의 무게는 평균 5kg 정도지만, 고개가 앞으로 15도 숙여질 때마다 목에 가해지는 하중은 12kg씩 증가합니다. 이는 경추 디스크의 위험을 높일 뿐만 아니라 호흡 효율을 떨어뜨려 집중력 저하의 원인이 됩니다.</p>
            
            <table>
                <thead>
                    <tr><th>구분</th><th>정상 자세</th><th>거북목 자세</th></tr>
                </thead>
                <tbody>
                    <tr><td>목 하중</td><td>4~5kg</td><td>최대 27kg</td></tr>
                    <tr><td>호흡량</td><td>정상</td><td>최대 30% 감소</td></tr>
                </tbody>
            </table>

            <h2 id="section2">2. 오피스 스트레칭 3단계</h2>
            <h3>Step 1: 턱 당기기 (Chin Tuck)</h3>
            <p>등을 곧게 펴고 시선은 정면을 향합니다. 손가락으로 턱을 뒤로 밀어주며 뒷목 근육이 늘어나는 것을 느낍니다.</p>
            <h3>Step 2: 흉쇄유돌근 이완</h3>
            <p>고개를 대각선 뒤로 젖히고 반대쪽 쇄골 위를 지긋이 눌러줍니다. 목 옆 라인이 당기는 느낌에 집중하세요.</p>

            <h2 id="section3">3. 생활 속 바른 자세 체크리스트</h2>
            <div class="checklist">
                <h4>오늘 당신의 자세는 어떠했나요?</h4>
                <ul>
                    <li>모니터 상단이 눈높이와 일치하는가?</li>
                    <li>팔꿈치 각도가 90~100도를 유지하는가?</li>
                    <li>등받이에 허리를 밀착하여 앉았는가?</li>
                </ul>
            </div>
        `
    },
    {
        id: "blood-sugar-guide",
        category: "Balance Meal",
        tag: "밸런스 밀",
        title: "업무 효율을 높이는 혈당 관리 식단 가이드",
        summary: "오후 시간의 급격한 피로(식곤증)는 혈당 스파이크 때문입니다. 에너지를 유지하는 식사법을 공개합니다.",
        readTime: "5분",
        //image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
        image: "/asset/image/main_2.jpg",
        content: `
            <p>고도의 집중력이 필요한 전문직 여성에게 '오후 3시의 피로'는 치명적입니다. 이는 점심 식사 후 급격히 치솟았다 떨어지는 혈당 때문일 가능성이 큽니다.</p>
            
            <h2 id="section1">혈당 스파이크를 막는 '거꾸로 식사법'</h2>
            <p>식사 순서만 바꿔도 건강한 혈당 곡선을 만들 수 있습니다. 채소 - 단백질 - 탄수화물 순서로 섭취하세요.</p>
            
            <h3>1. 식이섬유 먼저 (채소)</h3>
            <p>채소의 식이섬유는 장벽에 그물망을 형성하여 이후 들어오는 당분의 흡수 속도를 늦춥니다.</p>
            <h3>2. 단백질과 지방</h3>
            <p>생선, 고기, 계란 등 단백질은 포만감을 오래 유지해줍니다.</p>
            <h3>3. 복합 탄수화물</h3>
            <p>흰밥보다는 현미밥, 통밀빵 등을 가장 나중에 소량 섭취하는 것이 좋습니다.</p>
        `
    },
    {
        id: "burnout-management",
        category: "Mind & Body",
        tag: "마인드 셋",
        title: "전문직 여성을 위한 번아웃 예방 및 회복 전략",
        summary: "열정이 소진된 느낌이 든다면 이미 늦었을 수 있습니다. 멘탈 건강을 지키는 과학적 휴식법입니다.",
        readTime: "7분",
        image: "/asset/image/main_3.jpg",
        content: `
            <p>번아웃은 단순한 피로가 아닙니다. 뇌의 전두엽 기능이 저하되어 의사결정 능력이 떨어지는 상태입니다. 특히 높은 책임감을 가진 3040 전문직 여성에게서 흔히 발생합니다.</p>
            
            <h2 id="section1">번아웃의 3가지 전조 증상</h2>
            <ul>
                <li><strong>냉소주의:</strong> 업무나 동료에 대해 무관심해지고 부정적인 태도를 보임.</li>
                <li><strong>성취감 저하:</strong> 노력해도 결과가 만족스럽지 않고 자존감이 하락함.</li>
                <li><strong>신체적 소진:</strong> 충분히 자도 피곤하고 면역력이 떨어짐.</li>
            </ul>

            <h2 id="section2">과학적 휴식법: 리스트러티브 레저</h2>
            <p>단순히 누워있는 것이 휴식이 아닙니다. 뇌의 스위치를 끄는 '의도적인 활동'이 필요합니다.</p>
            
            <table>
                <thead>
                    <tr><th>활동 유형</th><th>효과</th><th>추천 예시</th></tr>
                </thead>
                <tbody>
                    <tr><td>신체형</td><td>코르티솔 수치 저하</td><td>가벼운 산책, 요가</td></tr>
                    <tr><td>몰입형</td><td>DMN 활성 억제</td><td>드로잉, 가드닝, 자수</td></tr>
                </tbody>
            </table>
        `
    },
    {
        id: "supplements-3040",
        category: "Balance Meal",
        tag: "밸런스 밀",
        title: "3040 여성을 위한 필수 영양제 가이드: 영양학적 접근",
        summary: "바쁜 일상에서 놓치기 쉬운 영양소, 어떤 영양제를 언제 먹는 것이 가장 효과적일까요?",
        readTime: "6분",
        image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80",
        content: `
            <p>영양제는 식단을 보완하는 도구입니다. 하지만 호르몬 변화가 시작되는 3040 여성에게는 전략적인 보충이 필요합니다.</p>
            
            <h2 id="section1">전문직 여성을 위한 Top 3 영양소</h2>
            <h3>1. 비타민 D와 K2</h3>
            <p>실내 업무가 많은 직장인에게 비타민 D 결핍은 흔합니다. 뼈 건강과 면역력을 위해 K2와 함께 섭취하세요.</p>
            <h3>2. 오메가-3 (EPA/DHA)</h3>
            <p>뇌 기능 유지와 혈행 개선에 도움을 줍니다. 고순도 rTG 형태를 추천합니다.</p>
            <h3>3. 마그네슘</h3>
            <p>스트레스 관리와 근육 이완, 숙면에 필수적인 미네랄입니다.</p>

            <div class="checklist">
                <h4>영양제 섭취 시 주의사항</h4>
                <ul>
                    <li>공복 섭취가 권장되는 영양제(유산균 등)를 확인했는가?</li>
                    <li>지용성 비타민은 지방이 포함된 식사 후에 먹는가?</li>
                    <li>여러 제품을 먹을 때 중복되는 성분이 없는가?</li>
                </ul>
            </div>
        `
    }
];

function showPage(pageId, params = {}) {
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));
    const section = document.getElementById(pageId);
    if (section) {
        section.classList.add('active');
        window.scrollTo(0, 0);
    }
    if (pageId === 'home') renderHome();
    else if (pageId === 'post' && params.postId) renderPost(params.postId);
    else if (pageId === 'category' && params.category) renderCategory(params.category);
}

function renderHome() {
    const grid = document.getElementById('home-grid');
    grid.innerHTML = posts.map(post => `
        <div class="card" onclick="showPage('post', {postId: '${post.id}'})">
            <img src="${post.image}" class="card-img" alt="${post.title}">
            <div class="card-content">
                <span class="card-tag">${post.tag}</span>
                <h3>${post.title}</h3>
                <p>${post.summary}</p>
            </div>
        </div>
    `).join('');
}

function renderPost(postId) {
    const post = posts.find(p => p.id === postId);
    if (!post) return;
    const container = document.getElementById('post-container');
    container.innerHTML = `
        <article class="post">
            <header class="post-header">
                <span class="card-tag">${post.tag}</span>
                <h1>${post.title}</h1>
                <div class="post-meta"><span>${post.readTime} 읽기</span> • <span>2026.05.05</span></div>
            </header>
            <div class="post-body">${post.content}</div>
        </article>
        <div class="card" style="margin-top: 60px; padding: 40px; text-align: center;">
            <h3>관련 포스트 더보기</h3>
            <div class="grid" style="margin-top: 30px;">
                ${posts.filter(p => p.id !== postId).slice(0, 2).map(p => `
                    <div class="card" onclick="showPage('post', {postId: '${p.id}'})">
                        <div class="card-content" style="padding: 15px;">
                            <span class="card-tag">${p.tag}</span>
                            <h4 style="font-size: 16px;">${p.title}</h4>
                        </div>
                    </div>
                `).join('')}
            </div>
            <button class="generate-btn" style="max-width: 200px; margin-top: 30px;" onclick="showPage('home')">홈으로 이동</button>
        </div>
    `;
}

function renderCategory(categoryName) {
    const filteredPosts = posts.filter(p => p.category === categoryName);
    const grid = document.getElementById('category-grid');
    document.getElementById('category-title').innerText = categoryName;
    grid.innerHTML = filteredPosts.map(post => `
        <div class="card" onclick="showPage('post', {postId: '${post.id}'})">
            <img src="${post.image}" class="card-img" alt="${post.title}">
            <div class="card-content">
                <span class="card-tag">${post.tag}</span>
                <h3>${post.title}</h3>
                <p>${post.summary}</p>
            </div>
        </div>
    `).join('');
}

function toggleTheme() {
    const body = document.body;
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) document.body.setAttribute('data-theme', savedTheme);
    renderHome();
});