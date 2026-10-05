<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<title>For You ❤️ — From Rishabh</title>
<meta name="description" content="A little question from Rishabh, made with love." />
<meta name="theme-color" content="#ffc2d4" />

<!-- Fonts are optional: if they fail to load, elegant system fallbacks are used. -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />

<style>
/* =========================================================
   1. THEME TOKENS
   ========================================================= */
:root {
  --blush: #ffd6e3;
  --rose: #d12a5c;
  --rose-deep: #a8124a;
  --lavender: #c8b6ff;
  --cream: #fff8f1;
  --gold: #d4a24c;
  --gold-light: #f6dfa0;
  --plum: #4a1531;
  --plum-soft: #6b2a4a;
  --glass-border: rgba(255, 255, 255, 0.7);
  --shadow: 0 24px 60px rgba(168, 18, 74, 0.18), 0 6px 18px rgba(120, 60, 160, 0.12);
  --font-script: 'Dancing Script', 'Brush Script MT', 'Segoe Script', cursive;
  --font-body: 'Poppins', 'Segoe UI', system-ui, -apple-system, Roboto, sans-serif;
  --ease-bounce: cubic-bezier(.34, 1.56, .64, 1);
  --ease-soft: cubic-bezier(.22, 1, .36, 1);
}

*, *::before, *::after { box-sizing: border-box; }

html, body {
  margin: 0;
  height: 100%;
  overflow: hidden;            /* screens scroll internally → never any horizontal scroll */
}

body {
  font-family: var(--font-body);
  color: var(--plum);
  background: linear-gradient(135deg, #ffd1dc 0%, #ffb3c9 22%, #e5ccff 50%, #ffd9e6 75%, #fff1e6 100%);
  background-size: 300% 300%;
  animation: bgShift 18s ease-in-out infinite;
  -webkit-tap-highlight-color: transparent;
}
body::before {               /* soft dreamy glows */
  content: "";
  position: fixed; inset: 0;
  pointer-events: none;
  background:
    radial-gradient(40vmax 40vmax at 10% 15%, rgba(255, 255, 255, .55), transparent 60%),
    radial-gradient(35vmax 35vmax at 90% 80%, rgba(200, 182, 255, .45), transparent 60%),
    radial-gradient(30vmax 30vmax at 85% 10%, rgba(255, 160, 190, .35), transparent 60%);
  z-index: 0;
}
@keyframes bgShift {
  0%, 100% { background-position: 0% 50%; }
  50%      { background-position: 100% 50%; }
}

.sr-only {
  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0;
}

/* =========================================================
   2. AMBIENT BACKGROUND (floating hearts, flowers, sparkles)
   ========================================================= */
#bgLayer {
  position: fixed; inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}
.ambient {
  position: absolute; top: 0;
  will-change: transform, opacity;
  animation-name: floatUp;
  animation-timing-function: linear;
  animation-fill-mode: both;
}
.floater { filter: drop-shadow(0 2px 4px rgba(209, 42, 92, .25)); }
.spark {
  border-radius: 50%;
  background: radial-gradient(circle, #fff 0%, rgba(255, 240, 200, .95) 35%, rgba(255, 182, 213, 0) 72%);
  box-shadow: 0 0 10px 3px rgba(255, 225, 240, .85);
}
@keyframes floatUp {
  0%   { transform: translate3d(0, 105vh, 0) rotate(0deg); opacity: 0; }
  10%  { opacity: .9; }
  85%  { opacity: .75; }
  100% { transform: translate3d(var(--drift, 0px), -12vh, 0) rotate(var(--spin, 0deg)); opacity: 0; }
}

/* Cursor heart trail (desktop only) */
.trail {
  position: fixed; z-index: 130;
  pointer-events: none;
  font-size: 14px;
  transform: translate(-50%, -50%);
  animation: trail .9s ease-out forwards;
}
@keyframes trail { to { transform: translate(-50%, -160%) scale(.4); opacity: 0; } }

/* Confetti canvas sits above everything but never blocks clicks */
#confetti {
  position: fixed; inset: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 120;
}

/* =========================================================
   3. TOP UI: MUSIC BUTTON + TOAST
   ========================================================= */
#musicBtn {
  position: fixed; top: 14px; right: 14px; z-index: 110;
  width: 50px; height: 50px;
  display: grid; place-items: center;
  border-radius: 50%;
  border: 1px solid var(--glass-border);
  background: rgba(255, 255, 255, .62);
  -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px);
  box-shadow: 0 8px 20px rgba(168, 18, 74, .18);
  font-size: 22px; line-height: 1;
  cursor: pointer;
  transition: transform .2s ease;
}
#musicBtn:hover { transform: scale(1.08); }
#musicBtn:focus-visible { outline: 3px solid var(--rose); outline-offset: 3px; }
#musicBtn.playing { animation: pulse 2.2s ease-in-out infinite; }
#musicBtn:disabled { opacity: .5; cursor: not-allowed; }
@keyframes pulse {
  0%, 100% { box-shadow: 0 8px 20px rgba(168, 18, 74, .18), 0 0 0 0 rgba(209, 42, 92, .35); }
  50%      { box-shadow: 0 8px 20px rgba(168, 18, 74, .18), 0 0 0 10px rgba(209, 42, 92, 0); }
}

#toast {
  position: fixed; top: 16px; left: 50%; z-index: 115;
  max-width: min(440px, calc(100vw - 150px));
  padding: 12px 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, .9);
  -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px);
  color: var(--plum);
  font-weight: 600; font-size: .98rem; line-height: 1.35;
  text-align: center;
  box-shadow: 0 12px 30px rgba(168, 18, 74, .2);
  border: 1px solid rgba(255, 182, 213, .9);
  transform: translate(-50%, -160%);
  opacity: 0;
  pointer-events: none;
  transition: transform .45s var(--ease-bounce), opacity .3s ease;
}
#toast.show { transform: translate(-50%, 0); opacity: 1; }

/* =========================================================
   4. SCREENS + GLASS CARD
   ========================================================= */
.screen {
  position: fixed; inset: 0; z-index: 2;
  display: flex; flex-direction: column;
  overflow-x: hidden; overflow-y: auto;
  padding: 76px 16px 36px;
  opacity: 0; visibility: hidden;
  transform: scale(.98);
  transition: opacity .8s ease, transform .8s ease, visibility 0s linear .8s;
}
.screen.is-active {
  opacity: 1; visibility: visible; transform: none;
  transition: opacity .8s ease, transform .8s ease, visibility 0s;
}

.card {
  position: relative;
  margin: auto;
  width: min(100%, 580px);
  padding: clamp(22px, 5vw, 40px);
  border-radius: 32px;
  background: linear-gradient(145deg, rgba(255, 255, 255, .6), rgba(255, 255, 255, .3));
  border: 1px solid var(--glass-border);
  -webkit-backdrop-filter: blur(18px) saturate(140%); backdrop-filter: blur(18px) saturate(140%);
  box-shadow: var(--shadow);
  text-align: center;
}
.card::before {            /* thin gold inner frame */
  content: "";
  position: absolute; inset: 9px;
  border-radius: 25px;
  border: 1px solid rgba(212, 162, 76, .4);
  pointer-events: none;
}

/* staggered entrance for anything marked .fade-up on the active screen */
.fade-up { opacity: 0; }
.screen.is-active .fade-up { animation: fadeUp 1s var(--ease-soft) both; }
.screen.is-active .d1 { animation-delay: .15s; }
.screen.is-active .d2 { animation-delay: .35s; }
.screen.is-active .d3 { animation-delay: .6s; }
.screen.is-active .d4 { animation-delay: .85s; }
.screen.is-active .d5 { animation-delay: 1.1s; }
.screen.is-active .d6 { animation-delay: 1.35s; }
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: none; }
}

/* =========================================================
   5. TYPOGRAPHY
   ========================================================= */
.welcome-title {
  font-family: var(--font-script);
  font-weight: 700;
  font-size: clamp(2rem, 7vw, 3.1rem);
  line-height: 1.15;
  color: var(--rose-deep);
  margin: .25em 0 .3em;
  text-shadow: 0 2px 0 rgba(255, 255, 255, .9), 0 6px 18px rgba(209, 42, 92, .2);
}
.intro {
  max-width: 30em;
  margin: 0 auto 1.1em;
  font-size: clamp(.98rem, 2.8vw, 1.08rem);
  line-height: 1.75;
  color: var(--plum-soft);
}
.question {
  font-family: var(--font-script);
  font-weight: 700;
  font-size: clamp(2.3rem, 9vw, 3.8rem);
  line-height: 1.15;
  color: var(--rose);
  margin: .15em 0 .55em;
}
.screen.is-active .question.glow { animation: fadeUp 1s var(--ease-soft) both .6s, glow 2.8s ease-in-out 1.6s infinite; }
@keyframes glow {
  0%, 100% { text-shadow: 0 0 8px rgba(255, 255, 255, .95), 0 0 18px rgba(255, 105, 150, .3); }
  50%      { text-shadow: 0 0 12px #fff, 0 0 30px rgba(255, 80, 130, .6), 0 0 46px rgba(200, 150, 255, .5); }
}

/* =========================================================
   6. BUTTONS
   ========================================================= */
.btn-row {
  display: flex; justify-content: center; align-items: center;
  flex-wrap: wrap;
  gap: clamp(14px, 4vw, 30px);
  min-height: 92px;
  padding: 12px 0;
}
.btn {
  position: relative;
  min-width: 132px; min-height: 54px;
  padding: 16px 30px;
  border: 0; border-radius: 999px;
  font: 600 clamp(1rem, 3.6vw, 1.15rem)/1 var(--font-body);
  cursor: pointer;
  touch-action: manipulation;
  user-select: none; -webkit-user-select: none;
  transition: transform .25s ease, box-shadow .25s ease, scale .4s var(--ease-bounce), filter .25s ease;
}
.btn:focus-visible { outline: 3px solid #fff; outline-offset: 3px; box-shadow: 0 0 0 7px var(--rose); }

.btn-yes {
  z-index: 3;
  color: #fff;
  background: linear-gradient(135deg, #ff5c8a 0%, #e63e6d 50%, #c2185b 100%);
  box-shadow: 0 10px 24px rgba(230, 62, 109, .45), inset 0 1px 0 rgba(255, 255, 255, .45);
  scale: var(--yes-scale, 1);              /* grows after each No attempt */
  animation: bounce 2.2s ease-in-out infinite;
}
.btn-yes:hover { filter: brightness(1.06); box-shadow: 0 14px 34px rgba(230, 62, 109, .6), inset 0 1px 0 rgba(255, 255, 255, .45); }
.btn-yes::after {          /* shimmering highlight */
  content: "";
  position: absolute; inset: 0;
  border-radius: inherit;
  background: linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, .45) 50%, transparent 70%);
  background-size: 250% 100%;
  animation: shimmer 3.2s ease-in-out infinite;
  pointer-events: none;
}
@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
@keyframes shimmer { 0% { background-position: 150% 0; } 60%, 100% { background-position: -100% 0; } }

.btn-no {
  color: var(--plum);
  background: linear-gradient(135deg, #ffffff, #f3ecff);
  border: 1.5px solid rgba(200, 182, 255, .95);
  box-shadow: 0 8px 20px rgba(120, 60, 160, .18);
}
.btn-no:hover { transform: translateY(-2px); }

/* The playful, elusive No button */
#modalNo.elusive {
  position: fixed;
  z-index: 113;
  margin: 0;
  transition: left .5s cubic-bezier(.34, 1.3, .64, 1), top .5s cubic-bezier(.34, 1.3, .64, 1), transform .3s ease;
}
#modalNo.elusive:hover { transform: rotate(-7deg) scale(.97); }
#modalNo.no-anim { transition: none !important; }
@keyframes pant { 0%, 100% { scale: 1; } 50% { scale: .95; } }

.link-btn {
  margin-top: 8px;
  padding: 8px 12px;
  border: 0; border-radius: 10px;
  background: none;
  color: var(--plum-soft);
  font: 500 .92rem var(--font-body);
  text-decoration: underline; text-underline-offset: 3px;
  cursor: pointer;
}
.link-btn:hover { background: rgba(255, 255, 255, .45); }
.link-btn:focus-visible { outline: 3px solid var(--rose); outline-offset: 2px; }

/* =========================================================
   7. CSS ILLUSTRATION — the cute couple
   ========================================================= */
.couple { position: relative; width: 230px; height: 176px; margin: 0 auto; }
.couple .person {
  position: absolute; bottom: 8px;
  width: 80px; height: 156px;
  animation: bob 3.2s ease-in-out infinite;
}
.couple .boy  { left: 32px; }
.couple .girl { right: 32px; animation-delay: -1.6s; }
@keyframes bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }

.ground-shadow {
  position: absolute; bottom: 0; left: 50%;
  width: 180px; height: 18px;
  transform: translateX(-50%);
  background: radial-gradient(ellipse at center, rgba(168, 18, 74, .22), transparent 70%);
}

.couple .head {
  position: absolute; left: 12px; top: 8px; z-index: 3;
  width: 56px; height: 56px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #fff0e4 0%, #ffd9bf 45%, #f2b48f 100%);
  box-shadow: inset -4px -6px 10px rgba(200, 110, 80, .25), 0 4px 8px rgba(0, 0, 0, .08);
}
.couple .eye {
  position: absolute; top: 27px;
  width: 7px; height: 9px;
  border-radius: 50%;
  background: #3a1f2b;
  animation: blink 4.5s infinite;
}
.couple .eye::after {
  content: ""; position: absolute; top: 1.5px; left: 1.5px;
  width: 2.5px; height: 2.5px; border-radius: 50%; background: #fff;
}
.couple .eye.l { left: 15px; }
.couple .eye.r { right: 15px; }
.couple .girl .eye { animation-delay: -2s; }
@keyframes blink { 0%, 92%, 100% { transform: scaleY(1); } 95% { transform: scaleY(.1); } }
.couple .cheek {
  position: absolute; top: 36px;
  width: 11px; height: 6px; border-radius: 50%;
  background: rgba(255, 105, 140, .5);
}
.couple .cheek.l { left: 6px; }
.couple .cheek.r { right: 6px; }
.couple .mouth {
  position: absolute; top: 38px; left: 50%;
  width: 12px; height: 6px;
  transform: translateX(-50%);
  border: 2.5px solid #9b2c4a; border-top: 0;
  border-radius: 0 0 12px 12px;
}

/* Boy */
.hair-boy {
  position: absolute; left: -3px; top: -6px;
  width: 62px; height: 24px;
  border-radius: 30px 30px 10px 16px;
  background: linear-gradient(160deg, #6b4030, #3d2218);
  box-shadow: inset 0 3px 4px rgba(255, 255, 255, .15);
}
.hair-boy::after {
  content: ""; position: absolute; left: 6px; bottom: -4px;
  width: 22px; height: 9px;
  border-radius: 0 0 12px 12px;
  background: #4a2a1d;
  transform: rotate(8deg);
}
.shirt {
  position: absolute; left: 17px; top: 58px; z-index: 2;
  width: 46px; height: 60px;
  border-radius: 18px 18px 10px 10px;
  background: linear-gradient(160deg, #a5b9ff, #5b78e8);
  box-shadow: inset -5px -6px 10px rgba(0, 0, 40, .15);
}
.shirt::after {
  content: "♥"; position: absolute; left: 9px; top: 10px;
  font-size: 12px; color: #ff6b9a;
}

/* Girl */
.hair-back {
  position: absolute; left: 6px; top: 2px; z-index: 1;
  width: 68px; height: 100px;
  border-radius: 34px 34px 22px 22px;
  background: linear-gradient(180deg, #7a3b2a, #56281c);
}
.bangs {
  position: absolute; left: -3px; top: -5px;
  width: 62px; height: 22px;
  border-radius: 30px 30px 14px 14px;
  background: linear-gradient(170deg, #8a4632, #62301f);
}
.bow { position: absolute; top: -13px; right: -6px; font-size: 20px; transform: rotate(18deg); }
.dress {
  position: absolute; left: 8px; top: 58px; z-index: 2;
  width: 64px; height: 64px;
  background: linear-gradient(160deg, #ffc0d4, #ff6f98);
  clip-path: polygon(28% 0, 72% 0, 100% 100%, 0 100%);
}
.dress::after {
  content: ""; position: absolute; left: 0; right: 0; top: 16px; height: 5px;
  background: rgba(255, 255, 255, .55);
}

/* Arms & legs */
.couple .arm {
  position: absolute; top: 64px; z-index: 1;
  width: 11px; height: 40px;
  border-radius: 6px;
  background: linear-gradient(90deg, #ffd9bf, #f2b48f);
  transform-origin: 50% 4px;
  transition: transform .9s var(--ease-soft) .9s;
}
.boy .arm { background: linear-gradient(180deg, #8ea6ff 0 45%, #f7c6a3 45%); }
.boy .arm.out  { left: 10px; transform: rotate(14deg); }
.boy .arm.in   { left: 59px; transform: rotate(-42deg); }
.girl .arm.out { right: 10px; transform: rotate(-14deg); }
.girl .arm.in  { left: 10px; transform: rotate(42deg); }

.couple .leg {
  position: absolute; top: 114px;
  width: 11px; height: 34px;
  border-radius: 5px;
  background: #4b3f72;
  border-bottom: 7px solid #2d2342;
}
.girl .leg { top: 118px; height: 30px; background: #f7c6a3; border-bottom-color: #d12a5c; }
.couple .leg.l { left: 25px; }
.couple .leg.r { right: 25px; }

.hand-heart {
  position: absolute; left: 50%; top: 94px; z-index: 4;
  font-size: 16px;
  transform: translateX(-50%);
  animation: beat 1.2s ease-in-out infinite;
}
.couple-heart {
  position: absolute; left: 50%; top: -8px;
  font-size: 26px;
  transform: translateX(-50%);
  animation: floatHeart 2.6s ease-in-out infinite;
}
@keyframes beat { 0%, 100% { transform: translateX(-50%) scale(1); } 50% { transform: translateX(-50%) scale(1.25); } }
@keyframes floatHeart {
  0%, 100% { transform: translateX(-50%) translateY(0) scale(1); }
  50%      { transform: translateX(-50%) translateY(-8px) scale(1.1); }
}

/* Celebration: they come together and hug */
.couple.together .boy  { animation: boyIn 1.6s var(--ease-soft) both, bob 3.2s ease-in-out 1.6s infinite; }
.couple.together .girl { animation: girlIn 1.6s var(--ease-soft) both, bob 3.2s ease-in-out 1.6s infinite; }
.couple.together .boy .arm.in  { transform: rotate(-72deg); }
.couple.together .girl .arm.in { transform: rotate(72deg); }
.couple.together .couple-heart { font-size: 34px; animation: popIn .7s var(--ease-bounce) 1.3s both, floatHeart 2.6s ease-in-out 2s infinite; }
@keyframes boyIn  { from { translate: -58px 0; rotate: 0deg; } to { translate: 8px 0; rotate: 7deg; } }
@keyframes girlIn { from { translate: 58px 0;  rotate: 0deg; } to { translate: -8px 0; rotate: -7deg; } }
@keyframes popIn  { from { scale: 0; opacity: 0; } to { scale: 1; opacity: 1; } }
.couple.jump { animation: jump .8s ease; }
@keyframes jump {
  0%, 100% { translate: 0 0; } 30% { translate: 0 -20px; } 60% { translate: 0 0; } 78% { translate: 0 -8px; }
}

/* =========================================================
   8. CELEBRATION SCREEN
   ========================================================= */
.celeb-visual {
  display: flex; align-items: flex-end; justify-content: center;
  flex-wrap: wrap;
  gap: 10px 22px;
}
.ring-wrap {
  position: relative;
  width: 110px; height: 132px;
  animation: ringFloat 3s ease-in-out infinite;
}
.ring-band {
  position: absolute; bottom: 6px; left: 50%;
  width: 92px; height: 92px;
  margin-left: -46px;
  border-radius: 50%;
  border: 10px solid #e2b55a;
  border-top-color: #f8dc93;
  border-left-color: #edc56f;
  box-shadow:
    0 0 0 1px #b98a2e,
    inset 0 0 0 2px #fff1c4,
    0 0 26px rgba(246, 200, 100, .85),
    inset 0 0 14px rgba(255, 240, 200, .8);
  animation: ringGlow 2.4s ease-in-out infinite;
}
.gem-seat {
  position: absolute; top: 36px; left: 50%;
  width: 26px; height: 12px;
  margin-left: -13px;
  background: linear-gradient(180deg, #f6dfa0, #c9963d);
  clip-path: polygon(0 0, 100% 0, 75% 100%, 25% 100%);
  z-index: 1;
}
.gem {
  position: absolute; top: 6px; left: 50%;
  width: 34px; height: 34px;
  margin-left: -17px;
  transform: rotate(45deg);
  border-radius: 6px;
  background: linear-gradient(135deg, #ffffff 0%, #dcf4ff 35%, #9fd3ff 60%, #ffffff 100%);
  box-shadow: 0 0 18px 6px rgba(255, 255, 255, .9), 0 0 36px rgba(180, 220, 255, .85);
  z-index: 2;
}
.ring-wrap::before, .ring-wrap::after {
  content: "✨"; position: absolute; font-size: 18px;
  animation: twinkle 1.8s ease-in-out infinite;
}
.ring-wrap::before { top: -8px; right: -10px; }
.ring-wrap::after  { top: 44px; left: -14px; animation-delay: -.9s; }
@keyframes ringFloat { 0%, 100% { translate: 0 0; } 50% { translate: 0 -8px; } }
@keyframes ringGlow {
  0%, 100% { filter: drop-shadow(0 0 4px rgba(255, 220, 140, .6)); }
  50%      { filter: drop-shadow(0 0 14px rgba(255, 220, 140, 1)); }
}
@keyframes twinkle { 0%, 100% { opacity: .3; scale: .7; } 50% { opacity: 1; scale: 1.15; } }

.celeb-title {
  font-family: var(--font-script);
  font-weight: 700;
  font-size: clamp(2rem, 7.5vw, 3rem);
  line-height: 1.2;
  color: var(--rose-deep);
  margin: .45em 0 .5em;
  text-shadow: 0 2px 0 rgba(255, 255, 255, .9), 0 0 24px rgba(255, 120, 160, .45);
  outline: none;
}
.love-letter {
  position: relative;
  text-align: left;
  padding: clamp(18px, 4vw, 26px);
  border-radius: 22px;
  background: rgba(255, 248, 241, .8);
  border: 1px solid rgba(212, 162, 76, .35);
  box-shadow: inset 0 0 30px rgba(255, 214, 227, .5);
  font-size: clamp(.97rem, 2.7vw, 1.05rem);
  line-height: 1.8;
  color: var(--plum);
}
.love-letter p { margin: 0 0 .9em; }
.love-letter p:last-child { margin-bottom: 0; }
.love-letter .lead { font-weight: 600; color: var(--rose-deep); }
.signature {
  font-family: var(--font-script);
  font-weight: 700;
  font-size: clamp(1.7rem, 6vw, 2.2rem);
  color: var(--rose-deep);
  margin: .7em 0 .3em;
}
.celebrate-row { margin-top: 10px; }

/* =========================================================
   9. MODALS
   ========================================================= */
.modal-backdrop {
  position: fixed; inset: 0; z-index: 112;
  display: flex; align-items: center; justify-content: center;
  padding: 16px;
  background: rgba(74, 21, 49, .3);
  -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px);
  opacity: 0;
  transition: opacity .35s ease;
}
.modal-backdrop[hidden] { display: none; }
.modal-backdrop.open { opacity: 1; }
.modal {
  width: min(100%, 500px);
  max-height: calc(100% - 8px);
  overflow-y: auto;
  padding: 26px clamp(18px, 4vw, 28px) 20px;
  border-radius: 28px;
  background: linear-gradient(160deg, rgba(255, 255, 255, .95), rgba(255, 238, 246, .92));
  border: 1px solid #fff;
  box-shadow: 0 30px 70px rgba(74, 21, 49, .3);
  text-align: center;
  transform: translateY(24px) scale(.94);
  transition: transform .5s var(--ease-bounce);
}
.modal-backdrop.open .modal { transform: none; }
.modal h2 {
  font-family: var(--font-script);
  font-weight: 700;
  font-size: clamp(1.9rem, 6vw, 2.4rem);
  color: var(--rose-deep);
  margin: .3em 0 .2em;
}
.modal p { line-height: 1.6; margin: .4em 0; }
.modal .plea { font-weight: 600; }
.reasons { list-style: none; margin: .7em 0; padding: 0; display: grid; gap: 8px; text-align: left; }
.reasons li {
  padding: 9px 13px;
  border-radius: 14px;
  background: rgba(255, 214, 227, .5);
  font-size: .95rem; line-height: 1.5;
}
.modal-backdrop.open .reasons li { animation: fadeUp .5s var(--ease-soft) both; }
.modal-backdrop.open .reasons li:nth-child(1) { animation-delay: .15s; }
.modal-backdrop.open .reasons li:nth-child(2) { animation-delay: .25s; }
.modal-backdrop.open .reasons li:nth-child(3) { animation-delay: .35s; }
.modal-backdrop.open .reasons li:nth-child(4) { animation-delay: .45s; }
.modal-backdrop.open .reasons li:nth-child(5) { animation-delay: .55s; }
.modal-backdrop.open .reasons li:nth-child(6) { animation-delay: .65s; }
.story { font-family: var(--font-script); font-size: 1.45rem; color: var(--rose-deep); }
.modal .btn-row {              /* buttons stay pinned in view even if the pop-up scrolls */
  min-height: 0;
  position: sticky; bottom: -20px; z-index: 2;
  margin: 0 -8px -20px;
  padding: 14px 8px 20px;
  background: linear-gradient(180deg, rgba(255, 238, 246, 0), rgba(255, 238, 246, .97) 30%);
}
.reasons li { padding: 7px 12px; }

/* Animated sad face */
.sad-face {
  position: relative;
  width: 76px; height: 76px;
  margin: 0 auto;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #fff6c9, #ffd76a 60%, #f4b73f);
  box-shadow: inset -5px -7px 12px rgba(200, 120, 0, .25), 0 6px 16px rgba(240, 170, 40, .35);
  animation: wobble 2.4s ease-in-out infinite;
}
.sad-face .sf-eye {
  position: absolute; top: 24px;
  width: 9px; height: 12px; border-radius: 50%;
  background: #5a2a00;
}
.sad-face .sf-eye::after {
  content: ""; position: absolute; top: 2px; left: 2px;
  width: 3px; height: 3px; border-radius: 50%; background: #fff;
}
.sad-face .sf-eye.l { left: 21px; }
.sad-face .sf-eye.r { right: 21px; }
.sad-face .frown {
  position: absolute; bottom: 14px; left: 50%;
  width: 24px; height: 10px;
  transform: translateX(-50%);
  border: 3px solid #7a3b00; border-bottom: 0;
  border-radius: 24px 24px 0 0;
}
.sad-face .tear {
  position: absolute; left: 19px; top: 36px;
  width: 9px; height: 13px;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  background: linear-gradient(180deg, #bfe6ff, #6cbcf5);
  animation: tear 1.8s ease-in infinite;
}
@keyframes wobble { 0%, 100% { rotate: -5deg; } 50% { rotate: 5deg; } }
@keyframes tear {
  0%   { transform: translateY(0) scale(.6); opacity: 0; }
  20%  { opacity: 1; transform: translateY(0) scale(1); }
  100% { transform: translateY(26px) scale(.9); opacity: 0; }
}

/* =========================================================
   10. RESPONSIVE + REDUCED MOTION
   ========================================================= */
@media (max-width: 480px) {
  .screen { padding: 72px 12px 28px; }
  .couple { scale: .82; margin: -14px auto -18px; }
  .btn { padding: 14px 22px; min-width: 118px; }
  .ring-wrap { scale: .85; }
  .celeb-visual { gap: 0 4px; }
}
@media (max-height: 640px) and (min-width: 481px) {
  .couple { scale: .85; margin: -12px auto -14px; }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    animation-delay: 0s !important;
    transition-duration: .15s !important;
    transition-delay: 0s !important;
  }
  body { animation: none; }
  .ambient, .trail { display: none !important; }
}
</style>
</head>
<body>

<noscript>
  <p style="position:relative;z-index:5;text-align:center;padding:2rem;font-size:1.1rem;">
    Please enable JavaScript to see Rishabh's little surprise ❤️
  </p>
</noscript>

<!-- Ambient layers -->
<div id="bgLayer" aria-hidden="true"></div>
<canvas id="confetti" aria-hidden="true"></canvas>

<!-- Music toggle (audio is generated in the browser — no files to fail) -->
<button id="musicBtn" type="button" aria-pressed="false" aria-label="Play romantic music" title="Play romantic music">🎵</button>

<!-- Playful messages live region -->
<div id="toast" role="status" aria-live="polite"></div>

<!-- Reusable couple illustration -->
<template id="coupleTpl">
  <div class="couple" aria-hidden="true">
    <div class="couple-heart">💖</div>
    <div class="person boy">
      <div class="head">
        <div class="hair-boy"></div>
        <i class="eye l"></i><i class="eye r"></i>
        <i class="cheek l"></i><i class="cheek r"></i>
        <i class="mouth"></i>
      </div>
      <div class="arm out"></div>
      <div class="arm in"></div>
      <div class="shirt"></div>
      <div class="leg l"></div><div class="leg r"></div>
    </div>
    <div class="person girl">
      <div class="hair-back"></div>
      <div class="head">
        <div class="bangs"></div>
        <span class="bow">🎀</span>
        <i class="eye l"></i><i class="eye r"></i>
        <i class="cheek l"></i><i class="cheek r"></i>
        <i class="mouth"></i>
      </div>
      <div class="arm out"></div>
      <div class="arm in"></div>
      <div class="dress"></div>
      <div class="leg l"></div><div class="leg r"></div>
    </div>
    <div class="hand-heart">❤️</div>
    <div class="ground-shadow"></div>
  </div>
</template>

<main>
  <!-- ============ SCREEN 1: WELCOME / PROPOSAL ============ -->
  <section id="welcome" class="screen" aria-labelledby="welcomeTitle">
    <div class="card">
      <div class="fade-up d1" data-couple></div>
      <h1 id="welcomeTitle" class="welcome-title fade-up d2">Welcome to Rishabh's World ❤️</h1>
      <p class="intro fade-up d3">My world became more beautiful the moment you became a part of it. And today, I have one little question for you...</p>
      <h2 class="question glow fade-up">Will You Be My Wife? 💍❤️</h2>
      <div class="btn-row fade-up d5" id="btnRow">
        <button type="button" class="btn btn-yes" id="yesBtn">Yes! ❤️</button>
        <button type="button" class="btn btn-no" id="noBtn">No 🙈</button>
      </div>
    </div>
  </section>

  <!-- ============ SCREEN 2: CELEBRATION ============ -->
  <section id="celebration" class="screen" aria-labelledby="celebTitle">
    <div class="card">
      <div class="celeb-visual fade-up d1">
        <div data-couple id="celebCouple"></div>
        <div class="ring-wrap" aria-hidden="true">
          <div class="gem"></div>
          <div class="gem-seat"></div>
          <div class="ring-band"></div>
        </div>
      </div>

      <h1 id="celebTitle" class="celeb-title fade-up d2" tabindex="-1">You Just Made Me the Happiest Boy Alive! ❤️🥹</h1>

      <div class="love-letter fade-up d3">
        <p class="lead">My love, thank you for choosing me. ❤️</p>
        <p>You have no idea how much this moment means to me. I don't promise that every day will be perfect, but I promise to stand beside you, make you smile when life gets hard, celebrate every little happiness with you, and keep choosing you, again and again.</p>
        <p>I want to be the person you share your dreams with, the hand you hold through every storm, and the one who makes you feel loved even on your most ordinary days.</p>
        <p>If I get to call you my wife one day, I'll consider myself one of the luckiest people in this world.</p>
        <p class="lead">Here's to our little forever. 💍💕</p>
      </div>

      <p class="signature fade-up d4">Forever Yours, Rishabh ❤️</p>

      <div class="celebrate-row fade-up d5">
        <button type="button" class="btn btn-yes" id="celebrateBtn">Celebrate Our Love! 🎉</button>
      </div>
      <div class="fade-up d6">
        <button type="button" class="link-btn" id="replayBtn">↺ See the question again</button>
      </div>
    </div>
  </section>
</main>

<!-- ============ MODAL: first "No" ============ -->
<div id="sureModal" class="modal-backdrop" hidden>
  <div class="modal" role="dialog" aria-modal="true" aria-labelledby="sureTitle" aria-describedby="sureBody">
    <div class="sad-face" aria-hidden="true">
      <i class="sf-eye l"></i><i class="sf-eye r"></i><i class="frown"></i><i class="tear"></i>
    </div>
    <h2 id="sureTitle">Wait... Are You Sure? 🥺💔</h2>
    <div id="sureBody">
      <p class="plea">Think about it one more time, please! 🥹</p>
      <ul class="reasons">
        <li>I'm a good boy... most of the time! 😇</li>
        <li>I promise to make you laugh, even with my terrible jokes. 😂</li>
        <li>I'll be your personal photographer, snack partner, and travel buddy. 📸🍕🌍</li>
        <li>I'll listen to your stories, even the ones you've told me a hundred times. ❤️</li>
        <li>I'll annoy you a little, love you a lot, and always try to make you smile. 🫶</li>
        <li>Someone like Rishabh comes with a lifetime supply of hugs! 🤗</li>
      </ul>
      <p class="story">And honestly... wouldn't our story be beautiful? ❤️</p>
    </div>
    <div class="btn-row">
      <button type="button" class="btn btn-yes" id="modalYes">Okay, YES! ❤️</button>
      <button type="button" class="btn btn-no" id="modalNo">Still No 🙈</button>
    </div>
  </div>
</div>

<script>
(function () {
  'use strict';

  /* ---------------------------------------------------------
     Helpers & environment checks
     --------------------------------------------------------- */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const rand = (a, b) => a + Math.random() * (b - a);
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];

  const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  let reduceMotion = mqReduce.matches;
  if (mqReduce.addEventListener) mqReduce.addEventListener('change', e => { reduceMotion = e.matches; });
  const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ---------------------------------------------------------
     Couple illustration: clone the template into each slot
     --------------------------------------------------------- */
  const tpl = $('#coupleTpl');
  document.querySelectorAll('[data-couple]').forEach(slot => {
    slot.appendChild(tpl.content.cloneNode(true));
  });

  /* ---------------------------------------------------------
     Ambient background: spawns floating hearts, flowers and
     glowing sparkles that drift upward and remove themselves.
     --------------------------------------------------------- */
  const bgLayer = $('#bgLayer');
  const AMBIENT = ['❤️', '💕', '💖', '💗', '🌸', '🌷', '🌼', '✿', '💞'];
  let ambientBoost = false;

  function spawnAmbient(prewarm) {
    if (document.hidden || reduceMotion) return;
    const el = document.createElement('span');
    const isSpark = Math.random() < 0.35;
    el.className = isSpark ? 'ambient spark' : 'ambient floater';
    if (isSpark) {
      const s = rand(4, 9);
      el.style.width = el.style.height = s + 'px';
    } else {
      el.textContent = pick(AMBIENT);
      el.style.fontSize = rand(14, 30) + 'px';
      if (el.textContent === '✿') el.style.color = pick(['#ff8fb1', '#c8b6ff', '#f6dfa0']);
    }
    el.style.left = rand(0, 97) + '%';
    const dur = rand(9, 17);
    const delay = prewarm ? -rand(0, dur * 0.9) : 0;   // negative delay = already mid-flight
    el.style.animationDuration = dur + 's';
    el.style.animationDelay = delay + 's';
    el.style.setProperty('--drift', rand(-60, 60) + 'px');
    el.style.setProperty('--spin', rand(-45, 45) + 'deg');
    bgLayer.appendChild(el);
    setTimeout(() => el.remove(), (dur + delay) * 1000 + 150);
  }
  for (let i = 0; i < 18; i++) spawnAmbient(true);
  (function ambientLoop() {
    spawnAmbient(false);
    if (ambientBoost) spawnAmbient(false);
    setTimeout(ambientLoop, 650);
  })();

  /* ---------------------------------------------------------
     Romantic cursor trail (desktop, motion allowed only)
     --------------------------------------------------------- */
  if (hasFinePointer) {
    let lastTrail = 0;
    window.addEventListener('pointermove', e => {
      if (reduceMotion || e.pointerType !== 'mouse') return;
      const now = performance.now();
      if (now - lastTrail < 70) return;
      lastTrail = now;
      const t = document.createElement('span');
      t.className = 'trail';
      t.setAttribute('aria-hidden', 'true');
      t.textContent = Math.random() < 0.6 ? '💗' : '✨';
      t.style.left = e.clientX + 'px';
      t.style.top = e.clientY + 'px';
      document.body.appendChild(t);
      setTimeout(() => t.remove(), 950);
    }, { passive: true });
  }

  /* ---------------------------------------------------------
     Confetti engine (canvas): hearts, ribbons, roses, sparkles
     --------------------------------------------------------- */
  const canvas = $('#confetti');
  const ctx = canvas.getContext('2d');
  const COLORS = ['#ff4d79', '#ff8fab', '#ffd166', '#c8b6ff', '#ffffff', '#e63e6d', '#f6dfa0', '#ffb3c9'];
  const EMOJI = ['🌹', '💖', '✨', '💕', '❤️', '🌸'];
  let particles = [];
  let rafId = null;

  function sizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  sizeCanvas();

  function makeParticle(x, y, vx, vy, g, maxLife) {
    const r = Math.random();
    return {
      x, y, vx, vy, g,
      rot: rand(0, Math.PI * 2), vr: rand(-0.2, 0.2),
      size: rand(6, 13),
      color: pick(COLORS),
      kind: r < 0.5 ? 'rect' : r < 0.8 ? 'heart' : 'emoji',
      emoji: pick(EMOJI),
      life: 0, max: maxLife
    };
  }

  /** Explosion of confetti from a point. */
  function burst(x, y, count) {
    const n = reduceMotion ? Math.round(count / 5) : count;
    for (let i = 0; i < n; i++) {
      const a = rand(0, Math.PI * 2);
      const sp = rand(4, 13);
      particles.push(makeParticle(x, y, Math.cos(a) * sp, Math.sin(a) * sp - 4, rand(0.16, 0.26), rand(110, 190)));
    }
    startConfetti();
  }

  /** Gentle confetti rain falling across the whole screen. */
  function rain(count) {
    const n = reduceMotion ? Math.round(count / 5) : count;
    for (let i = 0; i < n; i++) {
      particles.push(makeParticle(rand(0, window.innerWidth), rand(-200, -10), rand(-1.2, 1.2), rand(1.5, 4), rand(0.02, 0.05), rand(260, 380)));
    }
    startConfetti();
  }

  function drawHeart(s) {
    ctx.beginPath();
    ctx.moveTo(0, s * 0.3);
    ctx.bezierCurveTo(0, 0, -s / 2, 0, -s / 2, s * 0.3);
    ctx.bezierCurveTo(-s / 2, s * 0.6, 0, s * 0.8, 0, s);
    ctx.bezierCurveTo(0, s * 0.8, s / 2, s * 0.6, s / 2, s * 0.3);
    ctx.bezierCurveTo(s / 2, 0, 0, 0, 0, s * 0.3);
    ctx.fill();
  }

  function startConfetti() { if (!rafId) rafId = requestAnimationFrame(tickConfetti); }

  /** Animation loop: physics + drawing; stops itself when empty. */
  function tickConfetti() {
    const W = window.innerWidth, H = window.innerHeight;
    ctx.clearRect(0, 0, W, H);
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.vx *= 0.985;
      p.vy = p.vy * 0.99 + p.g;
      p.x += p.vx; p.y += p.vy;
      p.rot += p.vr;
      p.life++;
      const fadeStart = p.max * 0.7;
      const alpha = p.life < fadeStart ? 1 : 1 - (p.life - fadeStart) / (p.max - fadeStart);
      if (alpha <= 0 || p.y > H + 50) { particles.splice(i, 1); continue; }
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      if (p.kind === 'rect') {
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      } else if (p.kind === 'heart') {
        ctx.translate(0, -p.size / 2);
        drawHeart(p.size * 1.3);
      } else {
        ctx.font = (p.size * 2) + 'px serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(p.emoji, 0, 0);
      }
      ctx.restore();
    }
    if (particles.length) {
      rafId = requestAnimationFrame(tickConfetti);
    } else {
      rafId = null;
      ctx.clearRect(0, 0, W, H);
    }
  }

  /* ---------------------------------------------------------
     Background music: an original, gentle music-box melody
     synthesized with the Web Audio API (no external files).
     Starts only after a user interaction (autoplay-safe).
     --------------------------------------------------------- */
  const Music = (function () {
    const AC = window.AudioContext || window.webkitAudioContext;
    let ac = null, master = null, bus = null, timer = null;
    let started = false, muted = false, nextTime = 0, step = 0;
    const STEP = 0.32;                       // seconds per eighth note
    const VOLUME = 0.7;
    const midi = n => 440 * Math.pow(2, (n - 69) / 12);
    // C – Am – F – G (bass + chord tones)
    const CHORDS = [[48, 55, 60, 64], [45, 52, 57, 60], [41, 48, 53, 57], [43, 50, 55, 59]];
    // 4 bars x 8 steps; 0 = rest
    const MELODY = [76, 0, 79, 0, 77, 76, 74, 0,
                    72, 0, 76, 0, 74, 72, 71, 0,
                    69, 0, 72, 0, 77, 76, 74, 0,
                    74, 0, 71, 0, 74, 76, 79, 0];
    const ARP = [0, 1, 2, 3, 2, 1, 2, 3];

    function tone(freq, t, dur, vol, type) {
      const o = ac.createOscillator();
      const g = ac.createGain();
      o.type = type;
      o.frequency.setValueAtTime(freq, t);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(vol, t + 0.015);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g); g.connect(bus);
      o.start(t); o.stop(t + dur + 0.05);
    }

    function playStep(s, t) {
      const bar = Math.floor(s / 8) % 4, beat = s % 8;
      const chord = CHORDS[bar];
      tone(midi(chord[ARP[beat]]), t, 0.9, 0.045, 'triangle');
      if (beat === 0) tone(midi(chord[0] - 12), t, 2.4, 0.06, 'sine');
      const m = MELODY[s % 32];
      if (m) {
        tone(midi(m), t, 1.3, 0.085, 'sine');
        tone(midi(m) * 2, t, 0.5, 0.012, 'sine');   // music-box shimmer
      }
    }

    function scheduler() {
      while (nextTime < ac.currentTime + 0.2) {
        playStep(step, nextTime);
        nextTime += STEP;
        step = (step + 1) % 32;
      }
    }

    function start() {
      if (started) return true;
      if (!AC) return false;
      try {
        ac = new AC();
        master = ac.createGain();
        master.gain.value = 0;
        master.connect(ac.destination);
        bus = ac.createGain();
        bus.connect(master);
        // soft echo for a dreamy feel
        const delay = ac.createDelay();
        delay.delayTime.value = 0.28;
        const fb = ac.createGain(); fb.gain.value = 0.3;
        const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2200;
        const wet = ac.createGain(); wet.gain.value = 0.35;
        bus.connect(delay); delay.connect(fb); fb.connect(delay);
        delay.connect(lp); lp.connect(wet); wet.connect(master);

        if (ac.state === 'suspended') ac.resume();
        nextTime = ac.currentTime + 0.1;
        step = 0;
        timer = setInterval(scheduler, 60);
        master.gain.setTargetAtTime(VOLUME, ac.currentTime, 0.8);
        started = true; muted = false;
      } catch (err) {
        console.warn('Music unavailable:', err);
        started = false;
      }
      return started;
    }

    function toggle() {
      if (!started) return start();
      muted = !muted;
      if (!muted && ac.state === 'suspended') ac.resume();
      master.gain.setTargetAtTime(muted ? 0 : VOLUME, ac.currentTime, 0.15);
      return true;
    }

    document.addEventListener('visibilitychange', () => {
      if (!ac) return;
      if (document.hidden) ac.suspend();
      else if (!muted) ac.resume();
    });

    return {
      available: !!AC,
      start, toggle,
      isStarted: () => started,
      isMuted: () => muted
    };
  })();

  const musicBtn = $('#musicBtn');

  /** Keeps the music button icon / labels in sync with the audio state. */
  function updateMusicBtn() {
    let icon, label, pressed;
    if (!Music.available) {
      musicBtn.disabled = true;
      icon = '🎵'; label = 'Music is not supported in this browser'; pressed = false;
    } else if (!Music.isStarted()) {
      icon = '🎵'; label = 'Play romantic music'; pressed = false;
    } else if (Music.isMuted()) {
      icon = '🔇'; label = 'Unmute music'; pressed = false;
    } else {
      icon = '🔊'; label = 'Mute music'; pressed = true;
    }
    musicBtn.textContent = icon;
    musicBtn.setAttribute('aria-label', label);
    musicBtn.setAttribute('aria-pressed', String(pressed));
    musicBtn.title = label;
    musicBtn.classList.toggle('playing', pressed);
  }
  updateMusicBtn();

  musicBtn.addEventListener('click', () => { Music.toggle(); updateMusicBtn(); });

  // Start music on the very first interaction anywhere (browsers block autoplay before that).
  function firstGesture(e) {
    if (e.target && e.target.closest && e.target.closest('#musicBtn')) return;
    if (e.type === 'keydown' && (e.key === 'Escape' || e.key === 'Tab' || e.key === 'Shift')) return;
    ['pointerdown', 'keydown'].forEach(t => window.removeEventListener(t, firstGesture, true));
    Music.start();
    updateMusicBtn();
  }
  ['pointerdown', 'keydown'].forEach(t => window.addEventListener(t, firstGesture, true));

  /* ---------------------------------------------------------
     Toast: short playful messages
     --------------------------------------------------------- */
  const toast = $('#toast');
  let toastTimer = null;
  function showToast(msg, ms) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), ms || 2600);
  }

  /* ---------------------------------------------------------
     Screens: fade between the proposal and the celebration
     --------------------------------------------------------- */
  const welcome = $('#welcome');
  const celebration = $('#celebration');
  function showScreen(target) {
    document.querySelectorAll('.screen').forEach(s => {
      const on = s === target;
      s.classList.toggle('is-active', on);
      s.toggleAttribute('inert', !on);
      s.setAttribute('aria-hidden', String(!on));
    });
    target.scrollTop = 0;
  }
  showScreen(welcome);

  /* ---------------------------------------------------------
     Modals: open/close with focus management + focus trap
     --------------------------------------------------------- */
  let lastFocus = null;
  function openModal(modal, focusEl) {
    lastFocus = document.activeElement;
    modal.hidden = false;
    void modal.offsetWidth;                   // reflow so the transition plays
    modal.classList.add('open');
    (focusEl || modal.querySelector('button')).focus({ preventScroll: true });
  }
  function closeModal(modal, returnFocusTo) {
    modal.classList.remove('open');
    setTimeout(() => { if (!modal.classList.contains('open')) modal.hidden = true; }, 350);
    if (modal === sureModal) homeStillNo();   // put "Still No" back inside the pop-up
    const target = returnFocusTo || lastFocus;
    if (target && target.focus) target.focus({ preventScroll: true });
  }
  // Note: tapping the dimmed background does NOT close the pop-up — otherwise
  // a missed tap on the runaway "Still No" button would close it by accident.

  /* ---------------------------------------------------------
     THE PROPOSAL LOGIC
     - Main "No" always opens the "Are you sure?" pop-up.
     - Inside the pop-up, "Still No" runs away from every hover,
       tap, click and keyboard focus, so the only way on is YES.
     --------------------------------------------------------- */
  const yesBtn = $('#yesBtn');
  const noBtn = $('#noBtn');
  const sureModal = $('#sureModal');
  const modalYes = $('#modalYes');
  const stillNo = $('#modalNo');
  const stillNoHome = stillNo.parentElement;   // its original spot in the pop-up

  const DODGE_MSGS = [
    'Hehe, try again! 😜',
    'Are you really sure? 🥺',
    'Rishabh is waiting for your answer! ❤️',
    'One little YES could make his day! 💕',
    'Oops! You almost got me! 😂',
    'Give love a chance? 💖',
    'Catch me if you can! 🏃‍♂️💨',
    'Psst… the YES button is right there 👉❤️',
    'Nope, not this way! 🙈',
    'Love is persistent, you know? 💞',
    'You know you want to say YES 😌💍',
    'This button only knows how to run away! 🏃‍♀️'
  ];

  let dodges = 0;
  let lastDodge = 0;
  let yesGuardUntil = 0;   // ignores pointer clicks on Yes right after Still No moves
  let celebrating = false;

  const isRoaming = () => stillNo.classList.contains('elusive');

  /** Lift "Still No" out of the pop-up into a fixed layer so it can roam the whole screen
      (the pop-up's transform would otherwise trap a position:fixed child). */
  function startRoaming() {
    if (isRoaming()) return;
    const r = stillNo.getBoundingClientRect();
    stillNo.classList.add('elusive', 'no-anim');
    stillNo.style.left = r.left + 'px';
    stillNo.style.top = r.top + 'px';
    document.body.appendChild(stillNo);
    void stillNo.offsetWidth;
    stillNo.classList.remove('no-anim');
  }

  /** Return "Still No" to its normal place inside the pop-up. */
  function homeStillNo() {
    stillNo.classList.remove('elusive', 'no-anim');
    stillNo.style.left = stillNo.style.top = '';
    stillNoHome.appendChild(stillNo);
  }

  function inflate(r, m) {
    return { left: r.left - m, top: r.top - m, right: r.right + m, bottom: r.bottom + m };
  }
  function overlaps(a, b) {
    return !(a.right <= b.left || a.left >= b.right || a.bottom <= b.top || a.top >= b.bottom);
  }

  /** Finds a random on-screen spot that avoids the YES button and the music button,
      preferring spots far from where Still No currently is. Always fully on-screen. */
  function findSafeSpot() {
    const m = 16;
    const w = stillNo.offsetWidth, h = stillNo.offsetHeight;
    const vw = document.documentElement.clientWidth;
    const vh = window.innerHeight;
    const minY = 76;                                   // keep clear of the top bar (music + toast)
    const maxX = Math.max(m, vw - w - m);
    const maxY = Math.max(minY, vh - h - m);
    const avoid = [
      inflate(modalYes.getBoundingClientRect(), 34),
      inflate(musicBtn.getBoundingClientRect(), 12)
    ];
    const cur = stillNo.getBoundingClientRect();
    let best = null, bestDist = -1;
    for (let i = 0; i < 60; i++) {
      const x = rand(m, maxX), y = rand(minY, maxY);
      const box = { left: x, top: y, right: x + w, bottom: y + h };
      if (avoid.some(a => overlaps(a, box))) continue;
      const d = Math.hypot(x - cur.left, y - cur.top);
      if (d > bestDist) { bestDist = d; best = { x, y }; }
      if (d > Math.min(vw, vh) * 0.4) break;           // far enough — good spot
    }
    return best || { x: m, y: maxY };
  }

  /** Grow the YES buttons a little after every attempted No. */
  function growYes() {
    const scale = Math.min(1 + dodges * 0.06, 1.5).toFixed(2);
    modalYes.style.setProperty('--yes-scale', scale);
    yesBtn.style.setProperty('--yes-scale', scale);
  }

  /** The playful dodge: move, show a new message, grow YES. Never gives up. */
  function dodge() {
    const now = performance.now();
    if (now - lastDodge < 240) return;
    lastDodge = now;
    startRoaming();
    const spot = findSafeSpot();
    stillNo.style.left = spot.x + 'px';
    stillNo.style.top = spot.y + 'px';
    yesGuardUntil = now + 550;
    dodges++;
    showToast(DODGE_MSGS[(dodges - 1) % DODGE_MSGS.length]);
    growYes();
  }

  // --- Main No button: always opens the "Are you sure?" pop-up ---
  noBtn.addEventListener('click', () => openModal(sureModal, modalYes));

  // --- Still No: runs away from every attempt ---
  stillNo.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') dodge(); }); // desktop hover
  stillNo.addEventListener('pointerdown', e => { e.preventDefault(); dodge(); });             // mouse / pen / touch press
  stillNo.addEventListener('touchstart', e => { e.preventDefault(); dodge(); }, { passive: false }); // mobile tap
  stillNo.addEventListener('focus', dodge);                                                    // keyboard Tab
  stillNo.addEventListener('click', e => { e.preventDefault(); dodge(); });                   // Enter / Space / anything else

  // --- YES buttons ---
  yesBtn.addEventListener('click', e => {
    if (e.detail > 0 && performance.now() < yesGuardUntil) return;  // e.detail 0 = keyboard, always allowed
    goYes(yesBtn);
  });
  modalYes.addEventListener('click', e => {
    if (e.detail > 0 && performance.now() < yesGuardUntil) return;
    const r = modalYes.getBoundingClientRect();
    closeModal(sureModal, yesBtn);
    setTimeout(() => goYes(null, r), 250);
  });

  /* ---------------------------------------------------------
     YES → the celebration!
     --------------------------------------------------------- */
  function goYes(fromEl, fromRect) {
    if (celebrating) return;
    celebrating = true;
    Music.start(); updateMusicBtn();

    const r = fromRect || (fromEl || yesBtn).getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + r.height / 2, 160);

    homeStillNo();
    toast.classList.remove('show');
    showScreen(celebration);
    ambientBoost = true;

    // the couple comes together
    const couple = $('#celebCouple .couple');
    couple.classList.remove('together');
    void couple.offsetWidth;
    couple.classList.add('together');

    const W = window.innerWidth, H = window.innerHeight;
    setTimeout(() => { burst(W * 0.15, H * 0.35, 90); burst(W * 0.85, H * 0.35, 90); }, 450);
    setTimeout(() => rain(140), 800);
    setTimeout(() => $('#celebTitle').focus({ preventScroll: true }), 900);
  }

  // "Celebrate Our Love! 🎉" — another round of hearts & confetti
  const celebrateBtn = $('#celebrateBtn');
  celebrateBtn.addEventListener('click', () => {
    const r = celebrateBtn.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + r.height / 2, 150);
    const W = window.innerWidth, H = window.innerHeight;
    setTimeout(() => { burst(W * 0.2, H * 0.3, 80); burst(W * 0.8, H * 0.3, 80); }, 300);
    rain(110);
    const couple = $('#celebCouple .couple');
    couple.classList.remove('jump');
    void couple.offsetWidth;
    couple.classList.add('jump');
    showToast(pick(['Forever & always 💞', 'Our little forever starts now 💍', 'Best. Answer. Ever. 🥹❤️']));
  });

  // Replay the question (handy for showing it again)
  $('#replayBtn').addEventListener('click', () => {
    celebrating = false;
    ambientBoost = false;
    dodges = 0;
    growYes();
    homeStillNo();
    showScreen(welcome);
    setTimeout(() => yesBtn.focus({ preventScroll: true }), 500);
  });

  /* ---------------------------------------------------------
     Keyboard support: focus trap in the pop-up, Esc closes it
     --------------------------------------------------------- */
  document.addEventListener('keydown', e => {
    const open = document.querySelector('.modal-backdrop.open');
    if (!open) return;
    if (e.key === 'Escape') { e.preventDefault(); closeModal(open, yesBtn); return; }
    if (e.key === 'Tab') {
      const f = Array.from(open.querySelectorAll('button:not([disabled])'));
      const first = f[0], last = f[f.length - 1];
      if (!open.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
      else if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---------------------------------------------------------
     Resize: keep canvas sharp and Still No on-screen
     --------------------------------------------------------- */
  window.addEventListener('resize', () => {
    sizeCanvas();
    if (!isRoaming()) return;
    const r = stillNo.getBoundingClientRect();
    const vw = document.documentElement.clientWidth, vh = window.innerHeight;
    stillNo.style.left = Math.min(Math.max(16, r.left), Math.max(16, vw - r.width - 16)) + 'px';
    stillNo.style.top = Math.min(Math.max(16, r.top), Math.max(16, vh - r.height - 16)) + 'px';
  });
})();
</script>
</body>
</html>
