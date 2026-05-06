<template>
  <section id="experience" class="experience-section">
    <div class="container-custom">
      <!-- Header -->
      <div class="reveal" style="margin-bottom: 64px">
        <p class="section-label">Journey</p>
        <h2 class="section-heading font-display">Experience &<br />Education.</h2>
      </div>

      <!-- Two-column: Work | Education -->
      <div class="exp-grid">
        <!-- Work Experience -->
        <div>
          <p class="col-label font-mono reveal">— Work Experience</p>
          <div class="timeline reveal-stagger">
            <div v-for="(item, i) in workItems" :key="item.role" class="timeline-item">
              <!-- Dot & Line -->
              <div class="tl-indicator">
                <div class="tl-dot" :class="{ current: item.current }" />
                <div v-if="i < workItems.length - 1" class="tl-line" />
              </div>

              <!-- Card -->
              <div class="tl-card card">
                <div class="tl-card-header">
                  <div>
                    <h3 class="tl-role font-display">{{ item.role }}</h3>
                    <p class="tl-company">{{ item.company }}</p>
                  </div>
                  <span class="tl-badge" :class="{ current: item.current }">
                    {{ item.current ? 'Current' : item.period }}
                  </span>
                </div>
                <p class="tl-desc">{{ item.desc }}</p>
                <div class="tl-tags">
                  <span
                    v-for="t in item.tags"
                    :key="t"
                    class="tag"
                    style="font-size: 10px; padding: 2px 10px"
                    >{{ t }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Education & Certifications -->
        <div>
          <p class="col-label font-mono reveal">— Education & Certs</p>
          <div class="edu-list reveal-stagger">
            <div v-for="item in eduItems" :key="item.title" class="edu-card card">
              <div class="edu-icon">{{ item.emoji }}</div>
              <div class="edu-body">
                <h3 class="edu-title font-display">{{ item.title }}</h3>
                <p class="edu-sub">{{ item.institution }}</p>
                <p class="edu-period font-mono">{{ item.period }}</p>
                <p class="edu-desc">{{ item.desc }}</p>
              </div>
            </div>
          </div>

          <!-- Soft skills mini-section -->
          <div class="soft-skills card reveal" style="margin-top: 20px; padding: 24px">
            <p class="section-label" style="margin-bottom: 16px">Soft Skills</p>
            <div class="soft-grid">
              <div v-for="s in softSkills" :key="s" class="soft-item">
                <span class="soft-dot" />{{ s }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const workItems = [
  {
    role: 'Freelance MEAN Stack Developer',
    company: 'Self-Employed · Remote',
    period: 'Nov 2023 – Present',
    current: true,
    desc: 'Building full-stack business applications, dashboards, and admin portals for clients across India. Handling complete project lifecycle from scoping to deployment.',
    tags: ['Angular', 'Node.js', 'MongoDB', 'REST API'],
  },
  {
    role: 'Junior Web Developer',
    company: 'Startup · Kerala, India',
    period: 'May 2023 – Oct 2023',
    current: false,
    desc: 'Worked on internal tools and client-facing web applications. Contributed to frontend Angular modules and Node.js API endpoints as part of a small agile team.',
    tags: ['Angular', 'Express', 'CSS', 'Git'],
  },
]

const eduItems = [
  {
    emoji: '🎓',
    title: 'B.Sc. Computer Science',
    institution: 'University of Kerala',
    period: '2020 – 2023',
    desc: 'Core subjects in data structures, algorithms, databases, and software engineering. Final project: an Angular + Node.js student portal.',
  },
  {
    emoji: '📜',
    title: 'MEAN Stack Bootcamp',
    institution: 'Online · Udemy',
    period: '2022',
    desc: 'Intensive full-stack MEAN development covering Angular, Express, MongoDB and deployment.',
  },
  {
    emoji: '📜',
    title: 'TypeScript Deep Dive',
    institution: 'Online · Pluralsight',
    period: '2023',
    desc: 'Advanced TypeScript patterns, generics, decorators, and integration with Angular.',
  },
]

const softSkills = [
  'Fast learner',
  'Clear communicator',
  'Detail oriented',
  'Self-managed',
  'Deadline focused',
  'Client-empathetic',
]
</script>

<style scoped>
.experience-section {
  padding: 120px 0;
  background: var(--bg);
  border-top: 1px solid var(--border);
}

.section-heading {
  font-size: clamp(32px, 4vw, 52px);
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  margin-top: 8px;
}

.exp-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 64px;
}
@media (min-width: 900px) {
  .exp-grid {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
  }
}

.col-label {
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 28px;
}

/* ─── Timeline ─── */
.timeline {
  display: flex;
  flex-direction: column;
}

.timeline-item {
  display: flex;
  gap: 16px;
  position: relative;
}

.tl-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding-top: 6px;
}

.tl-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--border-dark);
  border: 2px solid var(--bg);
  flex-shrink: 0;
  z-index: 1;
  transition: background 0.3s ease;
}
.tl-dot.current {
  background: var(--accent);
  box-shadow: 0 0 0 4px var(--accent-soft);
}

.tl-line {
  width: 1.5px;
  flex: 1;
  background: var(--border);
  margin: 6px 0;
  min-height: 24px;
}

/* Timeline card */
.tl-card {
  flex: 1;
  padding: 20px;
  margin-bottom: 20px;
}
.tl-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}
.tl-role {
  font-size: 15px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.01em;
}
.tl-company {
  font-size: 13px;
  color: var(--text-muted);
  margin-top: 2px;
}
.tl-badge {
  font-size: 10px;
  font-family: 'JetBrains Mono', monospace;
  padding: 3px 10px;
  background: var(--border);
  border-radius: 100px;
  color: var(--text-secondary);
  white-space: nowrap;
}
.tl-badge.current {
  background: var(--accent-soft);
  color: var(--accent);
}
.tl-desc {
  font-size: 13.5px;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 12px;
  font-weight: 300;
}
.tl-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

/* ─── Education ─── */
.edu-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.edu-card {
  padding: 20px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.edu-icon {
  font-size: 24px;
  flex-shrink: 0;
  line-height: 1;
  margin-top: 2px;
}
.edu-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.01em;
}
.edu-sub {
  font-size: 13px;
  color: var(--text-secondary);
  margin-top: 2px;
}
.edu-period {
  font-size: 10px;
  color: var(--accent);
  letter-spacing: 0.08em;
  margin: 4px 0 6px;
}
.edu-desc {
  font-size: 13px;
  line-height: 1.65;
  color: var(--text-muted);
  font-weight: 300;
}

/* ─── Soft Skills ─── */
.soft-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.soft-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--text-secondary);
}
.soft-dot {
  width: 5px;
  height: 5px;
  background: var(--accent);
  border-radius: 50%;
  flex-shrink: 0;
}
</style>
