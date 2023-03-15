<template>
    <div class="errorPage">
        <h1>Oops!</h1>
        <h3>404 - Page Not Found</h3>
        <p>The page you are looking for might have been removed or it does not exist.</p>
        <router-link to="/">Go to HomePage</router-link>
    </div>
</template>

<script>
 export default{
    name: 'WildcardRouter'
 }
</script>

<style scoped>
.errorPage{
    width: 95%;
    margin: 0 auto;
    text-align: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.errorPage h1{
    font-size: 10rem;
    margin-bottom: 1rem;
    font-weight: 900;
}
.errorPage h3{
    font-size: 2.1rem;
    margin-bottom: 1.5rem;
    font-weight: 900;
}
.errorPage p{
    font-size: 1.3rem;
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 300;
}
.errorPage a{
    background-color: white;
    font-size: 1.1rem;
    border-radius: 10rem;
    padding: .8rem .8rem;
    text-decoration: none;
    color: black;
    transition: .3s ease;
}

.errorPage a:hover{
    background-color: black;
    color: white;
}

@media(max-width:450px){
    .errorPage h1{
        font-size: 6rem
    }
    .errorPage p{
        font-size: 1rem
    }
}

</style>