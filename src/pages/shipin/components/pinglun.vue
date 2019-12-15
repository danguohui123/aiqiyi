<template>
    <div class="pinglun">
        <div class="pinglun_dj">
            <div class="pinglun_border">
                <div class="pinglun_pin">
                   <div class="pinglun_link">
                        <i class="iconfont">&#xe678;</i>发布讨论
                   </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
  name: 'pinglun'
}

</script>

<style lang="stylus" scope>
.pinglun
 margin-top : 1rem
 .pinglun_dj
  width 100%
  height 4rem
  position relative
  .pinglun_border
   position absolute
   width 90%
   height 3rem
   left 50%
   top 50%
   transform translate(-50%,-50%)
   .pinglun_pin
    width 100%
    height 3rem
    line-height 3rem
    border-radius 1.5rem
    background #f5f5f5
    font-size 1.5rem
    text-align center
    .pinglun_link
     color #0bbe06

</style>
