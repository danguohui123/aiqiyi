<template>
  <div class="pic-content">
    <a class="a-content" v-for="item of Listcontent" :key="item.id">
      <div class="mic-img" :style="{backgroundImage:'url('+item.Image+')'}">
        <span class="mix-text">{{item.text}}</span>
      </div>
      <div class="mic-text">
        <p class="pic-p">{{item.name}}</p>
        <p class="mic-p">{{item.content}}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'HomeList',
  data () {
    return {
      Listcontent: [
        {
          id: '0001',
          Image: 'https://m.iqiyipic.com/common/lego/20191120/a39447c019724cb987e522c9aed9b557.jpg',
          text: '更新至24集',
          name: '心灵法医',
          content: '聂远抽丝剥茧发现新线索'
        },
        {
          id: '0002',
          Image: 'https://m.iqiyipic.com/common/lego/20191120/90b30ef6322f4fd69052bf43fb4db33b.jpg',
          text: '40集全',
          name: '生活对我下手了2',
          content: '辣目洋子电击男友灵魂拷问'
        },
        {
          id: '0003',
          Image: 'https://m.iqiyipic.com/common/lego/20191119/b8c21604521c4f558def47ca92ea12b9.jpg',
          text: '更新至44集',
          name: '热血少年',
          content: '我把你当兄弟你拿枪指我？'
        },
        {
          id: '0004',
          Image: 'https://m.iqiyipic.com/common/lego/20191120/d06d028ae1af4238bdd7079cc8308faa.jpg',
          text: '更新至34集',
          name: '初恋那件小事',
          content: '闹别扭的凉水CP也这么甜'
        }
      ]
    }
  }
}

</script>

<style lang="stylus" scoped>
.pic-content {
  margin-left: -0.2rem;
  margin-top: 1rem;
}

.a-content {
  display: inline-block;
  width: 49.5%;
  height: auto;
  margin-left: 0.1rem;
}

.mic-img {
  width: 100%;
  padding-bottom: 50%;
  background-size: cover;
  position: relative;
}

.mix-text {
  display: block;
  height: 2rem;
  line-height: 2rem;
  position: absolute;
  bottom: 0;
  right: 0;
  padding-right: 1rem;
  color: #fff;
  z-index: 100;
}

.mic-text {
  padding-top: 0.8rem;
  padding-left: 1rem;
}

.pic-p {
  font-size: 1.45rem;
  color: #333;
  display: block;
  height: 2.5rem;
  line-height: 2.5rem;
}

.mic-p {
  font-size: 1.3rem;
  height: 1.5rem;
  line-height: 1.5rem;
  margin-bottom: 1rem;
}

.mic-img:after {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  content: '';
  height: 3rem;
  background-image: linear-gradient(top, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.5) 100%);
}
</style>
