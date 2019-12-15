<template>
    <div class="topNav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide span-info">精选</div>
          <div class="swiper-slide">vip会员</div>
          <div class="swiper-slide">电视剧</div>
          <div class="swiper-slide">电影</div>
          <div class="swiper-slide">儿童</div>
          <div class="swiper-slide">动漫</div>
          <div class="swiper-slide">资讯</div>
          <div class="swiper-slide">直播</div>
          <div class="swiper-slide">选秀</div>
          <div class="swiper-slide">课程</div>
        </div>
      </div>
      <router-link to="/type">
      <div class="indexAdd">
          <img src="./img/1.png"/>
        <i class="iconfont">&#xe77d;</i>
      </div>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'HomeNav',
  mounted () {
    // eslint-disable-next-line no-undef,no-unused-vars
    var mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      sildersPerGroup: 3
    })
  }
}
</script>

<style lang="stylus" scoped>
  .topNav{
    width 100%
    height 4rem
    position fixed
    line-height 4rem
    background-color #ffffff
    border-bottom 1px solid #cccccc
    z-index 1001
  }
  .swiper-slide{
    width 6rem !important
    color #333
    text-align center
    font-size 1.5rem
  }
  .indexAdd{
    position absolute
    right 0
    top 0
    width 3.5rem
    height 4rem
    text-align center
    z-index 5
    background #ffffff
  }
  .iconfont{
    font-size 2rem
  }
  .indexAdd>img{
    position absolute
    left -.05rem
    bottom 1rem
    top 0
    width .3rem
  }
  .span-info{
    color #0bbe06
    font-weight bold
  }
  .span-info:before{
    content :""
    position absolute
    left 50%
    bottom 0
    width 1rem
    height 0.2rem
    z-index 2
    transform translate(-50%,0)
    background #0bbe06
  }
</style>
