<template>
  <div class="float-actions">
    <!-- 返回顶部 -->
    <button class="float-btn back-top" @click="scrollToTop"  >
     到顶部
    </button>

    <!-- 联系跳转百度 -->
    <a style="cursor: pointer;" class="float-btn contact" href="https://t.me/remote0007_jobs" target="_blank"  >
      TG
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showBackTop = ref(false)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const handleScroll = () => {
  showBackTop.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.float-actions {
  position: fixed;
  right: 24px;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 999;
}

.float-btn {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  border: none;
  background: #28e0ff;
  color: #0b101f;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(40, 224, 255, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.float-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(40, 224, 255, 0.5);
}

.float-btn svg {
  width: 24px;
  height: 24px;
}

.back-top {
  background: transparent;
  color: #28e0ff;
  border: 1px solid rgba(40, 224, 255, 0.35);
  box-shadow: none;
}

.back-top:hover {
  background: rgba(40, 224, 255, 0.08);
  box-shadow: none;
}

.app {
  min-height: 100vh;
  background-color: #0b101f;
}
</style>