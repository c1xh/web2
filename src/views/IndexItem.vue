<template>
  <div>
    <v-header title="正在热映">
      <router-link slot="right" v-if="user.id" to="/me">{{user.name}}</router-link>
    </v-header>
    <section>
      <swiper></swiper>
    </section>
    <v-footer></v-footer>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import swiper from '../components/Index/Swiper'
export default {
  data () {
    return {

    }
  },
  computed: mapState({ user: state => state.user }),
  components: {
    swiper,
  },
  mounted () {
  },
  methods: {

  },

}
</script>
<style scoped>
.login-msg {
  padding: 20px;
  text-align: center;
}
</style>