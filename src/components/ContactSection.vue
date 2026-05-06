<template>
  <section id="contact" class="cta-section">
    <!-- Left decorative scribble -->
    <div class="deco deco-left" aria-hidden="true">
      <svg viewBox="0 0 120 200" fill="none" width="120" height="200">
        <path d="M60 10 C20 40, 100 80, 40 120 C-20 160, 100 180, 60 190" stroke="var(--gray-2)" stroke-width="2" stroke-linecap="round" fill="none"/>
        <path d="M80 20 C110 50, 30 90, 90 130" stroke="var(--gray-2)" stroke-width="1.5" stroke-linecap="round" fill="none" stroke-dasharray="4 6"/>
      </svg>
    </div>

    <!-- Right decorative scribble -->
    <div class="deco deco-right" aria-hidden="true">
      <svg viewBox="0 0 120 200" fill="none" width="120" height="200">
        <path d="M60 10 C100 40, 20 80, 80 120 C140 160, 20 180, 60 190" stroke="var(--gray-2)" stroke-width="2" stroke-linecap="round" fill="none"/>
        <path d="M40 20 C10 50, 90 90, 30 130" stroke="var(--gray-2)" stroke-width="1.5" stroke-linecap="round" fill="none" stroke-dasharray="4 6"/>
      </svg>
    </div>

    <div class="wrap cta-wrap">
      <h2 class="cta-heading font-heading reveal">
        Anything in Mind?<br>Let's Talk
      </h2>

      <!-- Spinning circle badge -->
      <a href="mailto:ajmalsadiqe@example.com" class="circle-badge cta-badge reveal" style="transition-delay:.1s">
        <span>I'M READY<br>TO TALK</span>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">



</script>

<style scoped>
.cta-section {
  padding: 96px 0 100px;
  background: var(--white);
  border-top: 1px solid var(--gray-2);
  position: relative;
  overflow: hidden;
  text-align: center;
}

.deco {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  opacity: .6;
  pointer-events: none;
}
.deco-left  { left: 4%; }
.deco-right { right: 4%; }

.cta-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  position: relative;
  z-index: 1;
}

.cta-heading {
  font-size: clamp(36px, 6vw, 80px);
  font-weight: 800;
  letter-spacing: -.04em;
  line-height: 1.05;
  color: var(--black);
}

.cta-badge {
  width: 130px; height: 130px;
  font-size: 10.5px;
  line-height: 1.4;
  text-decoration: none;
  letter-spacing: .06em;
}
</style>
