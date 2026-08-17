<!-- JobOpenRoles.vue -->
<template>
  <div class="job-open-roles">
    <!-- 头部标题区域 -->
    <div class="page-header">
      <div class="header-left">
        <div class="en-subtitle">OPEN ROLES</div>
        <h1 class="main-title">在招岗位</h1>
        <div class="desc-en">NINE JOB FAMILIES · UPDATED WEEKLY</div>
      </div>
      <div class="header-right-tip">
        选择左侧职能序列，或直接搜索岗位名称。所有岗位默认支持全球远程。
      </div>
    </div>

    <!-- 筛选栏：搜索 +薪资 +工作模式 -->
    <div class="filter-bar">
      <input
        v-model="searchKeyword"
        @input="handleFilterChange"
        class="search-input"
        placeholder="搜索岗位名称，例如：Go / 算法 / 产品经理"
      />

      <div class="select-wrap">
        <select v-model="salaryVal" @change="handleFilterChange" class="filter-select">
          <option value="all">全部薪资区间</option>
          <option value="15k-below">15K 以下</option>
          <option value="15k-20k">15K‑20K</option>
          <option value="20k-25k">20K‑25K</option>
          <option value="25k-35k">25K‑35K</option>
          <option value="35k-up">35K 以上</option>
          <option value="negotiate">面议</option>
        </select>
      </div>

      <div class="select-wrap">
        <select v-model="workModeVal" @change="handleFilterChange" class="filter-select">
          <option value="all">全部工作模式</option>
          <option value="remote">远程</option>
          <option value="onsite">坐班</option>
        </select>
      </div>
    </div>

    <!-- 主体：左侧分类 + 右侧岗位卡片 -->
    <div class="main-body">
      <!-- 左侧职能分类 -->
      <div class="sidebar">
        <div class="sidebar-title">JOB FAMILIES</div>
        <div
          v-for="item in familyList"
          :key="item.key"
          @click="currentFamily = item.key"
          :class="['family-item', { active: currentFamily === item.key }]"
        >
          <span class="label">{{ item.label }}</span>
          <span class="count">{{ item.count }}</span>
        </div>
      </div>

      <!-- 右侧岗位区域 -->
      <div class="job-content">
        <div class="match-text">匹配到 <span class="num">{{ displayJobs.length }}</span> 个岗位</div>
        <div class="card-grid">
          <div v-for="job in displayJobs" :key="job.id" class="job-card">
            <div class="card-top">
              <h3 class="job-name">{{ job.title }}</h3>
            </div>
            <div class="card-tags-row1">
              <span class="tag-salary">面议</span>
              <span v-if="job.remote && job.onsite" class="tag-mode">REMOTE / ONSITE</span>
              <span v-else-if="job.remote" class="tag-mode">REMOTE</span>
              <span v-else class="tag-mode">ONSITE</span>
              <span class="tag-jd">FULL JD</span>
            </div>
            <div class="card-tags-row2">
              <span class="tag-cat">{{ job.category }}</span>
            </div>
            <div class="card-buttons">
              <button class="btn-detail" @click="openDetail(job)">查看详情</button>
              <button class="btn-apply">立即投递</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- JD详情弹窗 -->
    <div v-if="showModal" class="modal-mask" @click.self="closeDetail">
      <div class="modal-wrap">
        <div class="modal-header">
          <h2>{{ currentJob.title }}</h2>
          <button class="modal-close" @click="closeDetail">✕</button>
        </div>
        <div class="modal-tags">
          <span class="tag-salary">面议</span>
          <span v-if="currentJob.remote && currentJob.onsite" class="tag-mode">REMOTE / ONSITE</span>
          <span v-else-if="currentJob.remote" class="tag-mode">REMOTE</span>
          <span v-else class="tag-mode">ONSITE</span>
          <span class="tag-cat">{{ currentJob.category }}</span>
        </div>
        <div class="modal-body">
          <div class="jd-block">
            <h4>岗位职责</h4>
            <div class="jd-content" v-html="currentJob.duty"></div>
          </div>
          <div class="jd-block">
            <h4>任职要求</h4>
            <div class="jd-content" v-html="currentJob.requirement"></div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="modal-btn-cancel" @click="closeDetail">关闭</button>
          <button class="modal-btn-apply">立即投递</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 左侧职能分类
const familyList = ref([
  { key: 'all', label: '全部岗位', count: 254 },
  { key: 'ai', label: 'AI / AIGC', count: 36 },
  { key: 'dev', label: '技术研发', count: 58 },
  { key: 'product', label: '产品', count: 18 }
])
const currentFamily = ref('all')

// 筛选状态
const searchKeyword = ref('')
const salaryVal = ref('all')
const workModeVal = ref('all')

// 弹窗状态
const showModal = ref(false)
const currentJob = ref({})

// mock岗位数据，新增 duty、requirement 字段存储JD
const originJobs = ref([
  {
    id: 1,
    title: 'AI研发工程师',
    category: 'AI & AIGC',
    familyKey: 'ai',
    salaryTag: 'negotiate',
    remote: true,
    onsite: true,
    duty: `<ul>
<li>负责大模型相关业务功能开发与调优</li>
<li>参与Prompt工程、Agent流程设计</li>
<li>对接业务侧，落地AI场景需求</li>
</ul>`,
    requirement: `<ul>
<li>熟悉Python，了解大模型相关技术</li>
<li>有LLM应用开发经验优先</li>
<li>良好沟通能力，自驱力强</li>
</ul>`
  },
  {
    id: 2,
    title: 'Agent架构师（后端偏Go）',
    category: 'AI & AIGC',
    familyKey: 'ai',
    salaryTag: 'negotiate',
    remote: true,
    onsite: false,
    duty: `<ul>
<li>设计Agent系统架构，多智能体协作模块</li>
<li>Go后端服务开发，性能优化</li>
<li>对接模型接口，完成链路调试</li>
</ul>`,
    requirement: `<ul>
<li>熟练Go语言，后端架构经验</li>
<li>了解Agent、工具调用相关原理</li>
<li>具备分布式、高并发开发经验</li>
</ul>`
  },
  {
    id: 3,
    title: 'AI应用开发工程师',
    category: 'AI & AIGC',
    familyKey: 'ai',
    salaryTag: 'negotiate',
    remote: true,
    onsite: false,
    duty: `<ul>
<li>AI业务应用前后端功能开发</li>
<li>对接大模型API，封装业务能力</li>
<li>迭代产品功能，修复线上问题</li>
</ul>`,
    requirement: `<ul>
<li>掌握前后端至少一门技术栈</li>
<li>有AI应用项目经验优先</li>
</ul>`
  }
])

function handleFilterChange() {}

// 弹窗打开关闭
const openDetail = (job) => {
  currentJob.value = { ...job }
  showModal.value = true
}
const closeDetail = () => {
  showModal.value = false
  currentJob.value = {}
}

// 全部过滤逻辑：分类 +搜索 +薪资 +工作模式
const displayJobs = computed(() => {
  const kw = searchKeyword.value.trim().toLowerCase()
  return originJobs.value.filter(job => {
    // 左侧职能分类过滤
    if (currentFamily.value !== 'all' && job.familyKey !== currentFamily.value) {
      return false
    }
    // 岗位名称搜索
    if (kw && !job.title.toLowerCase().includes(kw)) {
      return false
    }
    // 薪资
    if (salaryVal.value !== 'all' && job.salaryTag !== salaryVal.value) {
      return false
    }
    // 工作模式
    if (workModeVal.value === 'remote' && !job.remote) return false
    if (workModeVal.value === 'onsite' && !job.onsite) return false

    return true
  })
})
</script>

<style scoped>
.job-open-roles {
  min-height: 100vh;
  background-color: #0b101f;
  color: #fff;
  padding: 40px;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
}
.en-subtitle {
  color: #687094;
  font-size: 14px;
  letter-spacing: 2px;
}
.main-title {
  font-size: 64px;
  font-weight: bold;
  margin:8px 0;
}
.desc-en {
  color:#687094;
  font-size:16px;
  letter-spacing:1px;
}
.header-right-tip {
  max-width:420px;
  color:#949cb8;
  line-height:1.6;
  font-size:15px;
}

.filter-bar {
  display:flex;
  gap:16px;
  margin-bottom:24px;
  align-items:stretch;
}
.search-input {
  flex:1;
  height:56px;
  background:#171b2b;
  border:1px solid #2b3147;
  border-radius:10px;
  color:#fff;
  padding:0 20px;
  font-size:15px;
}
.search-input::placeholder {
  color:#82899f;
}
.search-input:focus {
  outline:none;
  border-color:#28e0ff;
}
.select-wrap {
  min-width:260px;
}
.filter-select {
  width:100%;
  height:56px;
  background:#171b2b;
  border:1px solid #2b3147;
  border-radius:10px;
  color:#fff;
  padding:0 20px;
  font-size:15px;
  appearance:none;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='%23999'%3E%3Cpath d='M0 0l6 6 6‑6z'/%3E%3C/svg%3E");
  background-repeat:no-repeat;
  background-position:right 16px center;
}
.filter-select:focus {
  outline:none;
  border-color:#28e0ff;
}

.main-body {
  display:flex;
  gap:24px;
}
.sidebar {
  width:240px;
}
.sidebar-title {
  font-size:14px;
  color:#687094;
  letter-spacing:1px;
  margin-bottom:12px;
}
.family-item {
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:14px 16px;
  border-radius:8px;
  cursor:pointer;
  margin-bottom:6px;
  background:#14192c;
}
.family-item.active {
  background:#1f2742;
  border-left:3px solid #fff;
}
.family-item .label {
  font-size:16px;
}
.family-item .count {
  color:#a0a8c2;
}

.job-content {
  flex:1;
}
.match-text {
  color:#8892b0;
  margin-bottom:20px;
}
.match-text .num {
  color:#28e0ff;
  font-size:20px;
  font-weight:bold;
}

.card-grid {
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(340px,1fr));
  gap:20px;
}
.job-card {
  background:#14192c;
  border:1px solid #2b3147;
  border-radius:12px;
  padding:24px;
  border-left:3px solid #28e0ff;
}
.job-name {
  font-size:20px;
  margin:0 0 16px;
}
.card-tags-row1 {
  display:flex;
  gap:10px;
  margin-bottom:12px;
  flex-wrap:wrap;
}
.tag-salary {
  color:#b87bff;
  font-size:17px;
  font-weight:bold;
}
.tag-mode {
  border:1px solid #28e0ff;
  color:#28e0ff;
  padding:4px 10px;
  border-radius:6px;
  font-size:13px;
}
.tag-jd {
  border:1px solid #9c60d8;
  color:#b87bff;
  padding:4px 10px;
  border-radius:6px;
  font-size:13px;
}
.tag-cat {
  background:#20263b;
  color:#b0b8d4;
  padding:4px 10px;
  border-radius:6px;
  font-size:13px;
}
.card-buttons {
  display:flex;
  gap:12px;
  margin-top:24px;
}
.btn-detail {
  flex:1;
  height:48px;
  background:transparent;
  border:1px solid #28e0ff;
  color:#28e0ff;
  border-radius:10px;
  font-size:15px;
  cursor:pointer;
}
.btn-apply {
  flex:1;
  height:48px;
  background:#28e0ff;
  border:none;
  color:#0b101f;
  border-radius:10px;
  font-size:15px;
  font-weight:bold;
  cursor:pointer;
}

/* 弹窗样式 */
.modal-mask {
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.75);
  display:flex;
  align-items:center;
  justify-content:center;
  z-index:999;
  padding:20px;
}
.modal-wrap {
  width: 720px;
  max-width:100%;
  max-height:85vh;
  background:#14192c;
  border-radius:14px;
  border:1px solid #2b3147;
  display:flex;
  flex-direction:column;
  overflow:hidden;
}
.modal-header {
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:24px 28px 12px;
}
.modal-header h2 {
  margin:0;
  font-size:22px;
}
.modal-close {
  background:transparent;
  border:none;
  color:#fff;
  font-size:22px;
  cursor:pointer;
}
.modal-tags {
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  padding:0 28px 16px;
}
.modal-body {
  flex:1;
  overflow-y:auto;
  padding:0 28px 20px;
}
.jd-block h4 {
  font-size:16px;
  margin:16px 0 8px;
  color:#28e0ff;
}
.jd-content {
  line-height:1.7;
  color:#d0d8f0;
}
.jd-content ul {
  padding-left:20px;
  margin:0;
}
.jd-content li {
  margin-bottom:6px;
}
.modal-footer {
  display:flex;
  gap:14px;
  padding:16px 28px 24px;
  border-top:1px solid #2b3147;
}
.modal-btn-cancel {
  flex:1;
  height:46px;
  background:transparent;
  border:1px solid #555b78;
  color:#c0c8e2;
  border-radius:10px;
  cursor:pointer;
}
.modal-btn-apply {
  flex:1;
  height:46px;
  background:#28e0ff;
  border:none;
  color:#0b101f;
  border-radius:10px;
  font-weight:bold;
  cursor:pointer;
}
</style>