<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
:root {
  --primary-color: #da6e01;
  --primary-color-light: #fd9935;
  --success: #a3db33;
  --error: #ed3221;
  --warning: #ffc642;
  --bright: #f2f2f3;
  --grey: #c8cdd0;
  --dark-grey: #415058;
  --dark: #1d272a;
  font-size: 18px;
  line-height: 1.5;
  font-family: "Open Sans", sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--dark);
  background-color: var(--bright);
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
