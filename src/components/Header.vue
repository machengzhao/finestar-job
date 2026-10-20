<template>
  <header class="page-header">
    <div class="header-container">
      <div class="logo-wrap">
        <div class="logo-icon"></div>
        <div class="logo-text">
          <div class="en">FineStar</div>
          <div class="cn">梵星科技</div>
        </div>
      </div>

      <!-- 汉堡按钮 -->
      <button class="hamburger" :class="{ active: menuOpen }" @click="menuOpen = !menuOpen">
        <span></span><span></span><span></span>
      </button>

      <!-- 导航菜单 -->
      <nav class="nav-menu" :class="{ open: menuOpen }">
        <div class="nav-item" @click="handleNav('AboutAs')">关于我们</div>
        <div class="nav-item" @click="handleNav('Time')">工作制度</div>
        <div class="nav-item" @click="handleNav('Team')">团队优势</div>
        <div class="nav-item" @click="handleNav('Jobs')">在招岗位</div>
        <div class="nav-item" @click="handleNav('Contact')">联系我们</div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const scrollToId = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  const headerHeight = 80
  const top = el.offsetTop - headerHeight
  window.scrollTo({ top, behavior: 'smooth' })
}

const handleNav = (id) => {
  menuOpen.value = false
  scrollToId(id)
}
</script>

<style scoped>
.page-header {
  background-color: #0b0e18;
  width: 100%;
  position: fixed;
  z-index: 999;
}
.header-container {
  overflow: hidden;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo-wrap { display: flex; align-items: center; gap: 12px; }
.logo-icon {
  width: 44px; height: 44px; border-radius: 8px;
  background: linear-gradient(135deg, #284878, #602870);
  flex-shrink: 0;
}
.logo-text .en { font-size: 28px; color: #ffffff; letter-spacing: 2px; }
.logo-text .cn { font-size: 14px; color: #94a3b8; }

.nav-menu { display: flex; gap: 48px; }
.nav-item {
  cursor: pointer; font-size: 22px; color: #cbd5e1;
  text-decoration: none; transition: color 0.2s;
}
.nav-item:hover { color: #22e2ec; border-bottom: 2px solid #22e2ec; }

/* 汉堡按钮隐藏（桌面） */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px; height: 22px;
  background: transparent; border: none; cursor: pointer; padding: 0;
  z-index: 1001;
}
.hamburger span {
  display: block; height: 2px; width: 100%;
  background: #cbd5e1; border-radius: 2px;
  transition: all 0.3s;
}
.hamburger.active span:nth-child(1) { transform: translateY(10px) rotate(45deg); }
.hamburger.active span:nth-child(2) { opacity: 0; }
.hamburger.active span:nth-child(3) { transform: translateY(-10px) rotate(-45deg); }

/* ========== 移动端 ========== */
@media (max-width: 768px) {
  .header-container { padding: 0.7rem 1rem; }

  .logo-icon { width: 36px; height: 36px; }
  .logo-text .en { font-size: 20px; }
  .logo-text .cn { font-size: 12px; }

  .hamburger { display: flex; }

  .nav-menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 30%;
    height: 100vh;
    max-width: 320px;
    background: #0f1422;
    flex-direction: column;
    gap: 0;
    padding: 90px 24px 24px;
    box-shadow: -6px 0 24px rgba(0,0,0,0.5);
    /* 关键：用 transform 隐藏，且过渡 transform */
    transform: translateX(100%);
    transition: transform 0.3s ease;
    z-index: 1000;
    overflow-y: auto;
  }
  /* 打开时归位 */
  .nav-menu.open {
    transform: translateX(0);
  }
  .nav-item {
    font-size: 18px;
    padding: 18px 0;
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }
  .nav-item:hover { border-bottom: 1px solid rgba(255,255,255,0.08); }
}

</style>