<template>
  <div class="home">
    <div class="headers">
      <Header></Header>
      <lyTab v-model="SelectedId" :items="items" :options="options" @change='changeTab'></lyTab>
    </div>
    <section class="wrapper">
      <div>
        <div v-for="(item, index) in newData" :key="index">
          <Swiper v-if="item.type == 'swiperList'" :swiperList='item.data'></Swiper>
          <Icons v-if="item.type == 'iconsList'" :iconsList='item.data'></Icons>
          <Recommend v-if="item.type == 'recommendList'" :recommendList='item.data'></Recommend>
          <Like v-if="item.type == 'likeList'" :likeList="item.data"></Like>
          <Ad v-if="item.type == 'adList'" :adList='item.data'></Ad>
          <Like v-if="item.type == 'likeList'" :likeList="item.data"></Like>
        </div>
      </div>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/common/Tabbar.vue'
import Header from '@/components/home/Header.vue'
import Swiper from '@/components/home/Swiper.vue'
import Icons from '@/components/home/Icons.vue'
import Recommend from '@/components/home/Recommend.vue'
import Like from '@/components/home/Like.vue'
import Ad from '@/components/home/Ad.vue'
import BetterScroll from 'better-scroll'
import Http from '@/components/common/api/request'
export default {
  name: 'Home',
  components: { Tabbar, Header, Swiper, Icons, Recommend, Like, Ad },
  data() {
    return {
      SelectedId: 0,
      items: [],
      newData: [],
      options: {
        activeColor: '#b0352f'
      }
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      let res = await Http.$axios({url:'/api/index_List/0/data/1'})
      this.items = Object.freeze(res.topBar)
      // console.log(Object.freeze(res.data.data))
      this.newData = Object.freeze(res.newData)
      this.$nextTick(() => {
        new BetterScroll('.wrapper', {
          movable: true,
          zoom: true,
        })
      })
    },
    async addData(index) {
      let res = await Http.$axios({ url: '/api/index_List/' + index + '/data/1' })
      if (res.constructor != Array) {
        this.newData = res.newData
      } else {
        this.newData = res
      }
    },
    changeTab(item, index) {
      this.addData(index)
    }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.headers {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100px;
}

section {
  flex: 1;
  overflow: hidden;
  margin-top: 90px;
}

::v-deep .ly-tab {
  border-bottom: none;
  background-color: #fff;
}

::v-deep .ly-tabbar {
  box-shadow: none;
  height: 40px;
}
</style>