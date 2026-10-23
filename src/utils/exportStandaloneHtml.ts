import { QUESTIONS, CHAPTERS } from '../data/questions';
import {
  QUESTION_KEYWORD_SPECS,
  KO_BOOK_FULL_TO_ABBR,
  ES_BOOK_FULL_TO_ABBR
} from './typingValidator';

export function downloadStandaloneChromeHtml() {
  const questionsJson = JSON.stringify(QUESTIONS);
  const chaptersJson = JSON.stringify(CHAPTERS);
  const specsJson = JSON.stringify(QUESTION_KEYWORD_SPECS);
  const koBooksJson = JSON.stringify(KO_BOOK_FULL_TO_ABBR);
  const esBooksJson = JSON.stringify(ES_BOOK_FULL_TO_ABBR);

  const htmlContent = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Parábolas 99</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=JetBrains+Mono:wght@400;600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #F8FAFC;
      --surface: #FFFFFF;
      --border: #E2E8F0;
      --text: #0F172A;
      --muted: #64748B;
      --accent: #0284C7;
      --accent-hover: #0369A1;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.5;
    }
    .gate-wrap {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    .gate-box {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 16px;
      max-width: 560px;
      width: 100%;
      padding: 40px 32px;
      text-align: center;
    }
    .gate-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-top: 24px;
    }
    .lang-btn {
      padding: 24px 16px;
      border-radius: 12px;
      border: 1px solid var(--border);
      background: #fff;
      cursor: pointer;
      transition: all 0.15s ease;
      text-align: center;
    }
    .lang-btn:hover {
      border-color: var(--accent);
      background: #F0F9FF;
    }
    .lang-btn h2 {
      font-family: 'Fraunces', serif;
      font-size: 24px;
      margin-bottom: 4px;
      color: var(--text);
    }
    .lang-btn p {
      font-size: 12px;
      color: var(--muted);
    }
    header {
      background: var(--surface);
      border-bottom: 1px solid var(--border);
      padding: 14px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      top: 0;
      z-index: 20;
    }
    .brand {
      font-family: 'Fraunces', serif;
      font-size: 18px;
      font-weight: 700;
    }
    .container {
      max-width: 960px;
      margin: 0 auto;
      padding: 24px 20px 56px;
    }
    .controls-bar {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 14px 18px;
      margin-bottom: 16px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
      justify-content: space-between;
    }
    select, button, input {
      font-family: inherit;
      font-size: 13px;
    }
    select, input {
      padding: 8px 12px;
      border: 1px solid var(--border);
      border-radius: 8px;
      background: #fff;
    }
    .btn {
      padding: 7px 12px;
      border-radius: 8px;
      border: 1px solid var(--border);
      background: #fff;
      color: var(--text);
      font-weight: 600;
      cursor: pointer;
    }
    .btn:hover { background: #F1F5F9; }
    .btn-primary {
      background: var(--accent);
      color: #fff;
      border-color: var(--accent);
    }
    .btn-primary:hover { background: var(--accent-hover); }
    .grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 12px;
    }
    .card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 20px;
    }
    .meta {
      font-size: 12px;
      color: var(--muted);
      margin-bottom: 6px;
      font-family: 'JetBrains Mono', monospace;
    }
    .prompt-text {
      font-size: 18px;
      font-weight: 700;
      color: var(--text);
      margin-bottom: 10px;
    }
    .answer-box {
      background: #F8FAFC;
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 14px;
      margin-top: 8px;
      cursor: pointer;
    }
    .hidden-ans {
      filter: blur(7px);
      user-select: none;
    }
    .ans-main {
      font-size: 20px;
      font-weight: 700;
      color: #0284C7;
      margin-bottom: 6px;
    }
    .verse {
      font-size: 20px;
      font-weight: 700;
      font-family: 'JetBrains Mono', monospace;
      color: #0284C7;
    }
    .typing-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin-top: 8px;
    }
    @media (max-width: 640px) {
      .typing-row { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <div id="app"></div>
  <script>
    const QUESTIONS = ${questionsJson};
    const CHAPTERS = ${chaptersJson};
    const SPECS = ${specsJson};
    const KO_BOOKS = ${koBooksJson};
    const ES_BOOKS = ${esBooksJson};
    let lang = null;
    let studyMethod = 'card'; // 'card' | 'typing'
    let currentDay = 1;
    let originFilter = 'ALL';
    let hideAnswers = true;
    let reviewMap = {};
    let typingState = {};

    function normalizeCompact(text) {
      return (text || '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\\u0300-\\u036f]/g, '')
        .normalize('NFC')
        .replace(/[^a-z0-9가-힣]/g, '');
    }

    function normalizeVerseInput(raw, l) {
      let s = (raw || '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\\u0300-\\u036f]/g, '')
        .normalize('NFC');
      const dict = l === 'ko' ? KO_BOOKS : ES_BOOKS;
      for (let i = 0; i < dict.length; i++) {
        s = s.replace(new RegExp(dict[i][0], 'g'), dict[i][1]);
      }
      return s;
    }

    function parseTargetReferences(targetVerseRaw) {
      if (!targetVerseRaw || targetVerseRaw.trim() === '-') return [];
      const parts = targetVerseRaw.split(',').map(s => s.trim());
      const refs = [];
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        if (/^\\d+/.test(p) && !isNaN(Number(p.trim()))) {
          if (refs.length > 0) {
            refs[refs.length - 1].numbers.push(p.trim());
            refs[refs.length - 1].rawDisplay += ', ' + p.trim();
          }
          continue;
        }
        const book = p.match(/^([가-힣]+|[a-zA-Z0-9]+)/)?.[1] || '';
        const numbers = (p.match(/\\d+/g) || []);
        refs.push({ rawDisplay: p, book, numbers });
      }
      return refs;
    }

    function isVerseReferenceSatisfied(normUser, compactUser, userNumbers, ref, l) {
      const normBook = normalizeVerseInput(ref.book, l).trim();
      if (!normUser.includes(normBook) && !compactUser.includes(normBook)) {
        return false;
      }
      const essentialNums = ref.numbers.length <= 1 ? ref.numbers : [ref.numbers[0], ref.numbers[1]];
      const hasDiscrete = essentialNums.every(n => userNumbers.includes(n));
      if (hasDiscrete) return true;

      const bookIdx = compactUser.indexOf(normBook);
      if (bookIdx !== -1) {
        let searchIdx = bookIdx + normBook.length;
        let allFound = true;
        for (let i = 0; i < essentialNums.length; i++) {
          const num = essentialNums[i];
          const nextIdx = compactUser.indexOf(num, searchIdx);
          if (nextIdx === -1) {
            allFound = false;
            break;
          }
          searchIdx = nextIdx + num.length;
        }
        if (allFound) return true;
      }
      return false;
    }

    function checkTyping(qid) {
      const q = QUESTIONS.find(x => x.id === qid);
      if (!q) return;
      const ansEl = document.getElementById('ans-' + qid);
      const verEl = document.getElementById('ver-' + qid);
      const userAns = ansEl ? ansEl.value : '';
      const userVer = verEl ? verEl.value : '';
      const spec = SPECS[qid];
      const rawTarget = lang === 'ko' ? q.answerKo : q.answerEs;
      const compactTarget = normalizeCompact(rawTarget);
      const rawSlots = spec ? (lang === 'ko' ? spec.koSlots : spec.esSlots) : [];
      const slots = rawSlots
        .map(slot => slot.filter(w => compactTarget.includes(normalizeCompact(w))))
        .filter(slot => slot.length > 0);
      const isShort = spec && spec.isShort && slots.length === 1;
      const compactAns = normalizeCompact(userAns);
      let ansOk = false;

      if (compactAns) {
        if (compactAns === compactTarget) {
          ansOk = true;
        } else if (isShort) {
          const cleaned = lang === 'ko'
            ? compactAns.replace(/(이다|입니다|임|란|이란|은|는|이|가|을|를)$/g, '')
            : compactAns.replace(/^(el|la|los|las|un|una)/g, '');
          ansOk = slots[0].some(v => normalizeCompact(v) === cleaned || normalizeCompact(v) === compactAns);
        } else {
          ansOk = slots.every(slot => slot.some(v => compactAns.includes(normalizeCompact(v))));
        }
      }

      const rawVerse = (lang === 'ko' ? q.verseKo : q.verseEs).trim();
      let verOk = true;
      if (rawVerse !== '-' && rawVerse.length > 0) {
        const refs = parseTargetReferences(rawVerse);
        const normUser = normalizeVerseInput(userVer, lang);
        if (!normUser.trim()) {
          verOk = false;
        } else {
          const userNumbers = (normUser.match(/\\d+/g) || []);
          const compactUser = normUser.replace(/[^가-힣a-zA-Z0-9]/g, '');
          verOk = refs.every(ref => isVerseReferenceSatisfied(normUser, compactUser, userNumbers, ref, lang));
        }
      }

      typingState[qid] = {
        userAns,
        userVer,
        checked: true,
        ok: ansOk && verOk
      };
      render();
      const focusEl = document.getElementById('ans-' + qid);
      if (focusEl) focusEl.focus();
    }

    function focusNextTypingCard(nextQid) {
      const el = document.getElementById('ans-' + nextQid);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.focus();
      }
    }

    function handleTypingKey(event, qid, nextQid) {
      if (event.key === 'Enter') {
        event.preventDefault();
        const st = typingState[qid];
        const ansVal = (document.getElementById('ans-' + qid) || {}).value || '';
        const verVal = (document.getElementById('ver-' + qid) || {}).value || '';
        if (st && st.checked && st.ok && st.userAns === ansVal && st.userVer === verVal) {
          focusNextTypingCard(nextQid);
        } else {
          checkTyping(qid);
        }
      }
    }

    function speakEcuador(text) {
      if (!('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      const voices = window.speechSynthesis.getVoices() || [];
      let v = voices.find(x => x.lang.toLowerCase().replace('_','-') === 'es-ec')
        || voices.find(x => ['es-419','es-co','es-pe','es-mx','es-us'].some(p => x.lang.toLowerCase().replace('_','-').startsWith(p)))
        || voices.find(x => x.lang.toLowerCase().startsWith('es') && x.lang.toLowerCase().replace('_','-') !== 'es-es');
      if (v) {
        u.voice = v;
        u.lang = v.lang;
      } else {
        u.lang = 'es-EC';
      }
      u.rate = 0.94;
      window.speechSynthesis.speak(u);
    }

    function getSchedule(day) {
      if (day === 1) return { newIds: [1,2,3,4,5,6,7,8,9,10], poolIds: [], revCount: 0 };
      if (day <= 18) {
        const s = 10 + (day - 2) * 5 + 1;
        const newIds = [s, s+1, s+2, s+3, s+4];
        const poolIds = [];
        for (let i = 1; i < s; i++) poolIds.push(i);
        return { newIds, poolIds, revCount: 5 };
      }
      if (day === 19) {
        return { newIds: [96,97,98,99], poolIds: Array.from({length:95},(_,i)=>i+1), revCount: 6 };
      }
      return { newIds: [], poolIds: Array.from({length:99},(_,i)=>i+1), revCount: 10 };
    }

    function pickRandom(pool, count) {
      const copy = [...pool];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy.slice(0, count).sort((a,b) => a - b);
    }

    function ensureReviews(day, force) {
      const sched = getSchedule(day);
      if (sched.revCount === 0) return [];
      if (!reviewMap[day] || force) {
        reviewMap[day] = pickRandom(sched.poolIds, sched.revCount);
      }
      return reviewMap[day];
    }

    function setLanguage(l) {
      lang = l;
      render();
    }

    function render() {
      const root = document.getElementById('app');
      if (!lang) {
        root.innerHTML = '<div class="gate-wrap"><div class="gate-box">' +
          '<h1 style="font-family:Fraunces,serif;font-size:30px;margin-bottom:6px;">Parábolas 99</h1>' +
          '<p style="color:#64748B;font-size:13px;">언어 선택 · Seleccione idioma</p>' +
          '<div class="gate-grid">' +
            '<button class="lang-btn" onclick="setLanguage(\\'ko\\')">' +
              '<h2>한국어</h2>' +
              '<p>한국어 전용 · 1. 카드 / 2. 타이핑</p>' +
            '</button>' +
            '<button class="lang-btn" onclick="setLanguage(\\'es\\')">' +
              '<h2>Español</h2>' +
              '<p>Español · Audio Ecuador</p>' +
            '</button>' +
          '</div>' +
        '</div></div>';
        return;
      }

      const isKo = lang === 'ko';
      const sched = getSchedule(currentDay);
      const revIds = ensureReviews(currentDay, false);

      const cards = [];
      function addForward(id, origin) {
        const q = QUESTIONS.find(x => x.id === id);
        if (!q) return;
        cards.push({ q, origin });
      }
      sched.newIds.forEach(id => addForward(id, 'NEW'));
      revIds.forEach(id => addForward(id, 'REVIEW'));

      const filtered = cards.filter(c => originFilter === 'ALL' ? true : c.origin === originFilter);

      let optionsHtml = '';
      for (let d = 1; d <= 20; d++) {
        const label = isKo ? (d + '일차 (10문항)') : ('Día ' + d + ' (10 preg.)');
        optionsHtml += '<option value="' + d + '" ' + (d === currentDay ? 'selected' : '') + '>' + label + '</option>';
      }

      const cardsHtml = filtered.map((c, idx) => {
        const q = c.q;
        const nextCard = filtered[(idx + 1) % filtered.length];
        const nextQid = nextCard ? nextCard.q.id : q.id;
        const originLabel = isKo
          ? (c.origin === 'NEW' ? '신규' : '복습')
          : (c.origin === 'NEW' ? 'Nueva' : 'Repaso');
        const chapterLabel = isKo ? q.chapterTitleKo : q.chapterTitleEs;

        const promptText = isKo ? q.questionKo : q.questionEs;
        const answerText = isKo ? q.answerKo : q.answerEs;
        const verseText = isKo ? ('성구: ' + q.verseKo) : ('Versículo: ' + q.verseEs);

        const ttsButtons = !isKo
          ? ('<div style="display:flex;gap:6px;">' +
              '<button class="btn" style="padding:4px 10px;font-size:12px;" onclick="speakEcuador(' + JSON.stringify(q.questionEs) + ')">Pregunta (EC)</button>' +
              '<button class="btn" style="padding:4px 10px;font-size:12px;" onclick="speakEcuador(' + JSON.stringify(q.answerEs) + ')">Respuesta (EC)</button>' +
            '</div>')
          : '';

        let bodyHtml = '';
        if (studyMethod === 'card') {
          bodyHtml = '<div class="answer-box ' + (hideAnswers ? 'hidden-ans' : '') + '" onclick="this.classList.toggle(\\'hidden-ans\\')">' +
            '<div class="ans-main">' + answerText + '</div>' +
            '<div class="verse">' + verseText + '</div>' +
          '</div>';
        } else {
          const st = typingState[q.id] || { userAns: '', userVer: '', checked: false, ok: false };
          const nextActive = Boolean(st.checked && st.ok);
          bodyHtml = '<div class="typing-row">' +
            '<input id="ans-' + q.id + '" onkeydown="handleTypingKey(event,' + q.id + ',' + nextQid + ')" value="' + (st.userAns || '').replace(/"/g, '&quot;') + '" placeholder="' + (isKo ? '정답 입력 (단답형 정확히 / 문장 핵심단어 모두)' : 'Respuesta (exacta o palabras clave)') + '" />' +
            '<input id="ver-' + q.id + '" onkeydown="handleTypingKey(event,' + q.id + ',' + nextQid + ')" value="' + (st.userVer || '').replace(/"/g, '&quot;') + '" placeholder="' + (isKo ? '증거성구 입력 (성경이름+숫자 / 띄어쓰기·쉼표 무관)' : 'Versículo (nombre y números / espacios libres)') + '" />' +
          '</div>' +
          '<div style="margin-top:8px;display:flex;justify-content:flex-end;gap:8px;">' +
            '<button class="btn btn-primary" onclick="checkTyping(' + q.id + ')">' + (isKo ? '정답 확인' : 'Comprobar') + '</button>' +
            '<button class="btn" ' + (nextActive ? 'style="background:#059669;color:#fff;border-color:#059669;" onclick="focusNextTypingCard(' + nextQid + ')"' : 'disabled style="opacity:0.45;cursor:not-allowed;"') + '>' +
              (nextActive ? (isKo ? '다음 (엔터 ↵)' : 'Siguiente (Intro ↵)') : (isKo ? '다음' : 'Siguiente')) +
            '</button>' +
          '</div>' +
          (st.checked
            ? ('<div class="answer-box" style="margin-top:10px;border-color:' + (st.ok ? '#059669' : '#EF4444') + ';">' +
                '<div style="font-size:12px;font-weight:700;margin-bottom:4px;color:' + (st.ok ? '#059669' : '#DC2626') + ';">' +
                  (st.ok ? (isKo ? '✓ 정답 (핵심어·성구 일치)' : '✓ Correcto') : (isKo ? '✕ 오답 · 정답 및 성구 확인' : '✕ Incorrecto')) +
                '</div>' +
                '<div class="ans-main">' + answerText + '</div>' +
                '<div class="verse">' + verseText + '</div>' +
              '</div>')
            : '');
        }

        return '<div class="card">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">' +
            '<div class="meta">' + String(idx + 1).padStart(2, '0') + '. ' + q.code + ' · ' + originLabel + ' · ' + chapterLabel + '</div>' +
            ttsButtons +
          '</div>' +
          '<div class="prompt-text">' + promptText + '</div>' +
          bodyHtml +
        '</div>';
      }).join('');

      root.innerHTML =
        '<header>' +
          '<div class="brand">' + (isKo ? '비유 99' : 'Parábolas 99') + '</div>' +
          '<div style="display:flex;gap:8px;">' +
            '<button class="btn ' + (studyMethod === 'card' ? 'btn-primary' : '') + '" onclick="studyMethod=\\'card\\';render()">' + (isKo ? '1. 카드' : '1. Tarjeta') + '</button>' +
            '<button class="btn ' + (studyMethod === 'typing' ? 'btn-primary' : '') + '" onclick="studyMethod=\\'typing\\';render()">' + (isKo ? '2. 타이핑' : '2. Escritura') + '</button>' +
            (studyMethod === 'card' ? '<button class="btn" onclick="hideAnswers=!hideAnswers;render()">' + (isKo ? '정답 보기/가리기' : 'Ver/Ocultar') + '</button>' : '') +
            (currentDay >= 2 ? '<button class="btn" onclick="ensureReviews(currentDay,true);render()">' + (isKo ? '복습 다시 뽑기' : 'Sortear repaso') + '</button>' : '') +
            '<button class="btn" onclick="setLanguage(null)">' + (isKo ? '언어 변경' : 'Idioma') + '</button>' +
          '</div>' +
        '</header>' +
        '<div class="container">' +
          '<div class="controls-bar">' +
            '<div style="display:flex;gap:10px;align-items:center;">' +
              '<select onchange="currentDay=Number(this.value);render()">' + optionsHtml + '</select>' +
            '</div>' +
            '<div style="display:flex;gap:6px;">' +
              '<button class="btn" onclick="originFilter=\\'ALL\\';render()">' + (isKo ? '전체 (10)' : 'Todo (10)') + '</button>' +
              '<button class="btn" onclick="originFilter=\\'NEW\\';render()">' + (isKo ? '신규' : 'Nuevas') + '</button>' +
              '<button class="btn" onclick="originFilter=\\'REVIEW\\';render()">' + (isKo ? '복습' : 'Repaso') + '</button>' +
            '</div>' +
          '</div>' +
          '<div class="grid">' + cardsHtml + '</div>' +
        '</div>';
    }

    render();
  </script>
</body>
</html>`;

  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'parabolas-99-chrome-study.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
