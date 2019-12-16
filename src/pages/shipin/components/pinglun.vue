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
        <div class="sixo">
            <div class="c-title">
                <h1 class="hsico">精彩评论</h1>
                <span class="s-title">(37)</span>
            </div>
        </div>
        <div class="pinglun_center">
            <div class="pinglun_top">
                <div class="pinglun_left">
                    <div class="c-photo"></div>
                    <div class="info">
                        <div class="name">123</div>
                        <span class="time">12月16号</span>
                    </div>
                </div>
                <a class="ping-right">
                    <i class="iconfont">&#xe676;</i>
                    <span class="right_text">777</span>
                </a>
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
 .sixo
  margin-top 1rem
  .c-title
   font-size:1.5rem
   color:#333
   height:2rem
   line-height:2rem
   margin-left:1rem
   position:relative
   .hsico
    position:absolute
    font-weight:bold
   .s-title
    margin-left 6rem
 .pinglun_center
  position relative
  margin-top 1.5rem
  padding-bottom .3rem
  .pinglun_top
   padding 0 1.2rem .5rem 1.2rem
   display -webkit-box
   .pinglun_left
    display -webkit-box
    width 85%
    .c-photo
     width 3.5rem
     height 3.5rem
     border-radius 2rem
     background-image url(http://img5.iqiyipic.com/image/cartoon/cartoon_5b6164b874d579560d9d4945_1.jpg)
     background-size cover
    .info
     padding 0 1rem
     .name
      color #333
      line-height 2rem
      font-size 1.5rem
     .time
      font-size 1rem
      color #999
      line-height 1.3rem  
   .ping-right
    display inline-block
    width 5rem
    height 3.5rem
    line-height 3.5rem
    .iconfont
     font-size 2.5rem
    .right_text
     display inline-block
     vertical-align top
     line-height 3.5rem
     font-size 1rem 
     
</style>
