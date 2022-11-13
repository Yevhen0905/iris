<template>
  <div class="home">
    <PhotoApp/>
  </div>
</template>

<script>
// @ is an alias to /src
import PhotoApp from '@/components/photoApp/photoApp.vue';

export default {
  name: 'HomeView',
  components: {
    PhotoApp
  }
}
</script>
