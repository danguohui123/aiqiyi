
<template>
    <div>
      <home-header></home-header>
      <falso></falso>
      <home-title></home-title>
    </div>
</template>

<script>
// 我TM帅
import HomeHeader from '../home/components/Header'
import falso from './components/falso.vue'
import HomeTitle from './components/title.vue'


export default {
  name: 'shipin',
  components: {
    HomeHeader,
    falso,
    HomeTitle
  }
}

</script>

<style>

</style>
