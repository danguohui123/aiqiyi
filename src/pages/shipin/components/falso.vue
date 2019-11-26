
<template>
    <div>
      <div class="zt">
        <div>
          <video id="example_video_1" class="video-js vjs-default-skin b vjs-big-play-centered"
        controls preload-eventes="none" poster="//www.iqiyipic.com/common/fix/h5-v3/player-tip-bg.jpg" data-setup='{}'>
              <source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
          </video>
        </div>
      </div>
      <div class="bottom_kj">
        <div class="bottom_centent">
          <a class="a_centent">
            <i class="QIY">&#xe719;</i>
  					打开爱奇艺，提升3倍流畅度！
          </a>
        </div>
      </div>
      <div class="pinglun">
        <section class="pinglun_content">
          <div class="pinglun_left">
            <span class="pic-left"></span>
            <span class="pic-text">评论4.522</span>
          </div>
          <div class="pinglun_right">
            <div class="xiazai">
              <i class="iconfont">&#xe6a2;</i>
              <p class="text">下载</p>
            </div>
            <div class="fenxiang">
              <i class="iconfonq">&#xe61c;</i>
              <p class="texs">分享</p>
            </div>
            <div class="gengduo">
              <i class="iconfonz">&#xe660;</i>
              <p class="texa">更多</p>
            </div>
          </div>
        </section>
      </div>
    </div>
</template>

<script>

export default {
  name: 'falso',
  components: {
  }
}

</script>

<style lang="stylus" scoped>
.zt
 position:relative
 padding-top:52.25%
 .b
  position:absolute
  top:0
  right:0
  left:0
  bottom:0
  width:100%
  height:100%
.bottom_kj
 height:4rem
 margin-top:.5rem
 position:relative
 .bottom_centent
  position:absolute
  width:90%
  height:3rem
  left:50%
  top:50%
  transform:translate(-50%,-50%)
  .a_centent
   display:block
   position:relative
   width:100%
   height:3rem
   border-radius:2rem
   border:1px solid #29c82a
   background-image:linear-gradient(to right,#03d600 0,#00e15f 100%)
   color:#fff
   text-align:center
   font-size:1.5rem
   .QIY
    position:relative
    display:inline-block
    font-size:2.5rem
    font-family:"iconfont"
    margin-right:.5rem
.pinglun
 height:4rem
 margin-top:1rem
 .pinglun_content
  position:relative
  height:4rem
  border-bottom:1px solid #f0f0f0
  .pinglun_left
   position:relative
   width:30%
   margin:0 1.3rem 0 1.2rem
   float:left
   .pic-left
    display:inline-block
    width:2.5rem
    height:2.5rem
    background-image:url(http://www.iqiyipic.com/common/fix/h5-aura/video-comment-new.png)
    background-size:cover
   .pic-text
    position:absolute
    margin-top:.8rem
    margin-left:.5rem
  .pinglun_right
   width:40%
   float:right
   text-align:right
   .xiazai
    display:inline-block
    width:4rem
    text-align:center
    .iconfont
     width:2rem
     height:2rem
     font-size:2rem
    .text
     display:block
     line-height:1.5rem
     size:.5rem
     color:#666
   .fenxiang
    display:inline-block
    width:4rem
    text-align:center
    .iconfonq
     width:2rem
     height:2rem
     font-size:2rem
     font-family:"iconfont"
    .texs
     display:block
     line-height:1.5rem
     size:.5rem
     color:#666
   .gengduo
    display:inline-block
    width:4rem
    text-align:center
    .iconfonz
     width:2rem
     height:2rem
     font-size:2rem
     font-family:"iconfont"
    .texa
     display:block
     line-height:1.5rem
     size:.5rem
     color:#666
</style>
