<template>

  <div class="container">
    <nav>
        <router-link to="/">Home</router-link>   
        <router-link to="/counter">Counter</router-link>  
        <router-link to="/about">About</router-link>
    </nav><br />
    <router-view></router-view>
  </div>
  
</template>

<style>

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    }

    nav {
    display: flex;
    gap: 2rem;
    padding: 30px;
    }

    nav a {
    font-size: 2rem;
    font-weight: bold;
    color: #2c3e50;
    }

    nav a.router-link-exact-active {
    color: #42b983;
    }
</style>

<script>

    export default{
    }
</script>