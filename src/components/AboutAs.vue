<template>
  <div class="banner">
    <h1 class="en-title">FineStar</h1>
    <div class="cn-title">梵星科技</div>
    <div class="sub-row">
      <span class="sub-text">GLOBAL REMOTE CAREERS</span>
      <span class="line-wrap">
        <span class="line"></span>
        <span class="dot"></span>
      </span>
    </div>
    <div class="tip-text">每月 15 日发薪 · USDT（TRC20）</div>
  </div>

  <!-- 公司介绍 -->
     <section class="about-section">
    <div class="container">
      <!-- 左侧区域 -->
      <div class="left-wrap">
        <h2 class="main-title">把分散在全球的<br />光聚到一处</h2>
        <div class="en-subtitle">ONE TEAM, SEVEN TIME ZONES</div>
        <div class="desc-text">
           FineStar 梵星科技是一家以远程协作为默认工作方式的科技集团。团队分布在英国、美国与台湾三大枢纽，2000 余名成员在各自的时区推进同一套产品线：AI 应用、游戏研发、区块链基础设施与全球内容平台。
        </div>
        <div class="desc-text">
          我们不设打卡机器，也不用工位衡量产出。你在哪里工作不重要，你交付什么才重要。
        </div>

        <!-- 数字统计卡片 -->
        <div class="stat-grid">
          <div class="stat-item">
            <div class="stat-num">2,000<span class="plus">+</span></div>
            <div class="stat-label">全球在职员工</div>
          </div>
          <div class="stat-item">
            <div class="stat-num">3</div>
            <div class="stat-label">洲际研发枢纽</div>
          </div>
          <div class="stat-item">
            <div class="stat-num">24<span class="unit">h</span></div>
            <div class="stat-label">全时区协作接力</div>
          </div>
          <div class="stat-item">
            <div class="stat-num">4</div>
            <div class="stat-label">核心业务板块</div>
          </div>
        </div>
      </div>

      <!-- 右侧业务板块列表 -->
      <div class="right-wrap">
        <div class="business-item">
          <div class="biz-header">
            <span class="biz-icon">🎮</span>
            <div>
              <div class="biz-title">游戏研发</div>
              <div class="biz-en">GAME STUDIO</div>
            </div>
          </div>
          <p class="biz-desc">自研游戏工作室，从立项、研发到全球发行全流程内部完成。</p>
        </div>

        <div class="business-item">
          <div class="biz-header">
            <span class="biz-icon">🤖</span>
            <div>
              <div class="biz-title">AI人工智能</div>
              <div class="biz-en">APPLIED AI</div>
            </div>
          </div>
          <p class="biz-desc">生成式内容管线与 Agent 系统，日均调用量以千万计。</p>
        </div>

        <div class="business-item">
          <div class="biz-header">
            <span class="biz-icon">⛓️</span>
            <div>
              <div class="biz-title">区块链</div>
              <div class="biz-en">BLOCKCHAIN</div>
            </div>
          </div>
          <p class="biz-desc">自研钱包与链上结算体系，已稳定运行多年。</p>
        </div>

        <div class="business-item">
          <div class="biz-header">
            <span class="biz-icon">🎬</span>
            <div>
              <div class="biz-title">视频</div>
              <div class="biz-en">VIDEO PLATFORM</div>
            </div>
          </div>
          <p class="biz-desc">面向全球市场的视频内容平台与多渠道分发矩阵。</p>
        </div>
      </div>
    </div>
  </section>


</template>

<style scoped>
.banner {
  padding: 60px 40px;
  background-color: #0f1422;
  color: #fff;
}
.en-title {
  font-size: 140px;
  font-weight: 700;
  color: #f0f2f8;
  line-height: 1.1;
  margin:0 0 12px;
}
.cn-title {
  font-size: 64px;
  color:#28e0ff;
  margin-bottom:32px;
}
.sub-row {
  display:flex;
  align-items:center;
  gap:24px;
  margin-bottom:20px;
}
.sub-text {
  font-size:42px;
  color:#a0b0d0;
  letter-spacing:6px;
}
.line-wrap {
  flex:1;
  display:flex;
  align-items:center;
  position:relative;
}
.line {
  width:100%;
  height:1px;
  background:#28e0ff;
  opacity:0.6;
}
.dot {
  position:absolute;
  left:50%;
  transform:translateX(-50%);
  width:14px;
  height:14px;
  border-radius:50%;
  background:#28e0ff;
}
.tip-text {
  font-size:24px;
  color:#7888a8;
}
</style>


 

 

<style scoped>
.about-section {
  background-color: #0b0e1b;
  color: #ffffff;
  padding: 80px 40px;
}
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  max-width: 1600px;
  margin: 0 auto;
}

/* 左侧 */
.main-title {
  font-size: 72px;
  font-weight: 700;
  line-height: 1.1;
  margin: 0 0 16px;
  color: #ffffff;
}
.en-subtitle {
  font-size: 20px;
  color: #7483a8;
  letter-spacing: 3px;
  margin-bottom: 24px;
}
.desc-text {
  font-size: 18px;
  color: #b0bcd4;
  line-height: 1.7;
  margin-bottom: 20px;
}

/* 统计数字网格 */
.stat-grid {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: rgba(255,255,255,0.12);
  border-radius: 12px;
  overflow: hidden;
}
.stat-item {
  background-color: #0f1424;
  padding: 32px 24px;
}
.stat-num {
  font-size: 56px;
  font-weight: bold;
  color: #fff;
  line-height: 1;
}
.plus {
  font-size: 24px;
}
.unit {
  font-size: 24px;
}
.stat-label {
  margin-top:12px;
  font-size:16px;
  color:#7483a8;
}

/* 右侧业务列表 */
.business-item {
  padding:28px 0;
  border-bottom:1px solid rgba(255,255,255,0.1);
}
.business-item:first-child {
  padding-top:0;
}
.biz-header {
  display:flex;
  align-items:center;
  gap:14px;
  margin-bottom:12px;
}
.biz-icon {
  font-size:26px;
}
.biz-title {
  font-size:20px;
  font-weight:600;
  color:#ffffff;
}
.biz-en {
  font-size:14px;
  color:#7483a8;
  letter-spacing:1px;
  margin-top:4px;
}
.biz-desc {
  font-size:16px;
  color:#a0aec8;
  margin:0;
  line-height:1.6;
}
</style>