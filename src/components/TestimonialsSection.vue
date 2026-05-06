<template>
  <section id="testimonials" class="testimonials-section">

    <!-- Blue bg block -->
    <div class="testi-blue-block">
      <div class="wrap">

        <!-- Header row -->
        <div class="testi-header reveal">
          <h2 class="testi-heading font-heading">
            See My Client<br>Feedback
            <span class="heading-squiggle">
              <svg viewBox="0 0 60 20" fill="none" width="56" height="18">
                <path d="M2 14 Q15 4 28 14 Q41 24 54 14" stroke="rgba(255,255,255,.5)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
              </svg>
            </span>
          </h2>
          <a href="#contact" class="btn-white-outline">
            Hire Me →
          </a>
        </div>

        <!-- Quote cards row -->
        <div class="quotes-row reveal">
          <div v-for="q in quotes" :key="q.author" class="quote-card">
            <div class="quote-mark font-heading">"</div>
            <p class="quote-text">{{ q.text }}</p>
            <div class="quote-author">
              <div class="author-avatar" :style="{ background: q.avatarBg }">{{ q.author.charAt(0) }}</div>
              <div>
                <p class="author-name font-heading">{{ q.author }}</p>
                <p class="author-role">{{ q.role }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Logos marquee strip (white bg, like reference) -->
    <div class="logos-strip">
      <div class="logos-inner">
        <!-- Duplicate for seamless loop -->
        <div class="marquee-inner">
          <span v-for="logo in [...logos, ...logos]" :key="logo + Math.random()" class="logo-item font-heading">
            {{ logo }}
          </span>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
const quotes = [
  {
    text: 'Game-changer! Boosted efficiency, simplified tasks, and saved time. Highly recommended!',
    author: 'Rashel B.',
    role: 'Startup Founder',
    avatarBg: 'linear-gradient(135deg,#1a56ff,#60a5fa)',
  },
  {
    text: 'Quick solutions coupled with great performance — a recommendation that\'s unmissable.',
    author: 'Shannon Gray',
    role: 'Product Manager',
    avatarBg: 'linear-gradient(135deg,#7c3aed,#a855f7)',
  },
]



const logos = [
  'MongoDB',
  '◆ Angular',
  '◆ Node.js',
  '◆ Express',
  '◆ TypeScript',
  '◆ Tailwind',
  '◆ REST API',
  '◆ Git',
]
</script>

<style scoped>
.testi-blue-block {
  background: var(--blue);
  padding: 72px 0 60px;
  position: relative;
  overflow: hidden;
}
/* Subtle noise on blue bg */
.testi-blue-block::before {
  content: '';
  position: absolute; inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E");
  background-size: 200px 200px;
  pointer-events: none;
}

/* Header */
.testi-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 44px;
  flex-wrap: wrap;
  position: relative;
}
.testi-heading {
  font-size: clamp(30px, 4vw, 52px);
  font-weight: 800;
  letter-spacing: -.035em;
  line-height: 1.1;
  color: #fff;
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
}
.heading-squiggle {
  display: inline-block;
  margin-left: 4px;
  margin-bottom: 4px;
  vertical-align: bottom;
}

.btn-white-outline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  background: transparent;
  color: #fff;
  border-radius: var(--radius-pill);
  font-size: 13px;
  font-weight: 500;
  border: 1.5px solid rgba(255,255,255,.4);
  cursor: pointer;
  transition: border-color .2s, background .2s;
  white-space: nowrap;
  text-decoration: none;
}
.btn-white-outline:hover { border-color: #fff; background: rgba(255,255,255,.1); }

/* Quote cards */
.quotes-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
  position: relative;
}
@media (max-width: 640px) { .quotes-row { grid-template-columns: 1fr; } }

.quote-card {
  background: rgba(255,255,255,.12);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,.18);
  border-radius: var(--radius-lg);
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: transform .25s, background .25s;
}
.quote-card:hover {
  transform: translateY(-4px);
  background: rgba(255,255,255,.18);
}

.quote-mark {
  font-size: 52px;
  line-height: 0.7;
  color: rgba(255,255,255,.35);
  letter-spacing: -.05em;
  font-weight: 900;
}

.quote-text {
  font-size: 14.5px;
  line-height: 1.7;
  color: rgba(255,255,255,.9);
  font-weight: 300;
  font-style: italic;
  flex: 1;
}

.quote-author {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 14px;
  border-top: 1px solid rgba(255,255,255,.15);
}
.author-avatar {
  width: 36px; height: 36px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #fff;
  flex-shrink: 0;
}
.author-name {
  font-size: 14px;
  font-weight: 700;
  color: #fff;
}
.author-role {
  font-size: 11px;
  color: rgba(255,255,255,.55);
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: .04em;
}

/* ── Logos marquee strip ── */
.logos-strip {
  background: var(--white);
  border-top: 1px solid var(--gray-2);
  border-bottom: 1px solid var(--gray-2);
  padding: 0;
  overflow: hidden;
}
.logos-inner {
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
  padding: 26px 0;
}
.logo-item {
  padding: 0 42px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: .04em;
  color: var(--black);
  white-space: nowrap;
  opacity: .55;
  transition: opacity .2s;
}
.logo-item:hover { opacity: 1; color: var(--blue); }
</style>
