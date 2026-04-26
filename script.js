// ==========================================
// KYŌ Drink Oracle -> Configuration & Data
// ==========================================

const DRINKS_DB = [
    // --- SPECIALS ---
    {
        name: "Strawberry Cold Foam Matcha",
        price: "€7.20",
        type: "special",
        image: "images/cold_drinks/earthy/sweet/foamy/fruity/indulgent/iced_cold_foam_strawberry.png",
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
        image: "images/cold_drinks/earthy/sweet/foamy/dessert/indulgent/iced_cold_foam_vanilla.png",
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
        image: "images/cold_drinks/earthy/balanced/foamy/floral/chill/iced_foam_jasmine.png",
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
        image: "images/cold_drinks/earthy/balanced/foamy/floral/chill/iced_hojicha_latte_lavender_coldfoam.png",
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
        image: "images/cold_drinks/earthy/natural/foamy/floral/energizing/iced_foam_rose.png",
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
        image: "images/cold_drinks/earthy/natural/refreshing/classic/energizing/iced_matcha_soda.png",
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
        image: "images/cold_drinks/earthy/balanced/foamy/floral/chill/iced_coconut_cloud_matcha.png",
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
        image: "images/cold_drinks/earthy/balanced/foamy/fruity/indulgent/Iced_hojicha_vanilla_coldfoam.png",
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
        image: "images/cold_drinks/earthy/sweet/foamy/fruity/indulgent/iced_banana_matcha.png",
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
        image: "images/cold_drinks/earthy/balanced/foamy/dessert/chill/iced_orgeade_matcha.png",
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
        image: "images/cold_drinks/earthy/sweet/standard/fruity/indulgent/iced_strawberry_matcha.png",
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
        image: "images/cold_drinks/earthy/sweet/standard/fruity/indulgent/iced_mango_matcha.png",
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
        image: "images/cold_drinks/nutty_roasty/sweet/foamy/dessert/indulgent/iced_hojicha_iced_creamy.png",
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

    // --- DAILY BUZZ / TEAS ---
    {
        name: "Matcha Latte",
        price: "€6.50",
        type: "daily",
        image: "images/cold_drinks/earthy/balanced/standard/classic/energizing/iced_matcha_latte.png",
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
        image: "images/cold_drinks/nutty_roasty/sweet/foamy/dessert/indulgent/iced_foam_lavender.png",
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
        image: "images/cold_drinks/nutty_roasty/balanced/foamy/floral/chill/iced_kocha_latte.png",
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
        image: "images/cold_drinks/nutty_roasty/sweet/foamy/dessert/indulgent/iced_hojicha_iced_creamy.png",
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
        image: "images/cold_drinks/earthy/balanced/standard/classic/energizing/matcha_tea.png",
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
        image: "images/cold_drinks/earthy/natural/refreshing/classic/energizing/sencha_tea.png",
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
        image: "images/hot_drinks/nutty_roasty/natural/refreshing/dessert/chill/hojicha_hot_tea.png",
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
        image: "images/hot_drinks/surprise/natural/refreshing/classic/chill/kocha_hot_tea.png",
        tags: {
            temp: ["hot", "any"],
            base: ["hojicha", "matcha", "coffee"],
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
        image: "images/cold_drinks/coffee/balanced/standard/classic/energizing/iced_latte.png",
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
        image: "images/hot_drinks/coffee/natural/standard/classic/energizing/flat_white.png",
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
        image: "images/cold_drinks/coffee/natural/refreshing/classic/energizing/iced_americano.png",
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
        name: "Americano Matcha Foam",
        price: "€5.50",
        type: "special",
        image: "images/cold_drinks/coffee/balanced/foamy/classic/energizing/iced_americano_matcha_foam.png",
        tags: {
            temp: ["iced"],
            base: ["coffee", "matcha"],
            sweetness: ["medium", "low"],
            texture: ["foamy", "standard"],
            flavor: ["classic", "dessert"],
            mood: ["energizing", "indulgent"]
        },
        desc: "Crisp espresso balanced perfectly with a rich umami matcha cloud.",
        customs: ["Best of both worlds!"]
    },
    {
        name: "Cortado",
        price: "€3.70",
        type: "coffee",
        image: "images/hot_drinks/coffee/natural/standard/classic/energizing/cortado.png",
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
    },
    {
        name: "Cappuccino",
        price: "€4.50",
        type: "coffee",
        image: "images/hot_drinks/coffee/balanced/foamy/classic/energizing/hot_cappuccino.png",
        tags: {
            temp: ["hot", "any"],
            base: ["coffee"],
            sweetness: ["low", "medium"],
            texture: ["foamy"],
            flavor: ["classic"],
            mood: ["energizing", "relaxed"]
        },
        desc: "Rich espresso topped with a deep layer of velvety foam.",
        customs: ["Classic ratio"]
    },
    {
        name: "Espresso",
        price: "€3.00",
        type: "coffee",
        image: "images/hot_drinks/coffee/natural/standard/classic/energizing/hot_espresso.png",
        tags: {
            temp: ["hot"],
            base: ["coffee"],
            sweetness: ["low"],
            texture: ["standard"],
            flavor: ["classic"],
            mood: ["energizing"]
        },
        desc: "A pure, intense shot of perfectly extracted coffee.",
        customs: ["Double shot"]
    },
    {
        name: "Hot Latte",
        price: "€4.50",
        type: "coffee",
        image: "images/hot_drinks/coffee/balanced/standard/classic/relaxed/hot_latte.png",
        tags: {
            temp: ["hot", "any"],
            base: ["coffee"],
            sweetness: ["low", "medium"],
            texture: ["standard", "foamy"],
            flavor: ["classic"],
            mood: ["relaxed", "energizing"]
        },
        desc: "Smooth espresso blended carefully with steamed milk.",
        customs: ["Oat milk optional"]
    },
    {
        name: "Hot Americano",
        price: "€3.80",
        type: "coffee",
        image: "images/hot_drinks/coffee/natural/refreshing/classic/energizing/hot_americano.png",
        tags: {
            temp: ["hot", "any"],
            base: ["coffee"],
            sweetness: ["low"],
            texture: ["refreshing"],
            flavor: ["classic"],
            mood: ["energizing"]
        },
        desc: "Bold espresso drawn out with hot water for a crisp finish.",
        customs: ["Room for milk optional"]
    },
    {
        name: "Hot Chocolate",
        price: "€5.00",
        type: "special",
        image: "images/hot_drinks/coffee/sweet/standard/dessert/indulgent/hot_chocolate.png",
        tags: {
            temp: ["hot", "any"],
            base: ["coffee", "matcha", "hojicha"],
            sweetness: ["high", "medium"],
            texture: ["standard", "foamy"],
            flavor: ["dessert"],
            mood: ["indulgent", "relaxed"]
        },
        desc: "Decadently rich, melted artisan chocolate with steamed milk.",
        customs: ["Perfect dessert drink"]
    },
    {
        name: "Hot Hojicha Latte",
        price: "€5.20",
        type: "tea",
        image: "images/hot_drinks/nutty_roasty/balanced/standard/classic/relaxed/hot_hojicha_latte.png",
        tags: {
            temp: ["hot", "any"],
            base: ["hojicha"],
            sweetness: ["low", "medium"],
            texture: ["standard", "foamy"],
            flavor: ["classic", "dessert"],
            mood: ["relaxed"]
        },
        desc: "Warm roasted green tea gracefully folded into steamed milk.",
        customs: ["Earthy and comforting"]
    }
];

const QUESTIONS = [
    {
        id: "temp",
        text: "Temperature preference today?",
        weight: 0.20,
        options: [
            { text: "Hot & cozy", tags: { temp: "hot" }, icon: "🔥", image: "images/hot_drinks/nutty_roasty/natural/refreshing/dessert/chill/hojicha_hot_tea.png" },
            { text: "Iced & refreshing", tags: { temp: "iced" }, icon: "🧊", image: "images/cold_drinks/earthy/sweet/foamy/fruity/indulgent/iced_cold_foam_strawberry.png" }
        ]
    },
    {
        id: "base",
        text: "Main flavor base?",
        weight: 0.30,
        options: [
            { text: "Earthy umami Matcha", tags: { base: "matcha" }, icon: "🍵", image: "images/cold_drinks/earthy/balanced/foamy/floral/chill/iced_foam_jasmine.png" },
            { text: "Nutty roasty Hojicha", tags: { base: "hojicha" }, icon: "🍂", image: "images/cold_drinks/nutty_roasty/sweet/foamy/dessert/indulgent/iced_hojicha_iced_creamy.png" },
            { text: "Classic Coffee", tags: { base: "coffee" }, icon: "☕", image: "images/cold_drinks/coffee/balanced/foamy/classic/energizing/iced_americano_matcha_foam.png" }
        ]
    },
    {
        id: "sweetness",
        text: "Sweetness level?",
        weight: 0.15,
        options: [
            { text: "Sweet dessert vibes (fruity or indulgent)", tags: { sweetness: "high" }, icon: "🍰", image: "images/cold_drinks/earthy/sweet/foamy/dessert/indulgent/iced_cold_foam_vanilla.png" },
            { text: "Lightly balanced", tags: { sweetness: "medium" }, icon: "🍯", image: "images/cold_drinks/earthy/balanced/foamy/floral/chill/iced_coconut_cloud_matcha.png" },
            { text: "Natural / barely sweet (umami focus)", tags: { sweetness: "low" }, icon: "🌿", image: "images/cold_drinks/nutty_roasty/sweet/foamy/dessert/indulgent/iced_hojicha_iced_creamy.png" }
        ]
    },
    {
        id: "texture",
        text: "Texture craving?",
        weight: 0.15,
        options: [
            { text: "Foamy/cloudy/creamy", tags: { texture: "foamy" }, icon: "☁️", image: "images/cold_drinks/earthy/sweet/foamy/fruity/indulgent/iced_banana_matcha.png" },
            { text: "Light & refreshing (bubbly or tea-like)", tags: { texture: "refreshing" }, icon: "🫧", image: "images/cold_drinks/earthy/natural/foamy/floral/energizing/iced_foam_rose.png" },
            { text: "Standard latte", tags: { texture: "standard" }, icon: "🥛", image: "images/cold_drinks/nutty_roasty/balanced/foamy/floral/chill/iced_kocha_latte.png" }
        ]
    },
    {
        id: "flavor",
        text: "Flavor twist?",
        weight: 0.10,
        options: [
            { text: "Fruity (strawberry/mango)", tags: { flavor: "fruity" }, icon: "🍓", image: "images/cold_drinks/earthy/sweet/standard/fruity/indulgent/iced_mango_matcha.png" },
            { text: "Floral/coconut", tags: { flavor: "floral" }, icon: "🌸", image: "images/cold_drinks/earthy/balanced/foamy/floral/chill/iced_hojicha_latte_lavender_coldfoam.png" },
            { text: "Chocolatey/roasty dessert", tags: { flavor: "dessert" }, icon: "🍫", image: "images/cold_drinks/nutty_roasty/sweet/foamy/dessert/indulgent/iced_foam_lavender.png" },
            { text: "Pure classic", tags: { flavor: "classic" }, icon: "🍃", image: "images/hot_drinks/coffee/natural/standard/classic/energizing/flat_white.png" }
        ]
    },
    {
        id: "mood",
        text: "Current mood?",
        weight: 0.10,
        options: [
            { text: "Indulgent treat", tags: { mood: "indulgent" }, icon: "🎉", image: "images/cold_drinks/nutty_roasty/sweet/foamy/dessert/indulgent/iced_hojicha_iced_creamy.png" },
            { text: "Energizing", tags: { mood: "energizing" }, icon: "⚡", image: "images/hot_drinks/coffee/natural/standard/classic/energizing/cortado.png" },
            { text: "Chill & relaxed", tags: { mood: "relaxed" }, icon: "🧘", image: "images/hot_drinks/surprise/natural/refreshing/classic/chill/kocha_hot_tea.png" }
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
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            renderQuestion();
        } else {
            switchScreen('home');
        }
    });

    dom.restartBtn.addEventListener('click', () => {
        switchScreen('home');
    });
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
    
    q.options.forEach((opt, idx) => {
        const card = document.createElement('div');
        card.className = 'option-card';
        card.innerHTML = `
            <img src="${opt.image}" class="option-bg" alt="Option Image">
            <div class="option-overlay"></div>
            <div class="option-content">
                <span class="option-icon">${opt.icon}</span>
                <span class="option-text">${opt.text}</span>
            </div>
        `;
        
        if (userAnswers[q.id] && Object.values(opt.tags)[0] === userAnswers[q.id]) {
            card.classList.add('selected');
        }

        card.addEventListener('click', () => {
            if (card.classList.contains('selected')) return;

            document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            
            userAnswers[q.id] = Object.values(opt.tags)[0];
            
            setTimeout(() => {
                currentQuestionIndex++;
                if (currentQuestionIndex < QUESTIONS.length) {
                    renderQuestion();
                } else {
                    generateResult();
                }
            }, 300);
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
            const userAnswerVal = userAnswers[q.id];
            if (!userAnswerVal) return;

            const drinkTagsForCategory = drink.tags[q.id];
            
            // If the drink possesses this tag in its array, add the weight points
            // 'any' tags pass the check automatically for temperature
            if (drinkTagsForCategory && (drinkTagsForCategory.includes(userAnswerVal) || (q.id === 'temp' && userAnswerVal === 'any'))) {
                score += q.weight;
            }
        });
        
        return { drink, score };
    });

    // Sort by strict mathematical tag scoring
    scores.sort((a, b) => b.score - a.score);
    
    // --- Oracle Random Tie-Breaker ---
    // If multiple drinks perfectly match your vibe input identically, the Oracle lets destiny decide!
    const topScore = scores[0].score;
    const tiedTopDrinks = scores.filter(s => s.score === topScore);
    const topDrink = tiedTopDrinks[Math.floor(Math.random() * tiedTopDrinks.length)].drink;
    
    // Ensure the backups are populated by the next best variants that aren't the winner
    const allRankedDrinks = scores.map(s => s.drink).filter(d => d.name !== topDrink.name);
    const backupDrinks = [allRankedDrinks[0], allRankedDrinks[1]];

    // --- Analytics Tracking ---
    if (window.posthog) {
        // Creates a uniquely named event like "Recommended: Matcha Latte"
        // This means every drink will appear as its own separate event in the dropdown!
        posthog.capture(`Recommended: ${topDrink.name}`, {
            drink_price: topDrink.price,
            user_mood: userAnswers.mood,
            user_flavor: userAnswers.flavor,
            user_sweetness: userAnswers.sweetness
        });
        
        // Also fire a general completion event specifically designed for pie charts
        posthog.capture('Quiz Completed', {
            drink_name: topDrink.name
        });
    }

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

    // Reason generation
    const reasons = [];
    if (userAnswers.temp === 'iced') reasons.push("it's cool & refreshing");
    if (userAnswers.temp === 'hot') reasons.push("it's warm & cozy");
    if (userAnswers.base === 'matcha') reasons.push("it has that umami kick");
    if (userAnswers.sweetness === 'high') reasons.push("it hits the sweet spot perfectly");
    if (userAnswers.texture === 'foamy') reasons.push("it's got that gorgeous cloud texture");
    if (userAnswers.flavor === 'fruity') reasons.push("the fruity twist is top tier");
    
    document.getElementById('winner-reason').textContent = `Because you asked for something ${userAnswers.flavor === 'dessert' ? 'indulgent' : 'special'}, and ${reasons[0] ? reasons.join(' and ') : 'it just fits your vibe perfectly'}!`;
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
