<template>
  <div class="job-page">
    <!-- 头部 -->
    <Header />
    <div class="con_box">
      <!-- 关于我们 -->
        <div id="AboutAs"></div><AboutAs class="about"/></div>
      <!-- 工作制度 -->

      <div id="Time"><<Time/></div>
      <!-- 团队优势 -->
      <div id="Team">
        <Team/> </div>
      <!-- 在招岗位 -->
      <div id="Jobs"> 
        <div class="container"> 
            <Jobs @filter-change="onFilterChange" />
        </div>
      </div>
 
      <!-- 联系我们 底部 -->
      <div id="Contact">
        <Footer/>
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
    <!-- 固定按钮 -->
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
 
</script>

<style scoped>
.job-page {
  background: #0b1122;
  color: #e4e8f0;
  /* padding: 24px; */
}
</style>
 