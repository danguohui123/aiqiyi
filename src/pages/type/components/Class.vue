
<template>
    <div>
      <div class="class-top">
        <div>
          <section class="section-text">影视·休闲</section>
        </div>
        <div class="class-content">
          <section>
            <a class="m-list-link" v-for="item of typelist" :key="item.id">
              <i class="listicon" :style="{backgroundPosition:item.size}"></i>
              <span class="list-info">{{item.text}}</span>
            </a>
          </section>
        </div>
        <div class="footer">
          <img src="//www.iqiyipic.com/common/fix/h5-aura/foot.png"/>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Class',
  data(){
    return {
      typelist:[{
  				"id":"0001",
  				"size":"0 0",
  				"text":"电视剧"
  			},{
  				"id":"0002",
  				"size":"-5rem 0",
  				"text":"电影"
  			},{
  				"id":"0003",
  				"size":"-15rem 0",
  				"text":"纪录片"
  			},{
  				"id":"0004",
  				"size":"-10rem 0",
  				"text":"片花"
  			},{
  				"id":"0005",
  				"size":"-25rem -25rem",
  				"text":"影讯"
  			},{
  				"id":"0006",
  				"size":"-10rem -5rem",
  				"text":"脱口秀"
  			},{
  				"id":"0007",
  				"size":"-20rem 0",
  				"text":"网络电影"
  			},{
  				"id":"0008",
  				"size":"0 -5rem",
  				"text":"综艺"
  			},{
  				"id":"0009",
  				"size":"-5rem -5rem",
  				"text":"动漫"
  			},{
  				"id":"0010",
  				"size":"-15rem -5rem",
  				"text":"娱乐"
  			},{
  				"id":"0011",
  				"size":"-20rem -5rem",
  				"text":"搞笑"
  			},{
  				"id":"0012",
  				"size":"-25rem -5rem",
  				"text":"音乐"
  			},{
  				"id":"0013",
  				"size":"-20rem -25rem",
  				"text":"秀奇直播"
  			},{
  				"id":"0014",
  				"size":"-25rem -10rem",
  				"text":"直播中心"
  			},{
  				"id":"0015",
  				"size":"-25rem 0",
  				"text":"全网影视"
  			}]
    }
  }
}

</script>

<style lang="stylus" scoped>
.class-top
  background-color:#fff
  .section-text
   padding-left:1.5rem
   line-height:2rem
   background-color:#f7f7f7
   color:#999
   font-size:.2rem
.class-content
 padding-left:0
 padding-right:0
 .m-list-link
  display:inline-block
  vertical-align:top
  width:33%
  height:8.8rem
  text-align:center
  margin-top:1rem
  .listicon
   display:inline-block
   width:5rem
   height:5rem
   background:url(//www.iqiyipic.com/common/fix/h5-aura/channel-list-20190115.png)
   background-repeat:no-repeat
   background-size:30rem 35rem
   background-position:0 0
  .list-info
   display:block
   color:#666
.footer
 padding:1.5rem
 text-align:center
.footer img
 width:10rem
 height:4.7rem
</style>
