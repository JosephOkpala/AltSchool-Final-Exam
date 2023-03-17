<template>
    <div>{{ repo.name }}</div>
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