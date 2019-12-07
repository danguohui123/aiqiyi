
<template>
    <div>
      <home-header></home-header>
      <falso></falso>
      <home-title></home-title>
      <mulu></mulu>
      <zhou></zhou>
    </div>
</template>

<script>
import HomeHeader from '../home/components/Header'
import falso from './components/falso.vue'
import HomeTitle from './components/title.vue'
import mulu from './components/mulu.vue'
import zhou from './components/zhoubian.vue'



export default {
  name: 'shipin',
  components: {
    HomeHeader,
    falso,
    HomeTitle,
    mulu,
    zhou
  }
}

</script>

<style>

</style>
