<template>
  <router-view></router-view>
  <NavComponent/>
</template>

<script>
import NavComponent from './components/NavComponent.vue';

export default {
  name: 'App',
  components: {
    NavComponent,
  },
};
</script>