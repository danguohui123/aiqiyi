
<template>
  <div>
    <home-header :name="name"></home-header>
    <home-nav></home-nav>
    <home-search></home-search>
    <home-swiper :list="textList"></home-swiper>
    <home-tubiao :list="iconList"></home-tubiao>
    <home-list></home-list>
    <home-information :list="infolist"></home-information>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>

import HomeHeader from './components/Header'
import HomeNav from './components/Nav'
import HomeSearch from './components/Search'
import HomeSwiper from './components/Swiper'
import HomeTubiao from './components/Tubiao'
import HomeList from './components/List'
import HomeInformation from './components/information'
import BottomNav from '../type/components/BottomNav'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeNav,
    HomeSearch,
    HomeSwiper,
    HomeTubiao,
    HomeList,
    HomeInformation,
    BottomNav
  },
  data () {
    return {
      name: '',
      textList: [],
      iconList: [],
      infolist: []
    }
  },
  methods: {
    getHomeInfo () {
      this.$http.get('/api/all').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      console.log(res.data)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.name = data.name
        this.textList = data.textList
        this.iconList = data.iconList
        this.infolist = data.infolist
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}

</script>

<style>
</style>
