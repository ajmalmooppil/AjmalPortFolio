<template>
  <section id="work" class="projects-section">
    <div class="wrap">

      <!-- Header row -->
      <div class="proj-header reveal">
        <h2 class="proj-heading font-heading">
          Explore My Top<br>Creations
          <span class="heading-squiggle">
            <svg viewBox="0 0 60 20" fill="none" width="56" height="18">
              <path d="M2 14 Q15 4 28 14 Q41 24 54 14" stroke="var(--blue)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
            </svg>
          </span>
        </h2>
        <a href="https://github.com/" target="_blank" rel="noopener" class="btn-outline-dark">
          View All →
        </a>
      </div>

      <!-- Project rows — alternating layout like reference -->
      <div class="proj-list">
        <article
          v-for="(proj, i) in projects"
          :key="proj.title"
          class="proj-row reveal"
          :style="{ transitionDelay: (i * 0.08) + 's' }"
          :class="{ 'proj-row--reverse': i % 2 !== 0 }"
        >
          <!-- Mockup visual -->
          <div class="proj-visual">
            <div class="proj-img" :style="{ background: proj.bg }">
              <!-- Browser chrome mockup -->
              <div class="browser-chrome">
                <div class="browser-bar">
                  <div class="dots"><span/><span/><span/></div>
                  <div class="url-pill font-mono">{{ proj.url }}</div>
                </div>
                <div class="browser-content" :style="{ background: proj.screenBg }">
                  <!-- Big text like "OPEN SOURCE DATABASE" in reference -->
                  <div class="screen-text font-heading">
                    <div v-for="line in proj.screenLines" :key="line" class="screen-line">{{ line }}</div>
                  </div>
                  <div class="screen-glow" :style="{ background: proj.glowColor }"/>
                </div>
              </div>
            </div>
            <!-- Type label above -->
            <span class="proj-type font-mono">{{ proj.type }}</span>
          </div>

          <!-- Text content -->
          <div class="proj-content">
            <h3 class="proj-title font-heading">{{ proj.title }}</h3>
            <p class="proj-desc">{{ proj.desc }}</p>
            <div class="proj-stack">
              <span v-for="t in proj.stack" :key="t" class="stack-pill font-mono">{{ t }}</span>
            </div>
            <a :href="proj.link" class="proj-arrow-btn" target="_blank" rel="noopener">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                <path d="M2 8h12M9 3l5 5-5 5"/>
              </svg>
            </a>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'Business ERP\nCore System.',
    type: 'Full-Stack / Dashboard',
    desc: 'A full-featured ERP platform for a trading company — inventory, invoicing, purchase orders, and real-time analytics across 6 integrated modules.',
    stack: ['Angular 17', 'Node.js', 'MongoDB', 'Chart.js'],
    bg: 'linear-gradient(145deg, #0a1628 0%, #112240 100%)',
    screenBg: '#091220',
    glowColor: 'rgba(26,86,255,0.4)',
    screenLines: ['OPEN', 'SOURCE', 'SYSTEM'],
    url: 'erp.ajmal.dev',
    link: '#',
  },
  {
    title: 'Mobile Application\nDesign.',
    type: 'Application Development',
    desc: 'A fintech mobile app UI — earn, borrow, trade digital assets securely. Built with a dark-first design language and smooth micro-animations.',
    stack: ['Angular', 'Ionic', 'Node.js', 'REST API'],
    bg: 'linear-gradient(145deg, #0d0d1a 0%, #1a1a3e 100%)',
    screenBg: '#0a0a18',
    glowColor: 'rgba(124,58,237,0.5)',
    screenLines: ['EARN,', 'BORROW,', 'TRADE'],
    url: 'app.fintech.io',
    link: '#',
  },
  {
    title: 'Figma to HTML5\n& CSS3 Convert.',
    type: 'Web Development',
    desc: 'Pixel-perfect Figma-to-code conversion for a no-code startup landing page. The best way to build your startup website — zero compromise on design fidelity.',
    stack: ['HTML5', 'CSS3', 'Vue 3', 'Tailwind'],
    bg: 'linear-gradient(145deg, #f0f4ff 0%, #dce8ff 100%)',
    screenBg: '#e8f0ff',
    glowColor: 'rgba(26,86,255,0.15)',
    screenLines: ['THE BEST', 'WAY TO', 'BUILD'],
    url: 'startup.landing.dev',
    link: '#',
  },
  {
    title: 'HR Management\nSystem.',
    type: 'Business Application',
    desc: 'An internal HR portal for employee onboarding, attendance tracking, leave management, and payroll overview with role-based access control.',
    stack: ['Angular', 'Node.js', 'MySQL', 'JWT Auth'],
    bg: 'linear-gradient(145deg, #0a1a0a 0%, #112211 100%)',
    screenBg: '#091509',
    glowColor: 'rgba(34,197,94,0.4)',
    screenLines: ['MANAGE', 'YOUR', 'TEAM'],
    url: 'hr.company.io',
    link: '#',
  },
]
</script>

<style scoped>
.projects-section {
  padding: 80px 0 90px;
  background: var(--white);
  border-top: 1px solid var(--gray-2);
}

/* Header */
.proj-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 56px;
  flex-wrap: wrap;
}
.proj-heading {
  font-size: clamp(30px, 4vw, 50px);
  font-weight: 800;
  letter-spacing: -.035em;
  line-height: 1.1;
  color: var(--black);
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

/* Project list */
.proj-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

/* Each row */
.proj-row {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 0;
  border: 1px solid var(--gray-2);
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-bottom: 20px;
  transition: box-shadow .3s ease;
}
.proj-row:hover { box-shadow: 0 16px 56px rgba(0,0,0,.1); }
.proj-row--reverse { grid-template-columns: 0.9fr 1.1fr; }
.proj-row--reverse .proj-visual { order: 2; }
.proj-row--reverse .proj-content { order: 1; }

@media (max-width: 768px) {
  .proj-row,
  .proj-row--reverse { grid-template-columns: 1fr; }
  .proj-row--reverse .proj-visual,
  .proj-row--reverse .proj-content { order: unset; }
}

/* Visual side */
.proj-visual {
  position: relative;
  min-height: 280px;
}
.proj-type {
  position: absolute;
  top: 16px;
  left: 16px;
  font-size: 9.5px;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: rgba(255,255,255,.55);
  z-index: 2;
}
.proj-row--reverse .proj-type { color: var(--gray-3); }
/* flip light type for light bg projects */
.proj-img {
  width: 100%; height: 100%;
  min-height: 280px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 24px 24px;
}

/* Browser mockup inside card */
.browser-chrome {
  width: 100%;
  max-width: 360px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0,0,0,.4);
}
.browser-bar {
  background: rgba(0,0,0,.5);
  backdrop-filter: blur(8px);
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.dots { display: flex; gap: 5px; }
.dots span {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,.25);
}
.dots span:nth-child(1) { background: #FF5F57; }
.dots span:nth-child(2) { background: #FEBC2E; }
.dots span:nth-child(3) { background: #28C840; }
.url-pill {
  flex: 1;
  background: rgba(255,255,255,.1);
  border-radius: 4px;
  height: 18px;
  padding: 0 8px;
  font-size: 9px;
  color: rgba(255,255,255,.4);
  line-height: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.browser-content {
  position: relative;
  padding: 20px 18px 16px;
  min-height: 140px;
  overflow: hidden;
}
.screen-text {
  position: relative;
  z-index: 1;
}
.screen-line {
  font-size: clamp(20px, 3.5vw, 32px);
  font-weight: 800;
  letter-spacing: -.03em;
  line-height: 1.1;
  color: rgba(255,255,255,.9);
  white-space: nowrap;
}
/* Light background project — dark text */
.proj-row:nth-child(3) .screen-line { color: rgba(0,0,0,.8); }

.screen-glow {
  position: absolute;
  bottom: -40px;
  right: -40px;
  width: 160px; height: 160px;
  border-radius: 50%;
  filter: blur(50px);
  pointer-events: none;
}

/* Content side */
.proj-content {
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0;
  background: var(--white);
}
.proj-title {
  font-size: clamp(22px, 2.8vw, 34px);
  font-weight: 800;
  letter-spacing: -.03em;
  line-height: 1.15;
  color: var(--black);
  margin-bottom: 14px;
  white-space: pre-line;
}
.proj-desc {
  font-size: 14px;
  line-height: 1.75;
  color: var(--gray-4);
  font-weight: 300;
  margin-bottom: 20px;
}
.proj-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-bottom: 28px;
}
.stack-pill {
  padding: 3px 10px;
  background: var(--gray-1);
  border: 1px solid var(--gray-2);
  border-radius: 6px;
  font-size: 10.5px;
  color: var(--gray-4);
}
.proj-arrow-btn {
  width: 40px; height: 40px;
  border-radius: 50%;
  background: var(--black);
  color: #fff;
  display: flex; align-items: center; justify-content: center;
  transition: transform .22s, background .22s;
  flex-shrink: 0;
}
.proj-arrow-btn:hover { background: var(--blue); transform: rotate(45deg); }
</style>
