
<template>
  <div>
    <home-header></home-header>
    <class></class>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>

import HomeHeader from '../home/components/Header'
import Class from './components/Class'
import BottomNav from './components/BottomNav'

export default {
  name: 'type',
  components: {
    HomeHeader,
    Class,
    BottomNav
  }
}

</script>

<style>
</style>
