<template>
  <section class="working-terms">
    <div class="container">
      <div class="section-header">
        <div class="top-en">WORKING TERMS</div>
        <h2 class="main-title">你关心的事情</h2>
        <div class="sub-en">NO SURPRISES AFTER YOU SIGN.</div>
        <p class="desc">作息、假期、发薪、地点——所有你入职后才会关心的事，我们放在面试前公开。</p>
      </div>

      <!-- 重点：class全部普通短横线 -->
      <div class="card-grid">
        <div class="term-card">
          <div class="card-icon icon-clock">🕒</div>
          <h3 class="card-title">工作时间</h3>
          <div class="card-en">WORKING HOURS</div>
          <ul class="card-list">
            <li>每日 10:00‑22:00</li>
            <li>午休 2小时，晚休60分钟,每日9h</li>
            <li>周六 19:00 下班，周日固定休息</li>
            <li>每月 4天 可自主安排的月休</li>
          </ul>
        </div>
        <div class="term-card">
          <div class="card-icon icon-holiday">🗓️</div>
          <h3 class="card-title">节假日</h3>
          <div class="card-en">HOLIDAYS</div>
          <ul class="card-list">
            <li>按 中国大陆法定节假日 执行</li>
            <li>法定节日与调休安排提前公布</li>
            <li>三地枢纽节日互不影响交付</li>
          </ul>
        </div>
        <div class="term-card">
          <div class="card-icon icon-pay">💳</div>
          <h3 class="card-title">薪资发放</h3>
          <div class="card-en">PAYROLL</div>
          <ul class="card-list">
            <li>每月 15日 准时发放</li>
            <li>结算币种 <span class="text-gold">USDT（TRC20）</span></li>
            <li>入职即明确薪资构成，无隐藏条款</li>
          </ul>
        </div>
        <div class="term-card">
          <div class="card-icon icon-loc">📍</div>
          <h3 class="card-title">办公地点</h3>
          <div class="card-en">LOCATIONS</div>
          <ul class="card-list">
            <li>Remote — 全球远程优先!!</li>
            <li>London 伦敦枢纽</li>
            <li>Los Angeles 洛杉矶枢纽</li>
            <li>Taiwan 台湾枢纽</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.working-terms {
  background-color: #0b0e1b;
  color: #ffffff;
  padding: 80px 40px;
}
.container {
  max-width: 1700px;
  margin: 0 auto;
}

.section-header {
  margin-bottom: 52px;
}
.top-en {
  font-size: 16px;
  color: #28e0ff;
  letter-spacing: 2px;
  margin-bottom: 8px;
}
.main-title {
  font-size: 72px;
  font-weight: 700;
  line-height: 1.1;
  margin: 0 0 12px;
  color: #ffffff;
}
.sub-en {
  font-size: 20px;
  color: #7483a8;
  letter-spacing: 3px;
  margin-bottom: 20px;
}
.desc {
  font-size: 18px;
  color: #b0bcd4;
  line-height: 1.7;
  margin: 0;
}

/* ========== card-grid 重点修复 ========== */
.card-grid {
  display: grid !important;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.term-card {
  border: 1px solid transparent;
  border-image: linear-gradient(90deg,#28e0ff,#9b40d8) 1;
  background-color: #0f1424;
  border-radius: 14px;
  padding: 32px 28px;
}

.card-icon {
  width: 52px;
  height: 52px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 20px;
}
.icon-clock {
  background-color: rgba(40, 224, 255, 0.15);
  border:1px solid #28e0ff;
}
.icon-holiday {
  background-color: rgba(155, 64, 216, 0.15);
  border:1px solid #9b40d8;
}
.icon-pay {
  background-color: rgba(255, 180, 30, 0.15);
  border:1px solid #ffb41e;
}
.icon-loc {
  background-color: rgba(42, 212, 140, 0.15);
  border:1px solid #2ad48c;
}

.card-title {
  font-size: 22px;
  font-weight: 600;
  margin: 0 0 6px;
  color: #fff;
}
.card-en {
  font-size:14px;
  color:#7483a8;
  letter-spacing:1px;
  margin-bottom:24px;
}

.card-list {
  list-style: none;
  padding:0;
  margin:0;
}
.card-list li {
  font-size:17px;
  color:#b0bcd4;
  line-height:2;
  padding-left:16px;
  position:relative;
}
.card-list li::before {
  content:"●";
  position:absolute;
  left:0;
  color:#50648c;
  font-size:10px;
}
.text-gold {
  color:#ffc145;
}
</style>