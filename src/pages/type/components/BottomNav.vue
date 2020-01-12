
<template>
  <div class="dinav">
    <div class="dinav_border a">
      <router-link to="/">
        <a class="inmei">
          <div class="cont">
            <i class="iconfont">&#xe677;</i>
            <span class="content">首页</span>
          </div>
        </a>
      </router-link>
      <router-link to="/type">
        <a class="inmei">
          <div class="cont">
            <i class="iconfont">&#xe651;</i>
            <span class="content">热点</span>
          </div>
        </a>
      </router-link>
      <router-link to="/">
        <a class="inmei">
          <div class="cont">
            <!-- <i class="iconfont">&#xe677;</i>
            <span class="content">首页</span>-->
            <img src="./2.png" class="img-cen" />
          </div>
        </a>
      </router-link>
      <router-link to="/my">
        <a class="inmei">
          <div class="cont">
            <i class="iconfont">&#xe60c;</i>
            <span class="content">信息</span>
          </div>
        </a>
      </router-link>
      <router-link to="/shipin">
        <a class="inmei">
          <div class="cont">
            <i class="iconfont">&#xe615;</i>
            <span class="content">我的</span>
          </div>
        </a>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BottomNav',
  components: {
  }
}

</script>

<style lang="stylus" scoped>
.dinav {
  height: 4.4rem;

  .dinav_border {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1001;
  }

  .a {
    height: 4.4rem;
    background: #fff;

    .inmei {
      display: block;
      width: 20%;
      height: 4.4rem;
      float: left;
      text-align: center;
      position: relative;

      .cont {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .iconfont {
          font-size: 2.5rem;
        }

        .content {
          display: block;
          margin-top: 0.3rem;
        }

        .img-cen {
          height: 4.4rem;
        }
      }
    }
  }
}
</style>
