const posts = [
    {
        id: "posture-correction",
        category: "Smart Workout",
        tag: "스마트 워크아웃",
        title: "오피스 레이디를 위한 5분 거북목 교정 루틴",
        summary: "컴퓨터 앞 업무가 많은 전문직 여성들을 위한 즉각적인 효과의 스트레칭 가이드입니다.",
        readTime: "4분",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
        content: `
            <p>장시간 모니터를 응시하는 전문직 여성들에게 '거북목(Forward Head Posture)'은 피할 수 없는 숙명처럼 여겨지기도 합니다. 하지만 이는 단순히 외관상의 문제를 넘어 만성 두통과 어깨 통증의 주원인이 됩니다. 오늘 소개할 5분 루틴은 사무실에서도 의자에 앉아 충분히 실천할 수 있습니다.</p>
            
            <div class="toc">
                <h4>목차</h4>
                <ul>
                    <li><a href="#section1">1. 거북목이 건강에 미치는 영향</a></li>
                    <li><a href="#section2">2. 오피스 스트레칭 3단계</a></li>
                    <li><a href="#section3">3. 생활 속 바른 자세 체크리스트</a></li>
                </ul>
            </div>

            <h2 id="section1">1. 거북목이 건강에 미치는 영향</h2>
            <p>머리의 무게는 평균 5kg 정도지만, 고개가 앞으로 15도 숙여질 때마다 목에 가해지는 하중은 12kg씩 증가합니다. 3040 여성의 경우 근육량이 감소하는 시기와 맞물려 경추 디스크의 위험이 더 높아질 수 있습니다.</p>
            
            <table>
                <thead>
                    <tr>
                        <th>구분</th>
                        <th>정상 자세</th>
                        <th>거북목 자세</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>목 하중</td>
                        <td>4~5kg</td>
                        <td>최대 27kg</td>
                    </tr>
                    <tr>
                        <td>호흡량</td>
                        <td>정상</td>
                        <td>최대 30% 감소</td>
                    </tr>
                </tbody>
            </table>

            <h2 id="section2">2. 오피스 스트레칭 3단계</h2>
            <h3>Step 1: 턱 당기기 (Chin Tuck)</h3>
            <p>등을 곧게 펴고 시선은 정면을 향합니다. 손가락으로 턱을 뒤로 밀어주며 뒷목 근육이 늘어나는 것을 느낍니다. 10초씩 5회 반복합니다.</p>
            
            <h3>Step 2: 흉쇄유돌근 이완</h3>
            <p>고개를 대각선 뒤로 젖히고 반대쪽 쇄골 위를 지긋이 눌러줍니다. 목 옆 라인이 당기는 느낌에 집중하세요.</p>

            <h2 id="section3">3. 생활 속 바른 자세 체크리스트</h2>
            <div class="checklist">
                <h4>오늘 당신의 자세는 어떠했나요?</h4>
                <ul>
                    <li>모니터 상단이 눈높이와 일치하는가?</li>
                    <li>팔꿈치 각도가 90~100도를 유지하는가?</li>
                    <li>등받이에 허리를 밀착하여 앉았는가?</li>
                    <li>1시간마다 자리에서 일어나 몸을 움직이는가?</li>
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
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
        content: `
            <p>고도의 집중력이 필요한 전문직 여성에게 '오후 3시의 피로'는 치명적입니다. 이는 점심 식사 후 급격히 치솟았다 떨어지는 혈당 때문일 가능성이 큽니다. 과학적인 식사 순서만 바꿔도 업무 집중력을 종일 유지할 수 있습니다.</p>
            
            <h2 id="section1">혈당 스파이크를 막는 '거꾸로 식사법'</h2>
            <p>식사 순서는 건강한 혈당 곡선을 만드는 가장 쉬운 방법입니다. 채소 - 단백질 - 탄수화물 순서로 섭취하세요.</p>
            
            <h3>1. 식이섬유 먼저 (채소)</h3>
            <p>채소의 식이섬유는 장벽에 그물망을 형성하여 이후 들어오는 당분의 흡수 속도를 늦춥니다.</p>

            <h3>2. 단백질과 지방</h3>
            <p>생선, 고기, 계란 등 단백질은 포만감을 오래 유지해주고 소화 호르몬을 자극합니다.</p>

            <h3>3. 복합 탄수화물</h3>
            <p>흰밥보다는 현미밥, 통밀빵 등을 가장 나중에 소량 섭취하는 것이 좋습니다.</p>
        `
    },
    {
        id: "sleep-optimization",
        category: "Mind & Body",
        tag: "마인드 셋",
        title: "성과를 만드는 수면 최적화 전략: 3040 웰니스",
        summary: "잠이 부족한 것이 아니라 '깊은 잠'이 부족한 것입니다. 뇌 피로를 푸는 수면 위생 가이드입니다.",
        readTime: "6분",
        image: "https://images.unsplash.com/photo-1541480601022-23057d163484?auto=format&fit=crop&w=800&q=80",
        content: `
            <p>성공하는 여성들의 공통점 중 하나는 수면을 '비용'이 아닌 '투자'로 본다는 것입니다. 뇌의 노폐물을 씻어내는 글림파틱 시스템(Glymphatic System)은 깊은 수면 단계에서만 활성화됩니다.</p>
            
            <h2>수면의 질을 높이는 3가지 핵심 요소</h2>
            <p>단순히 오래 자는 것보다 수면의 '밀도'를 높이는 것이 중요합니다.</p>
            
            <h3>1. 일정한 생체 리듬 (Circadian Rhythm)</h3>
            <p>주말에도 평일과 비슷한 시간에 일어나 햇빛을 보는 것이 중요합니다. 이는 멜라토닌 분비 사이클을 조절합니다.</p>

            <h3>2. 심부 체온 조절</h3>
            <p>취침 1~2시간 전 따뜻한 물로 목욕을 하면 체온이 상승했다가 급격히 떨어지며 자연스럽게 입면을 유도합니다.</p>
        `
    }
];

function showPage(pageId, params = {}) {
    // Hide all sections
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));
    
    // Show requested section
    const section = document.getElementById(pageId);
    if (section) {
        section.classList.add('active');
        window.scrollTo(0, 0);
    }

    // Special handling for specific pages
    if (pageId === 'home') {
        renderHome();
    } else if (pageId === 'post' && params.postId) {
        renderPost(params.postId);
    } else if (pageId === 'category' && params.category) {
        renderCategory(params.category);
    }
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
                <div class="post-meta">
                    <span>${post.readTime} 읽기</span> • <span>작성일: 2026.05.05</span>
                </div>
            </header>
            <div class="post-body">
                ${post.content}
            </div>
        </article>
        <div class="card" style="margin-top: 60px; padding: 40px; text-align: center;" onclick="showPage('home')">
            <h3>다른 유용한 정보도 확인해보세요</h3>
            <p>홈으로 돌아가 최신 건강 루틴 가이드를 살펴보세요.</p>
            <button class="generate-btn" style="max-width: 200px; margin-top: 20px;">메인으로 가기</button>
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