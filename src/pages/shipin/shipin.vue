
<template>
    <div>
      <home-header></home-header>
      <falso></falso>
      <home-title></home-title>
      <mulu></mulu>
      <zhoubian></zhoubian>
    </div>
</template>

<script>
// 我TM帅
import HomeHeader from '../home/components/Header'
import falso from './components/falso.vue'
import HomeTitle from './components/title.vue'
import mulu from './components/mulu'
import zhoubian from './components/zhoubian'



export default {
  name: 'shipin',
  components: {
    HomeHeader,
    falso,
    HomeTitle,
    mulu,
    zhoubian
  }
}

</script>

<style>

</style>
