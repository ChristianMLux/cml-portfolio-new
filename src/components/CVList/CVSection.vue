<template>
  <section class="cv__section">
    <h2 class="exp__heading">{{ expHeading }}</h2>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "CVSection",
  props: {
    expHeading: {
      type: String,
      default: "Experience Heading",
    },
  },
};
</script>

<style lang="scss" scoped>
.exp__heading {
  margin-top: 0;
  padding-top: 1rem;
  margin-bottom: 0;
}
</style>
