<template>
  <NavComponent/>
  <CountComp/>
</template>

<script>
import NavComponent from './components/NavComponent.vue';
import CountComp from './components/CountComp.vue';

export default {
  name: 'App',
  components: {
    NavComponent,
    CountComp,
  },
};
</script>

<style>

</style>
