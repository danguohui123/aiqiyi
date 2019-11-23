<template>
      <div class="lunbo">
        <swiper :option="swiperOption">
          <swiper-slide v-for="(page,index) of pages" :key="index">
            <div class="swiperN">
              <a class="a_img" v-for="item of page" :key="item.id" :style="{backgroundImage:'url('+ item.Image +')'}">
                <span class="images-left">{{item.text}}</span>
                <span class="images-right">{{item.time}}</span>
                <div>
                  <i class="text_img" :style="{backgroundPosition:item.size}"></i>
                </div>
              </a>
            </div>
          </swiper-slide>
        </swiper>
      </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {

      },
      textList: [{
        id: '001',
        Image: '//m.iqiyipic.com/common/lego/20191120/e535d00b412d4c889fabeb6d35c7693d.jpg',
        text: '慢游：华哥带黄景瑜看鲸鱼圆梦',
        time: '2019-11-20期',
        size: '-4rem 0'
      },
      {
        id: '002',
        Image: '//m.iqiyipic.com/common/lego/20191119/82024f1a397f4abda4c018201b4274e8.jpg',
        text: '灵剑山：许凯女装惊艳登场',
        time: '更新至18集',
        size: '-4rem 0'
      },
      {
        id: '003',
        Image: '//pic1.iqiyipic.com/common/lego/20191119/0ab08c77675b43798cf85dfd7020147c.jpg',
        text: '心灵法医：聂远宋轶联手探奇案',
        time: '更新至8集',
        size: '-7.5rem 0'
      }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.textList.forEach((item, index) => {
        const page = Math.floor(index / 1)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  .lunbo{
    margin-top .5rem
  }
  .swiperN{
    width 100%
  }
  .a_img{
    display block
    position relative
    width 100%
    padding-bottom 50%
    background-size 100% 100%
  }
  .a_img:after{
    position absolute
    left 0
    bottom 0
    right 0
    content ""
    height 3rem
    background-image: linear-gradient(to bottom,rgba(0,0,0,0)0,rgba(0,0,0,0.5)100%)
  }
  .images-left{
    display block
    position: absolute;
    left 0
    bottom 0
    height 3rem
    line-height 3rem
    color #ffffff
    font-weight bold
    font-size 1.5rem
    z-index 50
    padding-left 1.2rem
  }
  .images-right{
      display block
      position: absolute;
      right 1rem
      bottom 0
      height 3rem
      line-height 3rem
      color #ffffff
      z-index 50
  }
  .text_img{
    display inline-block
    position absolute
    width 3.5rem
    height 1.5rem
    background url(https://www.iqiyipic.com/common/fix/h5-aura/picicon-bg-20190322.png)
    background-repeat no-repeat
    background-size 15rem 15rem
    right 0
  }
</style>
