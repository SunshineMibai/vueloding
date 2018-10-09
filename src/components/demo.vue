<template>
	<div>
		<p>{{msg}}</p>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				msg:'demo展示页'
			}
		},
		mounted(){
			this.getProduct()
		},
		methods:{
			getProduct() {
				this.$http('post', 'http://127.0.0.1/productList.php')
				.then(res => {
					console.log(res)
					this.productList = res.data;
				})
				.catch(err => {
					console.log(err.message);
				})
				.finally(() => {
		         //test
		      });
			}
		}
	}
</script>

<style>
	
</style>