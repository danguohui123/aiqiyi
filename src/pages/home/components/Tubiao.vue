<template>
    <div class="icons">
      <swiper :options="swiperOption" v-if="list.length">
        <swiper-slide v-for="(list,index) of pages" :key="index">
          <div class="icons1" v-for="item of list" :key="item.id">
            <div class="icons-img">
              <img class="icons-imgsole" :src="item.imgUrl">
              <p class="icon-text">{{item.desc}}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeTubiao',
  props:{
    list:Array
  },
  data() {
    return {
      swiperOption: {

      },
    }
  },
  computed:{
		pages(){
			const pages=[]
			this.list.forEach((item,index)=>{
				const page=Math.floor(index/4)
				if(!pages[page]){
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
  .icons{
    margin-top:.5rem
  }
  .icons1{
    position:relative
    float:left
    width:25%
    padding-bottom:21%
    text-align:center
  }
  .icons-img{
    display:inline-block
    position:absolute
    top:0
    left:0
    bottom:1.2rem
    padding:1rem
  }
  .icons-imgsole{
    height:100%
  }
  .icon-text{
    margin-top:.5rem
    height:.5rem
    color:#333
  }

</style>
