import * as Vue from "vue"
import * as VueRouter from 'vue-router'
import * as ElementPlus from "element-plus"
import { ElButton } from 'element-plus'

const Home = {
  template: `<div>
    <h1>Home</h1>
  </div>`,
  components: { 'RouterLink': VueRouter.RouterLink },
}

const About = { template: '<div>About</div>' }

const Counter = {
  template: `<div>
    <p>
      Counter: {{ counter }}
    </p>
    <p>
      <el-button type="primary" v-on:click="onClicked">I am ElButton</el-button>
    </p>
</div>`,
  data() {
    return {
      counter: 0,
      timer: null,
    }
  },
  components: { ElButton },
  methods: {
    onClicked() {
      this.restartTimer()
    },
    restartTimer() {
      if(this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }

      this.counter = 0
      this.timer = setInterval(() => {
        this.counter++
      }, 1000)

    }
  },
  mounted() {
    this.restartTimer()
  }
}

const routes = [
  { path: '/', component: Home },
  { path: '/counter', component: Counter },
  { path: '/about', component: About },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

const app = Vue.createApp({
  template: `<div>
    <div>
      <router-link to="/">Go to Home</router-link>
    </div>
    <div>
      <router-link to="/counter">Go to Counter</router-link>
    </div>
    <div>
      <router-link to="/about">Go to About</router-link>
    </div>
    <router-view></router-view>
  </div>`
})
app.use(router)
app.use(ElementPlus)
app.mount('#root')
