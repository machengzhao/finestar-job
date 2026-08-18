<template>
  <footer class="page-footer">
    <div class="footer-container">
      <!-- 左侧logo&简介 -->
      <div class="footer-col">
        <div class="logo-wrap">
          <div class="logo-icon"></div>
          <div class="logo-text">
            <div class="en">FineStar</div>
            <div class="cn">梵星科技</div>
          </div>
        </div>
        <div class="desc">
          梵星科技｜全球远程招聘<br/>
          以远程为默认的全球科技团队，业务覆盖 AI、游戏、区块链与内容平台。
        </div>
      </div>

      <!-- CAREERS 中间菜单1 -->
      <div class="footer-col">
        <h4 class="footer-title">CAREERS</h4>
        <div class="footer-link">全部在招岗位</div>
        <div class="footer-link">工作制度与薪酬</div>
        <div class="footer-link">团队优势</div>
        <div class="footer-link">关于梵星</div>
      </div>

      <!-- CONTACT 中间菜单2 -->
      <div class="footer-col">
        <h4 class="footer-title">CONTACT</h4>
        <div class="footer-link">直招频道 <span class="red-text">@
              <a style="cursor: pointer;" class="float-btn contact" href="https://t.me/remote0007" target="_blank"  >
      remote0007
    </a>

        </span></div>
        <div class="footer-link">HR Rocky <span class="red-text">
                <a style="cursor: pointer;" class="float-btn contact" href="https://t.me/remote0007_jobs" target="_blank"  >
      remote0007_jobs
    </a>

            @</span></div>
      </div>

      <!-- REMOTE FIRST 时区 -->
      <div class="footer-col">
        <h4 class="footer-title">REMOTE FIRST</h4>
        <div class="footer-link">• LONDON GMT+0</div>
        <div class="footer-link">• LOS ANGELES GMT−8</div>
        <div class="footer-link">• TAIWAN GMT+8</div>
      </div>
    </div>

    <!-- 版权最底部 -->
    <div class="copyright">
      © 2026 FineStar TECHNOLOGY · ALL RIGHTS RESERVED
      <span class="right-txt">REMOTE FIRST · LONDON / LOS ANGELES / TAIWAN</span>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.page-footer {
  background-color: #0b0e18;
  width: 100%;
  padding: 60px 40px 30px;
  color:#cbd5e1;
}
.footer-container {
  max-width:1400px;
  margin:0 auto;
  display:flex;
  justify-content: space-between;
  gap:32px;
}
.footer-col {
  flex:1;
}
.logo-wrap {
  display:flex;
  align-items:center;
  gap:12px;
  margin-bottom:16px;
}
.logo-icon {
  width:44px;
  height:44px;
  border-radius:8px;
  background: linear-gradient(135deg,#284878,#602870);
}
.logo-text .en {
  font-size:28px;
  color:#fff;
  letter-spacing:2px;
}
.logo-text .cn {
  font-size:14px;
  color:#94a3b8;
}
.desc {
  line-height:1.8;
  color:#94a3b8;
  font-size:16px;
}
.footer-title {
  color:#22e2ec;
  font-size:20px;
  letter-spacing:1px;
  margin-bottom:20px;
  font-weight:500;
}
.footer-link {
  margin-bottom:14px;
  font-size:18px;
  color:#cbd5e1;
}
.red-text {
  color:#ff3333;
}
.copyright {
  max-width:1400px;
  margin:40px auto 0;
  padding-top:30px;
  border-top:1px solid #222b3b;
  display:flex;
  justify-content:space-between;
  font-size:16px;
  color:#78879e;
}
</style>