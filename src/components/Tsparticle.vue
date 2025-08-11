<template>
  <vue-particles
    id="tsparticles"
    class="absolute inset-0"
    :options="particleOptions"
  />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  isLight: {
    type: Boolean,
    default: false
  }
})

const particleOptions = computed(() => ({
  background: {
    color: { value: 'transparent' } // ❗ Fonni transparent qilamiz
  },
  fpsLimit: 100,
  interactivity: {
    events: {
      onClick: { enable: true, mode: 'push' },
      onHover: { enable: true, mode: 'repulse' },
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 150, duration: 0.4 }
    }
  },
  particles: {
    color: { value: props.isLight ? '#000000' : '#ffffff' },
    links: {
      color: props.isLight ? '#000000' : '#165BFB',
      distance: 120,
      enable: true,
      opacity:1,
      width: 1
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: { default: 'bounce' },
      random: false,
      speed: 1,
      straight: false
    },
    number: {
      density: { enable: true, area: 800 },
      value: 150
    },
    opacity: { value: 0.7 },
    shape: { type: 'circle' },
    size: { value: { min: 1, max: 3 } }
  },
  detectRetina: true
}))
</script>
