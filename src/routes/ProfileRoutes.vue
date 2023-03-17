<template>
  <div class="profile">
  <div class="profile-page">
    <div class="flex">
      <img :src="profile.avatar_url" alt="Profile picture" class='profile-img'>
      <h1> {{ profile.name }}</h1>
    </div>
    <div class="profile-card">
      <div>
        <h4>Username</h4>
        <h3>
          <a :href="'https://github.com/josephokpala'" target="_blank">JosephOkpala</a>
        </h3>
      </div>
      <div>
        <h4>Bio</h4>
        <h3>
          {{ profile.bio }}
        </h3>
      </div>
      <div>
        <h4>Location</h4>
        <h3>
          {{ profile.location }}
        </h3>
      </div>
      <div>
        <h4>Repos</h4>
        <h3>
          {{ profile.public_repos }}
        </h3>
      </div>
      <div>
        <h4>Followers</h4>
        <h3>
          {{ profile.followers }}
        </h3>
      </div>
      <div>
        <h4>Following</h4>
        <h3>
          {{ profile.following }}
        </h3>
      </div>
      <div>
        <h4>Twitter</h4>
        <h3>
          <a :href="'https://twitter.com/unorthodox__dev'" target="_blank">{{ profile.twitter_username }}</a>
        </h3>
      </div>
    </div>
    </div>
  </div>
    <div v-if="loading" class="loading">
      <h1>Loading...</h1>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      loading: true,
      profile: {},
    };
  },

  mounted() {
    axios.get('https://api.github.com/users/JosephOkpala').then((response) => {
      this.profile = response.data;
      this.loading= false;
      console.log(response);
    });
  },
};
</script>

<style scoped>
.profile{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
}

.profile-img{
  width: 5rem;
  border-radius: 50%;
}

.flex{
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.profile-card {
  background-color: rgb(21, 21, 21);
  padding: 2rem;
  border-radius: 10px;
}

.profile-card div{
  margin-bottom: 1rem;
}

.profile-card a {
  color: white;
  transition: 0.3s ease;
}

.profile-card a:hover {
  color: rgb(208, 208, 208);
  text-decoration: underline;
}

.profile-card div h4 {
  color: grey;
  font-size: 0.8rem;
  margin-bottom: 0.4rem;
}
.profile-card div h3 {
  color: white;
}

.loading{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loading h1{
  font-size: 5rem;
}
</style>