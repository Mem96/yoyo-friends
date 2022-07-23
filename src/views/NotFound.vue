<template>
    <span> Sorry, you landed on a non-existent page.</span>
    <nav>
        <router-link to="/">Go back to Homepage</router-link>
    </nav>
    <img src='../assets/images/yoga-astronaut.png'/>
</template>
<script>
export default{
    name: 'NotFound',
}
</script>
<style scoped>
    nav{
        margin-top: 20px;
        color: #f5a728;
    }
    a:visited{
        color: #f5a728;
    }
    span{
        margin: 30px;
        color: #0A8754
    }
    img{
        margin: 30px;
        width: 20vw;
    }
</style>
