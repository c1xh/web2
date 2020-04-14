<template>
    <div>
         <v-header title="敬请期待">
            <a slot="left" @click="go">返回</a>
        </v-header>
        <div class="fa">   
        <img class="img" src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3094440994,3723240616&fm=26&gp=0.jpg" alt="">
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        go(){
            this.$router.go(-1)
        }
    }
}
</script>