# 💬 DailyLingo

**Learn Japanese and Korean through one real conversation a day.**

DailyLingo features natural, native-level dialogues — the way people actually talk, not textbook sentences. A new conversation is featured every day, and you can browse the full library anytime.

## ✨ Features

- 🇯🇵 **Japanese** and 🇰🇷 **Korean** — switch anytime
- 🌱🌿🌳 **Three skill levels** — Beginner (polite basics), Intermediate (casual everyday talk), Advanced (full-speed native speech with real slang)
- 📅 **Daily conversation** — a featured dialogue that rotates every day
- 👆 **Practice mode** — translations are blurred; read each line out loud, then tap to check yourself
- 🔤 **Toggleable readings** — show or hide romaji / romanization as you improve
- 🔊 **Listen to every line** — audio via your browser's built-in Japanese and Korean voices
- 📖 **Key vocabulary** — the words worth remembering from each conversation
- 💡 **Native speaker notes** — the cultural and slang context textbooks skip

## 🚀 Use it

Just open `index.html` in any browser — no install, no build step, no internet required (fonts load nicer online).

Or, with GitHub Pages enabled for this repo, visit it live at **https://jjalww.github.io/daily-lingo/**

## 🗂 How it's built

| File | What it does |
|---|---|
| `index.html` | Page structure |
| `style.css` | All styling — chat bubbles, toggles, levels |
| `data.js` | Every conversation, vocab list, and native note |
| `app.js` | Language/level switching, daily rotation, practice mode, audio |

Plain HTML + CSS + JavaScript. No frameworks, no dependencies.

## ➕ Adding conversations

Open `data.js` and copy any conversation block — each one is just:

```js
{
  scene: "Where it happens",
  title: "What it's about",
  speakers: [{ name: "A", emoji: "🙂" }, { name: "B", emoji: "👩" }],
  note: "A native-speaker tip",
  lines: [
    { s: 0, t: "native text", r: "reading", e: "English" },
    ...
  ],
  vocab: [{ w: "word", r: "reading", m: "meaning" }, ...]
}
```
