// ==========================================
// KYŌ KLUB — Admin Image Studio Engine
// ==========================================

const ImageStudio = (() => {
    // --- State ---
    const geminiApiKey = 'AIzaSyBrvWtI-4GI-J6lu5FT0I4hvBMpTPBw4Ok';
    let githubToken = localStorage.getItem('kyo_github_token') || '';
    let generatedImageUrl = null;
    let generatedImageB64 = null;
    let selectedDrinkIndex = -1;
    let imageHistory = JSON.parse(localStorage.getItem('kyo_image_history') || '[]');

    // --- Drinks DB (shared with main app) ---
    const DRINKS = [
        { name:"Strawberry Cold Foam Matcha", price:"€7.20", image:"../images/cold_drinks/earthy/sweet/foamy/fruity/indulgent/iced_cold_foam_strawberry.png", desc:"Sweet, vibrant, and incredibly foamy." },
        { name:"Vanilla Cold Foam Matcha", price:"€7.20", image:"../images/cold_drinks/earthy/sweet/foamy/dessert/indulgent/iced_cold_foam_vanilla.png", desc:"Rich vanilla bean cloud over earthy matcha." },
        { name:"Jasmine Cold Foam Matcha", price:"€7.20", image:"../images/cold_drinks/earthy/balanced/foamy/floral/chill/iced_foam_jasmine.png", desc:"A delicate jasmine cloud over iced umami matcha." },
        { name:"Lavender Cold Foam Matcha", price:"€7.20", image:"../images/cold_drinks/earthy/balanced/foamy/floral/chill/iced_hojicha_latte_lavender_coldfoam.png", desc:"Calming pastel lavender foam perfectly balanced." },
        { name:"Rose Cold Foam Matcha", price:"€7.20", image:"../images/cold_drinks/earthy/natural/foamy/floral/energizing/iced_foam_rose.png", desc:"Fresh, aromatic pale pink rose cold foam." },
        { name:"Matcha Soda", price:"€7.20", image:"../images/cold_drinks/earthy/natural/refreshing/classic/energizing/iced_matcha_soda.png", desc:"Umami, refreshing, slightly sour." },
        { name:"Coconut Cloud Matcha", price:"€7.20", image:"../images/cold_drinks/earthy/balanced/foamy/floral/chill/iced_coconut_cloud_matcha.png", desc:"Fresh, creamy, and deeply refreshing umami." },
        { name:"Banana Matcha Latte", price:"€7.20", image:"../images/cold_drinks/earthy/sweet/foamy/fruity/indulgent/iced_banana_matcha.png", desc:"Sweet banana swirled into earthy matcha perfection." },
        { name:"Orgeade Matcha Latte", price:"€7.20", image:"../images/cold_drinks/earthy/balanced/foamy/dessert/chill/iced_orgeade_matcha.png", desc:"Almond-infused orgeade meets earthy umami matcha." },
        { name:"Strawberry Matcha Latte", price:"€7.20", image:"../images/cold_drinks/earthy/sweet/standard/fruity/indulgent/iced_strawberry_matcha.png", desc:"Umami, fruity, visually stunning." },
        { name:"Mango Matcha Latte", price:"€7.20", image:"../images/cold_drinks/earthy/sweet/standard/fruity/indulgent/iced_mango_matcha.png", desc:"Umami, tropical & fruity." },
        { name:"Hojicha Vanilla Cold Foam", price:"€7.20", image:"../images/cold_drinks/nutty_roasty/sweet/foamy/dessert/indulgent/iced_hojicha_vanilla_coldfoam.png", desc:"Sweet, nutty hojicha beneath a rich vanilla cloud." },
        { name:"Hojicha Lavender Cold Foam", price:"€7.20", image:"../images/cold_drinks/nutty_roasty/balanced/foamy/floral/chill/iced_hojicha_lavender_coldfoam.png", desc:"Perfectly balanced roasty hojicha with calming lavender." },
        { name:"Iced Creamy Hojicha", price:"€6.50", image:"../images/cold_drinks/nutty_roasty/sweet/foamy/dessert/indulgent/iced_hojicha_iced_creamy.png", desc:"Rich, creamy, swirling roasted umami." },
        { name:"Americano Matcha Foam", price:"€5.50", image:"../images/cold_drinks/coffee/balanced/foamy/classic/energizing/iced_americano_matcha_foam.png", desc:"Crisp espresso balanced with a rich umami matcha cloud." },
        { name:"Hot Chocolate", price:"€5.00", image:"../images/hot_drinks/coffee/sweet/standard/dessert/indulgent/hot_chocolate.png", desc:"Decadently rich, melted artisan chocolate with steamed milk." },
        { name:"Matcha Latte", price:"€6.50", image:"../images/cold_drinks/earthy/balanced/standard/classic/energizing/iced_matcha_latte.png", desc:"Smooth, earthy, perfectly balanced umami goodness." },
        { name:"Kocha Latte", price:"€5.70", image:"../images/hot_drinks/surprise/natural/refreshing/classic/chill/hot_kocha_latte.png", desc:"Japanese black tea, rich and malty." },
        { name:"Matcha Tea", price:"€6.20", image:"../images/cold_drinks/earthy/natural/refreshing/classic/energizing/sencha_tea.png", desc:"Pure, high-grade ceremonial matcha." },
        { name:"Hot Hojicha Tea", price:"€4.20", image:"../images/hot_drinks/nutty_roasty/natural/refreshing/dessert/chill/hojicha_hot_tea.png", desc:"Deeply comforting roasted green tea." },
        { name:"Hot Kocha Tea", price:"€4.20", image:"../images/hot_drinks/surprise/natural/refreshing/classic/chill/kocha_hot_tea.png", desc:"Comforting, smooth Japanese black tea." },
        { name:"Iced Latte", price:"€4.50", image:"../images/cold_drinks/coffee/balanced/standard/classic/energizing/iced_latte.png", desc:"Bold espresso meets creamy milk over ice." },
        { name:"Flat White", price:"€4.20", image:"../images/hot_drinks/coffee/natural/standard/classic/energizing/flat_white.png", desc:"Strong, smooth, velvety microfoam." },
        { name:"Iced Americano", price:"€3.70", image:"../images/cold_drinks/coffee/natural/refreshing/classic/energizing/iced_americano.png", desc:"Crisp, bold espresso stretched with cold water." },
        { name:"Cortado", price:"€3.70", image:"../images/hot_drinks/coffee/natural/standard/classic/energizing/cortado.png", desc:"Equal parts espresso & steamed milk." },
        { name:"Cappuccino", price:"€4.50", image:"../images/hot_drinks/coffee/balanced/foamy/classic/energizing/hot_cappuccino.png", desc:"Rich espresso topped with velvety foam." },
        { name:"Espresso", price:"€3.00", image:"../images/hot_drinks/coffee/natural/standard/classic/energizing/hot_espresso.png", desc:"A pure, intense shot of perfectly extracted coffee." },
        { name:"Hot Latte", price:"€4.50", image:"../images/hot_drinks/coffee/balanced/standard/classic/relaxed/hot_latte.png", desc:"Smooth espresso blended with steamed milk." },
        { name:"Hot Americano", price:"€3.80", image:"../images/hot_drinks/coffee/natural/refreshing/classic/energizing/hot_americano.png", desc:"Bold espresso drawn out with hot water." },
        { name:"Hot Hojicha Latte", price:"€5.20", image:"../images/hot_drinks/nutty_roasty/balanced/standard/classic/relaxed/hot_hojicha_latte.png", desc:"Warm roasted green tea folded into steamed milk." }
    ];

    // --- Style Presets ---
    const PRESETS = {
        product: "Professional product photography, studio lighting, clean white background, high-end café menu photo, 4K quality, no text or labels",
        artistic: "Artistic food photography, dramatic natural lighting, moody atmosphere, shallow depth of field, editorial style",
        minimal: "Minimalist Japanese aesthetic, clean composition, zen-like simplicity, muted natural tones, wabi-sabi",
        moody: "Dark moody atmosphere, rich shadows, golden hour lighting, vintage film grain, intimate café setting"
    };

    let activePreset = 'product';

    // --- Reference Images ---
    function getRef(key) {
        return {
            image: localStorage.getItem(`kyo_ref_${key}_img`) || null,
            description: localStorage.getItem(`kyo_ref_${key}_desc`) || ''
        };
    }

    function setRef(key, image, description) {
        try {
            if (image) localStorage.setItem(`kyo_ref_${key}_img`, image);
            if (description !== undefined) localStorage.setItem(`kyo_ref_${key}_desc`, description);
        } catch (e) {
            console.warn('localStorage quota exceeded, clearing old data...');
            // Clear history to make room for references
            localStorage.removeItem('kyo_image_history');
            imageHistory = [];
            try {
                if (image) localStorage.setItem(`kyo_ref_${key}_img`, image);
                if (description !== undefined) localStorage.setItem(`kyo_ref_${key}_desc`, description);
            } catch (_) {
                showToast('Image too large to store. Try a smaller file.', 'error');
            }
        }
    }

    // --- Collect active reference images ---
    function getActiveRefImages() {
        const refs = [];
        const mapping = []; // tracks which ref key is at which index
        const useCup = document.getElementById('use-cup-ref')?.checked;
        const useBg = document.getElementById('use-bg-ref')?.checked;
        const useLogo = document.getElementById('use-logo-ref')?.checked;

        if (useCup && getRef('cup').image) {
            refs.push(getRef('cup').image); // data:image/... URI
            mapping.push('cup');
        }
        if (useBg && getRef('background').image) {
            refs.push(getRef('background').image);
            mapping.push('background');
        }
        if (useLogo && getRef('logo').image) {
            refs.push(getRef('logo').image);
            mapping.push('logo');
        }
        return { refs, mapping };
    }

    // --- Prompt Builder ---
    function buildPrompt(drink, customPrompt) {
        if (customPrompt && customPrompt.trim()) return customPrompt;

        const { mapping } = getActiveRefImages();
        const useBg = document.getElementById('use-bg-ref')?.checked;
        const useCup = document.getElementById('use-cup-ref')?.checked;
        const useLogo = document.getElementById('use-logo-ref')?.checked;
        const bgRef = getRef('background');
        const cupRef = getRef('cup');
        const logoRef = getRef('logo');

        // Helper: find the 1-based image index for a given ref key
        const imgIdx = (key) => mapping.indexOf(key) + 1;

        let prompt = `Professional product photography of "${drink.name}" drink. ${drink.desc}. `;

        // Cup reference — combine image ref + text description for maximum adherence
        if (useCup && cupRef.image && imgIdx('cup') > 0) {
            const cupDesc = cupRef.description ? ` (${cupRef.description})` : '';
            prompt += `The drink MUST be served in the EXACT same glass/cup as shown in image ${imgIdx('cup')}${cupDesc}. Replicate the exact shape, height, curvature, and transparency of that glass precisely. `;
        } else if (useCup && cupRef.description) {
            prompt += `Served in: ${cupRef.description}. `;
        } else {
            prompt += `Served in a modern, clear glass suitable for a Japanese café. `;
        }

        // Background reference
        if (useBg && bgRef.image && imgIdx('background') > 0) {
            prompt += `The background and surface MUST match the setting shown in image ${imgIdx('background')}. `;
        } else if (useBg && bgRef.description) {
            prompt += `Background: ${bgRef.description}. `;
        } else {
            prompt += `On a clean, elegant surface with soft natural daylight. `;
        }

        // Logo reference
        if (useLogo && logoRef.image && imgIdx('logo') > 0) {
            prompt += `Subtly incorporate the logo from image ${imgIdx('logo')} into the scene, etched on the glass or printed on a coaster. `;
        } else if (useLogo && logoRef.description) {
            prompt += `Logo: ${logoRef.description}. `;
        }

        prompt += `${PRESETS[activePreset]}. Extremely photorealistic, 4K, high-end commercial food photography, perfect lighting, highly detailed textures.`;
        return prompt;
    }

    // --- API Calls (Gemini / Nano Banana Pro) ---
    async function generateImage(prompt, inputImages = []) {
        if (!geminiApiKey) throw new Error('Gemini API key not set');

        // Build multimodal parts: text prompt + reference images
        const parts = [{ text: prompt }];

        // Add each reference image as an inline_data part
        for (const dataUrl of inputImages) {
            // dataUrl format: "data:image/jpeg;base64,/9j/4AAQ..."
            const match = dataUrl.match(/^data:(image\/\w+);base64,(.+)$/);
            if (match) {
                parts.push({
                    inline_data: {
                        mime_type: match[1],
                        data: match[2]
                    }
                });
            }
        }

        const requestBody = {
            contents: [{ parts: parts }],
            generationConfig: {
                responseModalities: ["TEXT", "IMAGE"]
            }
        };

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent?key=${geminiApiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody)
            }
        );

        if (!response.ok) {
            const err = await response.json().catch(() => ({}));
            throw new Error(err.error?.message || `API error ${response.status}`);
        }

        const result = await response.json();

        // Extract the generated image from the response
        const candidates = result.candidates;
        if (!candidates || candidates.length === 0) {
            throw new Error('No candidates returned from Gemini');
        }

        let imageB64 = null;
        for (const part of candidates[0].content.parts) {
            if (part.inlineData) {
                imageB64 = part.inlineData.data;
                break;
            }
        }

        if (!imageB64) {
            // Check if only text was returned (safety filter or no image)
            const textParts = candidates[0].content.parts.filter(p => p.text);
            const msg = textParts.map(p => p.text).join(' ') || 'No image generated';
            throw new Error(`Gemini returned text only: ${msg.substring(0, 200)}`);
        }

        return {
            b64: imageB64,
            revisedPrompt: prompt
        };
    }

    // --- GitHub Push ---
    async function pushToGitHub(imagePath, base64Content) {
        if (!githubToken) throw new Error('GitHub token not set');

        const repoPath = imagePath.replace('../', '');

        // Get current file SHA if it exists
        let sha = null;
        try {
            const existing = await fetch(
                `https://api.github.com/repos/nuri7/kyo-drink-oracle/contents/${repoPath}`,
                { headers: { 'Authorization': `token ${githubToken}` } }
            );
            if (existing.ok) {
                const data = await existing.json();
                sha = data.sha;
            }
        } catch (e) { /* file doesn't exist yet, that's fine */ }

        const body = {
            message: `🎨 Update drink image: ${repoPath}`,
            content: base64Content
        };
        if (sha) body.sha = sha;

        const response = await fetch(
            `https://api.github.com/repos/nuri7/kyo-drink-oracle/contents/${repoPath}`,
            {
                method: 'PUT',
                headers: {
                    'Authorization': `token ${githubToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            }
        );

        if (!response.ok) {
            const err = await response.json().catch(() => ({}));
            throw new Error(err.message || `GitHub API error ${response.status}`);
        }

        return await response.json();
    }

    // --- Image Download ---
    function downloadImage(b64, filename) {
        const link = document.createElement('a');
        link.href = `data:image/png;base64,${b64}`;
        link.download = filename || 'kyo_drink_image.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // --- History ---
    function addToHistory(drinkName, b64) {
        // Create a small thumbnail to avoid localStorage quota issues
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const thumbSize = 150;
            canvas.width = thumbSize;
            canvas.height = thumbSize * (img.height / img.width);
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            const thumbB64 = canvas.toDataURL('image/jpeg', 0.6).split(',')[1];

            const entry = {
                drink: drinkName,
                timestamp: new Date().toISOString(),
                thumbnail: thumbB64
            };
            imageHistory.unshift(entry);
            if (imageHistory.length > 20) imageHistory.pop();
            try {
                localStorage.setItem('kyo_image_history', JSON.stringify(imageHistory));
            } catch (e) {
                // If still too large, trim older entries
                while (imageHistory.length > 5) imageHistory.pop();
                try { localStorage.setItem('kyo_image_history', JSON.stringify(imageHistory)); } catch (_) {}
            }
            renderHistory();
        };
        img.src = `data:image/png;base64,${b64}`;
    }

    // --- Toast ---
    function showToast(message, type = 'info') {
        const toast = document.getElementById('studio-toast');
        if (!toast) return;
        toast.textContent = message;
        toast.className = 'studio-toast show ' + type;
        setTimeout(() => { toast.className = 'studio-toast'; }, 3500);
    }

    // --- Log ---
    function log(message, type = 'info') {
        const logEl = document.getElementById('gen-log');
        if (!logEl) return;
        const entry = document.createElement('div');
        entry.className = `log-entry ${type}`;
        entry.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
        logEl.appendChild(entry);
        logEl.scrollTop = logEl.scrollHeight;
    }

    // --- Init UI ---
    function init() {
        populateDrinkSelector();
        setupPresets();
        setupGenerateBtn();
        setupRefManager();
        setupTabs();
        renderHistory();
    }

    function setupTabs() {
        document.querySelectorAll('.admin-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                tab.classList.add('active');
                const target = document.getElementById(tab.dataset.tab);
                if (target) target.classList.add('active');
            });
        });
    }

    function populateDrinkSelector() {
        const sel = document.getElementById('drink-select');
        if (!sel) return;
        sel.innerHTML = '<option value="-1">— Select a drink —</option>';
        DRINKS.forEach((d, i) => {
            sel.innerHTML += `<option value="${i}">${d.name} (${d.price})</option>`;
        });
        sel.addEventListener('change', () => {
            selectedDrinkIndex = parseInt(sel.value);
            updateCurrentPreview();
            autoGeneratePrompt();
        });
    }

    function updateCurrentPreview() {
        const container = document.getElementById('current-preview');
        if (!container) return;
        if (selectedDrinkIndex < 0) {
            container.innerHTML = '<div class="preview-placeholder"><span class="placeholder-icon">🍵</span>Select a drink to preview</div>';
            return;
        }
        const drink = DRINKS[selectedDrinkIndex];
        container.innerHTML = `<img src="${drink.image}" alt="${drink.name}" onerror="this.parentElement.innerHTML='<div class=\\'preview-placeholder\\'><span class=\\'placeholder-icon\\'>⚠️</span>Image not found</div>'">`;
    }

    function autoGeneratePrompt() {
        const textarea = document.getElementById('prompt-input');
        if (!textarea || selectedDrinkIndex < 0) return;
        const drink = DRINKS[selectedDrinkIndex];
        textarea.value = buildPrompt(drink, '');
    }



    function setupPresets() {
        document.querySelectorAll('.preset-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activePreset = btn.dataset.preset;
                autoGeneratePrompt();
            });
        });
    }

    function setupGenerateBtn() {
        const btn = document.getElementById('generate-btn');
        if (!btn) return;

        btn.addEventListener('click', async () => {
            if (!geminiApiKey) { showToast('Gemini API key not configured', 'error'); return; }
            if (selectedDrinkIndex < 0) { showToast('Please select a drink first', 'error'); return; }

            const drink = DRINKS[selectedDrinkIndex];
            const customPrompt = document.getElementById('prompt-input')?.value || '';
            const prompt = customPrompt.trim() || buildPrompt(drink, '');

            // Collect reference images
            const { refs, mapping } = getActiveRefImages();

            btn.classList.add('loading');
            btn.disabled = true;
            log(`Generating image for "${drink.name}"...`, 'info');
            if (refs.length > 0) {
                log(`📷 Using ${refs.length} reference image(s): ${mapping.join(', ')}`, 'info');
            }

            try {
                const result = await generateImage(prompt, refs);
                generatedImageB64 = result.b64;
                generatedImageUrl = `data:image/png;base64,${result.b64}`;

                // Show preview
                const container = document.getElementById('generated-preview');
                if (container) {
                    container.innerHTML = `<img src="${generatedImageUrl}" alt="Generated ${drink.name}">`;
                }

                // Enable action buttons
                document.querySelectorAll('.post-gen-action').forEach(b => b.disabled = false);

                log(`✓ Image generated successfully!`, 'success');
                showToast('Image generated!', 'success');

                // Save to history (async, won't block UI)
                addToHistory(drink.name, result.b64);
            } catch (err) {
                log(`✗ Error: ${err.message}`, 'error');
                showToast(`Generation failed: ${err.message}`, 'error');
            } finally {
                btn.classList.remove('loading');
                btn.disabled = false;
            }
        });

        // Download button
        document.getElementById('download-btn')?.addEventListener('click', () => {
            if (!generatedImageB64) return;
            const drink = DRINKS[selectedDrinkIndex];
            const filename = drink ? drink.name.toLowerCase().replace(/\s+/g, '_') + '.png' : 'drink.png';
            downloadImage(generatedImageB64, filename);
            showToast('Image downloaded!', 'success');
        });

        // GitHub push button
        document.getElementById('push-github-btn')?.addEventListener('click', async () => {
            if (!generatedImageB64 || !githubToken) {
                showToast(githubToken ? 'No image to push' : 'Set GitHub token first', 'error');
                return;
            }
            const drink = DRINKS[selectedDrinkIndex];
            if (!drink) return;

            const btn = document.getElementById('push-github-btn');
            btn.disabled = true;
            btn.textContent = '⏳ Pushing...';
            log(`Pushing image to GitHub for "${drink.name}"...`, 'info');

            try {
                await pushToGitHub(drink.image, generatedImageB64);
                log('✓ Pushed to GitHub successfully!', 'success');
                showToast('Pushed to GitHub! Deploy will start automatically.', 'success');
            } catch (err) {
                log(`✗ GitHub push failed: ${err.message}`, 'error');
                showToast(`Push failed: ${err.message}`, 'error');
            } finally {
                btn.disabled = false;
                btn.textContent = '🚀 Push to GitHub';
            }
        });
    }



    function setupRefManager() {
        ['background', 'cup', 'logo'].forEach(key => {
            const fileInput = document.getElementById(`ref-${key}-file`);
            const preview = document.getElementById(`ref-${key}-preview`);
            const descInput = document.getElementById(`ref-${key}-desc`);
            const clearBtn = document.getElementById(`ref-${key}-clear`);

            if (!fileInput) return;

            // Load saved
            const ref = getRef(key);
            if (ref.image && preview) {
                preview.innerHTML = `<img src="${ref.image}" alt="${key} reference">`;
            }
            if (ref.description && descInput) {
                descInput.value = ref.description;
            }

            // Upload handler
            preview?.addEventListener('click', () => fileInput.click());

            fileInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = (ev) => {
                    // Compress the image to save localStorage space
                    const img = new Image();
                    img.onload = () => {
                        const canvas = document.createElement('canvas');
                        const maxDim = 800;
                        let w = img.width, h = img.height;
                        if (w > maxDim || h > maxDim) {
                            if (w > h) { h = Math.round(h * maxDim / w); w = maxDim; }
                            else { w = Math.round(w * maxDim / h); h = maxDim; }
                        }
                        canvas.width = w;
                        canvas.height = h;
                        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
                        const compressedUrl = canvas.toDataURL('image/jpeg', 0.8);
                        setRef(key, compressedUrl);
                        if (preview) preview.innerHTML = `<img src="${compressedUrl}" alt="${key} reference">`;
                        showToast(`${key} reference uploaded!`, 'success');
                    };
                    img.src = ev.target.result;
                };
                reader.readAsDataURL(file);
            });

            // Description save
            descInput?.addEventListener('blur', () => {
                setRef(key, undefined, descInput.value);
            });

            // Clear
            clearBtn?.addEventListener('click', () => {
                localStorage.removeItem(`kyo_ref_${key}_img`);
                localStorage.removeItem(`kyo_ref_${key}_desc`);
                if (preview) preview.innerHTML = `<div class="upload-hint"><span class="hint-icon">📷</span>Click to upload</div>`;
                if (descInput) descInput.value = '';
                showToast(`${key} reference cleared`, 'info');
            });
        });
    }



    function renderHistory() {
        const grid = document.getElementById('history-grid');
        if (!grid) return;
        if (imageHistory.length === 0) {
            grid.innerHTML = '<p style="color:var(--text-light);font-style:italic;grid-column:1/-1">No images generated yet</p>';
            return;
        }
        grid.innerHTML = imageHistory.map((entry, i) => `
            <div class="history-thumb" data-index="${i}" title="${entry.drink} — ${new Date(entry.timestamp).toLocaleString()}">
                <img src="data:image/png;base64,${entry.b64}" alt="${entry.drink}">
                <div class="thumb-label">${entry.drink}</div>
            </div>
        `).join('');

        grid.querySelectorAll('.history-thumb').forEach(thumb => {
            thumb.addEventListener('click', () => {
                const idx = parseInt(thumb.dataset.index);
                const entry = imageHistory[idx];
                if (!entry) return;
                generatedImageB64 = entry.b64;
                generatedImageUrl = `data:image/png;base64,${entry.b64}`;
                const container = document.getElementById('generated-preview');
                if (container) container.innerHTML = `<img src="${generatedImageUrl}" alt="${entry.drink}">`;
                document.querySelectorAll('.post-gen-action').forEach(b => b.disabled = false);
                showToast(`Loaded: ${entry.drink}`, 'info');
            });
        });
    }

    return { init, DRINKS };
})();

// Boot when DOM ready
document.addEventListener('DOMContentLoaded', () => ImageStudio.init());
