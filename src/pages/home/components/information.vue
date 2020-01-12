<template>
  <div>
    <div class="box-conter">
      <div class="box-header">
        <i class="iconfont">&#xe771;</i>
        <a class="info-text">今日资讯</a>
      </div>
    </div>
    <div class="box-left">
      <div class="box-bottom">
        <div class="m-text">
          <i class="iconfont">&#xe614;</i>
          <span class="text-child">人大14岁失联女毕业生已找到</span>
        </div>
      </div>
      <div class="box-bottom">
        <div class="m-text">
          <i class="iconfont">&#xe614;</i>
          <span class="text-child">2009年中科院新增院士64名</span>
        </div>
      </div>
    </div>
    <div class="pic-content">
      <a class="a-content" v-for="item of list" :key="item.id">
        <div class="mic-img" :style="{backgroundImage:'url('+item.Image+')'}"></div>
        <div class="mic-text">{{item.text}}</div>
      </a>
      <!-- <a class="a-content">
        <div class="mic-imq"></div>
        <div class="mic-text">结婚500元随礼被删好友</div>
      </a>-->
    </div>
    <div style="clear:both"></div>
    <div class="end">
      <a class="a-left">
        <i class="iconfont fontfamily">&#xe645;</i>更多资讯
      </a>
      <a class="a-left">
        <i class="iconfont fontfamily">&#xe603;</i>换一批
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeInformation',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
.box-conter {
  border-top: 1px solid #F0F0F0;
}

.box-header {
  position: relative;
  padding: 1rem 1.2rem;
}

.iconfont {
  font-size: 2rem;
  color: #2495FF;
}

.info-text {
  color: #333;
  font-size: 1.5rem;
  display: inline-block;
  position: relative;
  line-height: 2rem;
  max-width: 70%;
  font-weight: bold;
}

.box-left {
  padding-left: 1rem;
}

.box-bottom {
  padding-bottom: 1rem;
}

.m-text {
  position: relative;
  line-height: 1rem;
  margin-bottom: 0.15rem;
  padding: 0 0.12rem 0 0.31rem;
}

.text-child {
  color: #333;
  font-size: 1.5rem;
}

.pic-content {
  margin-left: -0.2rem;
}

.a-content {
  display: inline-block;
  width: 49.5%;
  height: auto;
  float: left;
}

.mic-img {
  width: 100%;
  padding-bottom: 50%;
  background-size: cover;
  position: relative;
}

.mic-text {
  padding-top: 1rem;
  padding-left: 1rem;
  color: #333;
  font-size: 1.5rem;
  line-height: 1.5rem;
}

.mic-imq {
  width: 100%;
  padding-bottom: 50%;
  background-size: cover;
  position: relative;
}

.end {
  height: 6rem;
}

.a-left {
  display: inline-block;
  width: 49.5%;
  color: #0bbe06;
  text-align: center;
  line-height: 1.5rem;
  font-size: 1.5rem;
  padding-top: 2rem;
}

.fontfamily {
  margin-right: 0.5rem;
  color: #0bbe06;
  font-size: 1.5rem;
}
</style>
