<template>
  <section id="work" class="projects-section">
    <div class="wrap">
      <div class="proj-header reveal">
        <h2 class="proj-heading font-heading">
          Explore My Top<br />Creations
          <span class="heading-squiggle">
            <svg viewBox="0 0 60 20" fill="none" width="56" height="18">
              <path
                d="M2 14 Q15 4 28 14 Q41 24 54 14"
                stroke="var(--blue)"
                stroke-width="2.5"
                stroke-linecap="round"
                fill="none"
              />
            </svg>
          </span>
        </h2>
        <a href="https://github.com/" target="_blank" rel="noopener" class="btn-outline-dark">
          View All
          <span class="arrow-icon">
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
              <path
                d="M1 8L8 1M8 1H2M8 1V7"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </span>
        </a>
      </div>

      <div class="project-slider reveal" @mouseenter="pauseAutoSlide" @mouseleave="startAutoSlide" @focusin="pauseAutoSlide" @focusout="startAutoSlide">
        <div class="slider-top">
          <p class="slider-count font-mono">{{ activeIndex + 1 }} / {{ projects.length }}</p>
          <div class="slider-controls">
            <button type="button" class="slider-btn" aria-label="Previous project" @click="previousProject">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M10 3 5 8l5 5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button type="button" class="slider-btn" aria-label="Next project" @click="nextProject">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="m6 3 5 5-5 5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div class="slider-window">
          <div class="slider-track" :style="{ transform: `translateX(-${activeIndex * 100}%)` }">
            <article v-for="proj in projects" :key="proj.title" class="proj-slide">
              <div class="proj-visual">
                <div class="proj-img" :style="{ background: proj.bg }">
                  <div class="browser-chrome">
                    <div class="browser-bar">
                      <div class="dots"><span /><span /><span /></div>
                      <div class="url-pill font-mono">{{ proj.url }}</div>
                    </div>
                    <div class="browser-content" :style="{ background: proj.screenBg }">
                      <div class="screen-text font-heading">
                        <div v-for="line in proj.screenLines" :key="line" class="screen-line">
                          {{ line }}
                        </div>
                      </div>
                      <div class="screen-glow" :style="{ background: proj.glowColor }" />
                    </div>
                  </div>
                </div>
                <span class="proj-type font-mono">{{ proj.type }}</span>
              </div>

              <div class="proj-content">
                <p class="proj-kicker font-mono">{{ proj.type }}</p>
                <h3 class="proj-title font-heading">{{ proj.title }}</h3>
                <p class="proj-desc">{{ proj.desc }}</p>
                <div class="proj-stack">
                  <span v-for="t in proj.stack" :key="t" class="stack-pill font-mono">{{ t }}</span>
                </div>
                <a :href="proj.link" class="proj-arrow-btn" target="_blank" rel="noopener" aria-label="Open project">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                    <path d="M2 8h12M9 3l5 5-5 5" />
                  </svg>
                </a>
              </div>
            </article>
          </div>
        </div>

        <div class="slider-dots" aria-label="Project slides">
          <button
            v-for="(proj, index) in projects"
            :key="proj.title"
            type="button"
            class="slider-dot"
            :class="{ active: activeIndex === index }"
            :aria-label="`Show project ${index + 1}`"
            @click="goToProject(index)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const activeIndex = ref(0)
let autoSlideTimer: number | undefined

const projects = [
  {
    title: 'Business ERP\nCore System.',
    type: 'Full-Stack / Dashboard',
    desc: 'A full-featured ERP platform for a trading company, including inventory, invoicing, purchase orders, and real-time analytics across 6 integrated modules.',
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
    desc: 'A fintech mobile app UI for earning, borrowing, and trading digital assets securely with a dark-first design language and smooth micro-animations.',
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
    desc: 'Pixel-perfect Figma-to-code conversion for a no-code startup landing page with careful responsiveness and design fidelity.',
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
    desc: 'An internal HR portal for onboarding, attendance tracking, leave management, and payroll overview with role-based access control.',
    stack: ['Angular', 'Node.js', 'MySQL', 'JWT Auth'],
    bg: 'linear-gradient(145deg, #0a1a0a 0%, #112211 100%)',
    screenBg: '#091509',
    glowColor: 'rgba(34,197,94,0.4)',
    screenLines: ['MANAGE', 'YOUR', 'TEAM'],
    url: 'hr.company.io',
    link: '#',
  },
]

function goToProject(index: number) {
  activeIndex.value = index
}

function nextProject() {
  activeIndex.value = (activeIndex.value + 1) % projects.length
}

function previousProject() {
  activeIndex.value = (activeIndex.value - 1 + projects.length) % projects.length
}

function startAutoSlide() {
  pauseAutoSlide()
  autoSlideTimer = window.setInterval(nextProject, 4200)
}

function pauseAutoSlide() {
  if (!autoSlideTimer) return
  window.clearInterval(autoSlideTimer)
  autoSlideTimer = undefined
}

onMounted(startAutoSlide)
onUnmounted(pauseAutoSlide)
</script>

<style scoped>
.projects-section {
  padding: 80px 0 90px;
  background: var(--white);
  border-top: 1px solid var(--gray-2);
}

.proj-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 42px;
  flex-wrap: wrap;
}

.proj-heading {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  color: var(--black);
  font-size: clamp(30px, 4vw, 50px);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.1;
}

.heading-squiggle {
  display: inline-block;
  margin-left: 4px;
  margin-bottom: 4px;
  vertical-align: bottom;
}

.project-slider {
  overflow: hidden;
}

.slider-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 14px;
}

.slider-count {
  color: var(--gray-3);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
}

.slider-controls {
  display: flex;
  gap: 8px;
}

.slider-btn {
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  border: 1px solid var(--gray-2);
  border-radius: 50%;
  color: var(--black);
  cursor: pointer;
  transition:
    background 0.2s,
    border-color 0.2s,
    color 0.2s,
    transform 0.2s;
}

.slider-btn svg {
  width: 16px;
  height: 16px;
}

.slider-btn:hover {
  background: var(--black);
  border-color: var(--black);
  color: #fff;
  transform: translateY(-2px);
}

.slider-window {
  overflow: hidden;
  border: 1px solid var(--gray-2);
  border-radius: 8px;
  background: var(--white);
  box-shadow: 0 18px 58px rgba(0, 0, 0, 0.08);
}

.slider-track {
  display: flex;
  transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
}

.proj-slide {
  min-width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
  background: var(--white);
}

.proj-visual {
  position: relative;
  min-height: 430px;
}

.proj-type {
  position: absolute;
  top: 18px;
  left: 18px;
  z-index: 2;
  color: rgba(255, 255, 255, 0.58);
  font-size: 9.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.proj-img {
  width: 100%;
  height: 100%;
  min-height: 430px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 42px 30px 30px;
}

.browser-chrome {
  width: min(100%, 460px);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 18px 54px rgba(0, 0, 0, 0.42);
  transform: rotate(-1.5deg);
}

.browser-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 12px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
}

.dots {
  display: flex;
  gap: 5px;
}

.dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
}

.dots span:nth-child(1) { background: #ff5f57; }
.dots span:nth-child(2) { background: #febc2e; }
.dots span:nth-child(3) { background: #28c840; }

.url-pill {
  flex: 1;
  height: 18px;
  padding: 0 8px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.46);
  font-size: 9px;
  line-height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.browser-content {
  min-height: 190px;
  position: relative;
  overflow: hidden;
  padding: 26px 22px 22px;
}

.screen-text {
  position: relative;
  z-index: 1;
}

.screen-line {
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(28px, 4vw, 46px);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.05;
  white-space: nowrap;
}

.proj-slide:nth-child(3) .proj-type {
  color: rgba(10, 10, 10, 0.45);
}

.proj-slide:nth-child(3) .screen-line {
  color: rgba(0, 0, 0, 0.8);
}

.screen-glow {
  position: absolute;
  right: -40px;
  bottom: -40px;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  filter: blur(50px);
  pointer-events: none;
}

.proj-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0;
  padding: 44px 38px;
  background: var(--white);
}

.proj-kicker {
  margin-bottom: 12px;
  color: var(--gray-3);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.proj-title {
  margin-bottom: 14px;
  color: var(--black);
  font-size: clamp(26px, 3vw, 42px);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  white-space: pre-line;
}

.proj-desc {
  margin-bottom: 22px;
  color: var(--gray-4);
  font-size: 14px;
  font-weight: 300;
  line-height: 1.75;
}

.proj-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-bottom: 30px;
}

.stack-pill {
  padding: 4px 10px;
  background: var(--gray-1);
  border: 1px solid var(--gray-2);
  border-radius: 6px;
  color: var(--gray-4);
  font-size: 10.5px;
}

.proj-arrow-btn {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: var(--black);
  border-radius: 50%;
  color: #fff;
  transition:
    background 0.22s,
    transform 0.22s;
}

.proj-arrow-btn:hover {
  background: var(--blue);
  transform: rotate(45deg);
}

.slider-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 18px;
}

.slider-dot {
  width: 8px;
  height: 8px;
  border: 0;
  border-radius: var(--radius-pill);
  background: var(--gray-2);
  cursor: pointer;
  transition:
    background 0.2s,
    width 0.2s;
}

.slider-dot.active {
  width: 28px;
  background: var(--blue);
}

@media (max-width: 820px) {
  .proj-slide {
    grid-template-columns: 1fr;
  }

  .proj-visual,
  .proj-img {
    min-height: 310px;
  }

  .proj-content {
    padding: 30px 22px;
  }
}

@media (max-width: 560px) {
  .projects-section {
    padding: 68px 0 76px;
  }

  .slider-top {
    align-items: flex-end;
  }

  .slider-window {
    border-radius: 8px;
  }

  .proj-visual,
  .proj-img {
    min-height: 260px;
  }

  .browser-content {
    min-height: 150px;
  }
}
</style>
