<template>
  <section class="lP__section">
    <div class="lp__mainheading-wrapper">
      <h1>C<e>.</e>M<e>.</e>L<e>.</e></h1>
      <h2>Christian M<e>.</e> Lux</h2>
    </div>
    <div class="lp__content-wrapper">
      <h3>Wer bin ich?</h3>
      <p>
        30 jähriger Geek im Autismusspektrum mit großem Interesse an
        Webentwicklung, Design und Gaming.
      </p>
    </div>
    <div class="lp__content-wrapper">
      <h3>Was kann ich?</h3>
      <p>
        Frontend-Entwicklung, Datenbanken, Objekt-Orientierte-Programmierung,
        Projektmanagement
      </p>
    </div>
    <div class="lp__content-wrapper">
      <h3>Was suche ich?</h3>
      <p>
        Vollzeitstelle, Remote oder Raum Stuttgart, Frontend oder Fullstack,
        Junior oder Intermediate
      </p>
    </div>
    <div class="lp__content-wrapper">
      <h3>Interesse geweckt?</h3>
      <p>
        Ich freue mich sehr bald von Ihnen zu hören! Alle Kontaktmöglichkeiten
        finden Sie <router-link to="/contact">Hier</router-link>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "LandingPage",
};
</script>

<style lang="scss" scoped>
h1,
h2 {
  e {
    color: var(--primary-color);
  }
}
.lp__mainheading-wrapper {
  display: flex;
  justify-content: space-between;
  h2 {
    padding-right: 1rem;
  }
}
.lp__content-wrapper {
  margin: 1rem 0;
  padding: 1rem 0;
  h3 {
    margin-bottom: 1rem;
  }
}
.lp__content-wrapper > * {
  letter-spacing: 0.1rem;
}
a {
  color: var(--dark);
  font-weight: bold;
  text-decoration-color: var(--primary-color);
}
</style>
