<template>
<header>
    <nav>
        <img alt="Vue logo" src="../assets/logo.png" class="logo" />
        <div class="nav-lemps">
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
nav {
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 0;
    background-color: rgb(21, 21, 21);
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
</style>
