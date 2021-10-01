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
    <p class="story__text">
      Gegen Ende 2005 begann ich, MMORPGs zu spielen. In diesen Spielen gibt es
      Zusammenschlüsse von Spielern. In einigen Spielen werden sie Clans, Gilden
      oder Allianzen genannt. In der Zeit vor Facebook brauchten sie Foren, um
      sich zu organisieren. Damals habe ich angefangen, Layouts für diese Foren
      zu entwerfen. Dieses Hobby ging dann weiter bis hin zu kompletten
      Webseiten für Spieleserver.
    </p>
    <section class="projects__slider">
      <div class="box box-1">
        <h3 class="description">Vielfrass WoW</h3>
      </div>
      <div class="box box-2">
        <h3 class="description">StarTrek Clan</h3>
      </div>
      <div class="box box-3">
        <h3 class="description">Counter-Strike Server</h3>
      </div>
      <div class="box box-4">
        <h3 class="description">Imoritah light</h3>
      </div>
      <div class="box box-5">
        <h3 class="description">Imoritah dark</h3>
      </div>
    </section>
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
.projects__slider {
  display: flex;
  flex-flow: row;
  margin: 1rem 0.9rem;
  transition: 1s ease-in-out;
}

.box {
  border: 1px solid var(--primary-color);
  height: 16.5rem;
  width: 4rem;
  transition: 0.5s ease-in-out;
  background: var(--dark);
  color: var(--bright);
  aspect-ratio: 16/9;
}
.box:hover {
  flex-grow: 1;
  background: snow;
  .description {
    margin: 0;
    opacity: 0.8;
    text-align: center;
    padding: 0.5rem;
    border-radius: 0.4rem;
    color: white;
    background: var(--dark);
    transform: rotate(0deg);
    margin-top: 1em;
    margin-left: 1em;
  }
}
.box-1 {
  border-bottom-left-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  &:hover {
    background-image: url("@/assets/showroom/slides/slide01.jpg");
    background-repeat: no-repeat;
    background-size: contain;
  }
}
.box-2 {
  &:hover {
    background-image: url("@/assets/showroom/slides/slide04.jpg");
    background-repeat: no-repeat;
    background-size: contain;
  }
}
.box-3 {
  &:hover {
    background-image: url("@/assets/showroom/slides/slide03.jpg");
    background-repeat: no-repeat;
    background-size: contain;
  }
}
.box-4 {
  &:hover {
    background-image: url("@/assets/showroom/slides/slide06.jpg");
    background-repeat: no-repeat;
    background-size: contain;
  }
}
.box-5 {
  border-bottom-right-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  &:hover {
    background-image: url("@/assets/showroom/slides/slide07.jpg");
    background-repeat: no-repeat;
    background-size: contain;
  }
}

.description {
  white-space: nowrap;
  text-align: right;
  width: 15rem;
  font-size: 1.5rem;
  transform: rotate(-90deg);
  margin-top: 4.8em;
  margin-left: -3.5em;
  transition: 0.5s ease-in-out;
}
</style>
