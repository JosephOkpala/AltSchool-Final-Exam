<template>
<div class="home">
    <div class="home-text">
        <h1>
            Hello my name is Joseph
        </h1>
        <p>
            This is a project for the fourth semester exam in AltSchool Africa. In this project I am going to be making a request from the GitHub API to be able to display a list of all my repositories and other information. I would also implement a wildcard route for error pages.
        </p>
        <router-link to="/repos">Go to Repositories</router-link>
    </div>
    <div class="working-man">
        <img src="../assets/working.png" alt="man working on laptop">
    </div>
</div>
</template>


<style scoped>

    .home{
        height: 86vh;
        width: 95%;
        max-width: 1660px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .home h1{
        font-size: 4rem;
        margin-bottom: 2rem;
     }
    .home p{
        font-size: 1rem;
        color: rgba(230, 230, 230, 0.973);
        max-width: 550px;
        line-height: 2rem;
        margin-bottom: 2rem;
     }

     .home-text a{
    background-color: white;
    font-size: 1.1rem;
    border-radius: 10rem;
    padding: .8rem .8rem;
    text-decoration: none;
    color: black;
    transition: .3s ease;
}

.home-text a:hover{
    background-color: black;
    color: white;
}

     .working-man img{
        width: 350px;
        max-width: 500px;
     }

     @media(max-width:800px){
        .home{
            flex-direction: column;
            align-items: center;
            margin-top: 4rem;
        }
        .home-text{
            margin-bottom: 3rem;
        }
     }

     @media(max-width:450px){
        .working-man img{
            width: 250px;
        }
     }
</style>
