<template>
    <div v-for="repo in repos" :key="repo.id" class="repoContainer">
        <div class="each-repo">
            <img :src="repo.owner.avatar_url" alt="Profile picture" class="profile-img mg-1">
            <h1 class="mg-1">Project name: {{ repo.name }}</h1>
            <h3 class="mg-1">Repo owner {{ repo.owner.login }}</h3>
            <p class="mg-1">Branch: {{ repo.default_branch }}</p>
            <p class="mg-1">Visibility: {{ repo.visibility }}</p>
            <p class="mg-1">Language: {{ repo.language }}</p>
            <p class="mg-1">Created at: {{ repo.created_at }}</p>
            <div class="view-more">
              <router-link :to="'/repos/' + repo.id"> <p>View more</p> </router-link>
            </div>
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

<style scoped>
.repoContainer{
    width: 90%;
    max-width: 1660px;
    margin: 4rem auto 0rem auto;
}

.each-repo{
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.mg-1{
  margin-bottom: .8rem;
}

.profile-img{
    width: 6rem;
    border-radius: 50%;
}

.view-more a{
  text-decoration: none;
  color: black;
}

.view-more{
    background-color: white;
    font-size: 1.1rem;
    border-radius: 10rem;
    padding: .8rem .8rem;
    text-decoration: none;
}
</style>