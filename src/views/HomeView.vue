<template>
  <div class="home">
    <!-- Fixed navigation -->
    <NavBar />

    <!-- Main content — each section is a standalone component -->
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>

    <!-- Site footer -->
    <SiteFooter />

    <!-- Back-to-top button (appears after scrolling 300px) -->
    <Transition name="btt">
      <button v-if="showBtt" class="btt" @click="scrollTop" title="Back to top" aria-label="Back to top">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16">
          <path d="M3 10l5-5 5 5"/>
        </svg>
      </button>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import SiteFooter from '@/components/SiteFooter.vue'

// Import the reveal composable — this initialises the
// Intersection Observer that drives all CSS scroll animations
import { useReveal} from '@/composables/useReveal'


useReveal()
const showBtt = ref(false)
function onScroll() { showBtt.value = window.scrollY > 400 }
function scrollTop() { window.scrollTo({ top: 0, behavior: 'smooth' }) }
onMounted  (() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.home { min-height: 100vh; background: var(--white); }

/* ── Back to top ── */
.btt {
  position: fixed;
  bottom: 28px; right: 28px;
  width: 42px; height: 42px;
  border-radius: 12px;
  background: var(--black);
  color: #fff;
  border: none;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  z-index: 800;
  box-shadow: 0 4px 16px rgba(0,0,0,.2);
  transition: background .2s, transform .2s;
}
.btt:hover { background: var(--blue); transform: translateY(-3px); }

.btt-enter-active, .btt-leave-active { transition: opacity .25s, transform .25s; }
.btt-enter-from, .btt-leave-to { opacity: 0; transform: translateY(10px); }
</style>
