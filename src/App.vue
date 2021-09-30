<template>
  <NavBar />
  <main>
    <router-view />
  </main>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar.vue";

export default {
  name: "App",
  components: { NavBar },
};
</script>

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
  --fontsize: 12px;
  --fontsize-media-350: 10px;
  font-size: 12px;
  line-height: 1.5;
  font-family: "Open Sans", sans-serif;
}
* {
  margin: 0;
  padding: 0;
}
*::selection {
  background-color: var(--primary-color-light);
}
body {
  margin: 0 auto;
  background: var(--bright);
}
h1 {
  font-size: 50.83px;
  letter-spacing: 0.2rem;
}
h2 {
  font-size: 31.42px;
  letter-spacing: 0.2rem;
}
h3 {
  font-size: 19.42px;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--dark);
  background-color: var(--bright);
}
main {
  padding-left: 5rem;
  max-width: 100ch;
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

@media screen and (max-width: 530px) {
  :root {
    font-size: var(--fontsize-media-350);
  }
  h1 {
    font-size: 42.358px;
    letter-spacing: 0.2rem;
  }
  h2 {
    font-size: 26.179px;
    letter-spacing: 0.2rem;
  }
  h3 {
    font-size: 16.18px;
  }
  input {
    font-size: var(--fontsize-media-350);
    &::placeholder {
      font-size: var(--fontsize-media-350);
    }
  }
  textarea {
    font-size: var(--fontsize-media-350);
    &::placeholder {
      font-size: var(--fontsize-media-350);
    }
  }
}
</style>
