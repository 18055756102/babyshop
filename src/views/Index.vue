<template>
  <div class="index">
    <!-- 首页栏 -->
    <van-nav-bar title="首页" :fixed="true" />
    <!-- 轮播图 -->
    <div class="wrapper">
      <div>
        <swipe :bannerList="bannerList" class="font-style"></swipe>

        <!-- 每日福利  热销榜 -->
        <div class="grid">
          <van-grid :border="false">
            <van-grid-item v-for="(item, index) in list" :key="index">
              <img :src="item.imgUrl" />
              <span>{{ item.title }}</span>
            </van-grid-item>
          </van-grid>
        </div>

        <!-- 全球奶粉，尿不湿 -->
        <div class="nextgrid">
          <van-grid :border="false">
            <van-grid-item v-for="(item, index) in list" :key="index">
              <img :src="item.imgUrl" />
            </van-grid-item>
          </van-grid>
        </div>

        <!-- 推荐商品 -->
        <div class="toplist">
          <div class="toplistfirst">
            <img src="../assets/img/redjuxing.png" alt="" />
            <span>推荐商品</span>
          </div>
          <div class="product">
            <van-card
              v-for="(item, index) in toplist"
              :key="index"
              :price="item.currentPrice + '.00'"
              :title="item.productName"
              :thumb="item.imgUrl"
              :origin-price="item.originalPrice + '.00'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//引入axios请求数据方式
import { SwipreList, topList } from "../utils/api.js";

//引入二次封装的轮播图组件
import Swipe from "../components/index/Swipe";

//引入betterscroll
import BetterScroll from "better-scroll";
// import { nextTick } from "vue/types/umd";
let bs;
export default {
  data() {
    return {
      bannerList: [],
      list: [
        {
          imgUrl: require("../assets/img/img-1.jpg"),
          title: "每日福利",
        },
        {
          imgUrl: require("../assets/img/img-2.jpg"),
          title: "热销榜",
        },
        {
          imgUrl: require("../assets/img/img-3.jpg"),
          title: "皮噜甄选",
        },
        {
          imgUrl: require("../assets/img/img-4.jpg"),
          title: "会员中心",
        },
      ],
      toplist: [],
    };
  },
  components: {
    Swipe,
  },
  mounted() {
    this.getBannerList();
    this.getTopList();
  },
  methods: {
    //首页轮播图使用axios获取数据   get
    //使用箭头函数 确保this指向问题
    async getBannerList() {
      let str = await SwipreList();
      this.bannerList = str.data.result.list;
      console.log(str);
    },

    // 首页推荐商品   post
    async getTopList() {
      let str = await topList();
      this.toplist = str.data.result.list;
      console.log(str);
      //实例化betterScroll  第一个参数是父元素 第二个参数是配置项 里面放配置项
      // 数据要获取完之后才能进行滚动，不获取到数据是无法滚动的
      // nextTick意思就是等上面的数据渲染完成在进行下面的操作
      await this.$nextTick();
      bs = new BetterScroll(".wrapper", {
        //允许纵向滚动
        scrollY: true,
        click: true,
      });
    },
  },
};
</script>

<style lang="stylus" scoped></style>
