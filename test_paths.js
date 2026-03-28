const fs = require('fs');
const source = fs.readFileSync('./script.js', 'utf8');

const MOCK_DOM = {
    getElementById: () => ({ classList: { add: ()=>{}, remove: ()=>{} }, style: {} }),
    createElement: () => ({ classList: { add: ()=>{}, remove: ()=>{} }, style: {}, innerHTML: '', addEventListener: ()=>{} }),
    querySelector: () => ({ classList: { add: ()=>{}, remove: ()=>{} }, style: {} })
};
global.document = MOCK_DOM;
global.window = { addEventListener: () => {} };

let safeSource = source.replace(/const DRINKS_DB =/g, 'global.DRINKS_DB =')
                       .replace(/const QUESTIONS =/g, 'global.QUESTIONS =');
try { eval(safeSource); } catch(e) {}

const DRINKS_DB = global.DRINKS_DB;
const QUESTIONS = global.QUESTIONS;

function generateCombinations(optionsArr) {
    if (optionsArr.length === 1) return optionsArr[0].map(opt => [opt]);
    const restCombinations = generateCombinations(optionsArr.slice(1));
    const result = [];
    for (const opt of optionsArr[0]) {
        for (const rc of restCombinations) {
            result.push([opt, ...rc]);
        }
    }
    return result;
}

const allQuestionTags = QUESTIONS.map(q => 
    q.options.map(opt => ({ qId: q.id, tag: Object.values(opt.tags)[0], weight: q.weight }))
);
const allPaths = generateCombinations(allQuestionTags);

// We will simulate each path 100 times to test random distributions
const winCounts = {};
DRINKS_DB.forEach(d => winCounts[d.name] = 0);

for (const path of allPaths) {
    const userAnswers = {};
    path.forEach(p => userAnswers[p.qId] = p.tag);

    let scores = DRINKS_DB.map(drink => {
        let score = 0;
        QUESTIONS.forEach(q => {
            const userAnswerVal = userAnswers[q.id];
            if (!userAnswerVal) return;
            const drinkTagsForCategory = drink.tags[q.id];
            if (drinkTagsForCategory && (drinkTagsForCategory.includes(userAnswerVal) || (q.id === 'temp' && userAnswerVal === 'any'))) {
                score += q.weight;
            }
        });
        if (drink.type === 'special') score += 0.05;
        return { name: drink.name, score };
    });

    scores.sort((a, b) => b.score - a.score);
    const topScore = scores[0].score;
    // Find all drinks that tied for the top score
    const topTiedDrinks = scores.filter(s => s.score === topScore);

    // Simulate choosing randomly amongst ties
    for(let i=0; i<100; i++) {
        const randomWinner = topTiedDrinks[Math.floor(Math.random() * topTiedDrinks.length)];
        winCounts[randomWinner.name]++;
    }
}

let unreachable = [];
for (const [name, count] of Object.entries(winCounts)) {
    if (count === 0) unreachable.push(name);
}

console.log(`Unreachable drinks with Random Tie-Breaking: ${unreachable.length}`);
if (unreachable.length > 0) console.log(unreachable);
