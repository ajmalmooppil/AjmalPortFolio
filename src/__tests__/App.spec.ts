import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'

import ContactSection from '@/components/ContactSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import HomeView from '@/views/HomeView.vue'
import { render } from '@/entry-server'

class MockIntersectionObserver {
  observe = vi.fn<() => void>()
  unobserve = vi.fn<() => void>()
  disconnect = vi.fn<() => void>()
}

beforeEach(() => {
  vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
  vi.stubGlobal('scrollTo', vi.fn<() => void>())
})

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
})

describe('HomeView', () => {
  it('renders the portfolio landing content', () => {
    const wrapper = mount(HomeView, {
      attachTo: document.body,
    })

    expect(wrapper.get('h1').text()).toContain('Full-Stack')
    expect(wrapper.text()).toContain('Ajmal Sadiqe')
    expect(wrapper.text()).toContain('Explore My Top')
    expect(wrapper.text()).toContain('Have an idea?')

    wrapper.unmount()
  })
})

describe('ContactSection', () => {
  it('lets visitors choose a project type', async () => {
    const wrapper = mount(ContactSection)

    await wrapper.get('.select-trigger').trigger('click')
    expect(wrapper.find('[role="listbox"]').exists()).toBe(true)

    await wrapper.get('[role="option"]:nth-child(3)').trigger('click')

    expect(wrapper.get('.select-trigger').text()).toContain('Backend API')
    expect(wrapper.find('[role="listbox"]').exists()).toBe(false)
  })
})

describe('ProjectsSection', () => {
  it('moves through featured projects with the slider controls', async () => {
    vi.useFakeTimers()
    const wrapper = mount(ProjectsSection)

    expect(wrapper.get('.slider-count').text()).toBe('1 / 3')

    await wrapper.get('[aria-label="Next project"]').trigger('click')

    expect(wrapper.get('.slider-count').text()).toBe('2 / 3')
    expect(wrapper.get('.slider-track').attributes('style')).toContain('translateX(-100%)')
    expect(wrapper.text()).toContain('Archana Temple')

    wrapper.unmount()
  })
})

describe('SSR entry', () => {
  it('renders the home page to an HTML string', async () => {
    const rendered = await render('/')

    expect(rendered.html).toContain('Full-Stack')
    expect(rendered.html).toContain('Ajmal Sadiqe')
    expect(rendered.html).toContain('Have an idea?')
  })
})
