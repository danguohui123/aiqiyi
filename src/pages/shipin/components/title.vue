
<template>
    <div class="m-box">
      <div>
        <div class="m-video-info">
          <a>
            <h1 class="c-title">都挺好 第一集:苏母突然去世</h1>
            <i class="iconfont">&#xe64c;</i>
          </a>
          <a class="a-js">
            <i class="icon-video"></i>
            <div class="span_left">热度6674</div>
            <div class="span_left">46集全</div>
            <div class="span_right">
              主演:姚晨,倪大红,郭京飞,杨佑宁,李念,高鑫,高露,陈瑾,张晨光,王东,彭昱畅,康群智,侯长荣,田丽,王正权,红花
            </div>
          </a>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'HomeTitle',
  components: {
  }
}

</script>

<style lang="stylus" scoped>
.m-box
 padding-left:0
 padding-right:0
 margin-top:2rem
 border-bottom:1px solid #f0f0f0
 padding-bottom:1rem
 .m-video-info
  padding:0 .12rem .15rem .12rem
  .c-title
   font-weight:bold
   float:left
   font-size:2rem
   color:#333
   margin-left:1rem
  .iconfont
   font-family:'iconfont'
   font-size:2rem
   font-weight:bold
   margin-left:8rem
 .a-js
  display:block
  width:100%
  height:3rem
  line-height:3rem
  margin-top:1rem
  .icon-video
   width:1.5rem
   height:1.5rem
   display:inline-block
   margin-left:1rem
   margin-top:.5rem
   background:url(//www.iqiyipic.com/common/fix/h5-aura/hot-icon-20181112.png) no-repeat center
   background-size:4rem 1.5rem
   background-position:0 0
   float:left
  .span_left
   float:left
   color:#999
   font-size:1.5rem
   margin-left:.5rem
  .span_right
   float:left
   color:#999
   width:40%
   font-size:1.5rem
   margin-left:2rem
   text-overflow:ellipsis
   white-space:nowrap
   overflow:hidden
</style>
