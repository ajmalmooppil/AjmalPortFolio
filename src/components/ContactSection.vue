<template>
  <section id="contact" class="contact-section speckle">
    <div class="wrap contact-wrap">
      <div class="contact-copy reveal">
        <span class="eyebrow">Contact</span>
        <h2 class="contact-heading font-heading">
          Have an idea?<br />
          Let's build it right.
        </h2>
        <p class="contact-text">
          Tell me what you are planning, where things stand, and what kind of help you need. I
          usually reply within a day.
        </p>

        <div class="contact-actions">
          <a href="mailto:ajmalsadiqe@zohomail.in" class="btn-blue">
            Email Me
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
          <a href="https://wa.me/917736510056" target="_blank" rel="noopener" class="btn-outline-dark">
            WhatsApp
          </a>
        </div>

        <div class="connect-panel">
          <p class="connect-label font-mono">CONNECT WITH ME</p>
          <div class="social-grid">
            <a
              v-for="item in socials"
              :key="item.label"
              :href="item.href"
              class="social-link"
              target="_blank"
              rel="noopener"
              :aria-label="item.label"
            >
              <span class="social-icon" v-html="item.icon" />
              <span>{{ item.label }}</span>
            </a>
          </div>
        </div>
      </div>

      <form class="contact-form reveal" style="transition-delay: 0.1s" name="contactForm" method="POST" netlify>
        <div class="form-row">
          <label class="modern-field">
            <span class="field-label">Name</span>
            <span class="input-wrap">
              <svg class="field-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M10 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM3.5 17a6.5 6.5 0 0 1 13 0"
                  stroke="currentColor"
                  stroke-width="1.7"
                  stroke-linecap="round"
                />
              </svg>
              <input type="text" name="name" placeholder="Your name" required />
            </span>
          </label>
          <label class="modern-field">
            <span class="field-label">Email</span>
            <span class="input-wrap">
              <svg class="field-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M3 5h14v10H3z"
                  stroke="currentColor"
                  stroke-width="1.7"
                  stroke-linejoin="round"
                />
                <path
                  d="m3.5 5.5 6.5 5 6.5-5"
                  stroke="currentColor"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <input type="email" name="email" placeholder="you@example.com" required />
            </span>
          </label>
        </div>

        <label class="modern-field">
          <span class="field-label">Phone Number</span>
          <span class="input-wrap">
            <svg class="field-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M6.5 3.5 8 7 6.6 8.1c.9 1.9 2.4 3.4 4.3 4.3L12 11l3.5 1.5-.4 3a1.7 1.7 0 0 1-1.8 1.5C7.6 16.6 3.4 12.4 3 6.7a1.7 1.7 0 0 1 1.5-1.8l2-.4Z"
                stroke="currentColor"
                stroke-width="1.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input type="tel" name="phone" placeholder="+91 98765 43210" />
          </span>
        </label>

        <div class="form-field">
          <span class="field-label">Project Type</span>
          <div class="select-wrap" :class="{ open: selectOpen }">
            <button
              type="button"
              class="select-trigger"
              :aria-expanded="selectOpen"
              aria-haspopup="listbox"
              @click="selectOpen = !selectOpen"
              @keydown.escape="selectOpen = false"
            >
              <span class="select-value">
                <span class="select-dot" />
                <span>{{ selectedType.label }}</span>
              </span>
              <svg class="select-chevron" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M4 6L8 10L12 6"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <div v-if="selectOpen" class="select-menu" role="listbox">
              <button
                v-for="type in projectTypes"
                :key="type.label"
                type="button"
                class="select-option"
                :class="{ selected: form.projectType === type.label }"
                role="option"
                :aria-selected="form.projectType === type.label"
                @click="chooseType(type.label)"
              >
                <span>
                  <strong>{{ type.label }}</strong>
                  <small>{{ type.description }}</small>
                </span>
                <svg
                  v-if="form.projectType === type.label"
                  class="select-check"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3.5 8.5L6.5 11.5L12.5 4.5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <input
    type="hidden"
    name="projectType"
    :value="form.projectType"
  />
        </div>

        <label class="modern-field">
          <span class="field-label">Message</span>
          <span class="textarea-wrap">
            <svg class="field-icon textarea-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M4 4h12v9H8l-4 3v-3H4z"
                stroke="currentColor"
                stroke-width="1.7"
                stroke-linejoin="round"
              />
              <path d="M7 8h6M7 11h4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
            </svg>
            <textarea
              name="message"
              rows="6"
              placeholder="Share a few details about your project"
              required
            />
          </span>
        </label>

        <button class="btn-blue submit-btn" type="submit">
          Send Message
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
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'


const emailAddress = 'dev.ajmalsadiqe@gmail.com'

const initialForm = () => ({
  name: '',
  email: '',
  phone: '',
  projectType: 'Website',
  message: '',
})

const form = reactive(initialForm());
const loading = ref(false);
const successMessage = ref('');
const errorMessage = ref('')

const selectOpen = ref(false)
const defaultProjectType = { label: 'Website', description: 'Portfolio, landing page, or business site' }
const projectTypes = [
  defaultProjectType,
  { label: 'Web App', description: 'Dashboards, portals, and product flows' },
  { label: 'Backend API', description: 'Node, Express, MongoDB, integrations' },
  { label: 'UI Fixes', description: 'Polish, responsiveness, and frontend bugs' },
  { label: 'Other', description: 'Something custom or still taking shape' },
]

const selectedType = computed(
  () => projectTypes.find((type) => type.label === form.projectType) ?? defaultProjectType,
)

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/ajmalmoopil366',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1。2.6 １。７。２ ２。９。１ ３。２。８。８ １。２ １。９ １。２ ３。２ ０ ４。６－２。８ ５。６－５。５ ５。９。４。４。８ １。１。８ ２。２v３。３c０ 。３。２ 。７。８ 。６A１２ １２ ０ ０ ０ １２ 。３z"/></svg>`,
  },
  {
    href: 'https://linkedin.com/',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>`,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/coded_by_ajmal',
    icon: `<svg viewBox="0 0 24 24" fill="none" width="17" height="17"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg>`,
  },
  {
    label: 'Dribbble',
    href: 'https://dribbble.com/',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" stroke="currentColor" stroke-width="2" fill="none"/></svg>`,
  },
  {
    label: 'Email',
    href: `mailto:${emailAddress}`,
    icon: `<svg viewBox="0 0 24 24" fill="none" width="17" height="17"><path d="M4 6h16v12H4z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="m4 7 8 6 8-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
]

async function handleSubmit() {
  loading.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    const response = await fetch(`${ import.meta.env.VITE_APP_API_URL }/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Something went wrong while sending the message.');
    }

    successMessage.value = 'Message sent successfully!'
    Object.assign(form, initialForm())
  } catch (err) {
    errorMessage.value = err instanceof Error ? err.message : 'An error occurred while sending the message. Please try again later.'
  } finally {
    loading.value = false
  }
}

function chooseType(type: string) {
  form.projectType = type
  selectOpen.value = false
}
</script>

<style scoped>
.contact-section {
  padding: 96px 0;
  background: var(--bg);
  border-top: 1px solid var(--gray-2);
  position: relative;
  overflow: hidden;
}

.contact-wrap {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(320px, 0.8fr);
  gap: 56px;
  align-items: start;
  position: relative;
  z-index: 1;
}

.contact-copy {
  max-width: 640px;
}

.contact-heading {
  color: var(--black);
  font-size: clamp(38px, 6vw, 78px);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.02;
}

.contact-text {
  max-width: 520px;
  margin-top: 22px;
  color: var(--gray-4);
  font-size: 17px;
}

.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.connect-panel {
  margin-top: 48px;
}

.connect-label {
  margin-bottom: 14px;
  color: var(--gray-3);
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.14em;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  max-width: 520px;
}

.social-link {
  min-height: 48px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  background: var(--white);
  border: 1px solid var(--gray-2);
  border-radius: 8px;
  color: var(--gray-4);
  font-size: 13px;
  font-weight: 600;
  transition:
    border-color 0.2s,
    color 0.2s,
    transform 0.2s,
    box-shadow 0.2s;
}

.social-link:hover {
  border-color: var(--black);
  color: var(--black);
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.07);
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  flex: 0 0 18px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 24px;
  background: var(--white);
  border: 1px solid var(--gray-2);
  border-radius: 8px;
  box-shadow: 0 18px 54px rgba(0, 0, 0, 0.06);
}

.form-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

label,
.form-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label > span,
.field-label {
  color: var(--black);
  font-size: 12px;
  font-weight: 700;
}

input,
textarea {
  width: 100%;
  border: 0;
  background: transparent;
  color: var(--black);
  font: inherit;
  font-size: 14px;
  outline: none;
}

input,
textarea {
  font: inherit;
}

input {
  min-height: 48px;
  padding: 0 14px 0 42px;
}

.input-wrap,
.textarea-wrap {
  position: relative;
  display: block;
  overflow: hidden;
  border: 1px solid var(--gray-2);
  border-radius: 8px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.88), rgba(240, 239, 233, 0.92)),
    var(--gray-1);
  transition:
    border-color 0.18s,
    background 0.18s,
    box-shadow 0.18s,
    transform 0.18s;
}

.input-wrap:hover,
.textarea-wrap:hover {
  border-color: #d6d2c8;
  transform: translateY(-1px);
}

.input-wrap:focus-within,
.textarea-wrap:focus-within {
  background: var(--white);
  border-color: var(--blue);
  box-shadow: 0 10px 28px rgba(26, 86, 255, 0.1), 0 0 0 3px rgba(26, 86, 255, 0.12);
}

.field-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  width: 18px;
  height: 18px;
  color: var(--gray-3);
  pointer-events: none;
  transform: translateY(-50%);
  transition: color 0.18s;
}

.input-wrap:focus-within .field-icon,
.textarea-wrap:focus-within .field-icon {
  color: var(--blue);
}

.textarea-icon {
  top: 18px;
  transform: none;
}

.select-wrap {
  position: relative;
  z-index: 4;
}

.select-trigger {
  width: 100%;
  min-height: 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 8px 12px 8px 14px;
  background: linear-gradient(180deg, #fff, var(--gray-1));
  border: 1px solid var(--gray-2);
  border-radius: 8px;
  color: var(--black);
  cursor: pointer;
  font: inherit;
  font-size: 14px;
  font-weight: 700;
  text-align: left;
  transition:
    border-color 0.2s,
    box-shadow 0.2s,
    transform 0.2s;
}

.select-trigger:hover,
.select-wrap.open .select-trigger {
  border-color: var(--blue);
  box-shadow: 0 10px 26px rgba(26, 86, 255, 0.12);
}

.select-trigger:focus-visible {
  outline: none;
  border-color: var(--blue);
  box-shadow: 0 0 0 3px rgba(26, 86, 255, 0.12);
}

.select-value {
  display: flex;
  align-items: center;
  gap: 10px;
}

.select-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--blue);
  box-shadow: 0 0 0 5px rgba(26, 86, 255, 0.12);
}

.select-chevron {
  width: 18px;
  height: 18px;
  color: var(--gray-4);
  flex: 0 0 18px;
  transition:
    color 0.18s,
    transform 0.18s;
}

.select-wrap.open .select-chevron {
  color: var(--blue);
  transform: rotate(180deg);
}

.select-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  display: grid;
  gap: 6px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid var(--gray-2);
  border-radius: 8px;
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(14px);
}

.select-option {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px;
  background: transparent;
  border: 0;
  border-radius: 8px;
  color: var(--gray-4);
  cursor: pointer;
  font: inherit;
  text-align: left;
  transition:
    background 0.18s,
    color 0.18s,
    transform 0.18s;
}

.select-option:hover,
.select-option.selected {
  background: var(--gray-1);
  color: var(--black);
}

.select-option:focus-visible {
  outline: 2px solid rgba(26, 86, 255, 0.35);
  outline-offset: 2px;
}

.select-option strong,
.select-option small {
  display: block;
}

.select-option strong {
  font-size: 13px;
  font-weight: 800;
}

.select-option small {
  margin-top: 2px;
  color: var(--gray-3);
  font-size: 11.5px;
  line-height: 1.35;
}

.select-check {
  width: 17px;
  height: 17px;
  color: var(--blue);
  flex: 0 0 17px;
}

textarea {
  min-height: 150px;
  padding: 15px 14px 14px 42px;
  resize: vertical;
}

input::placeholder,
textarea::placeholder {
  color: #949189;
}

.submit-btn {
  width: 100%;
  justify-content: center;
  margin-top: 4px;
}

@media (max-width: 900px) {
  .contact-section {
    padding: 72px 0;
  }

  .contact-wrap {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .contact-copy {
    max-width: none;
  }
}

@media (max-width: 640px) {
  .social-grid,
  .form-row {
    grid-template-columns: 1fr;
  }

  .contact-form {
    padding: 18px;
  }
}
</style>
