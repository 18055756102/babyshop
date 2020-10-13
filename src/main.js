import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入reset
import './assets/css/reset.stylus'


//引入全局的style样式文件 
import './assets/css/style.stylus'

//引入amfe插件  使px单位 变成rem
import "amfe-flexible"

//使用过ui框架  使用什么就去引入使用什么
import { Tabbar, TabbarItem, Swipe, SwipeItem, Grid, GridItem, NavBar,Image as VanImage ,Card} from 'vant';


Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(NavBar);
Vue.use(VanImage);
Vue.use(Card);


Vue.config.productionTip = false





new Vue({
    router: router,
    store: store,
    render: h => h(App)
}).$mount('#app')