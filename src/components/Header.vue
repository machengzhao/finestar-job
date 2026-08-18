<template>
  <header class="page-header" style="position: fixed;z-index:999">
    <div class="header-container">
      <!-- Logo -->
      <div class="logo-wrap">
        <div class="logo-icon"></div>
        <div class="logo-text">
          <div class="en">FineStar</div>
          <div class="cn">梵星科技</div>
        </div>
      </div>

      <!-- 导航菜单 -->
      <nav class="nav-menu">
        <div class="nav-item" @click="scrollToId('AboutAs')">关于我们</div>
        <div class="nav-item" @click="scrollToId('Time')">工作制度</div>
        <div class="nav-item" @click="scrollToId('Team')">团队优势</div>
        <div class="nav-item" @click="scrollToId('Jobs')">在招岗位</div>
        <div class="nav-item" @click="scrollToId('Contact')">联系我们</div>
        <!-- <router-link to="/about" class="nav-item">关于我们</router-link>
        <router-link to="/policy" class="nav-item">工作制度</router-link>
        <router-link to="/advantage" class="nav-item">团队优势</router-link>
        <router-link to="/jobs" class="nav-item">在招岗位</router-link>
        <router-link to="/contact" class="nav-item">联系我们</router-link> -->
      </nav>
    </div>
  </header>
</template>

<script setup>
// 如果不需要逻辑，这里留空即可
const scrollToId = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  // header高度假设80px，减去固定头部高度，防止内容被挡住
  const headerHeight = 80
  const top = el.offsetTop - headerHeight

  window.scrollTo({
    top: top,
    behavior: 'smooth' //平滑滚动
  })
}
</script>

<style scoped>
.page-header {
  background-color: #0b0e18;
  width: 100%;
}
.header-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}
.logo-icon {
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background: linear-gradient(135deg, #284878, #602870);
}
.logo-text .en {
  font-size: 28px;
  color: #ffffff;
  letter-spacing: 2px;
}
.logo-text .cn {
  font-size: 14px;
  color: #94a3b8;
}
.nav-menu {
  display: flex;
  gap: 48px;
}
.nav-item {
  cursor: pointer;
  font-size: 22px;
  color: #cbd5e1;
  text-decoration: none;
  transition: color 0.2s;
}
.nav-item:hover,
.nav-item.router-link-active {
  color: #22e2ec;
  border-bottom: 2px solid #22e2ec;
}
</style>