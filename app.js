// DailyLingo app logic

const state = {
  lang: "ja",
  level: "beginner",
  index: 0
};

const els = {
  body: document.body,
  chat: document.getElementById("chat"),
  scene: document.getElementById("convo-scene"),
  title: document.getElementById("convo-title"),
  count: document.getElementById("convo-count"),
  vocabGrid: document.getElementById("vocab-grid"),
  cultureCard: document.getElementById("culture-card"),
  cultureNote: document.getElementById("culture-note"),
  dailyDate: document.getElementById("daily-date"),
  dailyChip: document.getElementById("daily-chip"),
  practiceHint: document.getElementById("practice-hint"),
  toggleReading: document.getElementById("toggle-reading"),
  toggleEnglish: document.getElementById("toggle-english"),
  togglePractice: document.getElementById("toggle-practice")
};

function convos() {
  return DATA[state.lang].levels[state.level];
}

// Pick "today's conversation" deterministically from the date,
// so everyone sees the same one on the same day and it changes daily.
function dailyIndex() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - start) / 86400000);
  return dayOfYear % convos().length;
}

function setLang(lang) {
  state.lang = lang;
  state.index = dailyIndex();
  els.body.dataset.lang = lang;
  document.querySelectorAll(".lang-btn").forEach(b => {
    const active = b.dataset.lang === lang;
    b.classList.toggle("active", active);
    b.setAttribute("aria-selected", active);
  });
  render();
}

function setLevel(level) {
  state.level = level;
  state.index = dailyIndex();
  document.querySelectorAll(".pill").forEach(p => {
    p.classList.toggle("active", p.dataset.level === level);
  });
  render();
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = DATA[state.lang].voice;
  u.rate = 0.92;
  const voice = window.speechSynthesis
    .getVoices()
    .find(v => v.lang.replace("_", "-").startsWith(DATA[state.lang].voice));
  if (voice) u.voice = voice;
  window.speechSynthesis.speak(u);
}

function render() {
  const list = convos();
  const convo = list[state.index];
  const isDaily = state.index === dailyIndex();

  els.scene.textContent = (isDaily ? "⭐ Today's conversation · " : "") + convo.scene;
  els.title.textContent = convo.title;
  els.count.textContent = `${state.index + 1} / ${list.length}`;

  // Chat bubbles
  els.chat.innerHTML = "";
  convo.lines.forEach((line, i) => {
    const sp = convo.speakers[line.s];
    const msg = document.createElement("div");
    msg.className = "msg" + (line.s === 1 ? " right" : "");
    msg.style.animationDelay = `${Math.min(i * 0.06, 0.6)}s`;

    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.textContent = sp.emoji;

    const wrap = document.createElement("div");
    wrap.className = "bubble-wrap";

    const name = document.createElement("div");
    name.className = "speaker-name";
    name.textContent = sp.name;

    const bubble = document.createElement("div");
    bubble.className = "bubble";

    const native = document.createElement("div");
    native.className = "native";
    native.textContent = line.t;

    const speakBtn = document.createElement("button");
    speakBtn.className = "speak-btn";
    speakBtn.textContent = "🔊";
    speakBtn.title = "Listen to this line";
    speakBtn.addEventListener("click", e => {
      e.stopPropagation();
      speak(line.t);
    });
    native.appendChild(speakBtn);

    const reading = document.createElement("div");
    reading.className = "reading";
    reading.textContent = line.r;

    const english = document.createElement("div");
    english.className = "english";
    english.textContent = line.e;

    bubble.append(native, reading, english);
    bubble.addEventListener("click", () => {
      if (els.chat.classList.contains("practice")) {
        bubble.classList.toggle("revealed");
      }
    });

    wrap.append(name, bubble);
    msg.append(avatar, wrap);
    els.chat.appendChild(msg);
  });

  // Vocabulary
  els.vocabGrid.innerHTML = "";
  convo.vocab.forEach(v => {
    const item = document.createElement("div");
    item.className = "vocab-item";
    item.innerHTML = `
      <div class="vocab-word">${v.w}</div>
      <div class="vocab-reading">${v.r}</div>
      <div class="vocab-meaning">${v.m}</div>`;
    els.vocabGrid.appendChild(item);
  });

  // Native speaker note
  if (convo.note) {
    els.cultureCard.hidden = false;
    els.cultureNote.textContent = convo.note;
  } else {
    els.cultureCard.hidden = true;
  }

  applyToggles();
  window.speechSynthesis && window.speechSynthesis.cancel();
}

function applyToggles() {
  els.chat.classList.toggle("hide-reading", !els.toggleReading.checked);
  els.chat.classList.toggle("hide-english", !els.toggleEnglish.checked && !els.togglePractice.checked);
  els.chat.classList.toggle("practice", els.togglePractice.checked);
  els.practiceHint.hidden = !els.togglePractice.checked;
  if (!els.togglePractice.checked) {
    els.chat.querySelectorAll(".bubble.revealed").forEach(b => b.classList.remove("revealed"));
  }
}

// --- Wire up controls ---
document.querySelectorAll(".lang-btn").forEach(b =>
  b.addEventListener("click", () => setLang(b.dataset.lang))
);
document.querySelectorAll(".pill").forEach(p =>
  p.addEventListener("click", () => setLevel(p.dataset.level))
);
document.getElementById("prev-convo").addEventListener("click", () => {
  state.index = (state.index - 1 + convos().length) % convos().length;
  render();
});
document.getElementById("next-convo").addEventListener("click", () => {
  state.index = (state.index + 1) % convos().length;
  render();
});
els.toggleReading.addEventListener("change", applyToggles);
els.toggleEnglish.addEventListener("change", applyToggles);
els.togglePractice.addEventListener("change", applyToggles);

// Some browsers load voices asynchronously; warm the list for speak()
if ("speechSynthesis" in window) window.speechSynthesis.getVoices();

// --- Init ---
els.dailyDate.textContent = new Date().toLocaleDateString("en-US", {
  weekday: "long", month: "long", day: "numeric"
});
els.body.dataset.lang = state.lang;
state.index = dailyIndex();
render();
