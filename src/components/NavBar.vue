<template>
  <header class="nav" :class="{ scrolled: scrolled }">
    <div class="wrap nav-inner">
      <!-- Logo -->
      <a href="#" class="nav-logo font-heading">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect width="22" height="22" rx="5" fill="var(--black)" />
          <text
            x="11"
            y="16"
            text-anchor="middle"
            font-size="11"
            font-weight="700"
            font-family="Bricolage Grotesque,sans-serif"
            fill="white"
          >
            AS
          </text>
        </svg>
      </a>

      <!-- Center Nav -->
      <nav class="nav-links">
        <a href="#hero" class="nav-link" :class="{ active: active === 'home' }">Home</a>
        <a href="#about" class="nav-link" :class="{ active: active === 'about' }">About</a>
        <a href="#work" class="nav-link" :class="{ active: active === 'work' }">Work</a>
        <a href="#contact" class="nav-link" :class="{ active: active === 'contact' }">Contact</a>
      </nav>

      <!-- Right CTA -->
      <a href="#contact" class="btn-blue" style="font-size: 13px; padding: 9px 20px">
        Let's Talk
      </a>

      <!-- Mobile hamburger -->
      <button class="hamburger" @click="menuOpen = !menuOpen" :class="{ open: menuOpen }">
        <span /><span /><span />
      </button>
    </div>

    <!-- Mobile menu -->
    <div class="mobile-nav" :class="{ open: menuOpen }">
      <a href="#hero" @click="menuOpen = false" class="mobile-link font-heading">Home</a>
      <a href="#about" @click="menuOpen = false" class="mobile-link font-heading">About</a>
      <a href="#work" @click="menuOpen = false" class="mobile-link font-heading">Work</a>
      <a href="#contact" @click="menuOpen = false" class="mobile-link font-heading">Contact</a>
      <a
        href="#contact"
        @click="menuOpen = false"
        class="btn-blue"
        style="width: 100%; justify-content: center; margin-top: 8px"
        >Let's Talk</a
      >
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)
const active = ref('home')
const navSections = [
  { id: 'hero', nav: 'home' },
  { id: 'about', nav: 'about' },
  { id: 'work', nav: 'work' },
  { id: 'contact', nav: 'contact' },
]

function onScroll() {
  scrolled.value = window.scrollY > 30

  let current = 'home'
  const activationPoint = window.scrollY + window.innerHeight * 0.35

  for (const { id, nav } of navSections) {
    const section = document.getElementById(id)
    if (section && section.offsetTop <= activationPoint) current = nav
  }

  active.value = current
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll)
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  padding: 14px 0;
  transition:
    background 0.3s,
    box-shadow 0.3s;
}
.nav.scrolled {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(16px);
  box-shadow: 0 1px 0 var(--gray-2);
}

.nav-inner {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.02em;
  flex-shrink: 0;
}

/* Center nav */
.nav-links {
  display: flex;
  align-items: center;
  gap: 2px;
  background: var(--white);
  border: 1px solid var(--gray-2);
  border-radius: var(--radius-pill);
  padding: 4px;
  margin: 0 auto;
}
.nav-link {
  padding: 6px 18px;
  border-radius: var(--radius-pill);
  font-size: 13.5px;
  font-weight: 400;
  color: var(--gray-4);
  transition:
    background 0.18s,
    color 0.18s;
}
.nav-link:hover {
  color: var(--black);
}
.nav-link.active {
  background: var(--black);
  color: #fff;
  font-weight: 500;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  margin-left: auto;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--black);
  border-radius: 2px;
  transition: 0.3s ease;
}
.hamburger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.hamburger.open span:nth-child(2) {
  opacity: 0;
}
.hamburger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile nav */
.mobile-nav {
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 16px 28px 24px;
  background: var(--white);
  border-top: 1px solid var(--gray-2);
}
.mobile-nav.open {
  display: flex;
}
.mobile-link {
  padding: 14px 8px;
  font-size: 22px;
  font-weight: 700;
  color: var(--black);
  border-bottom: 1px solid var(--gray-2);
}

@media (max-width: 640px) {
  .nav-links {
    display: none;
  }
  .hamburger {
    display: flex;
  }
  .nav > .wrap > a.btn-blue {
    display: none;
  }
}
</style>
