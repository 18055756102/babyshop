<template>
    <!-- 这里是轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" >
        <van-swipe-item 
        v-for="(item ,index) in bannerList " :key="index"
        >
        <img :src="item" alt="">
        </van-swipe-item> 
    </van-swipe>
  
</template>

<script>
export default {
    props:['bannerList']
    
}
</script>

<style lang="stylus">
img 
  width 100%
  height 100%
  
</style>