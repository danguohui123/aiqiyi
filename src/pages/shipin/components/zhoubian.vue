
<template>
    <div class="zhoubian">
      <div class="c-title">
        <h1 class="hsico">周边视频</h1>
        <i class="iconfont">&#xe64c;</i>
      </div>
      <div class="icons">
        <swiper>
          <swiper-slide v-for="(page,index) in pages" :key="index">
            <a class="go-center" v-for="(pages,index) in page" :key="pages.id">
              <div class="go-like" :style="{backgroundImage:'url('+pages.Image+')'}">
                <span class="go-text">
                  {{pages.time}}
                </span>
              </div>
              <div class="go-app">
                <span class="go-pic"></span>
                <span class="go-mic">{{pages.text}}</span>
              </div>
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>
</template>

<script>

export default {
  name: 'zhou',
  data(){
    return{
      goLike:[{
 				"id":"001",
 				"Image":"http://m.iqiyipic.com/image/20190414/d6/ea/v_128195972_m_601_m1_284_160.jpg",
 				"time":"00:45",
 				"text":"宝藏男孩苏明成广场舞C位出道！糟糕，是心肌梗塞的感觉！"
 			},{
 				"id":"002",
 				"Image":"http://m.iqiyipic.com/image/20190416/3d/f8/v_128299906_m_601_284_160.jpg",
 				"time":"01:02",
 				"text":"苏大强拒不反省要娶小蔡宝贝！被人卖了还要帮她数钱？"
 			},{
 				"id":"003",
 				"Image":"http://m.iqiyipic.com/image/20190415/4f/01/v_128259631_m_601_284_160.jpg",
 				"time":"01:12",
 				"text":"苏明成殴打明玉东窗事发 活该被警察叔叔请去喝茶！"
 			},{
 				"id":"004",
 				"Image":"http://m.iqiyipic.com/image/20190416/15/5c/v_128305667_m_601_m1_284_160.jpg",
 				"time":"01:54",
 				"text":"苏大强理财被骗欲寻死？ 我不吃我不喝我就要钱！"
 			},{
 				"id":"005",
 				"Image":"http://m.iqiyipic.com/image/20190414/b6/ba/v_128195863_m_601_m1_284_160.jpg",
 				"time":"01:39",
 				"text":"明成深夜给苏大强盖被子！一盖一压完美,你这是折腾老头儿的节奏"
 			},{
 				"id":"006",
 				"Image":"http://m.iqiyipic.com/image/20190416/42/07/v_128305453_m_601_m1_284_160.jpg",
 				"time":"02:00",
 				"text":"苏大强生病住院吓“死”自己？ 能让这老头笑疯咯！"
 			}],
    }
  },
  computed:{
    pages(){
      const pages= []
      this.goLike.forEach((item,index)=>{
        const page = Math.floor(index/3)
        if (!pages[page]) {
            pages[page]=[]
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}

</script>

<style lang="stylus" scoped>
.zhoubian
 margin-top:1rem
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
  .iconfont
   position:absolute
   font-size:2rem
   font-weight:bold
   color:#999
   right:0
 .icons
  margin-top:1.5rem
  border-bottom:1px solid #f0f0f0
  padding-bottom:1.5rem
  .go-center
   display:inline-block
   width:30%
   height:auto
   margin-left:1rem
   .go-like
    width:100%
    padding-bottom:50%
    background-image:url("//m.iqiyipic.com/image/20191024/56/32/v_139911697_m_601_m1_284_160.webp")
    background-size:cover
    position:relative
    .go-text
     display:block
     height:2rem
     line-height:2rem
     position:absolute
     bottom:0
     right:0
     padding-right:1rem
     color:#fff
     z-index:100
   .go-like:after
    position:absolute
    left:0
    right:0
    bottom:0
    content:""
    background-image:linear-gradient(top,rgba(0,0,0,0)0,rgba(0,0,0,0.5)100%)
   .go-app
    padding-top:1rem
    padding-left:.3rem
    overflow:hidden
    line-height:1.5rem
    max-height:3rem
    .go-pic
     display:inline-block
     width:3rem
     height:1.5rem
     background:url(//www.iqiyipic.com/common/fix/h5-aura/c-laqi-icon-new.png) no-repeat
     background-size:contain
     vertical-align:top
    .go-mic
     font-size:1.5rem
     color:#333
</style>
