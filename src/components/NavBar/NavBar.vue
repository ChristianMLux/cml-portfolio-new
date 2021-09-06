<template>
  <nav class="navbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link :to="homeRoute" class="nav-link">
          <component :is="routeIconHome"></component>
          <span class="link-text">Home</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="profileRoute" class="nav-link">
          <component :is="routeIconProfile"></component>
          <span class="link-text"></span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="storyRoute" class="nav-link">
          <component :is="routeIconStory"></component>
          <span class="link-text"></span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="contactRoute" class="nav-link">
          <component :is="routeIconContact"></component>
          <span class="link-text"></span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      routeIconHome: "md-home-icon",
      homeRoute: "/",
      routeIconProfile: "md-person-icon",
      profileRoute: "/profile",
      routeIconStory: "md-book-icon",
      storyRoute: "/story",
      routeIconContact: "md-mail-icon",
      contactRoute: "/contact",
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  width: 5rem;
  height: 100vh;
  position: fixed;
  background-color: var(--dark);
}
</style>
