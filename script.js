// ==========================================
// KYŌ Drink Oracle -> Configuration & Data
// ==========================================

const DRINKS_DB = [
    // --- SPECIALS ---
    {
        name: "Strawberry Cold Foam Matcha",
        price: "€7.20",
        type: "special",
        image: "images/cold drinks/cold_foam_strawberry.png",
        tags: {
            temp: ["iced"],
            base: ["matcha", "surprise"],
            sweetness: ["high"],
            texture: ["foamy"],
            flavor: ["fruity"],
            mood: ["indulgent"]
        },
        desc: "Sweet, vibrant, and incredibly foamy.",
        customs: ["Oat milk base included"]
    },
    {
        name: "Vanilla Cold Foam Matcha",
        price: "€7.20",
        type: "special",
        image: "images/cold drinks/cold_foam_vanilla.png",
        tags: {
            temp: ["iced"],
            base: ["matcha", "surprise"],
            sweetness: ["high"],
            texture: ["foamy"],
            flavor: ["dessert"],
            mood: ["indulgent"]
        },
        desc: "Rich vanilla bean cloud over earthy matcha.",
        customs: ["Oat milk base included"]
    },
    {
        name: "Jasmine Cold Foam Matcha",
        price: "€7.20",
        type: "special",
        image: "images/cold drinks/cold_foam_jasmine.png",
        tags: {
            temp: ["iced"],
            base: ["matcha", "surprise"],
            sweetness: ["medium"],
            texture: ["foamy"],
            flavor: ["floral"],
            mood: ["relaxed"]
        },
        desc: "A delicate jasmine cloud over iced umami matcha.",
        customs: ["Oat milk base included", "Balanced sweetness"]
    },
    {
        name: "Lavender Cold Foam Matcha",
        price: "€7.20",
        type: "special",
        image: "images/cold drinks/cold_foam_lavender.png",
        tags: {
            temp: ["iced"],
            base: ["matcha", "surprise"],
            sweetness: ["medium"],
            texture: ["foamy"],
            flavor: ["floral"],
            mood: ["relaxed"]
        },
        desc: "Calming pastel lavender foam perfectly balanced.",
        customs: ["Oat milk base included"]
    },
    {
        name: "Rose Cold Foam Matcha",
        price: "€7.20",
        type: "special",
        image: "images/cold drinks/cold_foam_rose.png",
        tags: {
            temp: ["iced"],
            base: ["matcha", "surprise"],
            sweetness: ["low", "medium"],
            texture: ["foamy", "refreshing"],
            flavor: ["floral"],
            mood: ["energizing"]
        },
        desc: "Fresh, aromatic pale pink rose cold foam.",
        customs: ["Oat milk base included"]
    },
    {
        name: "Matcha Soda",
        price: "€7.20",
        type: "special",
        image: "images/cold drinks/matcha_soda.png",
        tags: {
            temp: ["iced"],
            base: ["matcha", "surprise"],
            sweetness: ["low", "medium"],
            texture: ["refreshing"],
            flavor: ["classic", "fruity"], // slightly sour/citrusy vibe
            mood: ["energizing", "relaxed"]
        },
        desc: "Umami, refreshing, slightly sour.",
        customs: ["Perfect as is — super refreshing!"]
    },
    {
        name: "Coconut Cloud Matcha",
        price: "€7.20",
        type: "special",
        image: "images/cold drinks/coconut_cloud_classic.png",
        tags: {
            temp: ["iced"],
            base: ["matcha", "surprise"],
            sweetness: ["medium", "low"],
            texture: ["foamy", "refreshing"],
            flavor: ["floral", "classic"],
            mood: ["relaxed"]
        },
        desc: "Fresh, creamy, and deeply refreshing umami.",
        customs: ["Classic white coconut cloud"]
    },
    {
        name: "Mango Coconut Cloud",
        price: "€7.20",
        type: "special",
        image: "images/cold drinks/coconut_cloud_mango.png",
        tags: {
            temp: ["iced"],
            base: ["matcha", "surprise"],
            sweetness: ["medium"],
            texture: ["foamy"],
            flavor: ["fruity"],
            mood: ["indulgent", "energizing"]
        },
        desc: "Fruity, perfectly balanced tropical bliss.",
        customs: ["Contains real mango purée"]
    },
    {
        name: "Banana Coconut Cloud",
        price: "€7.20",
        type: "special",
        image: "images/cold drinks/coconut_cloud_banana.png",
        tags: {
            temp: ["iced"],
            base: ["matcha", "surprise"],
            sweetness: ["high"],
            texture: ["foamy"],
            flavor: ["fruity"],
            mood: ["indulgent"]
        },
        desc: "Sweet, rich, and decadently fruity.",
        customs: ["A luscious banana cloud"]
    },
    {
        name: "Orgeade Coconut Cloud",
        price: "€7.20",
        type: "special",
        image: "images/cold drinks/coconut_cloud_orgeade.png",
        tags: {
            temp: ["iced"],
            base: ["matcha", "surprise"],
            sweetness: ["medium"],
            texture: ["foamy"],
            flavor: ["dessert"],
            mood: ["relaxed", "indulgent"]
        },
        desc: "Almond-infused, beautifully balanced umami magic.",
        customs: ["Garnished with crushed almonds"]
    },
    {
        name: "Strawberry Matcha Latte",
        price: "€7.20",
        type: "special",
        image: "images/cold drinks/strawberry_matcha.png",
        tags: {
            temp: ["iced", "any"],
            base: ["matcha", "surprise"],
            sweetness: ["high"],
            texture: ["standard"],
            flavor: ["fruity"],
            mood: ["indulgent", "energizing"]
        },
        desc: "Umami, fruity, visually stunning.",
        customs: ["Oat milk base included"]
    },
    {
        name: "Mango Matcha Latte",
        price: "€7.20",
        type: "special",
        image: "images/cold drinks/mango_matcha.png",
        tags: {
            temp: ["iced", "any"],
            base: ["matcha", "surprise"],
            sweetness: ["high"],
            texture: ["standard"],
            flavor: ["fruity"],
            mood: ["indulgent", "energizing"]
        },
        desc: "Umami, tropical & fruity.",
        customs: ["Oat milk base included"]
    },
    {
        name: "Tiramisu Hojicha Latte",
        price: "€7.20",
        type: "special",
        image: "images/cold drinks/tiramisu_hojicha.png",
        tags: {
            temp: ["hot", "iced", "any"],
            base: ["hojicha", "surprise"],
            sweetness: ["high"],
            texture: ["foamy", "standard"],
            flavor: ["dessert"],
            mood: ["indulgent"]
        },
        desc: "Roasty, sweet, godly. An absolute treat.",
        customs: ["Add extra espresso shot +€1 for a kick!"]
    },
    {
        name: "Sticky Marshmallow Choco",
        price: "€7.20",
        type: "special",
        image: "images/cold drinks/marshmallow_hojicha.png",
        tags: {
            temp: ["hot", "iced", "any"],
            base: ["surprise", "hojicha"], 
            sweetness: ["high"],
            texture: ["foamy"],
            flavor: ["dessert"],
            mood: ["indulgent", "relaxed"]
        },
        desc: "Nutty, roasty, sweet comfort in a cup.",
        customs: ["Oat milk base included"]
    },

    // --- DAILY BUZZ / TEAS ---
    {
        name: "Matcha Latte",
        price: "€6.50",
        type: "daily",
        image: "images/cold drinks/matcha_latte.png",
        tags: {
            temp: ["hot", "iced", "any"],
            base: ["matcha"],
            sweetness: ["medium", "low"],
            texture: ["standard"],
            flavor: ["classic"],
            mood: ["energizing", "relaxed"]
        },
        desc: "Smooth, earthy, perfectly balanced umami goodness.",
        customs: ["Add Vanilla SF (+€0.50) for a touch of sweetness", "Add +€0.50 Sproud milk"]
    },
    {
        name: "Hojicha Vanilla Cold Foam",
        price: "€7.20",
        type: "special",
        image: "images/cold drinks/hojicha_vanilla_coldfoam.png",
        tags: {
            temp: ["iced"],
            base: ["hojicha", "surprise"],
            sweetness: ["high"],
            texture: ["foamy"],
            flavor: ["dessert"],
            mood: ["indulgent"]
        },
        desc: "Sweet, nutty hojicha beneath a rich vanilla cloud.",
        customs: ["Vanilla bean cold foam included"]
    },
    {
        name: "Hojicha Lavender Cold Foam",
        price: "€7.20",
        type: "special",
        image: "images/cold drinks/hojicha_latte_lavender_coldfoam.png",
        tags: {
            temp: ["iced"],
            base: ["hojicha", "surprise"],
            sweetness: ["medium"],
            texture: ["foamy"],
            flavor: ["floral", "classic"],
            mood: ["relaxed"]
        },
        desc: "Perfectly balanced roasty hojicha with calming lavender.",
        customs: ["Lavender seeds garnish"]
    },
    {
        name: "Iced Creamy Hojicha",
        price: "€6.50",
        type: "special",
        image: "images/cold drinks/hojicha_iced_creamy.png",
        tags: {
            temp: ["iced"],
            base: ["hojicha", "surprise"],
            sweetness: ["medium", "high"],
            texture: ["standard"],
            flavor: ["classic", "dessert"],
            mood: ["relaxed", "indulgent"]
        },
        desc: "Rich, creamy, swirling roasted umami.",
        customs: ["Extra creamy oat milk blend"]
    },
    {
        name: "Kocha Latte",
        price: "€5.70",
        type: "daily",
        image: "images/cold drinks/kocha_latte.png",
        tags: {
            temp: ["hot", "iced", "any"],
            base: ["matcha", "hojicha", "surprise"], // Black tea
            sweetness: ["medium"],
            texture: ["standard"],
            flavor: ["classic"],
            mood: ["energizing", "relaxed"]
        },
        desc: "Japanese black tea, rich and malty.",
        customs: ["Add Hazelnut SF (+€0.50)"]
    },
    {
        name: "Matcha Tea",
        price: "€6.20",
        type: "daily",
        image: "images/cold drinks/matcha_tea.png",
        tags: {
            temp: ["hot", "iced", "any"],
            base: ["matcha"],
            sweetness: ["low"],
            texture: ["refreshing"],
            flavor: ["classic"],
            mood: ["energizing", "relaxed"]
        },
        desc: "Pure, high-grade ceremonial matcha.",
        customs: ["No milk, pure umami focus"]
    },
    {
        name: "Hot Hojicha Tea",
        price: "€4.20",
        type: "daily",
        image: "images/hot drinks/hojicha_hot_tea.png",
        tags: {
            temp: ["hot", "any"],
            base: ["hojicha"],
            sweetness: ["low"],
            texture: ["refreshing"],
            flavor: ["dessert", "classic"],
            mood: ["relaxed"]
        },
        desc: "Deeply comforting hot roasted green tea with natural nutty caramel notes.",
        customs: ["Brewed in a traditional kyusu."]
    },
    {
        name: "Hot Kocha Tea",
        price: "€4.20",
        type: "daily",
        image: "images/hot drinks/kocha_hot_tea.png",
        tags: {
            temp: ["hot", "any"],
            base: ["surprise"],
            sweetness: ["low"],
            texture: ["refreshing"],
            flavor: ["classic"],
            mood: ["relaxed", "energizing"]
        },
        desc: "Comforting, smooth Japanese black tea.",
        customs: ["Brewed in a traditional kyusu."]
    },

    // --- COFFEE (Representative samples for matching) ---
    {
        name: "Iced Latte",
        price: "€4.50",
        type: "coffee",
        image: "images/cold drinks/iced_latte.png",
        tags: {
            temp: ["iced", "any"],
            base: ["coffee"],
            sweetness: ["medium", "low"],
            texture: ["standard"],
            flavor: ["classic"],
            mood: ["energizing"]
        },
        desc: "Bold espresso meets creamy milk over ice.",
        customs: ["Add extra shot (+€1.00)", "Add Caramel (+€0.50)"]
    },
    {
        name: "Flat White",
        price: "€4.20",
        type: "coffee",
        image: "images/hot drinks/flat_white.png",
        tags: {
            temp: ["hot", "any"],
            base: ["coffee"],
            sweetness: ["low"],
            texture: ["standard"],
            flavor: ["classic"],
            mood: ["energizing"]
        },
        desc: "Strong, smooth, velvety microfoam.",
        customs: ["Try it with oat milk!"]
    },
    {
        name: "Iced Americano",
        price: "€3.70",
        type: "coffee",
        image: "images/cold drinks/iced_americano.png",
        tags: {
            temp: ["iced", "any"],
            base: ["coffee"],
            sweetness: ["low"],
            texture: ["refreshing"],
            flavor: ["classic"],
            mood: ["energizing"]
        },
        desc: "Crisp, bold espresso stretched with cold water.",
        customs: []
    },
    {
        name: "Cortado",
        price: "€3.70",
        type: "coffee",
        image: "images/hot drinks/cortado.png",
        tags: {
            temp: ["hot", "any"],
            base: ["coffee"],
            sweetness: ["low"],
            texture: ["standard"],
            flavor: ["classic"],
            mood: ["energizing"]
        },
        desc: "Equal parts espresso & steamed milk.",
        customs: []
    }
];

const QUESTIONS = [
    {
        id: "temp",
        text: "1. Temperature preference today?",
        weight: 0.20,
        options: [
            { text: "Hot & cozy", tags: { temp: "hot" }, icon: "🔥" },
            { text: "Iced & refreshing", tags: { temp: "iced" }, icon: "🧊" },
            { text: "No preference", tags: { temp: "any" }, icon: "🤷" }
        ]
    },
    {
        id: "base",
        text: "2. Main flavor base?",
        weight: 0.30,
        options: [
            { text: "Earthy umami Matcha", tags: { base: "matcha" }, icon: "🍵" },
            { text: "Nutty/roasty Hojicha", tags: { base: "hojicha" }, icon: "🍂" },
            { text: "Classic coffee kick", tags: { base: "coffee" }, icon: "☕" },
            { text: "Surprise me with a special", tags: { base: "surprise" }, icon: "✨" }
        ]
    },
    {
        id: "sweetness",
        text: "3. Sweetness level?",
        weight: 0.15,
        options: [
            { text: "Sweet dessert vibes (fruity or indulgent)", tags: { sweetness: "high" }, icon: "🍰" },
            { text: "Lightly balanced", tags: { sweetness: "medium" }, icon: "🍯" },
            { text: "Natural / barely sweet (umami focus)", tags: { sweetness: "low" }, icon: "🌿" }
        ]
    },
    {
        id: "texture",
        text: "4. Texture craving?",
        weight: 0.15,
        options: [
            { text: "Foamy/cloudy/creamy", tags: { texture: "foamy" }, icon: "☁️" },
            { text: "Light & refreshing (bubbly or tea-like)", tags: { texture: "refreshing" }, icon: "🫧" },
            { text: "Standard latte", tags: { texture: "standard" }, icon: "🥛" }
        ]
    },
    {
        id: "flavor",
        text: "5. Flavor twist?",
        weight: 0.10,
        options: [
            { text: "Fruity (strawberry/mango)", tags: { flavor: "fruity" }, icon: "🍓" },
            { text: "Floral/coconut", tags: { flavor: "floral" }, icon: "🌸" },
            { text: "Chocolatey/roasty dessert (tiramisu or marshmallow)", tags: { flavor: "dessert" }, icon: "🍫" },
            { text: "Pure classic", tags: { flavor: "classic" }, icon: "🍃" }
        ]
    },
    {
        id: "mood",
        text: "6. Current mood?",
        weight: 0.10,
        options: [
            { text: "Indulgent treat", tags: { mood: "indulgent" }, icon: "🎉" },
            { text: "Energizing", tags: { mood: "energizing" }, icon: "⚡" },
            { text: "Chill & relaxed", tags: { mood: "relaxed" }, icon: "🧘" }
        ]
    }
];

// ==========================================
// Application State
// ==========================================
let currentQuestionIndex = 0;
let userAnswers = {}; // { questionId: tagString }

// DOM Elements
const screens = {
    home: document.getElementById('home-screen'),
    quiz: document.getElementById('quiz-screen'),
    result: document.getElementById('result-screen')
};

const dom = {
    startBtn: document.getElementById('start-btn'),
    nextBtn: document.getElementById('next-btn'),
    backBtn: document.getElementById('back-btn'),
    restartBtn: document.getElementById('restart-btn'),
    shareBtn: document.getElementById('share-btn'),
    
    qNum: document.getElementById('current-q-num'),
    qProgress: document.getElementById('progress-fill'),
    qText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    
    toast: document.getElementById('toast')
};

// ==========================================
// Controllers
// ==========================================

function switchScreen(screenKey) {
    Object.values(screens).forEach(s => {
        s.classList.remove('active');
        s.classList.add('hidden');
    });
    screens[screenKey].classList.remove('hidden');
    screens[screenKey].classList.add('active');
}

function init() {
    dom.startBtn.addEventListener('click', () => {
        currentQuestionIndex = 0;
        userAnswers = {};
        switchScreen('quiz');
        renderQuestion();
    });

    dom.backBtn.addEventListener('click', () => {
        // Simple transition reset
        dom.qText.parentElement.classList.remove('slide-up');
        void dom.qText.parentElement.offsetWidth;
        dom.qText.parentElement.classList.add('slide-up');
        
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            renderQuestion();
        } else {
            switchScreen('home');
        }
    });

    dom.nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < QUESTIONS.length) {
            // Animate transition
            dom.qText.parentElement.classList.remove('slide-up');
            void dom.qText.parentElement.offsetWidth; // reset anim
            dom.qText.parentElement.classList.add('slide-up');
            renderQuestion();
        } else {
            generateResult();
        }
    });

    dom.restartBtn.addEventListener('click', () => {
        switchScreen('home');
    });

    dom.shareBtn.addEventListener('click', shareResult);
}

function renderQuestion() {
    const q = QUESTIONS[currentQuestionIndex];
    
    // Update Progress
    dom.qNum.textContent = currentQuestionIndex + 1;
    const progressPercent = ((currentQuestionIndex) / QUESTIONS.length) * 100;
    dom.qProgress.style.width = `${progressPercent}%`;

    // Render Text & Options
    dom.qText.textContent = q.text;
    dom.optionsContainer.innerHTML = '';
    
    // Disable next button until selection
    dom.nextBtn.disabled = true;

    q.options.forEach((opt, idx) => {
        const card = document.createElement('div');
        card.className = 'option-card';
        card.innerHTML = `<span style="font-size: 2.5rem; margin-right: 20px; vertical-align: middle;">${opt.icon}</span> <span style="vertical-align: middle;">${opt.text}</span>`;
        
        // Restore prev selection if user went back (optional to implement back btn later)
        if (userAnswers[q.id] && Object.values(opt.tags)[0] === userAnswers[q.id]) {
            card.classList.add('selected');
            dom.nextBtn.disabled = false;
        }

        card.addEventListener('click', () => {
            // Remove selection from siblings
            document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            
            // Save answer mapping
            userAnswers[q.id] = Object.values(opt.tags)[0];
            dom.nextBtn.disabled = false;
        });

        dom.optionsContainer.appendChild(card);
    });
}

function generateResult() {
    // Fill final progress bar chunk briefly before switching
    dom.qProgress.style.width = `100%`;
    
    setTimeout(() => {
        calculateScores();
        switchScreen('result');
    }, 400);
}

function calculateScores() {
    // Math logic for scoring
    let scores = DRINKS_DB.map(drink => {
        let score = 0;
        QUESTIONS.forEach(q => {
            const userAnswerVal = userAnswers[q.id]; // e.g., 'hot'
            if (!userAnswerVal) return;

            const drinkTagsForCategory = drink.tags[q.id];
            
            // If the drink possesses this tag in its array, add the weight points
            // 'any' tags pass the check automatically for temperature
            if (drinkTagsForCategory && (drinkTagsForCategory.includes(userAnswerVal) || (q.id === 'temp' && userAnswerVal === 'any'))) {
                score += q.weight;
            }
            // For special surprise, reward drinks of type special heavily
            if (q.id === 'base' && userAnswerVal === 'surprise' && drink.type === 'special') {
                score += q.weight * 1.5; // bonus multiplier
            }
        });
        
        // Slightly prioritize specials just for fun if tied
        if (drink.type === 'special') score += 0.05;
        
        return { drink, score };
    });

    scores.sort((a, b) => b.score - a.score);
    
    const topDrink = scores[0].drink;
    const backupDrinks = [scores[1].drink, scores[2].drink];

    renderResultUI(topDrink, backupDrinks);
}

function renderResultUI(drink, backups) {
    const winnerImg = document.getElementById('winner-image');
    if (drink.image) {
        winnerImg.src = drink.image;
        winnerImg.classList.remove('hidden');
    } else {
        winnerImg.classList.add('hidden');
    }

    document.getElementById('winner-name').textContent = drink.name;
    document.getElementById('winner-price').textContent = drink.price;
    document.getElementById('winner-desc').textContent = drink.desc;

    // Reason generation
    const reasons = [];
    if (userAnswers.temp === 'iced') reasons.push("it's cool & refreshing");
    if (userAnswers.temp === 'hot') reasons.push("it's warm & cozy");
    if (userAnswers.base === 'matcha') reasons.push("it has that umami kick");
    if (userAnswers.sweetness === 'high') reasons.push("it hits the sweet spot perfectly");
    if (userAnswers.texture === 'foamy') reasons.push("it's got that gorgeous cloud texture");
    if (userAnswers.flavor === 'fruity') reasons.push("the fruity twist is top tier");
    
    document.getElementById('winner-reason').textContent = `Because you asked for something ${userAnswers.flavor === 'dessert' ? 'indulgent' : 'special'}, and ${reasons[0] ? reasons.join(' and ') : 'it just fits your vibe perfectly'}!`;

    // Fun messages based on base
    const messages = {
        matcha: "Your umami soul needs this! 🍵✨",
        hojicha: "Roasty, toasty, and perfect for you! 🍂✨",
        coffee: "That classic caffeine hit you ordered! ☕💥",
        surprise: "We pulled out all the stops for you! 🎉✨"
    };
    document.getElementById('result-fun-msg').textContent = messages[userAnswers.base] || "A perfect match! 🏆✨";

    // Tags rendering
    const tagsContainer = document.getElementById('winner-tags');
    tagsContainer.innerHTML = '';
    if(userAnswers.temp !== 'any') {
        const t = document.createElement('span');
        t.className = `tag ${userAnswers.temp}`;
        t.textContent = userAnswers.temp;
        tagsContainer.appendChild(t);
    }
    const bt = document.createElement('span');
    bt.className = `tag`;
    bt.textContent = drink.type;
    tagsContainer.appendChild(bt);

    // Customizations
    const customList = document.getElementById('custom-list');
    customList.innerHTML = '';
    if (drink.customs.length === 0) {
        customList.innerHTML = "<li>Perfect straight up! No notes.</li>";
    } else {
        drink.customs.forEach(c => {
            const li = document.createElement('li');
            li.textContent = c;
            customList.appendChild(li);
        });
    }

    // Backups
    const fallbackList = document.getElementById('backup-list');
    fallbackList.innerHTML = '';
    backups.forEach(b => {
        const div = document.createElement('div');
        div.className = 'backup-item';
        div.innerHTML = `<span class="backup-name">${b.name}</span><span class="backup-price">${b.price}</span>`;
        fallbackList.appendChild(div);
    });
}

function shareResult() {
    const drinkName = document.getElementById('winner-name').textContent;
    const text = `I just got matched with the ${drinkName} at KYŌ-KLUB! 🍵✨ Find your match here: [insert link]`;
    
    navigator.clipboard.writeText(text).then(() => {
        dom.toast.classList.add('show');
        setTimeout(() => {
            dom.toast.classList.remove('show');
        }, 3000);
    });
}

// Start
init();
