<template>
   <div class="ba-container">
        <Header/>
        <Controls/>	
		<div class="ba-row">
			<div class="ba-col-8">
				<Photo/>
			</div>
			<div class="ba-col-4">
				<Filters/>
			</div>
		</div>
	</div>
</template>

<script>
import Header from './components/Header.vue';
import Controls from './components/Controls.vue';
import Photo from './components/Photo.vue';
import Filters from './components/Filters.vue';

export default {
   name: 'photoApp',
   components: {
    Header,
    Controls,
    Photo,
    Filters
}
}
</script>

<style lang="scss" src="./style.scss"></style>