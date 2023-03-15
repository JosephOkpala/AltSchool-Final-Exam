<template>
<header>
    <nav>
        <img alt="Vue logo" src="../assets/logo.png" class="logo" />
        <div class="nav-links">
            <router-link to="/">Home</router-link>
            <router-link to="/repos">Repos</router-link>
            <router-link to="/profile">Profile</router-link>
        </div>
    </nav>
</header>
</template>

<script>
export default {
    name: 'NavComponent',
}
</script>

<style scoped>
header{
    background-color: rgb(21, 21, 21);
}
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    background-color: rgb(21, 21, 21);
    width: 95%;
    max-width: 1660px;
    margin: 0 auto;
    height: 14vh;
}

.nav-links a {
    text-decoration: none;
    font-size: 1.2rem;
    color: white;
}

.nav-links a:not(:last-child) {
    margin-right: 5rem;
}

.logo {
    width: 4rem;
}

@media(max-width:450px){
    .nav-links a {
    font-size: 1.1rem;
}
    .nav-links a:not(:last-child) {
    margin-right: 3rem;
}

.logo {
    width: 2rem;
}
}
</style>
