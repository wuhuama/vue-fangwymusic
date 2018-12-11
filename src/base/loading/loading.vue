<template>
  <div class="loading">
    <img src="./loading.gif" width="24" height="24">
  </div>
</template>

<script>
export default {
  props: {
    title : {
      type: String,
      dafault: '正在载入...'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~common/scss/variable';

.loading {
  width: 100%;
  height: 100%;
  text-align: center;
  img {
    margin-top: 10px;
  }
}
</style>

