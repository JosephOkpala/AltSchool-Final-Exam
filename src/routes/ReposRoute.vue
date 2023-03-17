<template>
    <div v-for="repo in repos" :key="repo.id" class="repoContainer">
      
        <div class="each-repo">
            <img :src="repo.owner.avatar_url" alt="Profile picture" class="profile-img">
            <h1>Project name: {{ repo.name }}</h1>
            <h3>Repo owner {{ repo.owner.login }}</h3>
            <p>Branch: {{ repo.default_branch }}</p>
            <p>Visibility: {{ repo.visibility }}</p>
            <p>Language: {{ repo.language }}</p>
            <!-- <p>Topics: {{ repo.topics }}</p> -->
            <p>Created at: {{ repo.created_at }}</p>
            <router-link :to="'/repos/' + repo.id"> <p>View more</p> </router-link>
        </div>
     
        <div v-if="loading">
        <h1>Loading...</h1>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        repos: [],
        loading: true,
      };
    },
  
    mounted() {
      axios.get('https://api.github.com/users/JosephOkpala/repos').then((response) => {
        this.repos = response.data;
        this.loading= false;
        console.log(response);
      });
    },
  };
  </script>

<style>
.repoContainer{
    border: 1px solid cyan;
}

.each-repo{
    border: 1px solid red;
    margin-bottom: 3rem;
}

.profile-img{
    width: 6rem;
    border-radius: 50%;
}
</style>