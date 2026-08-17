<template>
  <div class="job-page">
    <!-- 头部 -->
    <Header />
    <div class="con_box">
      <!-- 关于我们 -->
      <AboutAs class="about"/> 
      <Time/>
      <Team/>
      

      <!-- 在招职位 -->
        <div class="container">
           
            <!-- 过滤栏组件 -->
            <Jobs @filter-change="onFilterChange" />

            <!-- 匹配数量 -->
            <!-- <div class="match-count">匹配到 {{ displayJobs.length }} 个岗位</div> -->

            <!-- 岗位卡片网格 -->
            <!-- <div class="job-card-grid">
              <div v-for="item in displayJobs" :key="item.id">
              
              </div>
            </div> -->
          
          
          <!-- 左侧分类侧边栏 -->
          <!-- <aside class="sidebar">
            <div class="sidebar-header">99JOB FAMILIES</div>
            <ul class="category-list">
              <li
                v-for="cat in categoryList"
                :key="cat.key"
                @click="activeKey = cat.key"
                :class="['category-item', activeKey === cat.key ? 'active' : '']"
              >
                <span class="label">{{ cat.label }}</span>
                <span class="count">{{ cat.count }}</span>
              </li>
            </ul>
          </aside> -->

          <!-- 右侧岗位卡片 -->
          <!-- <main class="job-wrap">
            <div class="match-text">
              匹配到 <span class="num">{{ filterJobs.length }}</span> 个岗位
            </div>
            <div class="card-grid">
              <div v-for="job in filterJobs" :key="job.id" class="job-card">
                <div class="star-icon">☆</div>
                <h3 class="card-title">{{ job.title }}</h3>
                <div class="tag-row top-tag">
                  <span class="salary" :class="{ ask: job.salary === '面议' }">{{ job.salary }}</span>
                  <span class="tag">{{ job.tag1 }}</span>
                  <span v-if="job.tag2" class="tag purple-tag">{{ job.tag2 }}</span>
                </div>
                <div class="tag-row">
                  <span class="tag gray-tag">{{ job.department }}</span>
                </div>
                <div class="divider"></div>
                <div class="btn-group">
                  <button class="btn outline-btn" @click="openDetail(job)">查看详情</button>
                  <button class="btn primary-btn">立即投递</button>
                </div>
              </div>
            </div>
          </main> -->
        </div>
    </div>

    <!-- JD弹窗 -->
    <div v-if="showModal" class="modal-mask" @click.self="closeModal">
      <div class="modal-wrap">
        <div class="modal-header">
          <h2>{{ currentJob.title }}</h2>
          <button class="close-btn" @click="closeModal">×</button>
        </div>
        <div class="modal-body">
          <div class="jd-content">{{ currentJob.jd }}</div>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <Footer />
    <Btn2 />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import AboutAs from './components/AboutAs.vue'
import Time from './components/Time.vue'
import Team from './components/Team.vue'
import Jobs from './components/Jobs.vue'
import Btn2 from './components/Btn2.vue'

import { ref, computed } from 'vue'
 

// const activeKey = ref('all')
// const showModal = ref(false)
// const currentJob = ref({})

// 全部原始岗位数据
const originJobList = ref([
//   { key: 'all', label: '全部岗位', count: 254 },
//   { key: 'ai', label: 'AI / AIGC', count: 36 },
//   { key: 'dev', label: '技术研发', count: 58 },
//   { key: 'product', label: '产品', count: 18 },
//   { key: 'operate', label: '运营增长', count: 53 },
//   { key: 'video', label: '视频内容', count: 12 },
//   { key: 'ui', label: 'UI设计', count: 15 },
//   { key: 'game', label: '游戏', count: 20 },
//   { key: 'market', label: '商务市场', count: 16 }
])

// 保存筛选条件
const filterState = ref({
  keyword: '',
  salary: 'all',
  workMode: 'all'
})

const onFilterChange = (payload) => {
  filterState.value = payload
}

// 计算属性过滤
const displayJobs = computed(() => {
  const { keyword, salary, workMode } = filterState.value
  return originJobList.value.filter(job => {
    // 搜索岗位名称
    if (keyword) {
      const title = job.title ?? ''
      if (!title.toLowerCase().includes(keyword.toLowerCase())) return false
    }

    // 薪资过滤，根据你业务字段自行修改判断
    if (salary !== 'all') {
      if (job.salaryTag !== salary) return false
    }

    // 工作模式过滤 remote / onsite
    if (workMode !== 'all') {
      if (job.mode !== workMode) return false
    }

    return true
  })
})

// // 分类数据
// const categoryList = ref([
//   { key: 'all', label: '全部岗位', count: 254 },
//   { key: 'ai', label: 'AI / AIGC', count: 36 },
//   { key: 'dev', label: '技术研发', count: 58 },
//   { key: 'product', label: '产品', count: 18 },
//   { key: 'operate', label: '运营增长', count: 53 },
//   { key: 'video', label: '视频内容', count: 12 },
//   { key: 'ui', label: 'UI设计', count: 15 },
//   { key: 'game', label: '游戏', count: 20 },
//   { key: 'market', label: '商务市场', count: 16 }
// ])

// // 岗位静态数据
// const jobList = ref([
//   {
//     id: 1,
//     title: '产品架构师 Product Architect',
//     cat: 'product',
//     salary: '面议',
//     tag1: 'REMOTE',
//     tag2: 'FULL JD',
//     department: 'PRODUCT',
//     jd: `【岗位职责】
// 1、负责整体产品架构设计，梳理业务流程；
// 2、对接研发团队输出产品方案；
// 3、跨团队协同推进项目落地。

// 【任职要求】
// 1、5年以上互联网产品经验；
// 2、具备大型系统架构设计经验；
// 3、远程办公，具备良好沟通能力。`
//   },
//   {
//     id: 2,
//     title: '高级产品专家',
//     cat: 'product',
//     salary: '35K‑50K',
//     tag1: 'REMOTE',
//     tag2: '',
//     department: 'PRODUCT',
//     jd: `【岗位职责】
// 1、负责业务产品需求调研、方案设计；
// 2、跟进迭代，分析数据持续优化产品；

// 【任职要求】
// 1、3‑5年B端产品经验；
// 2、独立负责过完整项目。`
//   },
//   {
//     id: 3,
//     title: 'AI大模型工程师',
//     cat: 'ai',
//     salary: '40K‑60K',
//     tag1: 'REMOTE',
//     tag2: '',
//     department: 'AI / AIGC',
//     jd: `【岗位职责】
// 1、大模型应用开发，Prompt工程；
// 2、对接业务场景做模型调优。

// 【任职要求】
// 1、熟悉大模型相关技术栈；
// 2、Python开发基础。`
//   }
// ])

// // 前端过滤
// const filterJobs = computed(() => {
//   if (activeKey.value === 'all') return jobList.value
//   return jobList.value.filter(item => item.cat === activeKey.value)
// })

// const openDetail = (job) => {
//   currentJob.value = job
//   showModal.value = true
// }
// const closeModal = () => {
//   showModal.value = false
//   currentJob.value = {}
// }
</script>

<style scoped>
.job-page {
  background: #0b1122;
  color: #e4e8f0;
  /* padding: 24px; */
}
</style>
<!-- 
.container {
  display: flex;
  gap: 28px;
    /* padding-top: 88px; */
  /* 2. 宽度100%占满，取消max-width限制，铺满屏幕 */
  width: 100%;
  max-width: unset !important;
  box-sizing: border-box;
  padding: 60px 40px 30px;
}
.about{
    padding-top: 88px;
  /* 2. 宽度100%占满，取消max-width限制，铺满屏幕 */
  width: 100%;
  max-width: unset !important;
  box-sizing: border-box;
}

/* 侧边栏 */
.sidebar {
  width: 270px;
  flex-shrink: 0;
  background: #131b30;
  border-radius: 12px;
  border: 1px solid #232f48;
  padding: 20px 16px;
}
.sidebar-header {
  font-size: 14px;
  letter-spacing: 2px;
  color: #667492;
  margin-bottom: 18px;
}
.category-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.category-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 10px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 4px;
  color: #a9b6d0;
}
.category-item:hover {
  background-color: #1c2842;
}
.category-item.active {
  background-color: #1c2842;
  border-left: 3px solid #4088ff;
  color: #62a8ff;
}
.count {
  color: #8897b3;
}
.active .count {
  color: #62a8ff;
}

/* 岗位卡片区域 */
.job-wrap {
  flex: 1;
}
.match-text {
  font-size: 15px;
  color: #8897b3;
  margin-bottom: 22px;
}
.num {
  color: #22e0ee;
  font-size: 19px;
  font-weight: bold;
}
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
}
.job-card {
  background: #131b30;
  border: 1px solid #232f48;
  border-radius: 14px;
  padding: 24px;
  position: relative;
}
.star-icon {
  position: absolute;
  top:18px;
  right:18px;
  font-size:22px;
  color:#606e8c;
}
.card-title {
  margin: 0 0 16px;
  font-size: 21px;
  line-height: 1.3;
}
.tag-row {
  display: flex;
  gap: 10px;
  margin-bottom:14px;
  flex-wrap: wrap;
}
.salary {
  font-size:18px;
  font-weight:bold;
  color:#ffc445;
}
.salary.ask {
  color:#b27bff;
}
.tag {
  border:1px solid #364b80;
  color:#73a2ff;
  padding:4px 12px;
  border-radius:6px;
  font-size:13px;
}
.purple-tag {
  border-color:#583e88;
  color:#b27bff;
}
.gray-tag {
  border-color:#2c364c;
  color:#8897b3;
}
.divider {
  height:1px;
  background:#232f48;
  margin:18px 0;
}
.btn-group {
  display:flex;
  gap:12px;
}
.btn {
  flex:1;
  padding:12px;
  border-radius:10px;
  border:none;
  font-size:15px;
  cursor:pointer;
}
.outline-btn {
  background:transparent;
  border:1px solid #22e0ee;
  color:#22e0ee;
}
.primary-btn {
  background:#06e4f7;
  color:#0b1122;
  font-weight:bold;
}

/* 弹窗 */
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.modal-wrap {
  width: 620px;
  max-width: 90vw;
  max-height: 85vh;
  background:#131b30;
  border:1px solid #232f48;
  border-radius:14px;
  overflow: hidden;
  display:flex;
  flex-direction: column;
}
.modal-header {
  display:flex;
  justify-content: space-between;
  align-items:center;
  padding:20px 24px;
  border-bottom:1px solid #232f48;
}
.modal-header h2 {
  margin:0;
  font-size:20px;
}
.close-btn {
  background: transparent;
  border: none;
  color:#94a3b8;
  font-size:28px;
  cursor:pointer;
}
.modal-body {
  padding:24px;
  overflow-y:auto;
}
.jd-content {
  white-space: pre‑line;
  line-height: 1.8;
  color:#cbd5e1;
}

/* =========移动端适配 小于768px手机========= */
@media (max-width: 768px) {
  .job-page {
    padding:16px;
  }
  .container {
    flex-direction: column;
    gap:20px;
  }
  .sidebar {
    width:100%;
  }
  .card-grid {
    grid-template-columns: 1fr;
  }
  .job-card {
    padding:18px;
  }
  .card-title {
    font-size:18px;
  }
  .btn-group {
    flex-direction: column;
  }
  .modal-header {
    padding:14px 16px;
  }
  .modal-body {
    padding:16px;
  }
}
</style> -->