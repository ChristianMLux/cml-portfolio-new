<template>
  <nav class="navbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link :to="homeRoute" class="nav-link">
          <component :is="routeIconHome" size="large"></component>
          <span class="link-text">Home</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="profileRoute" class="nav-link">
          <component :is="routeIconProfile"></component>
          <span class="link-text">Profile</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="storyRoute" class="nav-link">
          <component :is="routeIconStory"></component>
          <span class="link-text">Story</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="contactRoute" class="nav-link">
          <component :is="routeIconContact"></component>
          <span class="link-text">Contact</span>
        </router-link>
      </li>
      <li class="nav-item gitHub">
        <a
          href="https://github.com/ChristianMLux"
          class="nav-link"
          target="_blank"
        >
          <img src="./GitHub-Mark-Light-64px.png" />
          <span class="link-text">GitHub</span>
        </a>
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

<style lang="scss">
.navbar {
  width: 4rem;
  height: 100vh;
  position: fixed;
  background-color: var(--dark);
  transition: 200ms ease-in-out;
}
.navbar:hover {
  width: 14rem;
  .link-text {
    display: block;
    justify-content: baseline;
    align-items: baseline;
  }
}
.navbar-nav {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100%;
}
.nav-item:last-child {
  margin-top: auto;
}
.nav-item {
  width: 100%;
}
.nav-link {
  display: flex;
  align-items: center;
  height: 4rem;
  text-decoration: none;
  color: var(--bright);
  svg {
    min-width: 1rem;
    fill: var(--primary-color);
    transition: 0.5s ease-in-out;
    font-size: 1.7rem;
    margin: 0 1.2rem;
  }
  img {
    max-width: 2rem;
    margin: 0 1rem;
  }
}
a {
  &.router-link-active > div > svg {
    fill: var(--primary-color-light);
  }
}

.link-text {
  display: none;
  margin-left: 0.5rem;
  margin-bottom: 0.4rem;
}
</style>
