---
layout: home

title: deft-reader
titleTemplate: 玩呢

hero:
  name: deft-reader
  text: 玩呢
  tagline: Get ready for a development environment that can finally catch up with you.
  image:
    src: /logo-with-shadow.png
    alt: Vite
  actions:
    - theme: brand
      text: Get Started
      link: /guide/
    - theme: alt
      text: Why Vite?
      link: /guide/why

features:
  - icon: 💡
    title: Instant Server Start
    details: On demand file serving over native ESM, no bundling required!
  - icon: ⚡️
    title: Lightning Fast HMR
    details: Hot Module Replacement (HMR) that stays fast regardless of app size.
  - icon: 🛠️
    title: Rich Features
    details: Out-of-the-box support for TypeScript, JSX, CSS and more.
  - icon: 📦
    title: Optimized Build
    details: Pre-configured Rollup build with multi-page and library mode support.
  - icon: 🔩
    title: Universal Plugins
    details: Rollup-superset plugin interface shared between dev and build.
  - icon: 🔑
    title: Fully Typed APIs
    details: Flexible programmatic APIs with full TypeScript typing.
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search)
  if (urlParams.get('uwu') != null) {
    const img = document.querySelector('.VPHero .VPImage.image-src')
    img.src = '/logo-uwu.png'
    img.alt = 'Vite Kawaii Logo by @icarusgkx'
  }
})
</script>
