<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'

const cursor = ref({ x: -100, y: -100, scale: 1, hovering: false })

function onMouseMove(e: MouseEvent) {
  cursor.value.x = e.clientX
  cursor.value.y = e.clientY
}
function onMouseOver(e: MouseEvent) {
  const target = e.target instanceof Element ? e.target : null
  const el = target?.closest('a, button, [role="button"], .card')
  cursor.value.hovering = !!el
  cursor.value.scale = el ? 1.8 : 1
}

onMounted(() => {
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseover', onMouseOver)
})
onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseover', onMouseOver)
})
</script>

<template>
  <!-- Custom cursor (desktop only) -->
  <div
    class="custom-cursor"
    :style="{ left: cursor.x + 'px', top: cursor.y + 'px', transform: `scale(${cursor.scale})` }"
    :class="{ active: cursor.hovering }"
  />

  <!-- Router view -->
  <RouterView />
</template>

<style scoped>
.custom-cursor {
  position: fixed;
  width: 10px;
  height: 10px;
  background: var(--accent);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.15s ease;
  mix-blend-mode: difference;
  transform-origin: center;
  margin-left: -5px;
  margin-top: -5px;
}
.custom-cursor.active {
  background: white;
}
@media (pointer: coarse) {
  .custom-cursor {
    display: none;
  }
}
</style>
