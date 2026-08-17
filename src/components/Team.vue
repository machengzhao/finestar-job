<template>
  <section class="why-lumenix">
    <div class="container">
      <div class="section-header">
        <div class="top-en">WHY LUMENIX</div>
        <h2 class="main-title">六个留下来的理由</h2>
        <div class="sub-en">BUILT FOR PEOPLE WHO SHIP</div>
      </div>

      <div class="card-grid">
        <!-- 01 全球远程办公 -->
        <div class="reason-card">
          <div class="card-head">
            <div class="card-icon icon-global">🌐</div>
            <div class="card-num">01</div>
          </div>
          <h3 class="card-title">全球远程办公</h3>
          <div class="card-en">REMOTE FIRST</div>
          <p class="card-desc">
            远程居家办公，工作地点不限。员工需按照公司规定按时上班打卡、下班打卡，确保正常出勤及工作时长。
          </p>
        </div>

        <!-- 02 高于同岗位市场价 -->
        <div class="reason-card">
          <div class="card-head">
            <div class="card-icon icon-pay">💰</div>
            <div class="card-num">02</div>
          </div>
          <h3 class="card-title">高于同岗位市场价</h3>
          <div class="card-en">ABOVE-MARKET PAY</div>
          <p class="card-desc">
            薪资对标一线城市互联网水平，每月15日 USDT 结算，从不拖欠。表现突出者可在季度内调薪。
          </p>
        </div>

        <!-- 03 AI一线战场 -->
        <div class="reason-card">
          <div class="card-head">
            <div class="card-icon icon-ai">⚙️</div>
            <div class="card-num">03</div>
          </div>
          <h3 class="card-title">AI一线战场</h3>
          <div class="card-en">APPLIED AI AT SCALE</div>
          <p class="card-desc">
            我们的 AI 不是内部试验品，而是每天面向千万级海外用户的生产系统。模型、算力、数据全部到位。
          </p>
        </div>

        <!-- 04 区块链基础设施 -->
        <div class="reason-card">
          <div class="card-head">
            <div class="card-icon icon-chain">🔗</div>
            <div class="card-num">04</div>
          </div>
          <h3 class="card-title">区块链基础设施</h3>
          <div class="card-en">ON-CHAIN INFRA</div>
          <p class="card-desc">
            自研钱包与结算体系已稳定运行多年。你会接触真实的链上业务，而不是白皮书里的概念。
          </p>
        </div>

        <!-- 05 自研游戏工作室 -->
        <div class="reason-card">
          <div class="card-head">
            <div class="card-icon icon-game">🎮</div>
            <div class="card-num">05</div>
          </div>
          <h3 class="card-title">自研游戏工作室</h3>
          <div class="card-en">IN-HOUSE GAME STUDIO</div>
          <p class="card-desc">
            从立项、研发到全球发行都在内部完成。项目周期明确，署名与分成机制公开透明。
          </p>
        </div>

        <!-- 06 长期主义 -->
        <div class="reason-card">
          <div class="card-head">
            <div class="card-icon icon-longterm">🌱</div>
            <div class="card-num">06</div>
          </div>
          <h3 class="card-title">长期主义</h3>
          <div class="card-en">BUILT TO LAST</div>
          <p class="card-desc">
            公司自成立以来持续盈利，不依赖外部输血。我们招人是为了三年后还在一起，不是为了填一个季度的坑。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-lumenix {
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
}

.card-grid {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.reason-card {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  background-color: #0f1424;
  padding: 32px 28px;
}

.card-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 22px;
}
.card-icon {
  width: 52px;
  height: 52px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}
.icon-global {
  background-color: rgba(40, 224, 255, 0.15);
  border:1px solid #28e0ff;
}
.icon-pay {
  background-color: rgba(255, 180, 30, 0.15);
  border:1px solid #ffb41e;
}
.icon-ai {
  background-color: rgba(155, 64, 216, 0.15);
  border:1px solid #9b40d8;
}
.icon-chain {
  background-color: rgba(42, 212, 140, 0.15);
  border:1px solid #2ad48c;
}
.icon-game {
  background-color: rgba(230, 48, 140, 0.15);
  border:1px solid #e6308c;
}
.icon-longterm {
  background-color: rgba(40, 180, 220, 0.15);
  border:1px solid #28b4dc;
}

.card-num {
  color:#9b40d8;
  font-size:16px;
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
  margin-bottom:16px;
}
.card-desc {
  font-size:16px;
  color:#b0bcd4;
  line-height:1.7;
  margin:0;
}
</style>