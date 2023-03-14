<template>
    <div>
        <nav>
            <img alt="Vue logo" src="../assets/logo.png" class="logo" />
            <div>
                <router-link to="/">Home</router-link>
                <router-link to="/repos">Repos</router-link>
                <router-link to="/profile">Profile</router-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default{
    name : 'NavComponent',
}
</script>

<style scoped>
.logo{
width: 5rem;
}
</style>