<template>
    <div class="icons">
      <swiper :options="swiperOption">
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
  data() {
    return {
      swiperOption: {

      },
      iconList:[{
  	      "id":"0001",
  			  "imgUrl":"https://m.iqiyipic.com/common/lego/20170921/3ba9004a0a1e43939cf4631a5f0b8c8f.png",
  			  "desc":"免流量追剧"
  		  },{
  		  	  "id":"0002",
  			  "imgUrl":"https://m.iqiyipic.com/common/lego/20170915/7df91c03d5db4113848f7ca1b9d3f722.png",
  			  "desc":"小说"
  		  },{
  		  	  "id":"0003",
  			  "imgUrl":"https://m.iqiyipic.com/common/lego/20170915/bc4532a1bfd64f3c929b6f92002a57cd.png",
  			  "desc":"电影票"
  		   },{
  		   	  "id":"0004",
  			  "imgUrl":"https://m.iqiyipic.com/common/lego/20180201/34b505af4dad4528a87cb15e2eb82f1c.png",
  			  "desc":"奇秀直播"
  		   },{
  		   	  "id":"0005",
  			  "imgUrl":"https://m.iqiyipic.com/common/lego/20170915/5909cbd78fd44f6fa3d9b78dc9e13cd2.png",
  				"desc":"商城"
  		   },{
  		   	  "id":"0006",
  			  "imgUrl":"https://m.iqiyipic.com/common/lego/20170915/3e2d8d029f104eea9261ef9dca79967e.png",
  			  "desc":"游戏中心"
  		   },{
  		   	  "id":"0007",
  			  "imgUrl":"https://m.iqiyipic.com/common/lego/20170915/35d844f8af07412e9980d56cb7858bac.png",
  			  "desc":"会员俱乐部"
  		   },{
  		   	  "id":"0008",
  			  "imgUrl":"https://m.iqiyipic.com/common/lego/20181220/4edcc4fe322e4f54a96f26a25bfbe9bf.png",
  			  "desc":"知识"
  		}]
    }
  },
  computed:{
		pages(){
			const pages=[]
			this.iconList.forEach((item,index)=>{
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
