// 1 从vue-router按需导入两个方法
// createRouter方法用于创建路由实例对象
// createWebHashHistory方法用于指定路由的工作模式（hash模式）
import { createRouter,createWebHashHistory } from 'vue-router'
import Nongyenongcun from "../views/Nongyenongcun.vue"
import Yuyeziyuan from '../views/Yuyeziyuan.vue'
import Zhongzhiziyuan from '../views/Zhongzhiziyuan.vue'
import Kejizhuanxiang from "../views/Kejizhuanxiang.vue"
import Xiangcunchanye from "../views/Xiangcunchanye.vue"
import Nongyexinxi from "../views/Nongyexinxi.vue"
import Xuqinyangzhi from '../views/Xuqinyangzhi.vue'
import Nongjishuju from '../views/Nongjishuju.vue'
import Xiangecunjianshe from '../views/Xiangecunjianshe.vue'
// import App from "../App.vue"

// 3 创建路由对象

const router = createRouter({
    // 3.1 通过 history 属性，指定路由的工作模式
    history: createWebHashHistory(),
    // 3.2 通过 routes 数组，指定路由规则
    // path 是 hash 地址，component 是要展示的组件
    routes: [
        {
            path:'/',
            redirect:"/Nongyenongcun"
        },
        { path: '/Nongyenongcun', component: Nongyenongcun },
        { path: '/Yuyeziyuan', component: Yuyeziyuan },
        { path: '/Zhongzhiziyuan', component: Zhongzhiziyuan },
        { path: '/Kejizhuanxiang', component: Kejizhuanxiang },
        { path: '/Xiangcunchanye', component: Xiangcunchanye },
        { path: '/Nongyexinxi', component: Nongyexinxi },
        { path: '/Xuqinyangzhi', component: Xuqinyangzhi },
        { path: '/Nongjishuju', component: Nongjishuju },
        { path: '/Xiangecunjianshe', component: Xiangecunjianshe },
        
    ],
})
  
// 4、向外共享路由对象
export default router