
<template>
    <div class="star">
      <div class="c-title">
        <h1 class="hsico">参演明星</h1>
      </div>
      <div class="icons">
        <swiper>
          <swiper-slide v-for="(page,index) in pages" :key="index">
            <a class="star-big" v-for="item in page" :key="item.id">
              <span class="star-img" :style="{backgroundImage:'url('+item.Image+')'}"></span>
              <span class="star-text">{{item.text}}</span>
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>
</template>

<script>

export default {
  name: 'star',
  data(){
    return{
      starlist:[{
  				"id":"001",
  				"Image":"http://pic3.iqiyipic.com/image/20160307/20/c5/p_1024058_m_601_m4_160_160.jpg",
  				"text":"姚晨"
  			},{
  				"id":"002",
  				"Image":"http://pic7.iqiyipic.com/image/20160307/02/ed/p_2002596_m_601_m1_160_160.jpg",
  				"text":"倪大红"
  			},{
  				"id":"003",
  				"Image":"http://img5.iqiyipic.com/image/paopao/paopao_5a41b52514d455788829be5d_default.jpg",
  				"text":"郭京飞"
  			},{
  				"id":"004",
  				"Image":"http://img7.iqiyipic.com/passport/20170116/16/999000007876_130x130.png",
  				"text":"杨祐宁"
  			},{
  				"id":"005",
  				"Image":"http://img5.iqiyipic.com/image/paopao/paopao_5c8746aead8c122c19670b4e_default.png",
  				"text":"李念"
  			},{
  				"id":"006",
  				"Image":"http://img5.iqiyipic.com/image/paopao/paopao_5c90b643d2999d0925e353d3_default.png",
  				"text":"高鑫"
  			},{
  				"id":"007",
  				"Image":"http://img5.iqiyipic.com/image/paopao/paopao_5c94b0faad8c122c1a7b9a5e_default.jpg",
  				"text":"高露"
  			},{
  				"id":"008",
  				"Image":"http://pic0.iqiyipic.com/image/20160307/7a/e2/p_1062141_m_601_m1_160_160.jpg",
  				"text":"陈瑾"
  			}]
    }
  },
  computed:{
    pages(){
      const pages= []
      this.starlist.forEach((item,index)=>{
        const page = Math.floor(index/4)
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
.star
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
  .star-big
   display:inline-block
   width:25%
   height:auto
   text-align:center
   .star-img
    display:inline-block
    width:50%
    padding-top:50%
    background-repeat:no-repeat
    background-size:100%
    border-radius:50%
   .star-text
    display:block
    height:3.2rem
    line-height:3.2rem
    overflow:hidden
    text-overflow:ellipsis
    white-space:nowrap
    font-size:1.5rem
    color:#333
</style>
