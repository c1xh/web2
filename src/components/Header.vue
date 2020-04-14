<template>
  <header class="header">
    <div class="item left">
      <slot name="left"></slot>
    </div>
    <div class="title">{{title}}</div>
    <div class="item right">
      <slot name="right"></slot>
    </div>
  </header>
</template>
<script>
export default {
  props:{
    status:String,
    required:true,
    title:{
        type:String,
        default:''
    }
  }
}
</script>
<style scoped>
  .header{
    background-color: #666;
    color:#fff;
    position: relative;
    line-height: 38px;
    text-align: center;
  }
   .item {
			position: absolute;
			top: 0;
			bottom: 0;
			z-index: 1;
		}
		.left {
			left: 10px;
		}
		.right {
			right: 10px;
		}
    a{
      text-decoration: none;
    }
</style>