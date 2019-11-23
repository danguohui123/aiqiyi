<template>
      <div>
        <div class="setop"></div>
        <div class="only_search">
            <div class="m-search">
              <div class="config_search">
                <span class="center">都挺好</span>
                <a class="ziti"><i class="iconfont">&#xe62d;</i></a>
              </div>
            </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'HomeSearch'
}
</script>

<style lang="stylus" scoped>
  .setop{
    height 4.2rem
  }
  .only_search{
    height 4rem
    background #F6F6F6
    position relative
  }
  .m-search{
    position absolute
    width 90%
    height 2.5rem
    left 50%
    top 50%
    transform translate(-50%,-50%)
  }
  .config_search{
    width 100%
    height 100%
    border-radius 1.5rem
    border 1px solid #20bc22
    background #FFF

  }
  .center{
    display block
    margin-right 5rem
    overflow hidden
    line-height 2.5rem
    text-align center
    font-size 1.5rem
    color #666
  }
  .ziti{
    display block
    position absolute
    top .05rem
    right -.2rem
    width 5rem
    height 2.5rem
    background-color #29c82a
    border-bottom-right-radius 1.5rem
    border-top-right-radius 1.5rem
  }
  .iconfont{
    position: relative;
    display inline-block
    font-size 2rem
    color #ffffff
    line-height 2.5rem
    left 50%
    top 50%
    transform translate(-50%,-50%)
  }
</style>
