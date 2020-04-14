<template>
    <div>
        <v-header title="我的">
            <a slot="left" @click="go">返回</a>
        </v-header>
        <section class="me">
            <mt-cell
            title="我的电影票"
            to="/no"
            is-link
            value="">
            </mt-cell>
            <mt-cell
            title="优惠券"
            to="/no"
            is-link
            value="">
            </mt-cell>
            <mt-cell
            title="兑换券"
            to="/no"
            is-link
            value="">
            </mt-cell>
            <mt-cell
            title="帮助中心"
            to="/no"
            is-link
            value="">
            </mt-cell>
            <mt-cell
            title="退出登录"
            to="/signout"
            is-link
            value="">
            </mt-cell>
        </section>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
	data () {
		return {
		}
	},
	components: {
	},
	methods: {
		...mapMutations([
		  'pushLoadStack',
		  'completeLoad'
        ]),
        go(){
            this.$router.go(-1)
        }
	},
	created () {
	}
}
</script>

<style>
.me {
	padding-top: 10px;
}
</style>