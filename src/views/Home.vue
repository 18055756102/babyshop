<template>
  <div>
    <!-- 这是上面的四个页面 -->
    <router-view></router-view>

    <!-- 这是下面的四个标签 -->
    <van-tabbar
      v-model="active"
      active-color="#fe801d"
      :route="true"
      :placeholder="true"
    >
      <van-tabbar-item icon="wap-home-o" to="/index">首页</van-tabbar-item>
      <van-tabbar-item icon="qr" to="/classify">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/cart"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="user-o" to="/mine">我的 </van-tabbar-item>
    </van-tabbar>
  </div>
</template>



<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>




<style lang="stylus" scoped></style> 