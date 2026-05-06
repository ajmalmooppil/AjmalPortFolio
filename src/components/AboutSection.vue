<template>
  <section id="about" class="about-section speckle">
    <div class="wrap about-wrap">
      <div class="about-copy reveal">
        <span class="eyebrow">Profile</span>
        <h2 class="about-heading font-heading">
          Building practical web apps with clean interfaces and dependable backends.
        </h2>
        <p class="about-text">
          I am Ajmal Sadiqe, a freelance MEAN stack developer based in Kerala. I work on business
          applications, dashboards, landing pages, and API-driven products where the experience needs
          to feel simple for users and maintainable for the team behind it.
        </p>
        <p class="about-text">
          My strength is connecting the full flow: planning the data model, building REST APIs,
          shaping the UI, and polishing responsive frontend details so the final product feels
          complete rather than stitched together.
        </p>

        <div class="profile-grid">
          <div v-for="item in profile" :key="item.label" class="profile-item">
            <span class="profile-label font-mono">{{ item.label }}</span>
            <strong>{{ item.value }}</strong>
          </div>
        </div>
      </div>

      <div class="skills-panel reveal" style="transition-delay: 0.1s">
        <div class="skills-head">
          <div>
            <span class="eyebrow">Skills</span>
            <h3 class="skills-title font-heading">Progressed Skills</h3>
          </div>
          <span class="skills-badge font-mono">Active growth</span>
        </div>

        <div class="skill-list">
          <div
            v-for="skill in skills"
            :key="skill.name"
            class="skill-row"
            :style="{ '--level': skill.level + '%' }"
          >
            <div class="skill-meta">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-value font-mono">{{ skill.level }}%</span>
            </div>
            <div class="skill-track" :aria-label="`${skill.name} skill level ${skill.level}%`">
              <span class="skill-fill" />
            </div>
          </div>
        </div>

        <div class="tool-stack">
          <span v-for="tool in tools" :key="tool" class="tool-pill font-mono">{{ tool }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const profile = [
  { label: 'Name', value: 'Ajmal Sadiqe' },
  { label: 'Location', value: 'Kerala, India' },
  { label: 'Role', value: 'Freelance MEAN Stack Developer' },
  { label: 'Focus', value: 'Business apps, dashboards, APIs' },
]

const skills = [
  { name: 'Angular & TypeScript', level: 88 },
  { name: 'Node.js & Express', level: 84 },
  { name: 'MongoDB & Data Modeling', level: 80 },
  { name: 'Vue, HTML & CSS', level: 76 },
  { name: 'REST APIs & Auth', level: 82 },
  { name: 'Responsive UI Design', level: 78 },
]

const tools = ['Angular', 'Node.js', 'Express', 'MongoDB', 'Vue', 'TypeScript', 'Tailwind', 'Git']
</script>

<style scoped>
.about-section {
  padding: 88px 0;
  background: var(--bg);
  border-top: 1px solid var(--gray-2);
  overflow: hidden;
}

.about-wrap {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  gap: 48px;
  align-items: start;
}

.about-heading {
  max-width: 640px;
  margin-bottom: 22px;
  color: var(--black);
  font-size: clamp(32px, 4.5vw, 56px);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.06;
}

.about-text {
  max-width: 620px;
  margin-bottom: 16px;
  color: var(--gray-4);
  font-size: 15px;
  font-weight: 300;
  line-height: 1.8;
}

.profile-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 28px;
}

.profile-item {
  min-height: 92px;
  padding: 18px;
  border: 1px solid var(--gray-2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.72);
}

.profile-label {
  display: block;
  margin-bottom: 8px;
  color: var(--gray-3);
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.profile-item strong {
  display: block;
  color: var(--black);
  font-size: 15px;
  font-weight: 600;
  line-height: 1.35;
}

.skills-panel {
  padding: 26px;
  border: 1px solid var(--gray-2);
  border-radius: var(--radius-lg);
  background: var(--white);
  box-shadow: 0 24px 70px rgba(10, 10, 10, 0.07);
}

.skills-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 24px;
}

.skills-title {
  color: var(--black);
  font-size: clamp(24px, 3vw, 34px);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.skills-badge {
  flex-shrink: 0;
  margin-top: 4px;
  padding: 6px 10px;
  border-radius: var(--radius-pill);
  background: var(--black);
  color: #fff;
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.skill-meta {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 8px;
}

.skill-name {
  color: var(--black);
  font-size: 14px;
  font-weight: 600;
}

.skill-value {
  color: var(--gray-4);
  font-size: 11px;
}

.skill-track {
  height: 9px;
  border-radius: var(--radius-pill);
  background: var(--gray-1);
  overflow: hidden;
}

.skill-fill {
  display: block;
  width: var(--level);
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--blue), #0a0a0a);
}

.tool-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 28px;
  padding-top: 22px;
  border-top: 1px solid var(--gray-2);
}

.tool-pill {
  padding: 5px 10px;
  border: 1px solid var(--gray-2);
  border-radius: 6px;
  background: var(--gray-1);
  color: var(--gray-4);
  font-size: 10px;
  letter-spacing: 0.04em;
}

@media (max-width: 900px) {
  .about-wrap {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .about-section {
    padding: 64px 0;
  }

  .profile-grid {
    grid-template-columns: 1fr;
  }

  .skills-panel {
    padding: 22px;
  }

  .skills-head {
    flex-direction: column;
  }
}
</style>
