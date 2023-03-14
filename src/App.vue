<template>
    <NavComponent/>
  <router-view></router-view>
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body{
  font-family: 'Merriweather', serif;
  background-color: black;
  color: white;
}
</style>