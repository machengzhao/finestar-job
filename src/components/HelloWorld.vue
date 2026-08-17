<script setup>
 
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import vueLogo from '../assets/vue.svg'

const count = ref(0)

 
import { ref, computed } from 'vue'

// 岗位分类
const categoryList = ref([
  { key: 'all', label: '全部岗位', count: 254 },
  { key: 'ai', label: 'AI / AIGC', count: 36 },
  { key: 'dev', label: '技术研发', count: 58 },
  { key: 'product', label: '产品', count: 18 },
  { key: 'operate', label: '运营增长', count: 53 },
  { key: 'video', label: '视频内容', count: 12 },
  { key: 'ui', label: 'UI 设计', count: 15 },
  { key: 'game', label: '游戏', count: 20 },
  { key: 'market', label: '商务市场', count: 16 },
  { key: 'func', label: '职能', count: 26 }
])
const activeCat = ref('all')

// 岗位模拟数据
const jobList = ref([
  { id:1, title:'AI 研发工程师', cat:'ai', salary:'面议', department:'AI & AIGC' },
  { id:2, title:'Agent 架构师（后端偏 Go）', cat:'ai', salary:'面议', department:'AI & AIGC' },
  { id:3, title:'AI 应用开发工程师', cat:'ai', salary:'面议', department:'AI & AIGC' },
  { id:4, title:'资深广告策略优化师', cat:'ai', salary:'面议', department:'AI & AIGC' },
  { id:5, title:'生成式广告素材专家', cat:'ai', salary:'面议', department:'AI & AIGC' },
  { id:6, title:'高级/专家 AI 应用工程师（Agent Ops）', cat:'ai', salary:'20K‑40K', department:'AI & AIGC' },
  { id:7, title:'AI 应用工程师', cat:'ai', salary:'21K‑42K', department:'AI & AIGC' },
  { id:8, title:'AI 应用开发工程师（移动端）', cat:'ai', salary:'25K‑30K', department:'AI & AIGC' },
  { id:9, title:'AI 全栈工程师', cat:'ai', salary:'25K‑30K', department:'AI & AIGC' },
  { id:10, title:'AI 后端工程师', cat:'ai', salary:'30K‑50K', department:'AI & AIGC' },
  { id:11, title:'AI 内容工程师', cat:'ai', salary:'20K‑30K', department:'AI & AIGC' },
  { id:12, title:'AI 内容创作 / 增长运营', cat:'ai', salary:'20K‑30K', department:'AI & AIGC' },
])

// 筛选岗位
const filterJobs = computed(()=>{
  if(activeCat.value === 'all') return jobList.value
  return jobList.value.filter(item=>item.cat === activeCat.value)
})
 
</script>

<template>
  11
  <div class="min-h-screen bg-darkBg">
    <!-- ========== 顶部导航 ========== -->
    <header class="border-b border-slate-700/60 px-6 py-4 sticky top-0 z-10 bg-darkBg/90 backdrop-blur">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="text-xl font-bold text-neonCyan">LUMENIX 灵影科技</div>
        <nav class="hidden md:flex gap-7 text-sm text-slate-300">
          <a href="#about" class="hover:text-neonCyan transition">About Lumenix</a>
          <a href="#business" class="hover:text-neonCyan transition">Business Lines</a>
          <a href="#terms" class="hover:text-neonCyan transition">Working Terms</a>
          <a href="#why" class="hover:text-neonCyan transition">Why Lumenix</a>
          <a href="#roles" class="text-neonCyan font-semibold">Open Roles</a>
        </nav>
      </div>
    </header>

    <!-- ========== Hero 首页头部 ========== -->
    <section class="max-w-7xl mx-auto px-6 py-16">
      <div class="mb-4 text-neonCyan text-sm tracking-widest">GLOBAL REMOTE HIRING · 2026</div>
      <h1 class="text-5xl font-bold mb-3">LUMENIX</h1>
      <h2 class="text‑2xl text‑slate‑200 mb‑4">灵影科技</h2>
      <p class="text-slate‑400 text-lg mb‑6">Global Remote Careers · AI · Game · Blockchain · Entertainment</p>

      <div class="flex gap‑4 mb‑10">
        <button class="bg‑neonCyan text‑slate‑900 px‑5 py‑2 rounded font‑medium hover:bg‑cyan‑300 transition">立即应聘</button>
        <a href="#roles" class="border border‑neonCyan text‑neonCyan px‑5 py‑2 rounded hover:bg‑neonCyan/10 transition">浏览岗位</a>
      </div>

      <div class="grid grid‑cols‑2 md:grid‑cols‑4 gap‑6 text‑center">
        <div>
          <div class="text‑3xl font‑bold text‑neonCyan">2,000+</div>
          <div class="text‑sm text‑slate‑400">Global Team</div>
        </div>
        <div>
          <div class="text‑3xl font‑bold text‑neonCyan">9</div>
          <div class="text‑sm text‑slate‑400">Job Families</div>
        </div>
        <div>
          <div class="text‑3xl font‑bold text‑neonCyan">3</div>
          <div class="text‑sm text‑slate‑400">Hub Cities</div>
        </div>
        <div>
          <div class="text‑3xl font‑bold text‑neonCyan">100%</div>
          <div class="text‑sm text‑slate‑400">Remote First</div>
        </div>
      </div>
    </section>

    <!-- ========== About Lumenix ========== -->
    <section id="about" class="max‑w‑7xl mx‑auto px‑6 py‑14 border‑t border‑slate‑700/50">
      <h2 class="text‑2xl font‑bold mb‑6">About Lumenix</h2>
      <h3 class="text‑3xl font‑semibold mb‑4">把分散在全球的光聚到一处</h3>
      <p class="text‑slate‑400 mb‑2">One team, seven time zones</p>
      <p class="text‑slate‑300 leading‑relaxed max‑w‑4xl">
        Lumenix 灵影科技是一家以远程协作为默认工作方式的科技集团。团队分布在英国、美国与台湾三大枢纽，2000 余名成员在各自的时区推进同一套产品线：AI 应用、游戏研发、区块链基础设施与全球内容平台。
        <br /><br />
        我们不设打卡机器，也不用工位衡量产出。你在哪里工作不重要，你交付什么才重要。
      </p>
    </section>

    <!-- ========== Business Lines 业务板块 ========== -->
    <section id="business" class="max‑w‑7xl mx‑auto px‑6 py‑14 border‑t border‑slate‑700/50">
      <h2 class="text‑2xl font‑bold mb‑8">Business Lines</h2>
      <div class="grid md:grid‑cols‑2 gap‑6">
        <div class="p‑6 rounded‑xl bg‑cardBg border border‑slate‑700 hover:border‑neonCyan/40 transition">
          <div class="text‑4xl mb‑3">🎮</div>
          <h3 class="text‑xl font‑semibold mb‑2">游戏研发 <span class="text‑slate‑400 text‑base">Game Studio</span></h3>
          <p class="text‑slate‑400">自研游戏工作室，从立项、研发到全球发行全流程内部完成。</p>
        </div>
        <div class="p‑6 rounded‑xl bg‑cardBg border border‑slate‑700 hover:border‑neonCyan/40 transition">
          <div class="text‑4xl mb‑3">🤖</div>
          <h3 class="text‑xl font‑semibold mb‑2">AI 人工智能 <span class="text‑slate‑400 text‑base">Applied AI</span></h3>
          <p class="text‑slate‑400">生成式内容管线与 Agent 系统，日均调用量以千万计。</p>
        </div>
        <div class="p‑6 rounded‑xl bg‑cardBg border border‑slate‑700 hover:border‑neonCyan/40 transition">
          <div class="text‑4xl mb‑3">⛓️</div>
          <h3 class="text‑xl font‑semibold mb‑2">区块链 <span class="text‑slate‑400 text‑base">Blockchain</span></h3>
          <p class="text‑slate‑400">自研钱包与链上结算体系，已稳定运行多年。</p>
        </div>
        <div class="p‑6 rounded‑xl bg‑cardBg border border‑slate‑700 hover:border‑neonCyan/40 transition">
          <div class="text‑4xl mb‑3">🎬</div>
          <h3 class="text‑xl font‑semibold mb‑2">视频 <span class="text‑slate‑400 text‑base">Video Platform</span></h3>
          <p class="text‑slate‑400">面向全球市场的视频内容平台与多渠道分发矩阵。</p>
        </div>
      </div>
    </section>

    <!-- ========== Working Terms 工作条件 ========== -->
    <section id="terms" class="max‑w‑7xl mx‑auto px‑6 py‑14 border‑t border‑slate‑700/50">
      <h2 class="text‑2xl font‑bold mb‑2">Working Terms</h2>
      <p class="text‑slate‑400 mb‑8">先把条件讲清楚 &nbsp;·&nbsp; No surprises after you sign</p>
      <div class="grid md:grid‑cols‑2 gap‑8">
        <div>
          <h3 class="text‑lg font‑semibold text‑neonCyan mb‑3">工作时间 Working hours</h3>
          <ul class="text‑slate‑300 space‑y‑2">
            <li>• 每日 10:00 – 22:00</li>
            <li>• 午休 1.5 小时，晚休 30 分钟</li>
            <li>• 周六 18:00 下班，周日固定休息</li>
            <li>• 每月 4 天可自主安排的月休</li>
          </ul>
        </div>
        <div>
          <h3 class="text‑lg font‑semibold text‑neonCyan mb‑3">节假日 Holidays</h3>
          <ul class="text‑slate‑300 space‑y‑2">
            <li>• 按中国大陆法定节假日执行</li>
            <li>• 法定节日与调休安排提前公布</li>
            <li>• 三地枢纽节日互不影响交付</li>
          </ul>
        </div>
        <div>
          <h3 class="text‑lg font‑semibold text‑neonCyan mb‑3">薪资发放 Payroll</h3>
          <ul class="text‑slate‑300 space‑y‑2">
            <li>• 每月 15 日准时发放</li>
            <li>• 结算币种 USDT (TRC20)</li>
            <li>• 入职即明确薪资构成，无隐藏条款</li>
          </ul>
        </div>
        <div>
          <h3 class="text‑lg font‑semibold text‑neonCyan mb‑3">办公地点 Locations</h3>
          <ul class="text‑slate‑300 space‑y‑2">
            <li>• Remote — 全球远程优先</li>
            <li>• London 伦敦枢纽</li>
            <li>• Los Angeles 洛杉矶枢纽</li>
            <li>• Taiwan 台湾枢纽</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ========== Why Lumenix 六大理由 ========== -->
    <section id="why" class="max‑w‑7xl mx‑auto px‑6 py‑14 border‑t border‑slate‑700/50">
      <h2 class="text‑2xl font‑bold mb‑2">Why Lumenix</h2>
      <p class="text‑slate‑400 mb‑8">六个留下来的理由 &nbsp;·&nbsp; Built for people who ship</p>
      <div class="grid md:grid‑cols‑2 xl:grid‑cols‑3 gap‑6">
        <div class="p‑6 rounded‑xl bg‑cardBg border border‑slate‑700">
          <div class="text‑neonCyan font‑bold text‑xl mb‑2">01</div>
          <h3 class="font‑semibold mb‑2">全球远程办公 <span class="text‑slate‑400 text‑sm">Remote first</span></h3>
          <p class="text‑slate‑400 text‑sm">远程居家办公，工作地点不限。员工需按照公司规定按时上班打卡、下班打卡，确保正常出勤及工作时长。</p>
        </div>
        <div class="p‑6 rounded‑xl bg‑cardBg border border‑slate‑700">
          <div class="text‑neonCyan font‑bold text‑xl mb‑2">02</div>
          <h3 class="font‑semibold mb‑2">高于同岗位市场价 <span class="text‑slate‑400 text‑sm">Above‑market pay</span></h3>
          <p class="text‑slate‑400 text‑sm">薪资对标一线城市互联网水平，每月15日 USDT 结算，从不拖欠。表现突出者可在季度内调薪。</p>
        </div>
        <div class="p‑6 rounded‑xl bg‑cardBg border border‑slate‑700">
          <div class="text‑neonCyan font‑bold text‑xl mb‑2">03</div>
          <h3 class="font‑semibold mb‑2">AI 一线战场 <span class="text‑slate‑400 text‑sm">Applied AI at scale</span></h3>
          <p class="text‑slate‑400 text‑sm">我们的 AI 不是内部试验品，而是每天面向千万级海外用户的生产系统。模型、算力、数据全部到位。</p>
        </div>
        <div class="p‑6 rounded‑xl bg‑cardBg border border‑slate‑700">
          <div class="text‑neonCyan font‑bold text‑xl mb‑2">04</div>
          <h3 class="font‑semibold mb‑2">区块链基础设施 <span class="text‑slate‑400 text‑sm">On‑chain infra</span></h3>
          <p class="text‑slate‑400 text‑sm">自研钱包与结算体系已稳定运行多年。你会接触真实的链上业务，而不是白皮书里的概念。</p>
        </div>
        <div class="p‑6 rounded‑xl bg‑cardBg border border‑slate‑700">
          <div class="text‑neonCyan font‑bold text‑xl mb‑2">05</div>
          <h3 class="font‑semibold mb‑2">自研游戏工作室 <span class="text‑slate‑400 text‑sm">In‑house game studio</span></h3>
          <p class="text‑slate‑400 text‑sm">从立项、研发到全球发行都在内部完成。项目周期明确，署名与分成机制公开透明。</p>
        </div>
        <div class="p‑6 rounded‑xl bg‑cardBg border border‑slate‑700">
          <div class="text‑neonCyan font‑bold text‑xl mb‑2">06</div>
          <h3 class="font‑semibold mb‑2">长期主义 <span class="text‑slate‑400 text‑sm">Built to last</span></h3>
          <p class="text‑slate‑400 text‑sm">公司自成立以来持续盈利，不依赖外部输血。我们招人是为了三年后还在一起，不是为了填一个季度的坑。</p>
        </div>
      </div>
    </section>

    <!-- ========== 在招岗位区域 ========== -->
    <section id="roles" class="max‑w‑7xl mx‑auto px‑6 py‑14 border‑t border‑slate‑700/50">
      <h2 class="text‑2xl font‑bold mb‑2">Open Roles</h2>
      <p class="text‑slate‑400 mb‑8">Nine job families · Updated weekly</p>

      <div class="flex flex‑col lg:flex‑row gap‑8">
        <!-- 左侧分类侧边栏 -->
        <aside class="w‑64 shrink‑0">
          <ul class="space‑y‑1">
            <li
              v‑for="cat in categoryList"
              :key="cat.key"
              @click="activeCat = cat.key"
              :class="[
                'px‑3 py‑2 rounded cursor‑pointer flex justify‑between items‑center',
                activeCat === cat.key
                  ? 'bg‑cardBg text‑neonCyan border‑l‑2 border‑neonCyan'
                  : 'hover:bg‑slate‑800/60'
              ]"
            >
              <span>{{ cat.label }}</span>
              <span class="text‑slate‑400 text‑sm">{{ cat.count }}</span>
            </li>
          </ul>
        </aside>

        <!-- 岗位卡片列表 -->
        <div class="flex‑1">
          <p class="mb‑4 text‑slate‑300">匹配到 <span class="text‑neonCyan font‑semibold">{{ filterJobs.length }}</span> 个岗位</p>
          <div class="grid grid‑cols‑1 xl:grid‑cols‑2 gap‑5">
            <div
              v‑for="job in filterJobs"
              :key="job.id"
              class="p‑5 rounded‑xl bg‑cardBg border border‑slate‑700 hover:border‑neonCyan/40 transition‑all duration‑300 hover:shadow‑lg hover:shadow‑cyan‑900/20"
            >
              <h3 class="font‑semibold text‑lg mb‑2">{{ job.title }}</h3>
              <div class="text‑xs text‑slate‑400 flex gap‑2 mb‑4">
                <span>{{ job.salary }}</span>
                <span>Remote</span>
                <span>{{ job.department }}</span>
              </div>
              <div class="flex gap‑3">
                <button class="px‑3 py‑1.5 border border‑slate‑600 rounded text‑sm hover:text‑neonCyan hover:border‑neonCyan transition">查看详情</button>
                <button class="px‑3 py‑1.5 bg‑neonCyan text‑slate‑900 rounded text‑sm font‑medium hover:bg‑cyan‑300 transition">立即投递</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== Footer底部 ========== -->
    <footer class="border‑t border‑slate‑700 mt‑12 py‑8 text‑center text‑slate‑500 text‑sm">
      <p>©2026 LUMENIX TECHNOLOGY ALL RIGHTS RESERVED</p>
      <p class="mt‑1">REMOTE FIRST‑LONDON / LOS ANGELES / TAIWAN</p>
    </footer>
  </div>

 
</template>
