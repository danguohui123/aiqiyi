<template>
    <div class="header">
      <div class="m-header header-fixed">
        <router-link to="/">
        <a class="a-header b-header c-header"></a>
        </router-link>
        <div class="twoinfo">
          <a class="line-text">下载APP</a>
        </div>
        <ul class="mush">
          <li>
            <a class="fover-push">&#xe62d;</a>
          </li>
          <li>
            <a class="fover-push">&#xe630;</a>
          </li>
          <li>
            <router-link to="/shipin">
            <a class="fl-size">{{this.name}}</a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props:{
    name:String
  }
}

</script>

<style lang="stylus" scoped>
  .header{
    height:4.4rem
  }
  .m-header{
    height:4.4rem
    background-color:black
  }
  .header-fixed{
    position:fixed
    top:0
    left:0
    right:0
    z-index:1001
  }
  .a-header{
    display:inline-block
    width:7.3rem
    height:2.4rem
  }
  .b-header{
    background:url("https://www.iqiyipic.com/common/fix/h5-aura/iqiyi-logo.png") no-repeat 0 0
    background-size:7.3rem 2.4rem
  }
  .c-header{
    position:absolute
    top:1rem
    left:1.2rem
  }
  .mush{
    height :100%
    font-size :1.4rem
    float :right
  }
  .mush>li{
    display inline-block
    width 4.4rem
    text-align center
    float left
  }
  .fover-push{
    display :inline-block
    font-size 2.4rem
    font-family "iconfont"
    color:#b0b0b0
    line-height 4.4rem
  }
  .fl-size{
    display inline-block
    line-height 4.4rem
    color:#b0b0b0
  }
  .twoinfo{
    float right
    height 4.4rem
    line-height 4.4rem
    margin-right .5rem
  }
  .line-text{
    display inline-block
    line-height 2rem
    height 2rem
    width 5rem
    border 1px solid #0bbe06
    border-radius 2rem
    text-align center
    font-size 1rem
    color #0bbe06
  }

</style>
