import Vue from 'vue'
export const USER_SINGIN = 'USER_SINGIN' //登录成功
export const USER_SINGOUT = 'USER_SINGOUT' //退出登录
export default {
    state: JSON.parse(sessionStorage.getItem('user')) || {},
    mutations: {
        [USER_SINGIN](state, user) { //可以向store.commit传入额外的参数，即mutation的载荷
            sessionStorage.setItem('user', JSON.stringify(user)) //保存数据到sessionStorage
            Object.assign(state, user)
            console.log(user)
        },
        [USER_SINGOUT](state) {
            sessionStorage.removeItem('user') //删除sessionStorage里的值
            Object.keys(state).forEach(k => Vue.delete(state, k))
            console.log(state)
        }
    },
    actions: {
        [USER_SINGIN]({
            commit
        }, user) { //action支持以载荷的形式进行分发
            commit(USER_SINGIN, user)
        },
        [USER_SINGOUT]({
            commit
        }) {
            commit(USER_SINGOUT)
        }
    }
}