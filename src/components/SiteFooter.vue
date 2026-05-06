<template>
  <footer class="site-footer">
    <div class="wrap footer-wrap">

      <!-- Top: Logo -->
      <div class="footer-logo-row">
        <a href="#" class="footer-logo font-heading">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect width="22" height="22" rx="5" fill="var(--black)"/>
            <text x="11" y="16" text-anchor="middle" font-size="11" font-weight="700" font-family="Bricolage Grotesque,sans-serif" fill="white">AS</text>
          </svg>
          Ajmal Sadiqe
        </a>
      </div>

      <div class="footer-main">
        <!-- Left: Tagline + nav -->
        <div class="footer-left">
          <p class="footer-tagline font-heading">
            Today, improve your<br>business with<br>quality.
          </p>
          <p class="footer-sub">
            312 Our Street Confirms,<br>Main P.O 2293
          </p>
          <!-- Footer nav links -->
          <nav class="footer-nav">
            <a href="#" class="footer-link">Home</a>
            <a href="#work" class="footer-link">Work</a>
            <a href="#about" class="footer-link">About</a>
            <a href="#contact" class="footer-link">Contact</a>
          </nav>
        </div>

        <!-- Right: Newsletter signup -->
        <div class="footer-right">
          <p class="newsletter-label font-mono">Join Our Newsletter</p>
          <div class="newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              class="newsletter-input font-body"
            />
            <button class="newsletter-btn btn-blue" type="button">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                <path d="M2 8h12M9 3l5 5-5 5"/>
              </svg>
            </button>
          </div>
          <!-- Social icons -->
          <div class="footer-socials">
            <a v-for="s in socials" :key="s.label" :href="s.href" class="footer-social-btn" target="_blank" rel="noopener" :title="s.label">
              <span v-html="s.icon"/>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="footer-bottom">
        <p class="footer-copy font-mono">
          © {{ year }} Ajmal Sadiqe. All rights reserved.
        </p>
        <div class="footer-bottom-links">
          <a href="#" class="footer-link">About</a>
          <a href="#work" class="footer-link">Work</a>
          <a href="#contact" class="footer-link">Contact</a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()

const socials = [
  { label:'GitHub',   href:'https://github.com/', icon:`<svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z"/></svg>` },
  { label:'LinkedIn', href:'https://linkedin.com/', icon:`<svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>` },
  { label:'Twitter',  href:'https://twitter.com/', icon:`<svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>` },
  { label:'Dribbble', href:'#', icon:`<svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" stroke="currentColor" stroke-width="2" fill="none"/></svg>` },
]
</script>

<style scoped>
.site-footer {
  background: var(--white);
  border-top: 1px solid var(--gray-2);
  padding: 60px 0 0;
}

.footer-logo-row {
  margin-bottom: 48px;
}
.footer-logo {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 17px;
  font-weight: 800;
  letter-spacing: -.02em;
  color: var(--black);
}

/* Main two-column */
.footer-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  margin-bottom: 48px;
}
@media (max-width: 640px) {
  .footer-main { grid-template-columns: 1fr; gap: 40px; }
}

/* Left */
.footer-tagline {
  font-size: clamp(22px, 3vw, 34px);
  font-weight: 800;
  letter-spacing: -.03em;
  line-height: 1.2;
  color: var(--black);
  margin-bottom: 14px;
}
.footer-sub {
  font-size: 13px;
  color: var(--gray-3);
  line-height: 1.6;
  margin-bottom: 28px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: .03em;
}
.footer-nav {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}
.footer-link {
  padding: 5px 12px;
  font-size: 13px;
  color: var(--gray-4);
  border-radius: var(--radius-pill);
  transition: color .18s, background .18s;
}
.footer-link:hover { color: var(--black); background: var(--gray-1); }

/* Right */
.newsletter-label {
  font-size: 10px;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--gray-3);
  margin-bottom: 14px;
}
.newsletter-form {
  display: flex;
  gap: 0;
  margin-bottom: 28px;
  border: 1px solid var(--gray-2);
  border-radius: var(--radius-pill);
  overflow: hidden;
  background: var(--white);
}
.newsletter-input {
  flex: 1;
  padding: 11px 18px;
  font-size: 13.5px;
  color: var(--black);
  background: transparent;
  border: none;
  outline: none;
  font-family: 'DM Sans', sans-serif;
}
.newsletter-input::placeholder { color: var(--gray-3); }
.newsletter-btn {
  padding: 10px 16px;
  border-radius: 0 var(--radius-pill) var(--radius-pill) 0;
  border: none;
  flex-shrink: 0;
}

.footer-socials {
  display: flex;
  gap: 8px;
}
.footer-social-btn {
  width: 36px; height: 36px;
  border-radius: 10px;
  border: 1px solid var(--gray-2);
  background: var(--white);
  display: flex; align-items: center; justify-content: center;
  color: var(--gray-4);
  transition: border-color .18s, color .18s, transform .18s;
}
.footer-social-btn:hover { border-color: var(--black); color: var(--black); transform: translateY(-2px); }

/* Bottom bar */
.footer-bottom {
  border-top: 1px solid var(--gray-2);
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
.footer-copy {
  font-size: 11px;
  color: var(--gray-3);
  letter-spacing: .04em;
}
.footer-bottom-links {
  display: flex;
  gap: 4px;
}
</style>
