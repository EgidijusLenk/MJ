<template>
  <div><ul class="menu">
			<li><b-button><router-link :to="{ name: 'home' }" exact>home</router-link></b-button></li>
			<li><router-link :to="{ name: 'bandymas' }">bandymas</router-link></li>
			<li><router-link :to="{ name: 'masazai' }">page 1</router-link></li>
		</ul>
	<router-view/>
	</div>
		
</template>
<script>
export default {}
</script>
