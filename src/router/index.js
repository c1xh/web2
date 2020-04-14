import App from '../App'
  export default  [
      { path: '/',
       component: App,
       children:[
        { 
          path: '/login',
          meta: { auth: false },
          component:resolve=>require(['../views/LoginItem.vue'],resolve)
        },//登录页
        { 
          path: '/home', 
          component:resolve=>require(['../views/Home.vue'],resolve)
        },//主页
        { 
          path: '/signout',
          component:resolve=>require(['../views/SignOut.vue'],resolve)
          },//注销页
        {
           path: '/me', 
           component:resolve=>require(['../views/MeItem.vue'],resolve)
          },//我的
        { 
          path: '/no',
          component:resolve=>require(['../views/404.vue'],resolve)
          },//404
          { 
            path: '/',
            meta: { auth: false },
            component:resolve=>require(['../views/IndexItem.vue'],resolve)
            },
        {
           path: '/detail/:id',
            name:'Detail',
          
          },//详情页
       ]

    },//首页
]

