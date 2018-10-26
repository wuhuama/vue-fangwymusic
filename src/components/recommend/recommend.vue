<template>
  <div class="recommend" ref="recommend">
    {{msg}}
    <scroll class="recommend-content" ref="scroll" :data="playList">
      <div>
        <div v-show="banner.length" class="decorate" v-if="banner.length"></div>
        <div v-if="banner.length" class="slider-wrapper">
          <slider>
            <div v-for="item in banner" :key="item.id" @click.stop="selectBanner(item)">
              <img :src="item.imageUrl" alt="">
            </div>
          </slider>
        </div>
      </div>
    </scroll>
  </div>
</template>
<script>
import Scroll from 'base/scroll/scroll'
import Slider from 'base/slider/slider'
import {getBanner, getRecommendList, getRecommendMusic} from 'api/recommend'
import {ERR_OK} from 'common/js/config'

export default {
  data () {
    return {
      msg: "hello",
      banner: [],
      playList: [],
    }
  },
  components: {
    Scroll,
    Slider
  },
  mounted () {
    console.log(111111111111)
    this._getBanner()
    this.gettest()
  },
  methods: {
    gettest () {
      console.log('测试。。')
    },
    _getBanner () {
      getBanner().then((res) => {
        if (res.status === ERR_OK) {
          let list = res.data.banners
          console.log(res)
          this.banner = list.splice(4)
          console.log(this.banner)
        } else {
          console.log('Banner 获取失败')
        }
      })
    }
  }
}
</script>
<style>

</style>
