<template>
  <section>
    <h2>Profil - Eine Zusammenfassung</h2>
    <h3>Zu meiner Person</h3>
    <ul class="pers-info-list">
      <li>
        <p>Geburtsdatum:</p>
        <p>01.11.1990</p>
      </li>
      <li>
        <p>Wohnort:</p>
        <p>Stuttgart</p>
      </li>
      <li>
        <p>Familienstand:</p>
        <p>Ledig</p>
      </li>
    </ul>
    <h3>Zu meinen Fähigkeiten</h3>
    <ul class="skill-info-list">
      <li>
        <p>Hardskills:</p>
        <p>
          HTML - CSS - JavaScript - Java - SQL - jQuery - PHP - Python - vb.NET
          - Marketing - BWL
        </p>
      </li>
      <li>
        <p>Toolings:</p>
        <p>
          VSCode - Git(-Hub) - Vue - Cypress - Firebase - NPM - Xampp - NetBeans
          - Adobe Suite - jMonkey - NodeJS - Eclipse - ERP
        </p>
      </li>
      <li>
        <p>Prinzipien:</p>
        <p>
          Versionierung - GitFlow - CleanCode - REST - OOP - wissenschaftliches
          Arbeiten - ER-Diagramme - Designregeln - Readability - Don't repeat
          yourself - Marktmechanismen - Nachhaltigkeit - Marketingmix
        </p>
      </li>
      <li>
        <p>Softskills:</p>
        <p>
          SCRUM - Teamwork - Präsentationen - sicheres Auftreten - Geduld,
          realistische Erwartungshaltung - Zeitmanagement - flexibel,
          eigenständig - adaptiv - zielstrebig
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "MyProfile",
};
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
ul > li {
  display: flex;
  flex-flow: row;
  padding-left: 1rem;
  margin-right: 1rem;
}

h3 {
  margin: 1rem 0;
}

li > p {
  margin: 0.7rem 0;
  letter-spacing: 0.1rem;
  &:first-child {
    width: 38.198vw;
  }
  &:last-child {
    width: 61.804vw;
    padding-right: 2rem;
  }
}

.skill-info-list > li:nth-child(1n + 1) {
  border-radius: 0.4rem;
  color: var(--dark);
  background-color: var(--bright);
}
.skill-info-list > li:nth-child(2n + 1) {
  color: var(--dark);
  background-color: snow;
}
</style>
