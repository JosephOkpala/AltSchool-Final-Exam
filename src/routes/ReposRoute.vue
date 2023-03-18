<template>
  <div class="container">
    <div v-for="(repo) in paginatedRepos" :key="repo.id" class="repoContainer">
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
    <div class="pagination">
      <button :disabled="currentPage === 1" @click="currentPage--" class="prev-button pagination-button">Prev</button>
      <button v-for="pageNumber in totalPages" :key="pageNumber"
        :class="{active: pageNumber === currentPage}" @click="currentPage = pageNumber" class="pagination-button">{{ pageNumber }}</button>
      <button :disabled="currentPage === totalPages" @click="currentPage++" class="next-button pagination-button">Next</button>
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
        currentPage: 1,
        perPage: 5,
      };
    },

    computed: {
      paginatedRepos(){
        const startIndex = (this.currentPage - 1) * this.perPage;
        const endIndex = startIndex + this.perPage;
        return this.repos.slice(startIndex, endIndex);
      },
      totalPages(){
        return Math.ceil(this.repos.length / this.perPage)
      },
    },

    methods:{
      fetchRepos(){
        axios.get('https://api.github.com/users/JosephOkpala/repos').then((response) => {
        this.repos = response.data;
        this.loading= false;
        console.log(response);
      });
      },
    },
  
    mounted() {
      this.fetchRepos();
    },
    watch: {
      currentPage(newValue, oldValue){
        if(newValue !== oldValue){
          window.scrollTo({ 
            top: 0,
            behavior: 'smooth'
          })
        }
      },
    },
  };
  </script>

<style scoped>

.container{
  width: 100%;
  margin-bottom: 2rem;
}
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

.pagination{
  text-align: center;
  width: 90;
  margin-top: 3rem auto 0rem auto;
}

.pagination button{
  font-family: 'Merriweather', serif;
  font-weight: 900;
}

.pagination button:not(:last-child){
  margin-right: 0.5rem;
}

.pagination-button{
  padding: .6rem 1rem;
  border: none;
}

.prev-button:disabled{
  background-color: grey;
  cursor: not-allowed;
}
.next-button:disabled{
  background-color: grey;
  cursor: not-allowed;
}
</style>