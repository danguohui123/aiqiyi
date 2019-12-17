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
        <div class="pinglun_center" v-for="(item) of pinglunlist" :key="item.id">
            <div class="pinglun_top">
                <div class="pinglun_left">
                    <div class="c-photo" :style="{backgroundImage:'url('+ item.Image +')'}"></div>
                    <div class="info">
                        <div class="name">{{item.name}}</div>
                        <span class="time">{{item.time}}</span>
                    </div>
                </div>
                <a class="ping-right">
                    <i class="iconfont">&#xe676;</i>
                    <span class="right_text">{{item.number}}</span>
                </a>
            </div>
            <div class="pinglun_c">
                <div class="pinglun_text">
                    {{item.content}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'pinglun',
  data () {
    return {
      pinglunlist: [{
        id: '0001',
        Image: 'http://img7.iqiyipic.com/passport/20181005/71/70/passport_1313558651_153866413860104_130_130.jpg',
        name: '港剧星空',
        time: '3月6号',
        number: '6777',
        content: '说句良心话。明玉她妈有当她是一家人吗？同样是是自己的孩子。为啥儿子的早餐有牛奶女儿的早餐是白开水？同样是十月怀胎。凭什么自己儿子什么事情都不用干，而自己的女儿什么事情都得干？以致于上学迟到？同样是自己的孩子，明玉的妈扪心自问有给过明玉好脸色吗？做的好没有好脸色。考的好也没有好脸色。这是一个当妈的对待自己女儿的态度？就像网上所说的什么明玉的出生是个错误。但是毕竟孩子是无辜的吧！把自己的不幸施加在自己女儿身上合适吗？所以明玉出钱办理了苏母的身后事也算仁至义尽了。又说血浓于水？更是莫大的讽刺。明玉在她母亲眼里看来就是多余的。所以这部剧告诉我们。应该平等对待自己的孩子！就像弹幕说的。要是自己是明玉早就掀桌子了。所以每次看到苏母对待苏母那样的态度真的是恼火！只能说陈谨老师把这个书里面的重男轻女的"狠毒"母亲演活了'
      },
      {
        id: '0002',
        Image: 'http://img7.iqiyipic.com/passport/20190303/45/75/passport_1448852097_155155032778317_130_130.jpg',
        name: '黄小五五五',
        time: '3月2号',
        number: '3177',
        content: '我们虽然是农村的，我也是女孩，上面还有两哥哥一姐姐，因为父亲是三代单传，所以父母生了我们四个，哥哥姐姐过得都比我好，我最没出息，而且今年都三十了还没嫁人，但父亲还是最疼爱我，全家都包容我，谢谢苍天赐我一个幸福家'
      },
      {
        id: '0003',
        Image: 'http://img7.iqiyipic.com/passport/20190128/f2/d1/passport_1525396796_154867730476184_130_130.jpg',
        name: 'gdggjv',
        time: '3月17号',
        number: '679',
        content: '我爸就好比姚晨，但是他不够争气，导致我们的小家也不幸福美满，总是被大爷大姑爷爷奶奶排挤和挤兑，我爸我妈两个不合适的在这样的环境下更是一起造就一段失败的婚姻，在失败的家庭里我和我弟也是不争气，也是失败的人，将来可能也会有失败的人生，失败的下一代，导演会可能让结局完满，但是生活中，我知道我的家庭以后只会走向悲剧的深渊，不会有美好的结局，我的生活可能就应该是失败的'
      },
      {
        id: '0004',
        Image: 'http://img7.iqiyipic.com/passport/20190405/27/a8/passport_1727581992_155442326249155_130_130.png',
        name: '自在飞花2018',
        time: '3月24日',
        number: '484',
        content: '都挺好，良心制作！一部值得从头追到尾的好剧，中间剧情紧凑，没有拖拉剧情、废话连篇、剪辑故意拖延时间，拿观众当傻子的那些剧组和后期制作，其实他们更傻！丢失观众，就是丢失了未来发展，诚实的面对自己和越来越注重品质剧的观众，才是发展的根本。精彩的剧情、优秀的演技派演员、负责人的导演、符合剧情的服装道具、场景、后期制作有责任心，不为了拖延播放时间而故意碎片剪辑、拼凑剧情。整体团队优质！这样的作品出来才会赢得口碑和收视率、或是票房。创作本身就是不断的突破和改变，这个剧的话题感、现实感、思想深度，都是非常值得赞赏的！加油！倪大红、姚晨、郭京飞、高鑫、杨祐宁，都是喜爱的好演员！作品都是注重品质的，认真负责有责任感，真心喜爱表演的人，祝福他们越来越好！2019年第一个季度，给了我们这么好的一个剧！'
      }]
    }
  }
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
    width 7rem
    height 3.5rem
    line-height 3.5rem
    .iconfont
     font-size 2.5rem
    .right_text
     display inline-block
     vertical-align top
     line-height 3.5rem
     font-size 1rem
  .pinglun_c
   padding-left 6rem
   padding-right 1.2rem
   .pinglun_text
    position relative
    line-height 2.1rem
    font-size 1.5rem
    max-height 10.5rem
    display -webkit-box
    overflow hidden
    -webkit-line-clamp 5
    -webkit-box-orient vertical
    text-overflow ellipsis
    text-align justify
</style>
