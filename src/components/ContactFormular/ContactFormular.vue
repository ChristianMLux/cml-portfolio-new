<template>
  <h2>Interesse geweckt?</h2>
  <h3>
    Kontaktieren Sie mich gerne über die Sozialen Netzwerke, oder hinterlassen
    Sie einfach eine Nachricht mit dem Forumlar.
  </h3>
  <section class="cf__contact-section">
    <form class="cf__contact-formular" action="" method="">
      <label class="cf__contact-label" for="name">Name: </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Bitte einen Namen eingeben..."
      />
      <label class="cf__contact-label" for="mail">Mail: </label>
      <input
        type="text"
        name="mail"
        id="mail"
        placeholder="Eine Mail um Ihnen antworten zu können..."
      />
      <label class="cf__contact-label" for="message">Nachricht: </label>
      <textarea
        class="message"
        name="message"
        id="message"
        placeholder="Hier bitte den Inhalt Ihrer Nachricht eingeben..."
      ></textarea>
      <input
        type="button"
        class="contact-button"
        value="Nachricht senden"
        id="inputBtn"
      />
    </form>
  </section>
  <section class="cf__social-section">
    <div class="social__wrapper">
      <a href="https://github.com/ChristianMLux"
        ><img src="./001-github.png"
      /></a>
      <a href="https://www.linkedin.com/in/christian-m-lux/"
        ><img src="./002-linkedin.png"
      /></a>
      <a href="https://twitter.com/whistlemaker1"
        ><img src="./003-twitter.png"
      /></a>
    </div>
  </section>
</template>
<script>
export default {
  name: "ContactFormular",
};
</script>
<style lang="scss" scoped>
.cf__contact-section {
  max-width: 61.804vw;
}
.cf__contact-formular {
  display: flex;
  flex-flow: column;
  margin-right: 1rem;
  padding: 0.25rem;
  padding-left: 0;
  input[type="text"],
  textarea {
    font-size: 16px;
    line-height: 1.5;
    font-family: "Open Sans", sans-serif;
    outline-color: var(--primary-color);
    border: 0.5px solid var(--primary-color-light);
    padding: 0.75rem;
  }
}
.cf__contact-formular > * {
  margin: 0.125rem 0;
}
.message {
  resize: none;
  min-height: 6rem;
}
.contact-button {
  width: 23.608vw;
  margin: 1rem 0.1rem;
  padding: 0.5rem;
  background: var(--dark);
  color: var(--primary-color-light);
  font-weight: bold;
  border-radius: 0.25rem;
  border: 0.5px solid var(--primary-color-light);
  transition: 0.25s ease-in-out;
  &:hover {
    background: var(--dark);
    color: var(--success);
  }
  &:active {
    transform: translateY(1px) translateX(1px);
    background: var(--success);
    color: var(--dark);
  }
}

.circle {
  border-radius: 50%;
  width: 14.591vw;
  height: 18.7vh;
  background: var(--primary-color-light);
}
.cf__social-section {
  max-width: 61.804vw;
}
.social__wrapper {
  max-width: 38.198vw;
  padding: 2rem 0;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  img {
    width: 9.017vw;
  }
}

a {
  svg {
    fill: red !important;
  }
}
</style>
