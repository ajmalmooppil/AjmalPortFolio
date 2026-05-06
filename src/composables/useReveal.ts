import { onMounted, onUnmounted } from 'vue'

export function useReveal() {
  let io: IntersectionObserver | null = null

  const observeRevealElements = () => {
    document.querySelectorAll<HTMLElement>('.reveal:not(.in)').forEach((el) => io?.observe(el))
  }

  onMounted(() => {
    io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io?.unobserve(entry.target)
          }
        }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    observeRevealElements()
  })

  onUnmounted(() => {
    io?.disconnect()
    io = null
  })

  return { refresh: observeRevealElements }
}
