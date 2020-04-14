<template>
    <div>
        <v-header title="退出">
            	<router-link slot="left"  to="/home">返回</router-link>
        </v-header>
        <div>
            <button v-on:click="submit">确认退出</button>
        </div>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
import { USER_SINGOUT} from '../store/user'
export default {
    methods: {
        ...mapActions([USER_SINGOUT]),
        submit(){
            this.USER_SINGOUT()
            this.$router.replace({path:'/login'})
        }
    },
    
}
</script>