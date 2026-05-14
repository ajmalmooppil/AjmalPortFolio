<template>
  <section id="hero" class="hero">
    <div class="wrap hero-wrap">
      <!-- LEFT: heading + CTA -->
      <div class="hero-left">
        <!-- "LET'S ROLL" sticker (top right of heading area in reference) -->
        <div class="roll-sticker">
          <span>LET'S</span>
          <span style="font-size: 11px">ROLL ✦</span>
        </div>

        <h1 class="hero-h1 font-heading">
          Full-Stack<br />
          <em class="blue-word">MEAN Stack</em><br />
          Dev &amp; more
          <span class="plus-icon">+</span>
        </h1>

        <div class="hero-cta-row">
          <a href="#contact" class="btn-blue">
            Let's Talk
            <span class="arrow-icon">
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                <path
                  d="M1 8L8 1M8 1H2M8 1V7"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>

      <!-- RIGHT: photo + floating badges -->
      <div class="hero-right">
        <!-- Photo card -->
        <div class="hero-photo-card">
          <!-- Gradient card behind photo (dark blue-black like reference) -->
          <div class="photo-bg">
            <img :src="dp" alt="Ajmal Sadiqe" class="developer-jpg" />
          </div>
        </div>

        <!-- "I'M READY TO TALK" circle badge — bottom right of photo -->
        <div class="ready-badge circle-badge">
          <span>I'M READY<br />TO TALK</span>
        </div>
      </div>
    </div>

    <!-- ── About row (second sub-section of hero in reference) ── -->
    <div class="about-strip speckle">
      <div class="wrap about-strip-inner">
        <!-- Left: hi + name -->
        <div class="about-left">
          <div class="hi-badge">
            <span>HI, I'M 🧠</span>
          </div>
          <h2 class="about-name font-heading">Ajmal Sadiqe</h2>
          <p class="about-bio">
            I'm a <span class="link-ul">freelance developer</span> with over
            <span class="link-ul">2 years of experience</span>, based in Kerala, the heart
            of South India.
          </p>
          <!-- Social icons row -->
          <div class="social-row">
            <a
              v-for="s in socials"
              :key="s.label"
              :href="s.href"
              class="social-btn"
              target="_blank"
              rel="noopener"
              :title="s.label"
            >
              <span v-html="s.icon" />
            </a>
          </div>
        </div>

        <!-- Right: circle badge -->
        <div class="about-right">
          <div class="ready-badge-lg circle-badge">
            <span>I'M<br />READY<br />TO TALK</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ── Stats bar ── -->
    <div class="stats-bar">
      <div class="wrap stats-inner">
        <div v-for="stat in stats" :key="stat.label" class="stat">
          <span class="stat-val font-heading">{{ stat.value }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import dp from '@/assets/dp.jpg'

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z"/></svg>`,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>`,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  },
  {
    label: 'Dribbble',
    href: '#',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" stroke="currentColor" stroke-width="2" fill="none"/></svg>`,
  },
]

const stats = [
  { value: '2y+', label: 'Experience' },
  { value: '10+', label: 'Projects Built' },
  { value: '100%', label: 'Client Satisfaction' },
]
</script>

<style scoped>
/* ── Section Shell ── */
.hero {
  padding-top: 80px;
  background: var(--white);
}

/* ── Main hero wrap ── */
.hero-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  padding-top: 56px;
  padding-bottom: 48px;
  position: relative;
}
@media (max-width: 768px) {
  .hero-wrap {
    grid-template-columns: 1fr;
    padding-top: 40px;
  }
}

/* ── Left ── */
.hero-left {
  position: relative;
}

.roll-sticker {
  position: absolute;
  top: -10px;
  right: 0;
  background: var(--black);
  color: #fff;
  border-radius: var(--radius-pill);
  padding: 5px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 1.4;
}
@media (max-width: 768px) {
  .roll-sticker {
    display: none;
  }
}

.hero-h1 {
  font-size: clamp(52px, 8vw, 100px);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.04em;
  color: var(--black);
  margin-bottom: 36px;
}
.blue-word {
  font-style: normal;
  color: var(--blue);
}
.plus-icon {
  color: var(--black);
  font-weight: 300;
  font-size: 0.55em;
  vertical-align: super;
  margin-left: 4px;
}

.hero-cta-row {
  display: flex;
  gap: 12px;
  align-items: center;
}

/* ── Right / Photo ── */
.hero-right {
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.hero-photo-card {
  position: relative;
  z-index: 1;
}
.photo-bg {
  width: clamp(240px, 38vw, 380px);
  border-radius: 28px;
  overflow: hidden;
  background: #1a1a2e;
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.18);
}
.developer-jpg {
  width: 100%;
  aspect-ratio: 320 / 420;
  display: block;
  object-fit: cover;
}

/* Floating "ready to talk" badge on photo card */
.ready-badge {
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 100px;
  height: 100px;
  font-size: 9px;
  z-index: 2;
  box-shadow: 0 8px 24px rgba(26, 86, 255, 0.35);
}
@media (max-width: 640px) {
  .ready-badge {
    width: 80px;
    height: 80px;
    bottom: -10px;
    right: -10px;
  }
}

/* ── About strip ── */
.about-strip {
  background: var(--bg);
  border-top: 1px solid var(--gray-2);
  border-bottom: 1px solid var(--gray-2);
  padding: 56px 0;
  overflow: hidden;
}
.about-strip-inner {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 40px;
  align-items: center;
  position: relative;
  z-index: 1;
}
@media (max-width: 640px) {
  .about-strip-inner {
    grid-template-columns: 1fr;
  }
}

.hi-badge {
  display: inline-flex;
  align-items: center;
  padding: 5px 14px;
  background: var(--white);
  border: 1px solid var(--gray-2);
  border-radius: var(--radius-pill);
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 12px;
}

.about-name {
  font-size: clamp(36px, 5vw, 60px);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.05;
  color: var(--black);
  margin-bottom: 16px;
}

.about-bio {
  font-size: 15px;
  line-height: 1.75;
  color: var(--gray-4);
  font-weight: 300;
  max-width: 480px;
  margin-bottom: 24px;
}
.link-ul {
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: var(--gray-3);
  color: var(--black);
  font-weight: 400;
}

.social-row {
  display: flex;
  gap: 8px;
}
.social-btn {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  border: 1px solid var(--gray-2);
  border-radius: 10px;
  color: var(--gray-4);
  transition:
    border-color 0.2s,
    color 0.2s,
    transform 0.2s;
}
.social-btn:hover {
  border-color: var(--black);
  color: var(--black);
  transform: translateY(-2px);
}

.ready-badge-lg {
  width: 110px;
  height: 110px;
  font-size: 10px;
}

/* ── Stats bar ── */
.stats-bar {
  background: var(--white);
  border-top: 1px solid var(--gray-2);
  padding: 32px 0;
}
.stats-inner {
  display: flex;
  gap: 0;
}
.stat {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 0 24px;
  border-right: 1px solid var(--gray-2);
}
.stat:last-child {
  border-right: none;
}

.stat-val {
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--black);
  line-height: 1;
}
.stat-label {
  font-size: 11px;
  color: var(--gray-3);
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
</style>
