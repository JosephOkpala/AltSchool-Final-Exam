<template>
    <p><router-link to="/repos">Go back</router-link></p>
    <div class="more-details">
        <div>
            <h3>Full Name</h3>
            <h4>{{ repo.full_name }}</h4>
        </div>
        <div>
            <h3>Forks</h3>
            <h4>{{ repo.forks }}</h4>
        </div>
        <div>
            <h3>Issues</h3>
            <h4>{{ repo.has_issues }}</h4>
        </div>
        <div>
            <h3>Topics</h3>
            <h4>{{ repo.topics }}</h4>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default{
    props: ['id'],
    data(){
        return{
            repo: {},
        };
    },
    mounted(){
        axios
        .get(`https://api.github.com/repositories/${this.id}`)
        .then((response) =>{
            this.repo = response.data
        })
    }
}
</script>

<style scoped>

p{
    padding: 2rem;
}

p a{
    color: grey;
    text-decoration: none;
}

.more-details{
    background-color: rgb(21, 21, 21);
    width: 50%;
    border-radius: 10px;
    padding: 2rem;
    margin: 4rem auto 0rem auto;
}

.more-details div h3 {
  color: grey;
  font-size: 0.8rem;
  margin-bottom: 0.4rem;
}
.more-details div h4 {
      color: white;
    }

.more-details div{
    margin-bottom: 0.8rem;
}

@media(max-width: 760px){
    .more-details{
        width: 80%;
    }
}

</style>