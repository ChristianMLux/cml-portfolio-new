<template>
  <ul class="exp__list">
    <CVListElement
      v-for="(entry, index) in entries"
      :key="index"
      v-bind="entry"
    />
  </ul>
</template>
<script>
import CVListElement from "@/components/CVList/CVListElement.vue";

export default {
  name: "CVList",
  components: { CVListElement },
  props: {
    entries: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.exp__list {
  padding: 0;
  list-style-type: none;
}
</style>
