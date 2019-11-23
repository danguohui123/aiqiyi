
<template>
    <div>
        <home-header></home-header>
        <home-nav></home-nav>
        <home-search></home-search>
        <home-swiper></home-swiper>
        <home-tubiao></home-tubiao>
        <home-list></home-list>
        <home-information></home-information>
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

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeNav,
    HomeSearch,
    HomeSwiper,
    HomeTubiao,
    HomeList,
    HomeInformation
  }
}

</script>

<style>

</style>
