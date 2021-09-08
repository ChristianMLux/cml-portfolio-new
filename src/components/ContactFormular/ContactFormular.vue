<template>
  <section class="cf__contact-section">
    <form class="cf__contact-formular" action="" method="">
      <label class="cf__contact-label" for="name">Name: </label>
      <input type="text" name="name" id="name" placeholder="Your name" />
      <label class="cf__contact-label" for="mail">Mail: </label>
      <input type="text" name="mail" id="mail" placeholder="Your email" />
      <label class="cf__contact-label" for="message">Message: </label>
      <textarea
        class="message"
        name="message"
        id="message"
        placeholder="This feature is not finished yet. please use github or twitter to contact me"
      ></textarea>
      <input
        type="button"
        class="contact-button"
        value="Send your message"
        id="inputBtn"
      />
    </form>
  </section>
</template>
<script>
export default {
  name: "ContactFormular",
};
</script>
<style lang="scss" scoped>
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
  margin: 1rem 0.1rem;
  padding: 0.5rem;
  background-color: var(--bright);
  color: var(--dark);
  border-radius: 0.125rem;
  border: 0.5px solid var(--primary-color-light);
}
</style>
