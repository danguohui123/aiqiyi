
<template>
    <div>
      <home-header></home-header>
      <falso></falso>
      <home-title></home-title>
      <mulu></mulu>
      <zhou></zhou>
      <star></star>
    </div>
</template>

<script>
import HomeHeader from '../home/components/Header'
import falso from './components/falso.vue'
import HomeTitle from './components/title.vue'
import mulu from './components/mulu.vue'
import zhou from './components/zhoubian.vue'
import star from './components/star'



export default {
  name: 'shipin',
  components: {
    HomeHeader,
    falso,
    HomeTitle,
    mulu,
    zhou,
    star
  }
}

</script>

<style>

</style>
