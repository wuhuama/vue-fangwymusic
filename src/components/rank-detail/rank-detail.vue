<template>
  <transition name="slide">
    <div class="music-list">
      <div class="header" ref="header">
        <div class="back" @click="back">
          <i class="fa fa-angle-left"></i>
        </div>
        <div class="text">
          <h1 class="title">{{headerTitle}}</h1>
        </div>
      </div>
      <scroll class="list"
      @scroll="scroll"
      :probe-type="probeType"
      :listen-scroll="listScroll"
      ref="list">
        <div class="music-list-wrapper">
          <div class="bg-image" :style="bgStyle" ref="bgImage">
            <diiv class="filter"></diiv>
            <div class="text">
              <h2 class="list-title">{{title}}</h2>
              <p class="update">{{updateTime}}</p>
            </div>
          </div>
          <div class="song-list-wrapper">
            <div class="sequence-play" v-show="listDetail.length" @click="sequence">
              <i class="iconfont icon-bofangicon"></i>
              <span class="text">播放全部</span>
              <span class="count">(共{{listDetail.length}}首)</span>
            </div>
            <song-list @select="selectItem" :songs="listDetail"></song-list>
          </div>
        </div>
        <div v-show="!listDetail.length" class="loading-content">
          <loading></loading>
        </div>
      </scroll>
    </div>
  </transition>
</template>
<script>
import Scroll from 'base/scroll/scroll'
import Loading from 'base/loading/loading'
// import SongList from 'base/song-list/song-list'
import {mapGetters, mapActions} from 'vuex'
import {playlistMixin} from 'common/js/mixin'
import {createSong} from 'common/js/song'

const RESERVED_HEIGHT = 44

export default {
  mixins: [playlistMixin],
  data () {
    return {
      listDetail: [],
      scrollY: 0,
      node: null,
      headerTitle: '歌手'
    }
  },

}
</script>
<style lang="scss" scoped>

</style>
