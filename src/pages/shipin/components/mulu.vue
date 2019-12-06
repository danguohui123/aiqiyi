
<template>
    <div class="xuanji">
      <div class="c-title">
        <h1 class="hsico">选集</h1>
        <i class="iconfont">&#xe64c;</i>
      </div>
      <div class="icons">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(page,index) in pages" :key="index">
            <div class="icons1" v-for="item in page" :key="item.id">
              <div class="icons-img">{{item.text}}</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
</template>

<script>

export default {
  name: 'mulu',
  data(){
    return {
      swiperOption: {
        autoplay: false,
        loop:true
      },
      mululist:[{
  				"id":"001",
  				"text":"1"
  			},{
  				"id":"002",
  				"text":"2"
  			},{
  				"id":"003",
  				"text":"3"
  			},{
  				"id":"004",
  				"text":"4"
  			},{
  				"id":"005",
  				"text":"5"
  			},{
  				"id":"006",
  				"text":"6"
  			},{
  				"id":"007",
  				"text":"7"
  			},{
  				"id":"008",
  				"text":"8"
  			},{
  				"id":"009",
  				"text":"9"
  			},{
  				"id":"010",
  				"text":"10"
  			}]
    }
  },
  computed:{
    pages(){
      const pages= []
      this.mululist.forEach((item,index)=>{
        const page = Math.floor(index/6)
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
*{
  touch-action:none
}
.xuanji
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
  .icons1
   position:relative
   width:3rem
   height:3rem
   text-align:center
   background:#fafafa
   margin-left:2rem
   float:left
   .icons-img
    position:absolute
    left:50%
    top:50%
    transform:translate(-50%,-50%)
    color:#333
    font-weight:bold
</style>
