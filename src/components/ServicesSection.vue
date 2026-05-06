<template>
  <section id="services" class="services-section">
    <div class="wrap">

      <!-- Header row -->
      <div class="services-header reveal">
        <h2 class="services-heading font-heading">
          All kind of coding<br>solution.
        </h2>
        <a href="#contact" class="btn-outline-dark view-all">
          Hire Me →
        </a>
      </div>

      <!-- Cards row -->
      <div class="cards-row">

        <!-- Card 1 — Blue featured (matches reference left card) -->
        <div class="svc-card svc-card--blue reveal" style="transition-delay:.05s">
          <div class="svc-icon-wrap svc-icon--blue">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="22" height="22">
              <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
          </div>
          <h3 class="svc-title font-heading">MEAN Stack<br>Development</h3>
          <p class="svc-sub">Expert in web &amp; mobile related</p>
          <ul class="svc-list">
            <li>✓ Angular SPA</li>
            <li>✓ Node.js + Express</li>
            <li>✓ MongoDB Design</li>
            <li>✓ REST API Development</li>
          </ul>
          <div class="svc-footer">
            <a href="#contact" class="svc-link-btn svc-link-btn--white">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                <path d="M2 8h12M9 3l5 5-5 5"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Card 2 — White card -->
        <div class="svc-card svc-card--white reveal" style="transition-delay:.12s">
          <div class="svc-icon-wrap svc-icon--dark">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="22" height="22">
              <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
            </svg>
          </div>
          <h3 class="svc-title font-heading">Web &amp; Mobile App<br>Development</h3>
          <p class="svc-sub">Expert in web &amp; mobile related</p>
          <ul class="svc-list">
            <li>✓ Web Design</li>
            <li>✓ Front-End Coding</li>
            <li>✓ Mobile App Development</li>
            <li>✓ Programming</li>
          </ul>
          <div class="svc-footer">
            <a href="#contact" class="svc-link-btn svc-link-btn--dark">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                <path d="M2 8h12M9 3l5 5-5 5"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Card 3 — White card -->
        <div class="svc-card svc-card--white reveal" style="transition-delay:.19s">
          <div class="svc-icon-wrap svc-icon--dark">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="22" height="22">
              <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
            </svg>
          </div>
          <h3 class="svc-title font-heading">Interface Design &amp;<br>Development</h3>
          <p class="svc-sub">Expert in web &amp; mobile related</p>
          <ul class="svc-list">
            <li>✓ Web Design</li>
            <li>✓ Front-End Coding</li>
            <li>✓ Mobile App Development</li>
            <li>✓ Programming</li>
          </ul>
          <div class="svc-footer">
            <a href="#contact" class="svc-link-btn svc-link-btn--dark">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                <path d="M2 8h12M9 3l5 5-5 5"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">


</script>

<style scoped>
.services-section {
  padding: 80px 0 90px;
  background: var(--white);
  border-top: 1px solid var(--gray-2);
}

/* Header */
.services-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}
.services-heading {
  font-size: clamp(32px, 4.5vw, 54px);
  font-weight: 800;
  letter-spacing: -.035em;
  line-height: 1.08;
  color: var(--black);
}

/* Cards row */
.cards-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
@media (max-width: 900px) { .cards-row { grid-template-columns: 1fr 1fr; } }
@media (max-width: 560px) { .cards-row { grid-template-columns: 1fr; } }

/* Card base */
.svc-card {
  border-radius: var(--radius-lg);
  padding: 28px 24px 22px;
  display: flex;
  flex-direction: column;
  gap: 0;
  min-height: 320px;
  transition: transform .28s ease, box-shadow .28s ease;
  position: relative;
  overflow: hidden;
}
.svc-card:hover { transform: translateY(-5px); box-shadow: 0 20px 56px rgba(0,0,0,.1); }

/* Blue variant — matches the left card in reference */
.svc-card--blue {
  background: var(--blue);
  color: #fff;
}
.svc-card--white {
  background: var(--gray-1);
  border: 1px solid var(--gray-2);
  color: var(--black);
}

/* Icon */
.svc-icon-wrap {
  width: 44px; height: 44px;
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 20px;
  flex-shrink: 0;
}
.svc-icon--blue { background: rgba(255,255,255,.2); color: #fff; }
.svc-icon--dark  { background: var(--gray-2); color: var(--black); }

/* Text */
.svc-title {
  font-size: 17px;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -.01em;
  margin-bottom: 6px;
}
.svc-card--blue .svc-title { color: #fff; }
.svc-card--white .svc-title { color: var(--black); }

.svc-sub {
  font-size: 12px;
  opacity: .65;
  margin-bottom: 18px;
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: .03em;
}

/* Checklist */
.svc-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 7px;
  flex: 1;
}
.svc-list li {
  font-size: 13px;
  opacity: .85;
  letter-spacing: .01em;
}
.svc-card--blue .svc-list li { color: rgba(255,255,255,.9); }
.svc-card--white .svc-list li { color: var(--gray-4); }

/* Footer arrow */
.svc-footer {
  margin-top: 24px;
  padding-top: 18px;
  border-top: 1px solid rgba(255,255,255,.18);
  display: flex;
  justify-content: flex-end;
}
.svc-card--white .svc-footer { border-top-color: var(--gray-2); }

.svc-link-btn {
  width: 36px; height: 36px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  transition: transform .2s;
  flex-shrink: 0;
}
.svc-link-btn:hover { transform: scale(1.1) rotate(45deg); }
.svc-link-btn--white { background: rgba(255,255,255,.25); color: #fff; }
.svc-link-btn--dark  { background: var(--black); color: #fff; }
</style>
