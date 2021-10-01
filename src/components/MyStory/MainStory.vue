<template>
  <section class="ms__story-section">
    <h2 class="story__heading">
      Meine Geschichte...(tl:dr=<router-link to="/profile">Profile</router-link
      >)
    </h2>
    <p class="story__text">
      Meine Geschichte mit Layouts und Code startete anfang 2003, als ich
      angefangen habe durch verschiedene Foren zu stöbern. In diesen Foren war
      es üblich eine persönliche Signatur einzustellen, die dann unter den
      Foreneinträgen angezeigt wurde. Um für mich ein Bild für diese Signatur zu
      basteln, hatte ich den ersten Kontakt mit Fireworks MX, was danach zu
      Adobes Fireworks CS3 wurde.
    </p>
    <div class="img-wrapper">
      <img src="@/assets/showroom/signaturen.png" />
    </div>
  </section>
</template>
<script>
export default {
  name: "MainStory",
};
</script>

<style lang="scss" scoped>
.story__text {
  max-width: 70vw;
  padding: 1rem 0 0 1rem;
  margin-right: 12rem;
  line-height: 1.5rem;
  text-align: justify;
  font-size: 1.1em;
}
.img-wrapper {
  max-width: 70vw;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
  }
}
</style>
