let curMode = 'quiz';
let curLesson = '1';
let curLang = 'hu';
let curIdx = 0;
let quizScore = 0;

function getCurrentData() {
  const modeObj = window.lessonDB[curLesson]?.[curMode] || {};
  const localizedData = modeObj[curLang] || modeObj.en || modeObj.hu || [];
  return Array.isArray(localizedData) ? localizedData : localizedData.questions || [];
}

function updateView() {
  const dir = (curLang === 'he' || curLang === 'ar' || curLang === 'fa') ? 'rtl' : 'ltr';
  document.body.dir = dir;

  const lData = getCurrentData();
  const total = lData.length;

  if (total === 0) {
    document.getElementById('counter-txt').innerText = "0 / 0";
    document.getElementById('progress-fill').style.width = "0%";
    if (curMode === 'quiz') {
      document.getElementById('q-text').innerText = "Ehhez a leckéhez még nincs kvíz feltöltve ezen a nyelven.";
      document.getElementById('options-box').innerHTML = "";
      document.getElementById('fb-box').className = 'feedback';
    } else {
      document.getElementById('card-front-text').innerText = "Hamarosan érkezik...";
      document.getElementById('card-back-text').innerText = "Ehhez a leckéhez még nincsenek feltöltve a kártyák.";
    }
    return;
  }

  if (curIdx >= total) curIdx = 0;

  document.getElementById('counter-txt').innerText = `${curIdx + 1} / ${total}`;
  document.getElementById('progress-fill').style.width = `${((curIdx + 1) / total) * 100}%`;

  if (curMode === 'quiz') {
    document.getElementById('quiz-view').style.display = 'block';
    document.getElementById('flashcard-view').style.display = 'none';
    document.getElementById('score-txt').innerText = `Pontszám: ${quizScore}`;
    renderQuizQuestion(lData[curIdx], total);
  } else {
    document.getElementById('quiz-view').style.display = 'none';
    document.getElementById('flashcard-view').style.display = 'block';
    document.getElementById('score-txt').innerText = `Kártya`;
    renderFlashcard(lData[curIdx], total);
  }
}

function renderQuizQuestion(qObj, total) {
  if (!qObj) return;
  document.getElementById('q-text').innerText = qObj.q;
  const box = document.getElementById('options-box');
  box.innerHTML = '';
  qObj.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerText = opt;
    btn.onclick = () => selectQuizAnswer(idx, qObj, btn);
    box.appendChild(btn);
  });
  const fb = document.getElementById('fb-box');
  fb.className = 'feedback';
  fb.innerText = '';
  const nxt = document.getElementById('quiz-next-btn');
  nxt.disabled = true;
  nxt.innerText = (curIdx === total - 1) ? 'Befejezés / Újrakezdés' : 'Következő ➔';
}

function selectQuizAnswer(idx, qObj, btn) {
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(b => b.disabled = true);
  if (idx === qObj.correct) {
    btn.classList.add('correct');
    quizScore++;
    document.getElementById('score-txt').innerText = `Pontszám: ${quizScore}`;
  } else {
    btn.classList.add('wrong');
    buttons[qObj.correct]?.classList.add('correct');
  }
  const fb = document.getElementById('fb-box');
  fb.innerText = qObj.r || qObj.rationale || "";
  fb.classList.add('show');
  document.getElementById('quiz-next-btn').disabled = false;
}

function nextQuizQuestion() {
  const lData = getCurrentData();
  if (curIdx < lData.length - 1) {
    curIdx++;
  } else {
    curIdx = 0;
    quizScore = 0;
  }
  updateView();
}

function renderFlashcard(cObj, total) {
  if (!cObj) return;
  document.getElementById('card-inner').classList.remove('flipped');
  document.getElementById('card-front-text').innerText = cObj.f;
  document.getElementById('card-back-text').innerText = cObj.b;
  document.getElementById('card-prev-btn').disabled = (curIdx === 0);
  document.getElementById('card-next-btn').disabled = (curIdx === total - 1);
}

function flipCard() {
  document.getElementById('card-inner').classList.toggle('flipped');
}

function prevCard() {
  if (curIdx > 0) { curIdx--; updateView(); }
}

function nextCard() {
  const lData = getCurrentData();
  if (curIdx < lData.length - 1) { curIdx++; updateView(); }
}
// Betöltéskor megnézzük, választott-e már nyelvet korábban
function checkFirstVisit() {
  const savedLang = localStorage.getItem('user_lang');
  if (!savedLang) {
    // Első látogatás: aktiváljuk a spotlight réteget
    showLanguageSpotlight();
  } else {
    // Már járt itt: beállítjuk a mentett nyelvet
    curLang = savedLang;
    document.getElementById('lang-select').value = savedLang;
    updateView();
  }
}

function showLanguageSpotlight() {
  const overlay = document.createElement('div');
  overlay.id = 'lang-overlay';
  overlay.className = 'spotlight-overlay';
  overlay.innerHTML = `
    <div style="color:white; text-align:center; font-size:1.1rem; font-weight:600; margin-bottom: 120px;">
      🌐 Please choose your language!<br>
      <span style="font-size:0.9rem; font-weight:normal; opacity:0.8;">Kérlek, válassz nyelvet a folytatáshoz!</span>
    </div>
  `;
  document.body.appendChild(overlay);

  const langSelect = document.getElementById('lang-select');
  langSelect.classList.add('lang-highlight');

  // Amint kiválaszt egy nyelvet, elhalványul és elmentődik
  langSelect.addEventListener('change', function dismiss() {
    localStorage.setItem('user_lang', langSelect.value);
    langSelect.classList.remove('lang-highlight');
    overlay.style.opacity = '0';
    setTimeout(() => overlay.remove(), 400);
    langSelect.removeEventListener('change', dismiss);
  });
}

function switchMode(m) { curMode = m; curIdx = 0; quizScore = 0; updateView(); }
function switchLesson(l) { curLesson = l; curIdx = 0; quizScore = 0; updateView(); }
function switchLanguage(lang) { curLang = lang; updateView(); }

// Betöltéskor indítás
window.addEventListener('DOMContentLoaded', updateView);